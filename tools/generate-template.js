#!/usr/bin/env node

/**
 * Webdoc Template Generator
 * 
 * Generates Webdoc document templates
 */

const fs = require('fs');
const path = require('path');

const templates = {
    basic: `<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    
    <!-- JSON-LD Metadata -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "{{title}}",
        "author": {
            "@type": "Person",
            "name": "{{author}}"
        },
        "datePublished": "{{date}}",
        "version": "1.0.0",
        "inLanguage": "nl"
    }
    </script>
    
    <!-- Document Stijl -->
    <style>
        :root {
            --primary-color: #2c3e50;
            --text-color: #333;
            --background-color: #fff;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        h1 {
            color: var(--primary-color);
        }
    </style>
</head>
<body>
    <article typeof="Article">
        <header>
            <h1 property="headline">{{title}}</h1>
            <p>
                Door <span property="author" typeof="Person">
                    <span property="name">{{author}}</span>
                </span>
            </p>
        </header>
        
        <div property="articleBody">
            <p>Schrijf hier je inhoud...</p>
        </div>
    </article>
</body>
</html>`,

    ai: `<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    
    <!-- JSON-LD Metadata -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "name": "{{title}}",
        "author": {
            "@type": "Person",
            "name": "{{author}}"
        },
        "datePublished": "{{date}}",
        "version": "1.0.0",
        "inLanguage": "nl"
    }
    </script>
    
    <!-- Document Stijl -->
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <article typeof="TechArticle">
        <header>
            <h1 property="headline">{{title}}</h1>
        </header>
        
        <div property="articleBody">
            <p>Schrijf hier je inhoud...</p>
        </div>
    </article>
    
    <!-- AI-Agent Configuratie -->
    <script type="application/ld+json" id="webdoc-ai-config">
    {
        "@context": "https://webdoc.org/context/ai/v1",
        "@type": "AIAgentConfiguration",
        "version": "1.0",
        "agents": [
            {
                "@type": "ContentExtractor",
                "name": "content-extractor",
                "purpose": "Extract main content",
                "input": {
                    "selector": "article",
                    "format": "html"
                },
                "output": {
                    "format": "markdown"
                }
            }
        ]
    }
    </script>
</body>
</html>`,

    scientific: `<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    
    <!-- JSON-LD Metadata -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "name": "{{title}}",
        "author": {
            "@type": "Person",
            "name": "{{author}}"
        },
        "datePublished": "{{date}}",
        "version": "1.0.0",
        "inLanguage": "nl",
        "abstract": "Schrijf hier je abstract..."
    }
    </script>
    
    <!-- Document Stijl -->
    <style>
        body {
            font-family: Georgia, 'Times New Roman', serif;
            line-height: 1.8;
            max-width: 850px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }
        
        .abstract {
            background: #f7fafc;
            border-left: 4px solid #3498db;
            padding: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
        }
    </style>
</head>
<body>
    <article typeof="ScholarlyArticle">
        <header>
            <h1 property="headline">{{title}}</h1>
            <p>
                <span property="author" typeof="Person">
                    <span property="name">{{author}}</span>
                </span>
            </p>
        </header>
        
        <section class="abstract">
            <h2>Abstract</h2>
            <p property="abstract">Schrijf hier je abstract...</p>
        </section>
        
        <div property="articleBody">
            <section>
                <h2>1. Introductie</h2>
                <p>Schrijf hier je introductie...</p>
            </section>
            
            <section>
                <h2>2. Methodologie</h2>
                <p>Beschrijf je methodologie...</p>
            </section>
            
            <section>
                <h2>3. Resultaten</h2>
                <p>Presenteer je resultaten...</p>
            </section>
            
            <section>
                <h2>4. Conclusie</h2>
                <p>Schrijf je conclusie...</p>
            </section>
        </div>
    </article>
</body>
</html>`
};

function generateTemplate(type, options = {}) {
    const template = templates[type];
    if (!template) {
        throw new Error(`Unknown template type: ${type}`);
    }
    
    const now = new Date().toISOString();
    const replacements = {
        title: options.title || 'Nieuw Document',
        author: options.author || 'Auteur Naam',
        date: options.date || now
    };
    
    let output = template;
    Object.keys(replacements).forEach(key => {
        output = output.replace(new RegExp(`{{${key}}}`, 'g'), replacements[key]);
    });
    
    return output;
}

// CLI interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        console.log('Usage: node generate-template.js [options]');
        console.log('\nGenerates a new Webdoc document from a template.');
        console.log('\nOptions:');
        console.log('  --type <type>        Template type: basic, ai, scientific (default: basic)');
        console.log('  --output <file>      Output file (default: stdout)');
        console.log('  --title <title>      Document title');
        console.log('  --author <author>    Author name');
        console.log('\nExamples:');
        console.log('  node generate-template.js --type basic --output my-doc.webdoc.html');
        console.log('  node generate-template.js --type scientific --title "My Research" --author "Dr. Smith"');
        process.exit(0);
    }
    
    let type = 'basic';
    let outputFile = null;
    let title = null;
    let author = null;
    
    // Parse arguments
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--type' && i + 1 < args.length) {
            type = args[i + 1];
            i++;
        } else if (args[i] === '--output' && i + 1 < args.length) {
            outputFile = args[i + 1];
            i++;
        } else if (args[i] === '--title' && i + 1 < args.length) {
            title = args[i + 1];
            i++;
        } else if (args[i] === '--author' && i + 1 < args.length) {
            author = args[i + 1];
            i++;
        }
    }
    
    if (!['basic', 'ai', 'scientific'].includes(type)) {
        console.error(`Error: Invalid template type: ${type}`);
        console.error('Valid types: basic, ai, scientific');
        process.exit(1);
    }
    
    try {
        const output = generateTemplate(type, { title, author });
        
        if (outputFile) {
            fs.writeFileSync(outputFile, output, 'utf-8');
            console.log(`✓ Generated ${type} template: ${outputFile}`);
        } else {
            console.log(output);
        }
    } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
}

module.exports = { generateTemplate, templates };
