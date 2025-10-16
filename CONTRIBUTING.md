# Bijdragen aan Webdoc

Bedankt voor je interesse om bij te dragen aan het Webdoc project! Dit document beschrijft hoe je kunt bijdragen.

## Code of Conduct

- Wees respectvol en constructief
- Focus op het verbeteren van het project
- Waardeer verschillende perspectieven en ervaringen
- Accepteer constructieve kritiek

## Hoe kun je bijdragen?

### 1. Bug Reports

Als je een bug vindt:
- Controleer eerst of het probleem al gerapporteerd is in de issues
- Open een nieuwe issue met een duidelijke beschrijving
- Voeg voorbeelden toe die het probleem demonstreren
- Beschrijf de verwachte en actuele resultaten

### 2. Feature Requests

Voor nieuwe features:
- Beschrijf het probleem dat de feature oplost
- Geef voorbeelden van gebruik
- Overweeg alternatieve oplossingen
- Wees bereid om de feature zelf te implementeren

### 3. Documentatie

Help de documentatie verbeteren:
- Corrigeer typefouten en grammaticafouten
- Verbeter onduidelijke uitleg
- Voeg voorbeelden toe
- Vertaal documentatie naar andere talen

### 4. Code Contributions

Voor code bijdragen:
- Fork de repository
- Maak een feature branch
- Implementeer je wijzigingen
- Test je code
- Maak een pull request

## Development Setup

### Vereisten

- Git
- Node.js (voor tools)
- Een teksteditor

### Repository clonen

```bash
git clone https://github.com/hetfirma/Webdoc.git
cd Webdoc
```

### Tools testen

```bash
# Valideer voorbeelden
node tools/validate.js examples/basic-example.webdoc.html

# Genereer template
node tools/generate-template.js --type basic --output test.webdoc.html

# Extracteer metadata
node tools/extract-metadata.js examples/basic-example.webdoc.html --pretty
```

## Bijdrage Guidelines

### Documentatie

- Gebruik duidelijke, begrijpelijke taal
- Voeg voorbeelden toe waar mogelijk
- Volg de bestaande documentatie structuur
- Test voorbeelden voordat je ze toevoegt

### Code

- Volg bestaande code stijl
- Voeg comments toe voor complexe logica
- Houd functies klein en focused
- Test je code met de voorbeelden

### Voorbeelden

Nieuwe voorbeelden moeten:
- Valid Webdoc documenten zijn
- Een specifiek use case demonstreren
- Self-contained zijn (geen externe resources)
- Goed gecommentarieerd zijn
- Toegevoegd worden aan `examples/README.md`

### Tools

Nieuwe tools moeten:
- Een duidelijk doel hebben
- Command-line interface ondersteunen
- Goede help/usage informatie geven
- Gedocumenteerd worden in `tools/README.md`

## Pull Request Process

1. **Fork en branch**:
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Maak je wijzigingen**:
   - Implementeer de feature of fix
   - Test grondig
   - Update documentatie

3. **Commit**:
   ```bash
   git add .
   git commit -m "Add feature: beschrijving"
   ```

4. **Push**:
   ```bash
   git push origin feature/my-new-feature
   ```

5. **Open Pull Request**:
   - Beschrijf wat je hebt gewijzigd en waarom
   - Refereer naar gerelateerde issues
   - Voeg screenshots toe indien relevant

6. **Review process**:
   - Wacht op feedback van maintainers
   - Verwerk feedback constructief
   - Update je PR indien nodig

## Specificatie Wijzigingen

Wijzigingen aan de specificatie (`SPECIFICATION.md`) vereisen extra aandacht:

1. **Discussie**: Open eerst een issue om de wijziging te bespreken
2. **Backwards compatibility**: Overweeg impact op bestaande documenten
3. **Versioning**: Update versienummer indien nodig
4. **Voorbeelden**: Update voorbeelden die beïnvloed worden
5. **Tools**: Update validatie en andere tools

## Schema Wijzigingen

Voor wijzigingen aan JSON schemas:

1. Behoud backwards compatibility waar mogelijk
2. Update schema versie indien nodig
3. Test met bestaande voorbeelden
4. Update documentatie

## Voorbeeld Bijdragen

### Nieuw voorbeeld toevoegen

1. Creëer `.webdoc.html` bestand in `examples/`
2. Valideer met validator:
   ```bash
   node tools/validate.js examples/my-example.webdoc.html
   ```
3. Voeg beschrijving toe aan `examples/README.md`
4. Test in browser

### Tool toevoegen

1. Creëer `.js` bestand in `tools/`
2. Implementeer CLI interface met `--help`
3. Test functionaliteit
4. Documenteer in `tools/README.md`
5. Voeg gebruiksvoorbeelden toe

## Testing

### Validatie tests

Test alle voorbeelden:
```bash
for file in examples/*.webdoc.html; do
    echo "Testing $file"
    node tools/validate.js "$file"
done
```

### Tool tests

Test tools met verschillende inputs:
```bash
# Template generator
node tools/generate-template.js --type basic --output /tmp/test1.html
node tools/generate-template.js --type ai --output /tmp/test2.html
node tools/generate-template.js --type scientific --output /tmp/test3.html

# Metadata extractor
node tools/extract-metadata.js examples/basic-example.webdoc.html --main
node tools/extract-metadata.js examples/ai-integrated-example.webdoc.html --ai
```

### Browser tests

Test voorbeelden in verschillende browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Communicatie

- **Issues**: Voor bugs, features en discussie
- **Pull Requests**: Voor code bijdragen
- **Discussions**: Voor algemene vragen en ideeën

## Recognition

Contributors worden vermeld in:
- Repository contributors lijst
- Release notes (voor significante bijdragen)

## Vragen?

Als je vragen hebt over bijdragen, open een issue met het label "question".

## Licentie

Door bij te dragen ga je akkoord dat je bijdragen beschikbaar komen onder dezelfde licentie als het project.

## Toekomstige Features

Ideeën voor toekomstige features waar hulp bij welkom is:

- **Converters**: Webdoc naar/van Markdown, PDF, DOCX
- **Editor Plugin**: VS Code extensie met syntax highlighting
- **Online Editor**: Web-based Webdoc editor
- **AI Processor**: Implementatie van AI-agent processing
- **Validation Service**: Online validatie service
- **Template Library**: Meer templates voor verschillende use cases
- **Internationalisatie**: Meertalige documentatie en voorbeelden

Kies een feature die je interesseert en open een issue om te beginnen!
