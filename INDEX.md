# Webdoc - Index van Documentatie

Dit bestand helpt je de juiste documentatie te vinden.

## 🚀 Ik wil beginnen!

→ Start met [QUICKSTART.md](QUICKSTART.md) voor een 5-minuten introductie

## 📖 Documentatie

### Voor Gebruikers

| Document | Beschrijving | Wanneer te gebruiken |
|----------|--------------|---------------------|
| [README.md](README.md) | Project overzicht | Eerste kennismaking met Webdoc |
| [QUICKSTART.md](QUICKSTART.md) | Snelstart gids | Je eerste document maken |
| [GUIDE.md](GUIDE.md) | Complete gebruikershandleiding | Diepgaande uitleg en voorbeelden |
| [SPECIFICATION.md](SPECIFICATION.md) | Technische specificatie | Volledige technische details |

### Voor Ontwikkelaars

| Document | Beschrijving |
|----------|--------------|
| [CONTRIBUTING.md](CONTRIBUTING.md) | Bijdrage richtlijnen |
| [LICENSE](LICENSE) | MIT License |
| [schema/](schema/) | JSON Schema definities |

## 📁 Directories

### [examples/](examples/)
Bevat werkende voorbeelden van Webdoc documenten:
- `basic-example.webdoc.html` - Eenvoudig voorbeeld
- `ai-integrated-example.webdoc.html` - Met AI-agents
- `scientific-article.webdoc.html` - Wetenschappelijk artikel

Zie [examples/README.md](examples/README.md) voor meer details.

### [schema/](schema/)
JSON Schema definities voor validatie:
- `metadata.schema.json` - Document metadata
- `ai-config.schema.json` - AI-agent configuratie

### [tools/](tools/)
Hulpprogramma's voor werken met Webdoc:
- `validate.js` - Valideer documenten
- `extract-metadata.js` - Extraheer metadata
- `generate-template.js` - Genereer nieuwe documenten

Zie [tools/README.md](tools/README.md) voor gebruik.

## 🎯 Veelvoorkomende Taken

### Een nieuw document maken
```bash
node tools/generate-template.js --type basic --output mijn-doc.webdoc.html
```
→ Zie [QUICKSTART.md](QUICKSTART.md#stap-2-creëer-je-eerste-document)

### Een document valideren
```bash
node tools/validate.js mijn-doc.webdoc.html
```
→ Zie [GUIDE.md](GUIDE.md#validatie)

### Metadata begrijpen
→ Zie [SPECIFICATION.md](SPECIFICATION.md#metadata-sectie)

### AI-agents toevoegen
→ Zie [GUIDE.md](GUIDE.md#ai-agent-integratie) en `examples/ai-integrated-example.webdoc.html`

### Styling aanpassen
→ Zie [GUIDE.md](GUIDE.md#styling)

### RDFa annotaties toevoegen
→ Zie [GUIDE.md](GUIDE.md#semantische-annotaties)

## 🔍 Ik zoek informatie over...

### Webstandaarden
- **HTML5**: [SPECIFICATION.md - HTML5 als Container](SPECIFICATION.md#html5-als-container)
- **JSON-LD**: [SPECIFICATION.md - JSON-LD voor Metadata](SPECIFICATION.md#json-ld-voor-metadata)
- **RDFa**: [SPECIFICATION.md - RDFa voor Semantische Annotaties](SPECIFICATION.md#rdfa-voor-semantische-annotaties)
- **CSS3**: [SPECIFICATION.md - CSS Richtlijnen](SPECIFICATION.md#css-richtlijnen)

### Features
- **Metadata**: [GUIDE.md - Metadata toevoegen](GUIDE.md#metadata-toevoegen)
- **AI-agents**: [SPECIFICATION.md - AI-Agent Configuratie](SPECIFICATION.md#ai-agent-configuratie)
- **Validatie**: [GUIDE.md - Validatie](GUIDE.md#validatie)
- **Extensies**: [SPECIFICATION.md - Extensie Mechanisme](SPECIFICATION.md#extensie-mechanisme)

### Voorbeelden
- **Basis gebruik**: `examples/basic-example.webdoc.html`
- **AI integratie**: `examples/ai-integrated-example.webdoc.html`
- **Wetenschappelijk**: `examples/scientific-article.webdoc.html`

## 💡 Tips

1. Begin met de [QUICKSTART.md](QUICKSTART.md)
2. Bekijk de voorbeelden in `examples/`
3. Gebruik de tools in `tools/` om te experimenteren
4. Lees de [GUIDE.md](GUIDE.md) voor details
5. Raadpleeg de [SPECIFICATION.md](SPECIFICATION.md) voor technische details

## ❓ Hulp nodig?

- Lees eerst de [FAQ in GUIDE.md](GUIDE.md)
- Bekijk de voorbeelden voor inspiratie
- Open een issue voor vragen of bugs
- Zie [CONTRIBUTING.md](CONTRIBUTING.md) om bij te dragen

## 📊 Specificatie Versie

Huidige versie: **1.0.0**

Zie [SPECIFICATION.md](SPECIFICATION.md#versioning) voor versie informatie.

## 🎓 Leerpad

### Beginner
1. [QUICKSTART.md](QUICKSTART.md) - Maak je eerste document
2. [examples/basic-example.webdoc.html](examples/basic-example.webdoc.html) - Bekijk simpel voorbeeld
3. [GUIDE.md - Document structuur](GUIDE.md#document-structuur) - Begrijp de opbouw

### Gevorderd
1. [GUIDE.md - Metadata toevoegen](GUIDE.md#metadata-toevoegen) - Uitgebreide metadata
2. [GUIDE.md - Semantische annotaties](GUIDE.md#semantische-annotaties) - RDFa gebruik
3. [examples/scientific-article.webdoc.html](examples/scientific-article.webdoc.html) - Complex voorbeeld

### Expert
1. [SPECIFICATION.md](SPECIFICATION.md) - Volledige specificatie
2. [GUIDE.md - AI-agent integratie](GUIDE.md#ai-agent-integratie) - Geavanceerde features
3. [examples/ai-integrated-example.webdoc.html](examples/ai-integrated-example.webdoc.html) - AIvoorbeeld
4. [CONTRIBUTING.md](CONTRIBUTING.md) - Bijdragen aan het project

---

**Webdoc v1.0.0** - Een open, uitbreidbaar documentformaat op basis van webstandaarden
