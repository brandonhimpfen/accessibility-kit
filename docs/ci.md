# Continuous Integration

Accessibility Kit can be used in CI to prevent common accessibility regressions.

Example GitHub Actions workflow:

```yaml
name: Accessibility checks

on:
  pull_request:
  push:
    branches: [main]

jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: node dist/cli/index.js check "public/**/*.html" --format table
```

The command exits with a non-zero status when error-level findings are present.
