# Getting Started

Accessibility Kit is a TypeScript tool for checking common accessibility problems in HTML files and documenting ARIA interaction patterns.

## Install dependencies

```bash
npm install
```

## Build the project

```bash
npm run build
```

## Run checks

```bash
npm run dev -- check "examples/**/*.html"
```

After building, the CLI can be run from `dist`:

```bash
node dist/cli/index.js check "examples/**/*.html"
```

## Output formats

Table output is useful for humans:

```bash
a11y-kit check "public/**/*.html" --format table
```

JSON output is useful for CI systems:

```bash
a11y-kit check "public/**/*.html" --format json
```
