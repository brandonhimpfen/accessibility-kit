#!/usr/bin/env node
import { Command } from 'commander';
import { checkPaths } from '../checker.js';
import { formatJson, formatTable, countErrors } from '../format.js';
import { patterns } from '../patterns/index.js';
import { rules } from '../rules/index.js';

const program = new Command();

program
  .name('a11y-kit')
  .description('ARIA patterns, linters, and accessibility checks for HTML projects')
  .version('1.0.0');

program
  .command('check')
  .description('Run accessibility checks against HTML files')
  .argument('[paths...]', 'Files or glob patterns to check')
  .option('-f, --format <format>', 'Output format: table or json', 'table')
  .option('-r, --rules <rules>', 'Comma-separated rule IDs to run')
  .action(async (paths: string[], options: { format: string; rules?: string }) => {
    const result = await checkPaths(paths, {
      rules: options.rules?.split(',').map((rule) => rule.trim()).filter(Boolean)
    });
    const output = options.format === 'json' ? formatJson(result) : formatTable(result);
    console.log(output);
    process.exitCode = countErrors(result.findings) > 0 ? 1 : 0;
  });

program
  .command('rules')
  .description('List available accessibility rules')
  .action(() => {
    for (const rule of rules) {
      console.log(`${rule.id}\n  Severity: ${rule.severity}\n  ${rule.description}\n`);
    }
  });

program
  .command('patterns')
  .description('List included ARIA pattern notes')
  .action(() => {
    for (const pattern of patterns) {
      console.log(`${pattern.name}\n  ${pattern.description}\n  Roles: ${pattern.roles.join(', ')}\n`);
    }
  });

program.parse();
