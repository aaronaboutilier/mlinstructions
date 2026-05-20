# mlinstructions

Tiny single-file landing page for CPR training.

## Project shape

- `index.html`: English landing page.
- `index.fr.html`: French landing page.
- Each page is self-contained (markup, styles, and minimal JavaScript).
- Goal: keep the pages lightweight and simple to deploy.

## Accessibility highlights

- Skip link for keyboard users.
- Clear focus-visible styles on interactive elements.
- Semantic landmarks and section labeling.
- Reduced motion support via `prefers-reduced-motion`.
- Language metadata and `hreflang` links for both pages.

## Run locally

Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.
