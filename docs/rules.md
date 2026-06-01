# Rules

Accessibility Kit includes practical checks for common issues that are easy to miss during development.

## images-have-alt

Flags `<img>` elements that do not include an `alt` attribute.

## buttons-have-names

Flags buttons that do not have visible text, `aria-label`, `aria-labelledby`, or `title`.

## links-have-names

Flags links that do not have visible text, `aria-label`, `aria-labelledby`, or `title`.

## form-controls-have-labels

Flags inputs, selects, and textareas without a label or accessible name.

## valid-aria-roles

Flags invalid ARIA role values.

## aria-hidden-focusable

Flags focusable elements that are also hidden from assistive technology with `aria-hidden="true"`.

## heading-order

Warns when heading levels skip hierarchy, such as moving from `h1` directly to `h3`.
