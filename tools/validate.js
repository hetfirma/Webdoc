#!/usr/bin/env node

/**
 * Webdoc Validator
 * 
 * Validates Webdoc documents against the specification:
 * - HTML5 validity
 * - JSON-LD metadata presence and validity
 * - RDFa annotations
 * - Required metadata fields
 */

const fs = require('fs');
const path = require('path');

class WebdocValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.info = [];
    }

    validate(htmlContent) {
        this.errors = [];
        this.warnings = [];
        this.info = [];

        // Check HTML5 doctype
        this.checkDoctype(htmlContent);
        
        // Check charset
        this.checkCharset(htmlContent);
        
        // Check language attribute
        this.checkLanguage(htmlContent);
        
        // Extract and validate JSON-LD
        this.validateJSONLD(htmlContent);
        
        // Check for RDFa attributes
        this.checkRDFa(htmlContent);
        
        // Check for embedded CSS
        this.checkCSS(htmlContent);

        return {
            valid: this.errors.length === 0,
            errors: this.errors,
            warnings: this.warnings,
            info: this.info
        };
    }

    checkDoctype(html) {
        if (!html.trim().startsWith('<!DOCTYPE html>')) {
            this.errors.push('Document must start with <!DOCTYPE html>');
        } else {
            this.info.push('✓ Valid HTML5 doctype found');
        }
    }

    checkCharset(html) {
        if (!html.includes('charset="UTF-8"') && !html.includes("charset='UTF-8'")) {
            this.errors.push('Document must specify UTF-8 charset');
        } else {
            this.info.push('✓ UTF-8 charset specified');
        }
    }

    checkLanguage(html) {
        const langMatch = html.match(/<html[^>]*lang=["']([^"']+)["']/);
        if (!langMatch) {
            this.errors.push('HTML element must have a lang attribute');
        } else {
            this.info.push(`✓ Language specified: ${langMatch[1]}`);
        }
    }

    validateJSONLD(html) {
        const jsonldRegex = /<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        const matches = [...html.matchAll(jsonldRegex)];
        
        if (matches.length === 0) {
            this.errors.push('Document must contain at least one JSON-LD metadata block');
            return;
        }

        this.info.push(`✓ Found ${matches.length} JSON-LD block(s)`);

        // Validate each JSON-LD block
        matches.forEach((match, index) => {
            const jsonContent = match[1].trim();
            
            try {
                const data = JSON.parse(jsonContent);
                
                // Check for @context
                if (!data['@context']) {
                    this.errors.push(`JSON-LD block ${index + 1}: Missing @context`);
                } else {
                    this.info.push(`✓ JSON-LD block ${index + 1}: @context present`);
                }
                
                // Check for @type
                if (!data['@type']) {
                    this.errors.push(`JSON-LD block ${index + 1}: Missing @type`);
                } else {
                    this.info.push(`✓ JSON-LD block ${index + 1}: @type is ${data['@type']}`);
                }
                
                // For main metadata, check required fields
                if (index === 0 && data['@type'] !== 'AIAgentConfiguration') {
                    if (!data.name) {
                        this.errors.push('Main metadata block: Missing required "name" field');
                    }
                    
                    if (!data.author) {
                        this.warnings.push('Main metadata block: "author" field recommended');
                    }
                    
                    if (!data.datePublished) {
                        this.warnings.push('Main metadata block: "datePublished" field recommended');
                    }
                    
                    if (!data.version) {
                        this.warnings.push('Main metadata block: "version" field recommended');
                    }
                }
                
            } catch (e) {
                this.errors.push(`JSON-LD block ${index + 1}: Invalid JSON - ${e.message}`);
            }
        });
    }

    checkRDFa(html) {
        const rdfaAttributes = ['typeof', 'property', 'resource', 'vocab'];
        let foundRDFa = false;
        
        rdfaAttributes.forEach(attr => {
            if (html.includes(attr + '=')) {
                foundRDFa = true;
            }
        });
        
        if (!foundRDFa) {
            this.warnings.push('No RDFa attributes found. Consider adding semantic annotations.');
        } else {
            this.info.push('✓ RDFa attributes found');
        }
        
        // Check for vocab attribute on html element
        if (html.includes('<html') && html.match(/<html[^>]*vocab=/)) {
            this.info.push('✓ RDFa vocab attribute found on html element');
        }
    }

    checkCSS(html) {
        if (!html.includes('<style>') && !html.includes('<style ')) {
            this.warnings.push('No embedded CSS found. Consider adding styling.');
        } else {
            this.info.push('✓ Embedded CSS found');
        }
    }
}

// CLI interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node validate.js <webdoc-file>');
        console.log('\nValidates a Webdoc document against the specification.');
        process.exit(1);
    }
    
    const filePath = args[0];
    
    if (!fs.existsSync(filePath)) {
        console.error(`Error: File not found: ${filePath}`);
        process.exit(1);
    }
    
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const validator = new WebdocValidator();
    const result = validator.validate(htmlContent);
    
    console.log('\n=== Webdoc Validation Report ===\n');
    console.log(`File: ${filePath}\n`);
    
    if (result.info.length > 0) {
        console.log('Information:');
        result.info.forEach(info => console.log(`  ${info}`));
        console.log();
    }
    
    if (result.warnings.length > 0) {
        console.log('Warnings:');
        result.warnings.forEach(warning => console.log(`  ⚠ ${warning}`));
        console.log();
    }
    
    if (result.errors.length > 0) {
        console.log('Errors:');
        result.errors.forEach(error => console.log(`  ✗ ${error}`));
        console.log();
    }
    
    if (result.valid) {
        console.log('✓ Document is valid!\n');
        process.exit(0);
    } else {
        console.log('✗ Document has validation errors.\n');
        process.exit(1);
    }
}

module.exports = WebdocValidator;
