# Webdoc

Een open, uitbreidbaar documentformaat op basis van webstandaarden (HTML, JSON-LD, RDFa) dat inhoud, metadata, stijl, semantiek en AI-agents in één container samenbrengt.

## Overzicht

Webdoc is een modern documentformaat dat:
- **Open en uitbreidbaar** is zonder vendor lock-in
- **Webstandaarden** gebruikt (HTML5, JSON-LD, RDFa)
- **Inhoud en metadata** combineert in één bestand
- **Stijl en presentatie** integreert via CSS
- **Semantische annotaties** ondersteunt voor machine-leesbaarheid
- **AI-agent integratie** mogelijk maakt voor geautomatiseerde verwerking

## Kenmerken

### 1. Gebaseerd op Webstandaarden
- HTML5 voor structuur en inhoud
- JSON-LD voor linked data en metadata
- RDFa voor inline semantische annotaties
- CSS voor stijl en presentatie

### 2. Container Formaat
Webdoc documenten zijn self-contained HTML bestanden die alle componenten bevatten:
- Document inhoud
- Metadata (auteur, datum, versie, etc.)
- Stijlinformatie
- Semantische annotaties
- AI-agent configuratie

### 3. AI-Agent Ondersteuning
Webdoc documenten kunnen configuratie bevatten voor AI-agents:
- Verwerkingsinstructies
- Extractie regels
- Transformatie pipelines
- Validatie criteria

## Documentstructuur

Een Webdoc document volgt deze structuur:

```html
<!DOCTYPE html>
<html lang="nl" vocab="http://schema.org/">
<head>
    <meta charset="UTF-8">
    <title>Document Titel</title>
    
    <!-- JSON-LD Metadata -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "Document Titel",
        "author": {...},
        "datePublished": "2025-10-16"
    }
    </script>
    
    <!-- CSS Stijl -->
    <style>
        /* Document styling */
    </style>
</head>
<body>
    <!-- Inhoud met RDFa annotaties -->
    <article typeof="Article">
        <h1 property="headline">Document Titel</h1>
        <div property="articleBody">
            <!-- Inhoud -->
        </div>
    </article>
    
    <!-- AI-Agent Configuratie -->
    <script type="application/ld+json" id="webdoc-ai-config">
    {
        "@context": "https://webdoc.org/context/ai",
        "@type": "AIAgentConfiguration",
        "agents": [...]
    }
    </script>
</body>
</html>
```

## Gebruik

Zie [SPECIFICATION.md](./SPECIFICATION.md) voor de complete specificatie.

Zie [examples/](./examples/) voor voorbeelden.

## Licentie

Dit formaat is open en vrij te gebruiken.
