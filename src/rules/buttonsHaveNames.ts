import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor, textContent } from '../html.js';

export const buttonsHaveNames: Rule = {
  id: 'buttons-have-names',
  description: 'Buttons should have an accessible name.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    return elements(document)
      .filter((element) => element.name === 'button')
      .filter((element) => !textContent(element) && !attr(element, 'aria-label') && !attr(element, 'aria-labelledby') && !attr(element, 'title'))
      .map((element) => ({
        ruleId: buttonsHaveNames.id,
        severity: buttonsHaveNames.severity,
        message: 'Button has no accessible name.',
        filePath,
        selector: selectorFor(element),
        help: 'Add visible text, aria-label, or aria-labelledby.'
      }));
  }
};
