# Webdoc Tools

Deze directory bevat tools voor het werken met Webdoc documenten.

## Beschikbare Tools

### 1. Validator (`validate.js`)

Valideert Webdoc documenten tegen de specificatie.

**Installatie:**
```bash
# Geen dependencies nodig - gebruikt alleen Node.js built-in modules
```

**Gebruik:**
```bash
node validate.js <webdoc-file>

# Voorbeeld:
node validate.js ../examples/basic-example.webdoc.html
```

**Checks:**
- ✓ HTML5 doctype
- ✓ UTF-8 charset
- ✓ Language attribute op html element
- ✓ JSON-LD metadata aanwezigheid en validiteit
- ✓ Verplichte metadata velden
- ✓ RDFa attributes
- ✓ Embedded CSS

**Output:**
```
=== Webdoc Validation Report ===

File: example.webdoc.html

Information:
  ✓ Valid HTML5 doctype found
  ✓ UTF-8 charset specified
  ✓ Language specified: nl
  ✓ Found 1 JSON-LD block(s)
  ✓ JSON-LD block 1: @context present
  ✓ JSON-LD block 1: @type is Article
  ✓ RDFa attributes found
  ✓ Embedded CSS found

✓ Document is valid!
```

### 2. Metadata Extractor (`extract-metadata.js`)

Extraheert metadata uit Webdoc documenten.

**Gebruik:**
```bash
node extract-metadata.js <webdoc-file> [--format json|yaml]

# Voorbeeld:
node extract-metadata.js ../examples/basic-example.webdoc.html
node extract-metadata.js ../examples/basic-example.webdoc.html --format json
```

**Output:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "name": "Document Titel",
  "author": {
    "@type": "Person",
    "name": "Auteur Naam"
  },
  "datePublished": "2025-10-16T10:00:00Z"
}
```

### 3. Template Generator (`generate-template.js`)

Genereert een nieuw Webdoc document vanaf een template.

**Gebruik:**
```bash
node generate-template.js [--type basic|ai|scientific] [--output file.html]

# Voorbeeld:
node generate-template.js --type basic --output my-document.webdoc.html
node generate-template.js --type ai --output ai-doc.webdoc.html
```

**Template Types:**
- `basic`: Eenvoudig document met basis features
- `ai`: Document met AI-agent configuratie
- `scientific`: Wetenschappelijk artikel template

## Development

### Validator Uitbreiden

Om nieuwe validatie checks toe te voegen aan de validator:

```javascript
// In validate.js
class WebdocValidator {
    // Voeg nieuwe check methode toe
    checkNewFeature(html) {
        if (!html.includes('new-feature')) {
            this.warnings.push('New feature not found');
        } else {
            this.info.push('✓ New feature present');
        }
    }
    
    validate(htmlContent) {
        // ... bestaande checks
        this.checkNewFeature(htmlContent);
        // ...
    }
}
```

### Testen

Test de tools met de voorbeelden:

```bash
# Test validator met alle voorbeelden
for file in ../examples/*.webdoc.html; do
    echo "Validating $file"
    node validate.js "$file"
    echo ""
done
```

## Toekomstige Tools

Geplande tools voor toekomstige releases:

- **Converter**: Converteer tussen Webdoc en andere formaten (Markdown, PDF)
- **AI Processor**: Voer AI-agent workflows uit
- **Schema Validator**: Valideer tegen JSON Schema
- **RDFa Extractor**: Extraheer RDFa triples
- **Bundle Creator**: Creëer Webdoc packages met media assets

## Bijdragen

Suggesties voor nieuwe tools zijn welkom! Open een issue of pull request in de repository.
