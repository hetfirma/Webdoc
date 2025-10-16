# Webdoc Specificatie v1.0

## Inleiding

Webdoc is een open, uitbreidbaar documentformaat dat gebaseerd is op gevestigde webstandaarden. Het formaat combineert inhoud, metadata, stijl, semantiek en AI-agent configuratie in één self-contained HTML document.

## Ontwerpdoelen

1. **Openheid**: Gebaseerd op open webstandaarden zonder vendor lock-in
2. **Uitbreidbaarheid**: Flexibel schema dat nieuwe features ondersteunt
3. **Interoperabiliteit**: Leesbaar door standaard webbrowsers en tools
4. **Semantiek**: Machine-leesbare annotaties voor geautomatiseerde verwerking
5. **AI-ready**: Ingebouwde ondersteuning voor AI-agent integratie

## Technische Basis

### Kern Technologieën

#### 1. HTML5
HTML5 vormt de basis container en structuur:
- `<!DOCTYPE html>` declaratie voor HTML5
- Semantische HTML5 elementen (`<article>`, `<section>`, `<header>`, etc.)
- UTF-8 character encoding
- Valid HTML5 document structuur

#### 2. JSON-LD (JSON for Linking Data)
JSON-LD wordt gebruikt voor gestructureerde metadata:
- `@context` voor vocabulary mapping
- `@type` voor entiteit type
- Schema.org vocabularies als standaard
- Meerdere JSON-LD scripts toegestaan voor verschillende doeleinden

#### 3. RDFa (Resource Description Framework in Attributes)
RDFa wordt gebruikt voor inline semantische annotaties:
- `typeof` voor het type van een resource
- `property` voor eigenschappen
- `vocab` attribute voor vocabulary namespace
- `resource` voor resource identificatie

#### 4. CSS3
CSS3 voor presentatie en stijl:
- Embedded in `<style>` tags
- Ondersteuning voor moderne CSS features
- Print en screen media queries
- Custom properties (CSS variabelen)

## Document Structuur

### Basis Template

```html
<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Titel</title>
    
    <!-- Metadata als JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "Document Titel",
        "author": {
            "@type": "Person",
            "name": "Auteur Naam"
        },
        "datePublished": "2025-10-16T10:00:00Z",
        "dateModified": "2025-10-16T10:00:00Z",
        "version": "1.0",
        "inLanguage": "nl"
    }
    </script>
    
    <!-- Document Stijl -->
    <style>
        :root {
            --primary-color: #333;
            --background-color: #fff;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: var(--primary-color);
            background-color: var(--background-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <!-- Document Inhoud met RDFa -->
    <article typeof="Article">
        <header>
            <h1 property="headline">Document Titel</h1>
            <p>
                Door <span property="author" typeof="Person">
                    <span property="name">Auteur Naam</span>
                </span>
            </p>
            <time property="datePublished" datetime="2025-10-16">
                16 oktober 2025
            </time>
        </header>
        
        <div property="articleBody">
            <!-- Hoofdinhoud -->
        </div>
    </article>
    
    <!-- AI-Agent Configuratie (optioneel) -->
    <script type="application/ld+json" id="webdoc-ai-config">
    {
        "@context": "https://webdoc.org/context/ai/v1",
        "@type": "AIAgentConfiguration",
        "version": "1.0",
        "agents": []
    }
    </script>
</body>
</html>
```

## Metadata Sectie

### JSON-LD Metadata

Webdoc documenten MOETEN ten minste één JSON-LD script bevatten in de `<head>` met document metadata.

#### Verplichte Velden
- `@context`: MOET "https://schema.org" bevatten
- `@type`: MOET een geldig Schema.org type zijn (bijv. "Article", "Report", "CreativeWork")
- `name`: De titel van het document

#### Aanbevolen Velden
- `author`: Auteur informatie (Person of Organization)
- `datePublished`: Publicatiedatum (ISO 8601 formaat)
- `dateModified`: Laatste wijzigingsdatum (ISO 8601 formaat)
- `version`: Versienummer (semantic versioning)
- `inLanguage`: Taalcode (ISO 639-1)
- `description`: Korte beschrijving
- `keywords`: Array van trefwoorden

#### Uitgebreide Metadata Voorbeelden

```json
{
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Webdoc Formaat Specificatie",
    "author": {
        "@type": "Person",
        "name": "Jan Jansen",
        "email": "jan@example.com",
        "affiliation": {
            "@type": "Organization",
            "name": "Het Firma"
        }
    },
    "datePublished": "2025-10-16T10:00:00Z",
    "dateModified": "2025-10-16T12:00:00Z",
    "version": "1.0.0",
    "inLanguage": "nl",
    "description": "Een complete specificatie van het Webdoc formaat",
    "keywords": ["webdoc", "documentformaat", "semantisch web"],
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "isPartOf": {
        "@type": "CreativeWorkSeries",
        "name": "Webdoc Documentatie"
    }
}
```

## Semantische Annotaties

### RDFa Gebruik

RDFa annotaties MOETEN worden gebruikt om semantische betekenis aan content te geven.

#### Basis Attributes
- `vocab`: Vocabulary namespace (typisch op `<html>` element)
- `typeof`: Type van de resource
- `property`: Eigenschap naam
- `resource`: Resource identificatie
- `content`: Expliciete waarde (wanneer anders dan tekstinhoud)

#### Voorbeelden

```html
<!-- Persoon met contactinformatie -->
<div typeof="Person">
    <span property="name">Jan Jansen</span>
    <a property="email" href="mailto:jan@example.com">Email</a>
    <span property="jobTitle">Software Engineer</span>
</div>

<!-- Locatie -->
<div typeof="Place">
    <span property="name">Amsterdam</span>
    <span property="address" typeof="PostalAddress">
        <span property="addressLocality">Amsterdam</span>
        <span property="addressCountry">Nederland</span>
    </span>
</div>

<!-- Event -->
<div typeof="Event">
    <h2 property="name">Webdoc Presentatie</h2>
    <time property="startDate" datetime="2025-10-20T14:00:00">
        20 oktober 2025, 14:00
    </time>
    <span property="location" typeof="Place">
        <span property="name">Conferentiecentrum</span>
    </span>
</div>
```

## Stijl Sectie

### CSS Richtlijnen

CSS MOET worden gedefinieerd in `<style>` tags binnen de `<head>`.

#### Best Practices
1. Gebruik CSS custom properties voor thema variabelen
2. Definieer responsive styling met media queries
3. Overweeg print styling voor documenten die geprint kunnen worden
4. Gebruik semantic class names

#### Voorbeeld

```css
:root {
    /* Kleuren */
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --background-color: #ffffff;
    --text-color: #333333;
    
    /* Typografie */
    --font-family-base: system-ui, -apple-system, sans-serif;
    --font-family-mono: 'Courier New', monospace;
    --line-height-base: 1.6;
    
    /* Spacing */
    --spacing-unit: 1rem;
}

body {
    font-family: var(--font-family-base);
    line-height: var(--line-height-base);
    color: var(--text-color);
    background-color: var(--background-color);
    max-width: 800px;
    margin: 0 auto;
    padding: calc(var(--spacing-unit) * 2);
}

/* Print styling */
@media print {
    body {
        max-width: 100%;
        padding: 0;
    }
    
    .no-print {
        display: none;
    }
}

/* Responsive */
@media (max-width: 768px) {
    body {
        padding: var(--spacing-unit);
    }
}
```

## AI-Agent Configuratie

### AI-Agent Sectie

Webdoc documenten KUNNEN een AI-agent configuratie sectie bevatten voor geautomatiseerde verwerking.

#### Structuur

```json
{
    "@context": "https://webdoc.org/context/ai/v1",
    "@type": "AIAgentConfiguration",
    "version": "1.0",
    "agents": [
        {
            "@type": "AIAgent",
            "name": "content-extractor",
            "purpose": "Extract main content",
            "instructions": "Extract the main article content and summarize it",
            "input": {
                "selector": "article[typeof='Article']",
                "format": "html"
            },
            "output": {
                "format": "markdown",
                "location": "metadata.summary"
            }
        }
    ],
    "workflows": [
        {
            "@type": "AIWorkflow",
            "name": "document-processing",
            "steps": [
                {"agent": "content-extractor"},
                {"agent": "keyword-analyzer"}
            ]
        }
    ]
}
```

#### Agent Eigenschappen
- `name`: Unieke identificatie van de agent
- `purpose`: Beschrijving van het doel
- `instructions`: Verwerkingsinstructies voor de agent
- `input`: Input specificatie (selector, format)
- `output`: Output specificatie (format, location)
- `parameters`: Optionele configuratieparameters

#### Use Cases
1. **Content Extractie**: Hoofdinhoud extraheren en transformeren
2. **Metadata Verrijking**: Automatisch metadata genereren
3. **Samenvatting**: Document samenvattingen genereren
4. **Vertaling**: Content vertalen naar andere talen
5. **Validatie**: Document valideren tegen regels
6. **Indexering**: Content indexeren voor zoekfunctionaliteit

## Extensie Mechanisme

### Custom Vocabularies

Webdoc ondersteunt custom vocabularies naast Schema.org:

```html
<html lang="nl" vocab="http://schema.org/" prefix="custom: https://example.com/vocab/">
    <!-- Gebruik custom vocabulary -->
    <div typeof="custom:CustomType">
        <span property="custom:customProperty">Value</span>
    </div>
</html>
```

### Custom AI-Agent Types

Nieuwe agent types kunnen worden gedefinieerd:

```json
{
    "@context": {
        "@vocab": "https://webdoc.org/context/ai/v1",
        "custom": "https://example.com/agents/"
    },
    "@type": "AIAgentConfiguration",
    "agents": [
        {
            "@type": "custom:CustomAgent",
            "name": "my-custom-agent",
            "customProperty": "value"
        }
    ]
}
```

## Validatie

### Document Validatie

Een geldig Webdoc document MOET:
1. Valid HTML5 zijn
2. Ten minste één JSON-LD metadata block bevatten
3. UTF-8 encoding gebruiken
4. Een `lang` attribute hebben op het `<html>` element

Een geldig Webdoc document ZOU MOETEN:
1. RDFa annotaties gebruiken voor belangrijke content
2. CSS styling bevatten
3. Responsive zijn
4. Toegankelijk zijn (WCAG 2.1 AA)

### JSON-LD Validatie

JSON-LD blokken MOETEN:
1. Valid JSON zijn
2. Een `@context` bevatten
3. Een `@type` bevatten

## Versioning

Webdoc volgt semantic versioning voor de specificatie:
- MAJOR: Backwards-incompatible wijzigingen
- MINOR: Backwards-compatible nieuwe features
- PATCH: Backwards-compatible bug fixes

Huidige versie: **1.0.0**

## Conformance Levels

### Level 1: Basic Webdoc
- Valid HTML5
- JSON-LD metadata met minimale velden
- Basis CSS styling

### Level 2: Enhanced Webdoc
- Level 1 vereisten
- RDFa annotaties voor hoofdinhoud
- Responsive styling
- Toegankelijkheid features

### Level 3: Advanced Webdoc
- Level 2 vereisten
- AI-agent configuratie
- Custom vocabularies
- Uitgebreide metadata
- Workflows

## Voorbeelden

Zie de `examples/` directory voor complete voorbeelden van:
- Basis documenten
- Wetenschappelijke artikelen
- Rapporten
- Technische documentatie
- AI-geïntegreerde documenten

## MIME Type

Aanbevolen MIME type: `text/html`

Optioneel custom MIME type: `application/webdoc+html`

## Bestandsextensie

Aanbevolen extensie: `.webdoc.html` of `.html`

## Referenties

- HTML5: https://html.spec.whatwg.org/
- JSON-LD: https://www.w3.org/TR/json-ld11/
- RDFa: https://www.w3.org/TR/rdfa-primer/
- Schema.org: https://schema.org/
- CSS3: https://www.w3.org/Style/CSS/

## Wijzigingshistorie

- v1.0.0 (2025-10-16): Initiële specificatie
