# Webdoc Gebruikershandleiding

Deze handleiding beschrijft hoe je Webdoc documenten kunt maken, gebruiken en verwerken.

## Inhoudsopgave

1. [Aan de slag](#aan-de-slag)
2. [Een nieuw document maken](#een-nieuw-document-maken)
3. [Document structuur](#document-structuur)
4. [Metadata toevoegen](#metadata-toevoegen)
5. [Semantische annotaties](#semantische-annotaties)
6. [Styling](#styling)
7. [AI-agent integratie](#ai-agent-integratie)
8. [Validatie](#validatie)
9. [Best practices](#best-practices)

## Aan de slag

### Vereisten

- Een teksteditor (VS Code, Sublime Text, etc.)
- Een moderne webbrowser (Chrome, Firefox, Safari, Edge)
- Node.js (voor tools, optioneel)

### Snelstart

1. Kopieer een van de voorbeelden uit `examples/`
2. Open het bestand in je teksteditor
3. Pas de inhoud aan naar wens
4. Open het bestand in een browser om het resultaat te zien

## Een nieuw document maken

### Optie 1: Template generator gebruiken

```bash
node tools/generate-template.js --type basic --output my-document.webdoc.html
```

Template types:
- `basic`: Eenvoudig document
- `ai`: Document met AI-agent configuratie
- `scientific`: Wetenschappelijk artikel

### Optie 2: Handmatig maken

Gebruik het basis template:

```html
<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mijn Document</title>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "Mijn Document",
        "author": {
            "@type": "Person",
            "name": "Jouw Naam"
        },
        "datePublished": "2025-10-16T10:00:00Z",
        "version": "1.0.0",
        "inLanguage": "nl"
    }
    </script>
    
    <style>
        body {
            font-family: sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <article typeof="Article">
        <h1 property="headline">Mijn Document</h1>
        <div property="articleBody">
            <p>Je inhoud hier...</p>
        </div>
    </article>
</body>
</html>
```

## Document structuur

Een Webdoc document bestaat uit:

### 1. HTML5 doctype en html element

```html
<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
```

- `lang`: Taalcode (ISO 639-1)
- `vocab`: RDFa vocabulary (meestal Schema.org)

### 2. Head sectie

Bevat:
- Character encoding
- Viewport meta tag
- Title
- JSON-LD metadata
- CSS styling

### 3. Body sectie

Bevat:
- Artikel inhoud met RDFa annotaties
- Optioneel: AI-agent configuratie

## Metadata toevoegen

Metadata wordt opgeslagen als JSON-LD in de `<head>`:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Document titel",
    "author": {
        "@type": "Person",
        "name": "Auteur Naam",
        "email": "auteur@example.com"
    },
    "datePublished": "2025-10-16T10:00:00Z",
    "dateModified": "2025-10-16T12:00:00Z",
    "version": "1.0.0",
    "inLanguage": "nl",
    "description": "Korte beschrijving",
    "keywords": ["keyword1", "keyword2"]
}
</script>
```

### Verplichte velden

- `@context`: "https://schema.org"
- `@type`: Schema.org type (bijv. "Article")
- `name`: Document titel

### Aanbevolen velden

- `author`: Auteur informatie
- `datePublished`: Publicatiedatum
- `version`: Versienummer
- `inLanguage`: Taalcode

### Schema.org types

Gebruik passende types voor je document:
- `Article`: Algemeen artikel
- `BlogPosting`: Blog post
- `ScholarlyArticle`: Wetenschappelijk artikel
- `TechArticle`: Technisch artikel
- `Report`: Rapport
- `CreativeWork`: Algemeen creatief werk

## Semantische annotaties

RDFa annotaties maken content machine-leesbaar:

### Basis attributen

- `typeof`: Type van de resource
- `property`: Eigenschap
- `resource`: Resource ID
- `content`: Expliciete waarde

### Voorbeelden

#### Artikel met auteur

```html
<article typeof="Article">
    <h1 property="headline">Titel</h1>
    <p>
        Door <span property="author" typeof="Person">
            <span property="name">Jan Jansen</span>
        </span>
    </p>
    <div property="articleBody">
        <p>Inhoud...</p>
    </div>
</article>
```

#### Datum en tijd

```html
<time property="datePublished" datetime="2025-10-16T10:00:00Z">
    16 oktober 2025
</time>
```

#### Locatie

```html
<div typeof="Place">
    <span property="name">Amsterdam</span>
    <span property="address" typeof="PostalAddress">
        <span property="addressLocality">Amsterdam</span>
    </span>
</div>
```

#### Persoon met affiliatie

```html
<div typeof="Person">
    <span property="name">Dr. Anna Pieters</span>
    <span property="affiliation" typeof="Organization">
        <span property="name">Universiteit van Amsterdam</span>
    </span>
</div>
```

## Styling

CSS wordt embedded in de `<style>` tag:

### Best practices

1. **Gebruik CSS variabelen** voor thema's:

```css
:root {
    --primary-color: #2c3e50;
    --text-color: #333;
    --background-color: #fff;
}

body {
    color: var(--text-color);
    background-color: var(--background-color);
}
```

2. **Responsive design**:

```css
@media (max-width: 768px) {
    body {
        padding: 1rem;
    }
}
```

3. **Print styling**:

```css
@media print {
    .no-print {
        display: none;
    }
}
```

## AI-agent integratie

AI-agents kunnen documenten automatisch verwerken:

### Basis configuratie

```html
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
```

### Agent types

- `ContentExtractor`: Extracteer inhoud
- `Summarizer`: Genereer samenvatting
- `Translator`: Vertaal content
- `Validator`: Valideer document
- `AIAgent`: Algemene agent

### Workflows

Combineer agents in workflows:

```json
{
    "workflows": [
        {
            "@type": "AIWorkflow",
            "name": "document-processing",
            "steps": [
                {"agent": "content-extractor"},
                {"agent": "summarizer"}
            ]
        }
    ]
}
```

## Validatie

Valideer documenten met de validator tool:

```bash
node tools/validate.js my-document.webdoc.html
```

De validator controleert:
- HTML5 doctype
- UTF-8 encoding
- Language attribute
- JSON-LD metadata
- Verplichte velden
- RDFa annotaties
- CSS styling

## Best practices

### 1. Self-contained

Houd alle resources embedded:
- CSS in `<style>` tags
- JSON-LD in `<script>` tags
- Geen externe dependencies

### 2. Semantische HTML

Gebruik semantische HTML5 elementen:
```html
<article>
    <header>
        <h1>Titel</h1>
    </header>
    <section>
        <h2>Sectie</h2>
    </section>
</article>
```

### 3. Toegankelijkheid

- Gebruik `alt` attributen voor images
- Zorg voor voldoende kleurcontrast
- Gebruik semantische heading structuur
- Test met screenreaders

### 4. Metadata volledigheid

Voeg zoveel mogelijk metadata toe:
- Auteur informatie
- Datums
- Trefwoorden
- Beschrijving
- Licentie

### 5. Versioning

Gebruik semantic versioning:
```json
"version": "1.0.0"
```

### 6. Taal specificatie

Specificeer de taal correct:
```html
<html lang="nl">
```

```json
"inLanguage": "nl"
```

### 7. Valideer regelmatig

Valideer je documenten regelmatig tijdens ontwikkeling.

## Workflow voorbeeld

Complete workflow voor een nieuw document:

1. **Genereer template**:
   ```bash
   node tools/generate-template.js --type basic --output artikel.webdoc.html
   ```

2. **Bewerk document** in je favoriete editor

3. **Voeg metadata toe**:
   - Auteur informatie
   - Beschrijving
   - Trefwoorden

4. **Voeg RDFa annotaties toe** aan belangrijke elementen

5. **Pas styling aan** naar wens

6. **Valideer**:
   ```bash
   node tools/validate.js artikel.webdoc.html
   ```

7. **Test in browser**:
   ```bash
   open artikel.webdoc.html
   ```

8. **Extracteer metadata** (optioneel):
   ```bash
   node tools/extract-metadata.js artikel.webdoc.html --pretty
   ```

## Hulp krijgen

- Bekijk de voorbeelden in `examples/`
- Lees de specificatie in `SPECIFICATION.md`
- Check de tools documentatie in `tools/README.md`

## Vragen?

Open een issue in de repository voor vragen of suggesties.
