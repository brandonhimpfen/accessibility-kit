import { parseDocument, Element, Document } from 'htmlparser2';
import { DomUtils } from 'htmlparser2';

export function parseHtml(html: string): Document {
  return parseDocument(html, { lowerCaseAttributeNames: true, lowerCaseTags: true });
}

export function elements(document: Document): Element[] {
  return DomUtils.findAll((node): node is Element => node.type === 'tag', document.children);
}

export function attr(element: Element, name: string): string | undefined {
  return element.attribs?.[name.toLowerCase()];
}

export function hasAttr(element: Element, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(element.attribs ?? {}, name.toLowerCase());
}

export function textContent(element: Element): string {
  return DomUtils.textContent(element).trim().replace(/\s+/g, ' ');
}

export function elementName(element: Element): string {
  return element.name.toLowerCase();
}

export function selectorFor(element: Element): string {
  const id = attr(element, 'id');
  if (id) return `${element.name}#${id}`;
  const cls = attr(element, 'class');
  if (cls) return `${element.name}.${cls.split(/\s+/).filter(Boolean).slice(0, 2).join('.')}`;
  return element.name;
}
