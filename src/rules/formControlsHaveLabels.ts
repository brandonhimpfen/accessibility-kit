import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor, textContent } from '../html.js';

export const formControlsHaveLabels: Rule = {
  id: 'form-controls-have-labels',
  description: 'Form controls should have accessible labels.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    const all = elements(document);
    const labelForIds = new Set(
      all.filter((element) => element.name === 'label' && attr(element, 'for')).map((element) => attr(element, 'for') as string)
    );

    return all
      .filter((element) => ['input', 'select', 'textarea'].includes(element.name))
      .filter((element) => attr(element, 'type') !== 'hidden')
      .filter((element) => {
        const id = attr(element, 'id');
        return !attr(element, 'aria-label') && !attr(element, 'aria-labelledby') && !(id && labelForIds.has(id));
      })
      .map((element) => ({
        ruleId: formControlsHaveLabels.id,
        severity: formControlsHaveLabels.severity,
        message: 'Form control has no accessible label.',
        filePath,
        selector: selectorFor(element),
        help: 'Use a visible <label for="...">, aria-label, or aria-labelledby.'
      }));
  }
};
