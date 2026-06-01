import { Rule } from '../types.js';
import { ariaHiddenFocusable } from './ariaHiddenFocusable.js';
import { buttonsHaveNames } from './buttonsHaveNames.js';
import { formControlsHaveLabels } from './formControlsHaveLabels.js';
import { headingOrder } from './headingOrder.js';
import { imagesHaveAlt } from './imagesHaveAlt.js';
import { linksHaveNames } from './linksHaveNames.js';
import { validAriaRoles } from './validAriaRoles.js';

export const rules: Rule[] = [
  imagesHaveAlt,
  buttonsHaveNames,
  linksHaveNames,
  formControlsHaveLabels,
  validAriaRoles,
  ariaHiddenFocusable,
  headingOrder
];

export function getRules(ruleIds?: string[]): Rule[] {
  if (!ruleIds || ruleIds.length === 0) return rules;
  const requested = new Set(ruleIds);
  return rules.filter((rule) => requested.has(rule.id));
}
