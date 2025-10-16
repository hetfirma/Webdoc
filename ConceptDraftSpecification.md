# 🌐 **WebDoc 1.0 — Concept Draft Specification**

### **Status:** Concept / Draft (v0.3, oktober 2025)

### **Doel:**

Een open, uitbreidbaar documentformaat op basis van webstandaarden
(HTML, JSON-LD, RDFa) dat **inhoud, metadata, stijl, semantiek en AI-agents** in één container samenbrengt.

---

## 🧱 1. **Bestandsstructuur**

**Extensie:** `.webdoc`
**MIME-type:** `application/webdoc+html`
**Container:** ZIP-gebaseerd of enkelvoudig HTMLX-bestand (self-contained)

**Bevat:**

```
/manifest.json       → metadata, versies, agents
/content.htmlx        → hoofdinhoud (HTML5 + uitbreidingen)
/assets/              → afbeeldingen, stylesheets, scripts
/history.json         → bewerkingslog, provenance
/signatures.json      → optionele cryptografische ondertekeningen
```

---

## 📜 2. **Doelen van het formaat**

| Doel                       | Beschrijving                                                                    |
| -------------------------- | ------------------------------------------------------------------------------- |
| **Open en semantisch**     | Gebaseerd op W3C-standaarden (HTML5, RDFa, JSON-LD)                             |
| **AI-native**              | Ondersteuning voor geïntegreerde AI-agents (samenvatting, vertaling, validatie) |
| **Context-adaptief**       | Document past zich aan lezer, taal of apparaat aan                              |
| **Zelfbeschrijvend**       | Metadata, inhoud en gedrag in één pakket                                        |
| **Langdurige archivering** | Backwards compatible, menselijke leesbaarheid                                   |
| **Web-renderbaar**         | Te openen in standaard browsers zonder speciale viewer                          |

---

## ⚙️ 3. **Core Components**

### 3.1 `manifest.json`

Beschrijft document-metadata, structuur, versies en agents.

```json
{
  "id": "webdoc:45832",
  "version": "1.0.2",
  "created": "2055-03-10T14:22:00Z",
  "modified": "2055-04-01T09:45:00Z",
  "title": {
    "nl": "Energie in Stedelijke Gebieden",
    "en": "Urban Energy Report"
  },
  "authors": ["A. Bot", "R. Sikkens"],
  "languages": ["nl", "en"],
  "topics": ["duurzaamheid", "energie", "stedelijk beleid"],
  "agents": [
    {
      "id": "summarizer",
      "role": "ai-summarizer",
      "model": "GPT-11",
      "autoRun": true
    },
    {
      "id": "translator",
      "role": "ai-translator",
      "targetLanguages": ["en", "fr"]
    }
  ],
  "signatures": ["sha512:abc123..."]
}
```

---

### 3.2 `content.htmlx`

HTML-compatible document met WebDoc-extensies.

#### Nieuw root-element:

```html
<!DOCTYPE webdoc>
<webdoc xmlns="https://schema.webdoc.ai/1.0">
  <meta author="A. Bot" lang="nl" created="2055-03-10T14:22:00Z" />
  
  <section id="intro" about="#duurzaamheid">
    <h1>Inleiding</h1>
    <p property="summary" lang="nl">
      Dit rapport onderzoekt de impact van zonne-energie in stedelijke gebieden.
    </p>
  </section>

  <ai-agent ref="summarizer"></ai-agent>
  <ai-agent ref="translator"></ai-agent>
</webdoc>
```

---

## 🧩 4. **Nieuwe semantische elementen**

| Element        | Attributen                        | Beschrijving                                                                      |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| `<webdoc>`     | `xmlns`, `version`                | Root-element, bevat metadata en inhoud                                            |
| `<ai-agent>`   | `ref`, `role`, `model`, `autorun` | Beschrijft een ingebedde AI-functie (summarizer, translator, validator, reviewer) |
| `<annotation>` | `concept`, `confidence`           | Verbindt tekst met kennisdomeinen of entiteiten                                   |
| `<variant>`    | `lang`, `audience`                | Alternatieve weergave voor taal of doelgroep                                      |
| `<history>`    | —                                 | Verwijzing naar wijzigingsgeschiedenis                                            |

---

## 📦 5. **Semantische uitbreidingen**

Ondersteunt **RDFa** en **JSON-LD** natively.
Voorbeeld integratie in HTMLX:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Report",
  "name": "Urban Energy Report",
  "author": "A. Bot",
  "datePublished": "2055-03-10"
}
</script>
```

---

## 🔐 6. **Beveiliging & herkomst**

* Documenten kunnen ondertekend worden met **W3C Digital Signatures (JSON-Web-Signature)**
* Provenance vastgelegd volgens **W3C PROV**-model:

```json
{
  "prov:activity": "edit",
  "prov:agent": "user:rsikkens",
  "prov:time": "2055-04-01T09:45:00Z",
  "prov:entity": "section:intro"
}
```

---

## 🧠 7. **Interactie & weergave**

* Te renderen in browsers via `<webdoc-viewer>`-polyfill.
* Agents kunnen via WebAssembly of lokale AI-API worden uitgevoerd.
* Ondersteunt dynamische thema’s (licht/donker) en “context rendering”:
  `<variant lang="en">` wordt automatisch geselecteerd o.b.v. browsertaal.

---

## 🔄 8. **Compatibiliteit**

| Richting              | Methode                                        |
| --------------------- | ---------------------------------------------- |
| **WebDoc → PDF**      | via ingebouwde render-stylesheet (`print.css`) |
| **WebDoc → ODT/DOCX** | conversie via manifest + content mapping       |
| **HTML → WebDoc**     | toevoeging van manifest.json en RDFa-context   |

---

## 🧩 9. **Voorbeeldbestand**

Bestandsstructuur:

```
/myreport.webdoc
 ├── manifest.json
 ├── content.htmlx
 ├── assets/
 │    ├── logo.svg
 │    └── styles.css
 └── history.json
```

---

## 🔮 10. **Visie: WebDoc 2.0 (verder vooruit)**

* **Embedded agents**: AI-modellen draaien lokaal of via sandboxed API.
* **Distributed storage**: IPFS-achtige content-hash-identificatie (`webdoc://hash`).
* **Context-signalen**: document past zich aan op gebruiker (rol, kennisniveau).
* **Federated provenance**: gedeelde geschiedenis over meerdere versies / uitgevers.

---

## ✅ **Samenvattend**

> **WebDoc 1.0** is een open, web-native documentformaat dat de brug slaat tussen **klassieke documenten (ODT/PDF)** en **levende kennisobjecten (AI-agents, RDF, JSON-LD)**.
> Het combineert semantiek, interoperabiliteit en browsercompatibiliteit — zonder afhankelijkheid van één leverancier.

---
