#!/usr/bin/env node

/**
 * Webdoc Metadata Extractor
 * 
 * Extracts JSON-LD metadata from Webdoc documents
 */

const fs = require('fs');

class MetadataExtractor {
    extract(htmlContent) {
        const jsonldRegex = /<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        const matches = [...htmlContent.matchAll(jsonldRegex)];
        
        const metadata = [];
        
        matches.forEach((match) => {
            const jsonContent = match[1].trim();
            
            try {
                const data = JSON.parse(jsonContent);
                metadata.push(data);
            } catch (e) {
                console.error(`Warning: Invalid JSON-LD block - ${e.message}`);
            }
        });
        
        return metadata;
    }

    extractMain(htmlContent) {
        const all = this.extract(htmlContent);
        // Return first non-AI-config metadata block
        return all.find(m => m['@type'] !== 'AIAgentConfiguration') || all[0] || null;
    }

    extractAIConfig(htmlContent) {
        const all = this.extract(htmlContent);
        return all.find(m => m['@type'] === 'AIAgentConfiguration') || null;
    }
}

// CLI interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        console.log('Usage: node extract-metadata.js <webdoc-file> [options]');
        console.log('\nExtracts JSON-LD metadata from Webdoc documents.');
        console.log('\nOptions:');
        console.log('  --format json|yaml    Output format (default: json)');
        console.log('  --main               Extract only main metadata (not AI config)');
        console.log('  --ai                 Extract only AI configuration');
        console.log('  --all                Extract all metadata blocks (default)');
        console.log('  --pretty             Pretty-print JSON output');
        process.exit(0);
    }
    
    const filePath = args[0];
    let format = 'json';
    let mode = 'all';
    let pretty = false;
    
    // Parse options
    for (let i = 1; i < args.length; i++) {
        if (args[i] === '--format' && i + 1 < args.length) {
            format = args[i + 1];
            i++;
        } else if (args[i] === '--main') {
            mode = 'main';
        } else if (args[i] === '--ai') {
            mode = 'ai';
        } else if (args[i] === '--all') {
            mode = 'all';
        } else if (args[i] === '--pretty') {
            pretty = true;
        }
    }
    
    if (!fs.existsSync(filePath)) {
        console.error(`Error: File not found: ${filePath}`);
        process.exit(1);
    }
    
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const extractor = new MetadataExtractor();
    
    let result;
    
    switch (mode) {
        case 'main':
            result = extractor.extractMain(htmlContent);
            break;
        case 'ai':
            result = extractor.extractAIConfig(htmlContent);
            break;
        case 'all':
        default:
            result = extractor.extract(htmlContent);
            break;
    }
    
    if (!result) {
        console.error('Error: No metadata found');
        process.exit(1);
    }
    
    // Output
    if (format === 'yaml') {
        // Simple YAML output (without dependencies)
        const yamlOutput = JSON.stringify(result, null, 2)
            .replace(/^{/, '')
            .replace(/}$/, '')
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/^\s*"/gm, '  ')
            .replace(/",?$/gm, '');
        console.log(yamlOutput);
    } else {
        // JSON output
        const jsonOutput = pretty ? JSON.stringify(result, null, 2) : JSON.stringify(result);
        console.log(jsonOutput);
    }
}

module.exports = MetadataExtractor;
