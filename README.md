# Accessibility Kit

Accessibility Kit is a TypeScript tool for ARIA patterns, accessibility linting, and practical HTML checks.

It is designed for developers, maintainers, documentation teams, and site owners who want a lightweight way to catch common accessibility issues before publishing.

## What it does

Accessibility Kit checks HTML files for common accessibility problems, including missing image alt text, unnamed buttons, unnamed links, unlabeled form controls, invalid ARIA roles, focusable hidden elements, and skipped heading levels.

It also includes reference notes for common ARIA patterns such as disclosures, modal dialogs, and tabs.

## Installation

```bash
npm install
```

## Basic usage

Run the checker against HTML files:

```bash
npm run dev -- check "examples/**/*.html"
```

Build the project:

```bash
npm run build
```

Run the built CLI:

```bash
node dist/cli/index.js check "examples/**/*.html"
```

## CLI commands

```bash
a11y-kit check "public/**/*.html"
a11y-kit check "public/**/*.html" --format json
a11y-kit rules
a11y-kit patterns
```

## Example output

```text
Files checked: 2
Findings: 7

Severity  Rule                         File                       Message
--------  ---------------------------  -------------------------  ------------------------------
error     images-have-alt              examples/bad.html          Image is missing an alt attribute.
```

## Included rules

- `images-have-alt`
- `buttons-have-names`
- `links-have-names`
- `form-controls-have-labels`
- `valid-aria-roles`
- `aria-hidden-focusable`
- `heading-order`

## Documentation

- [Getting Started](docs/getting-started.md)
- [Rules](docs/rules.md)
- [ARIA Patterns](docs/aria-patterns.md)
- [Continuous Integration](docs/ci.md)

## Project structure

```text
src/
  cli/          Command-line interface
  patterns/     ARIA pattern references
  rules/        Accessibility rules
  checker.ts    File checking engine
  format.ts     Output formatters
examples/       Good and bad HTML examples
docs/           End-user documentation
```

## Programmatic usage

```ts
import { checkPaths } from 'accessibility-kit';

const result = await checkPaths(['public/**/*.html']);
console.log(result.findings);
```

## Accessibility note

Automated checks are helpful, but they do not replace manual testing with keyboard navigation, screen readers, browser zoom, reduced motion settings, and real users. Use this tool as an early warning system, not as the final measure of accessibility quality.

## License

MIT
