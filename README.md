# Medical Bacteriology Diagnostic Navigator (Murray 10th Ed. — v2.0)

An interactive, zero-dependency, static HTML/JS diagnostic filter and clinical study reference covering **all 18 bacteriology chapters (Chapters 17–34)** and **105 clinically significant bacteria** from *Murray's Medical Microbiology* (10th Edition).

## What's New in v2.0
- **Complete 18-Chapter Database (105 Organisms):** Full coverage of Chapters 17–34 with zero tag contradictions, zero raw LaTeX/citation artifacts, and 100% unique terminal filter paths.
- **100% Filter Utilization (227 Active Options):** Zero dead filters across all 10 diagnostic categories, including disambiguating criteria for MAC vs. TB, *Ehrlichia* vs. *Anaplasma*, *Bacteroides* vs. *Prevotella*, *Aggregatibacter* (HACEK), and *Bacillus anthracis* mediastinal widening.
- **Upgraded Search & Navigation (`index.html`):**
  - Full-text HTML-stripped search across all 6 teaching sections, trigger words, tags, and chapter titles (press `/` to focus, `Esc` to close profile).
  - Deterministic chapter-order loading + Chapter Scope dropdown + A–Z sort toggle.
  - Sticky scrollable sidebar with filter-pill search, **Hide 0-match options** toggle, and Expand/Collapse All controls.
  - Clickable diagnostic path pills inside each organism profile for instant cross-comparison.
  - Built-in **Quiz Mode** toggle (hides organism names on cards for active recall).

## Quick GitHub Pages Setup
1. Upload `index.html`, `README.md`, and the entire `data/` folder to your GitHub repository root.
2. In GitHub, go to **Settings → Pages → Build and deployment → Source: Deploy from a branch** (`main`, `/ (root)`).
3. Open your live GitHub Pages URL (or open `index.html` locally via any local web server).
