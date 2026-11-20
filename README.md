# Medical Bacteriology Diagnostic Navigator (Murray 10th Ed. — v2.2)

An interactive, zero-dependency, static HTML/JS diagnostic filter and clinical study reference covering **all 18 bacteriology chapters (Chapters 17–34)**, **106 clinically significant bacteria**, and **organ-system differentials & specimen collection guides (Chapters 78–85)** from *Murray's Medical Microbiology* (10th Edition).

## What's New in v2.2
- **Interactive Trigger-Word Popovers (591 / 591 Definitions):** Click any amber High-Yield Trigger Word pill—either on a candidate card or inside an open profile—to open a viewport-aware floating definition card with a 1-click *"Find matching bacteria"* search shortcut.
- **Modular Dictionary (`data/trigger_definitions.js`) + 3-Tier Fallback:** Keeps all 18 chapter files clean and automatically falls back to each organism's glossary or clinical sections if you add new trigger words in the future.

## Full Feature Set
- **106 Bacteria Across All 18 Chapters (Ch. 17–34):** 100% schema-validated, zero tag contradictions, zero raw LaTeX/citation artifacts, and 100% unique terminal filter paths.
- **233 Active Diagnostic Filters (100% Utilization):** Zero dead filters across all 10 categories, including Ch. 78–85 syndromic criteria.
- **1-Click Clinical Syndrome Quick-Presets & Specimen Collection Guide Modal:** Built-in Murray Ch. 78–85 differentials and Tables 78.2, 80.2, 81, 82.3, and 83.2 specimen/CSF quick-reference.
- **Fast Study UX:** Full-text HTML-stripped search (`/` to focus, `Esc` to close), Chapter dropdown, A–Z sort, sticky scrollable sidebar with filter search & "Hide 0-match" toggle, clickable profile tags, and **Quiz Mode**.

## Quick GitHub Pages Setup
1. Upload `index.html`, `README.md`, and the entire `data/` folder (18 chapter files + `trigger_definitions.js`) to your GitHub repository root.
2. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch** (`main`, `/ (root)`).
3. Open your live GitHub Pages URL.
