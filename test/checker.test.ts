import { describe, expect, it } from 'vitest';
import { checkPaths } from '../src/checker.js';

describe('checkPaths', () => {
  it('finds accessibility issues in the bad example', async () => {
    const result = await checkPaths(['examples/bad.html']);
    expect(result.filesChecked).toBe(1);
    expect(result.findings.length).toBeGreaterThan(0);
    expect(result.findings.some((finding) => finding.ruleId === 'images-have-alt')).toBe(true);
  });

  it('does not report errors for the good example', async () => {
    const result = await checkPaths(['examples/good.html']);
    expect(result.findings.filter((finding) => finding.severity === 'error')).toHaveLength(0);
  });
});
