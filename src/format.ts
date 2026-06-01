import { CheckResult, Finding } from './types.js';

export function formatJson(result: CheckResult): string {
  return JSON.stringify(result, null, 2);
}

export function formatTable(result: CheckResult): string {
  if (result.findings.length === 0) {
    return `No accessibility findings. Files checked: ${result.filesChecked}`;
  }

  const lines = [
    `Files checked: ${result.filesChecked}`,
    `Findings: ${result.findings.length}`,
    '',
    'Severity  Rule                         File                       Message',
    '--------  ---------------------------  -------------------------  ------------------------------'
  ];

  for (const finding of result.findings) {
    lines.push(`${pad(finding.severity, 8)}  ${pad(finding.ruleId, 27)}  ${pad(finding.filePath, 25)}  ${finding.message}`);
    lines.push(`          Help: ${finding.help}${finding.selector ? ` (${finding.selector})` : ''}`);
  }

  return lines.join('\n');
}

function pad(value: string, width: number): string {
  return value.length > width ? `${value.slice(0, width - 1)}…` : value.padEnd(width, ' ');
}

export function countErrors(findings: Finding[]): number {
  return findings.filter((finding) => finding.severity === 'error').length;
}
