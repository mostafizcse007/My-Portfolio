---
trigger: always_on
---

# Portfolio Redesign Rules — `alsomostafiz.me`

1. **Design Direction — Editorial Academic Monograph / Swiss Scientific Instrument:**
   - **Light Mode (Default — Archival Paper):** `--bg: #F7F6F2`, `--surface: #FFFFFF`, `--surface-subtle: #EFECE5`, `--ink: #141413`, `--ink-secondary: #4A4945`, `--ink-muted: #5C5A55`, `--border: #DCD9CF`, `--border-strong: #C2BEB2`, `--accent: #1B4D3E`, `--accent-hover: #143B2F`, `--accent-soft: #E6F0EC`, `--accent-warm: #9A3412`, `--accent-warm-soft: #F9ECE6`.
   - **Dark Mode (Toggleable — Carbon Instrument):** `--bg: #111211`, `--surface: #171917`, `--surface-subtle: #1D201D`, `--ink: #F2F1EC`, `--ink-secondary: #B9B7AF`, `--ink-muted: #9A9890`, `--border: #2B2E2B`, `--border-strong: #3E423E`, `--accent: #6BBF9B`, `--accent-hover: #83CFAF`, `--accent-soft: #172A22`, `--accent-warm: #E38B63`, `--accent-warm-soft: #2D1C15`.
   - **Typography:** `Instrument Serif` (weight 400, `-0.02em` tracking) for display/editorial headings; `Plus Jakarta Sans` (400/500/600, `16px` base, `1.65` line height, `54ch–68ch` max prose width) for body/UI; `JetBrains Mono` (400/500, `tabular-nums`, `12px–13px`) strictly for benchmark tables, counts, and tech tags.
   - **Geometry & Contrast:** `4px` controls/tags, `8px` benchmark containers, `1px` hairlines. Enforce WCAG AAA (`>= 7:1`) contrast on solid-surface tags, pills, and buttons; never place text badges over imagery.

2. **Zero AI-Slop Ban:**
   - Never use floating code symbols, typewriter hero subtitles, percentage skill bars, emoji icons, purple-blue neon gradients, gradient text, glowing shadows, repetitive 3-column card grids, tilted offset portrait borders, or placeholder blog posts.
   - Use restrained CSS transitions (`cubic-bezier(0.22, 1, 0.36, 1)`) on `color`, `background-color`, `border-color`, `opacity`, and `transform` only, respecting `prefers-reduced-motion`.

3. **Grounded-Data-Only Policy:**
   - Never fabricate metrics, publications, experience, certifications, enrollment years, or live URLs.
   - Frame the Bangla NLP thesis explicitly as **Ongoing Undergraduate Thesis · Stages 0–6 Locked · Not Yet Published**.
   - Frame the Spatial–Frequency face classification work using its exact ongoing thesis title (*AI-Generated vs. Real Human Face Classification Using Spatial–Frequency Learning and Comparative CNN Evaluation*) with honest unpublished status (`Ongoing Research · No Public Repo`).
   - Use exact verified totals: **507 Verified Problems Solved** (283 Codeforces + 224 LeetCode), Kaggle **Notebooks Expert (2,462 / 57,080 · 5 Bronze)**, and list `Student-Management-System` accurately as **C++** in the collapsible Archive table.
   - Preserve Git history; do not `git push` or deploy without explicit user approval.
