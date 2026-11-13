# The 7 Levels of Design Engineering

<img width="597" height="335" alt="image" src="https://github.com/user-attachments/assets/7236cc80-2355-4c1f-8d29-855845b0031b" />

> *"Most people think great products are built around great technology. In reality, great products start with an ideal human experience and layer invisible engineering, behavioral psychology, and structural architecture underneath it."*

An interactive Design Engineering lab demonstrating how software evolves from tiny pixel-level affordances to a cohesive product vision. Inspired by Enrico Tartarotti's breakdown of **[The 7 Levels of Tech Design](https://youtube.com)**.

---

## Live Interactive Playground

Explore the live app on Vercel to step through all 7 layers in real time and watch a single workspace product (**PulseTask**) transform layer by layer:
**[Launch Interactive Demo →](7levelsoftechdesign.vercel.app)**

---

## The 7 Layers of Product Craft

| Level | Layer Name | Core Focus | What's Built in This Repo |
| :--- | :--- | :--- | :--- |
| **01** | **Micro-Details** | Visual affordances & cognitive cues | Middle-truncation (`file...v2.pdf`), expanded invisible hitboxes, sharp vs. round checkboxes, and page load anchors. |
| **02** | **Human Interactions** | Tactile behavior & context awareness | Keyboard-first navigation (`J`/`K`/`Space`), pull-to-refresh physics, and anti-phishing call detection. |
| **03** | **Invisible Tech** | Engineering that eliminates friction | Optimistic UI updates vs. simulated 1.2s blocking network latency (0ms perceived delay). |
| **04** | **Behavioral Defaults** | Psychology & Default Bias | Interactive Opt-Out vs. Opt-In simulator showing how default toggles alter user retention and social pressure. |
| **05** | **Structural Logic** | Data model & system architecture | Unified **"Everything-is-a-Tag"** engine where authors, statuses, and timestamps share a single query primitive. |
| **06** | **Strategic Reframe** | Product positioning & value creation | Reframing a generic to-do list into an **Async Standup & Speed-Triage** tool without changing the database. |
| **07** | **Holistic Vision** | Unified product & X-Ray Inspector | All 6 layers working together with an interactive **X-Ray Mode** that reveals each layer under the hood. |

---

## Project Structure

```text
the-7-levels-of-design-engineering/
├── src/
│   ├── levels/
│   │   ├── Level1Details.tsx        # Visual precision & affordances
│   │   ├── Level2Interactions.tsx   # Keyboard ergonomics & context detection
│   │   ├── Level3InvisibleTech.tsx  # Optimistic state & perceived speed
│   │   ├── Level4Defaults.tsx       # Default bias & behavioral presets
│   │   ├── Level5Architecture.tsx   # Composable tag-based state architecture
│   │   ├── Level6Reframing.tsx      # Workflow repositioning layer
│   │   └── Level7Vision.tsx         # Full product + X-Ray Inspector Mode
│   ├── App.tsx                      # Interactive level switcher
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Tailwind & custom squircle utilities
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd the-7-levels-of-design-engineering
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

---

## Key Takeaways for Builders

* **Details are functional, not decorative:** Small choices like middle-truncation or cursor states prevent user errors before they happen.
* **Architecture shapes UX:** Simplifying your underlying data model (e.g., treating every metadata field as a tag) automatically simplifies the user interface.
* **Vision requires all layers underneath:** A bold product vision (Level 7) only succeeds when supported by strategic framing (Level 6), sound defaults (Level 4), and invisible performance (Level 3).

---
