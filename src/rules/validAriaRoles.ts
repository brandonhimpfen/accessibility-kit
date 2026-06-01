import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor } from '../html.js';

const validRoles = new Set([
  'alert', 'alertdialog', 'application', 'article', 'banner', 'button', 'cell', 'checkbox', 'columnheader',
  'combobox', 'complementary', 'contentinfo', 'definition', 'dialog', 'directory', 'document', 'feed', 'figure',
  'form', 'grid', 'gridcell', 'group', 'heading', 'img', 'link', 'list', 'listbox', 'listitem', 'log', 'main',
  'marquee', 'math', 'menu', 'menubar', 'menuitem', 'menuitemcheckbox', 'menuitemradio', 'navigation', 'none',
  'note', 'option', 'presentation', 'progressbar', 'radio', 'radiogroup', 'region', 'row', 'rowgroup', 'rowheader',
  'scrollbar', 'search', 'searchbox', 'separator', 'slider', 'spinbutton', 'status', 'switch', 'tab', 'table',
  'tablist', 'tabpanel', 'term', 'textbox', 'timer', 'toolbar', 'tooltip', 'tree', 'treegrid', 'treeitem'
]);

export const validAriaRoles: Rule = {
  id: 'valid-aria-roles',
  description: 'ARIA role values should be valid.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    return elements(document)
      .filter((element) => {
        const role = attr(element, 'role');
        return Boolean(role && !validRoles.has(role));
      })
      .map((element) => ({
        ruleId: validAriaRoles.id,
        severity: validAriaRoles.severity,
        message: `Invalid ARIA role: "${attr(element, 'role')}".`,
        filePath,
        selector: selectorFor(element),
        help: 'Use a valid ARIA role or remove the role if native HTML already provides the correct semantics.'
      }));
  }
};
