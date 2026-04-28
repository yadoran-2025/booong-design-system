# BOOONG Design System

Shared BOOONG design tokens, base styles, and legacy-compatible UI components.

## Install

```bash
npm install @booong/design-system
```

```js
import "@booong/design-system/dist/booong.css";
```

For static HTML projects, use the versioned GitHub Pages CSS after publishing:

```html
<link rel="stylesheet" href="https://yadoran-2025.github.io/booong-design-system/releases/v1.0.0/booong.css">
```

## Local Build

```bash
npm run build
```

The build writes:

- `dist/booong.css` for npm consumers
- `docs/releases/v1.0.0/booong.css` for GitHub Pages consumers

## Compatibility

Version 1 keeps the existing BOOONG token and class names stable so current projects can migrate by changing stylesheet links only.
