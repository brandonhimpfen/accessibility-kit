import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor } from '../html.js';

function isFocusable(elementName: string, tabindex?: string, href?: string): boolean {
  if (tabindex && tabindex !== '-1') return true;
  if (['button', 'input', 'select', 'textarea'].includes(elementName)) return true;
  if (elementName === 'a' && href) return true;
  return false;
}

export const ariaHiddenFocusable: Rule = {
  id: 'aria-hidden-focusable',
  description: 'Focusable elements should not be hidden from assistive technology.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    return elements(document)
      .filter((element) => attr(element, 'aria-hidden') === 'true')
      .filter((element) => isFocusable(element.name, attr(element, 'tabindex'), attr(element, 'href')))
      .map((element) => ({
        ruleId: ariaHiddenFocusable.id,
        severity: ariaHiddenFocusable.severity,
        message: 'Focusable element uses aria-hidden="true".',
        filePath,
        selector: selectorFor(element),
        help: 'Remove aria-hidden, remove focusability, or hide the element completely with inert/hidden when appropriate.'
      }));
  }
};
