import { Rule } from '../types.js';
import { attr, elements, parseHtml, selectorFor } from '../html.js';

export const imagesHaveAlt: Rule = {
  id: 'images-have-alt',
  description: 'Images should include alt text or an intentionally empty alt attribute.',
  severity: 'error',
  check({ html, filePath }) {
    const document = parseHtml(html);
    return elements(document)
      .filter((element) => element.name === 'img' && attr(element, 'alt') === undefined)
      .map((element) => ({
        ruleId: imagesHaveAlt.id,
        severity: imagesHaveAlt.severity,
        message: 'Image is missing an alt attribute.',
        filePath,
        selector: selectorFor(element),
        help: 'Add meaningful alt text, or use alt="" for decorative images.'
      }));
  }
};
