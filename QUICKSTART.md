# Webdoc Quick Start

Welkom bij Webdoc! In 5 minuten kun je aan de slag met je eerste Webdoc document.

## Wat is Webdoc?

Webdoc is een open documentformaat dat:
- ✅ Gebaseerd is op **webstandaarden** (HTML5, JSON-LD, RDFa)
- ✅ **Self-contained** is (geen externe dependencies)
- ✅ Direct te openen is in elke **browser**
- ✅ **Machine-leesbaar** is voor automatische verwerking
- ✅ **AI-agent** integratie ondersteunt

## Stap 1: Bekijk een voorbeeld

Open een van de voorbeelden in je browser:

```bash
# Clone de repository
git clone https://github.com/hetfirma/Webdoc.git
cd Webdoc

# Open een voorbeeld in je browser
open examples/basic-example.webdoc.html
```

Of bekijk ze online op GitHub!

## Stap 2: Creëer je eerste document

### Optie A: Met de template generator (aanbevolen)

```bash
# Genereer een nieuw document
node tools/generate-template.js \
  --type basic \
  --title "Mijn Eerste Webdoc" \
  --author "Jouw Naam" \
  --output mijn-document.webdoc.html

# Open in browser
open mijn-document.webdoc.html
```

### Optie B: Handmatig

1. Kopieer `examples/basic-example.webdoc.html`
2. Open in je teksteditor
3. Pas de titel, auteur en inhoud aan
4. Sla op en open in browser

## Stap 3: Pas je document aan

Bewerk het bestand in je favoriete editor:

```html
<!-- Pas de titel aan -->
<h1 property="headline">Jouw Titel Hier</h1>

<!-- Voeg content toe -->
<div property="articleBody">
    <p>Jouw inhoud hier...</p>
    <p>Nog meer inhoud...</p>
</div>
```

## Stap 4: Valideer je document

```bash
node tools/validate.js mijn-document.webdoc.html
```

Als het document valid is, zie je:
```
✓ Document is valid!
```

## Stap 5: Voeg metadata toe

Update de JSON-LD metadata in de `<head>`:

```json
{
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Jouw Titel",
    "author": {
        "@type": "Person",
        "name": "Jouw Naam",
        "email": "jouw@email.com"
    },
    "datePublished": "2025-10-16T10:00:00Z",
    "description": "Een korte beschrijving van je document",
    "keywords": ["webdoc", "jouw", "keywords"]
}
```

## Next Steps

### Leer meer

- 📖 Lees de [volledige specificatie](SPECIFICATION.md)
- 📘 Bekijk de [gebruikershandleiding](GUIDE.md)
- 💡 Verken meer [voorbeelden](examples/)

### Uitgebreide features

- **Semantische annotaties**: Voeg RDFa toe voor machine-leesbaarheid
- **Custom styling**: Pas CSS aan naar jouw huisstijl
- **AI-agents**: Voeg AI-configuratie toe voor automatische verwerking

### Hulp nodig?

- 🐛 [Open een issue](https://github.com/hetfirma/Webdoc/issues)
- 💬 Bekijk [bestaande discussies](https://github.com/hetfirma/Webdoc/discussions)
- 📚 Lees de [FAQ](GUIDE.md)

## Veelvoorkomende Use Cases

### Blog post
```bash
node tools/generate-template.js --type basic --output blog-post.webdoc.html
```

### Technisch artikel met AI
```bash
node tools/generate-template.js --type ai --output tech-article.webdoc.html
```

### Wetenschappelijk artikel
```bash
node tools/generate-template.js --type scientific --output paper.webdoc.html
```

## Tips

1. **Valideer regelmatig** tijdens het schrijven
2. **Gebruik semantische HTML** (`<article>`, `<section>`, `<header>`)
3. **Voeg RDFa annotaties toe** aan belangrijke elementen
4. **Test in verschillende browsers**
5. **Houd het self-contained** (geen externe resources)

## Voorbeeld Workflow

```bash
# 1. Genereer template
node tools/generate-template.js --type basic --output artikel.webdoc.html

# 2. Bewerk in je editor
code artikel.webdoc.html

# 3. Valideer
node tools/validate.js artikel.webdoc.html

# 4. Test in browser
open artikel.webdoc.html

# 5. Extracteer metadata (optioneel)
node tools/extract-metadata.js artikel.webdoc.html --pretty
```

## Klaar!

Je hebt nu je eerste Webdoc document gemaakt! 🎉

Voor meer informatie, zie de volledige documentatie:
- [SPECIFICATION.md](SPECIFICATION.md) - Complete technische specificatie
- [GUIDE.md](GUIDE.md) - Gebruikershandleiding
- [CONTRIBUTING.md](CONTRIBUTING.md) - Bijdragen aan het project

Veel plezier met Webdoc!
