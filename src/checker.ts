import fs from 'node:fs/promises';
import fg from 'fast-glob';
import { CheckOptions, CheckResult } from './types.js';
import { getRules } from './rules/index.js';

export async function checkPaths(paths: string[], options: CheckOptions = {}): Promise<CheckResult> {
  const include = options.include ?? ['**/*.{html,htm}'];
  const exclude = options.exclude ?? ['node_modules/**', 'dist/**', '.git/**'];
  const entries = await fg(paths.length ? paths : include, {
    ignore: exclude,
    onlyFiles: true,
    unique: true
  });

  const rules = getRules(options.rules);
  const findings = [];

  for (const filePath of entries) {
    const html = await fs.readFile(filePath, 'utf8');
    for (const rule of rules) {
      findings.push(...rule.check({ filePath, html }));
    }
  }

  return { findings, filesChecked: entries.length };
}
