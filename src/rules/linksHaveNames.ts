import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor, textContent } from '../html.js';

export const linksHaveNames: Rule = {
  id: 'links-have-names',
  description: 'Links should have an accessible name.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    return elements(document)
      .filter((element) => element.name === 'a' && attr(element, 'href') !== undefined)
      .filter((element) => !textContent(element) && !attr(element, 'aria-label') && !attr(element, 'aria-labelledby') && !attr(element, 'title'))
      .map((element) => ({
        ruleId: linksHaveNames.id,
        severity: linksHaveNames.severity,
        message: 'Link has no accessible name.',
        filePath,
        selector: selectorFor(element),
        help: 'Add descriptive link text, aria-label, or aria-labelledby.'
      }));
  }
};
