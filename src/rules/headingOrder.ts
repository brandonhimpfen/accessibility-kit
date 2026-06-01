import { Rule } from '../types.js';
import { elements, parseHtml, selectorFor, textContent } from '../html.js';

export const headingOrder: Rule = {
  id: 'heading-order',
  description: 'Heading levels should not skip levels.',
  severity: 'warning',
  check({ html, filePath }) {
    const document = parseHtml(html);
    const findings = [];
    let previousLevel = 0;

    for (const element of elements(document).filter((node) => /^h[1-6]$/.test(node.name))) {
      const level = Number(element.name.slice(1));
      if (previousLevel > 0 && level > previousLevel + 1) {
        findings.push({
          ruleId: headingOrder.id,
          severity: headingOrder.severity,
          message: `Heading jumps from h${previousLevel} to h${level}.`,
          filePath,
          selector: selectorFor(element),
          help: `Use the next logical heading level before "${textContent(element) || element.name}".`
        });
      }
      previousLevel = level;
    }

    return findings;
  }
};
