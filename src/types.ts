export type Severity = 'error' | 'warning' | 'info';

export interface Finding {
  ruleId: string;
  severity: Severity;
  message: string;
  filePath: string;
  selector?: string;
  help: string;
}

export interface RuleContext {
  filePath: string;
  html: string;
}

export interface Rule {
  id: string;
  description: string;
  severity: Severity;
  check(context: RuleContext): Finding[];
}

export interface CheckOptions {
  include?: string[];
  exclude?: string[];
  rules?: string[];
}

export interface CheckResult {
  findings: Finding[];
  filesChecked: number;
}
