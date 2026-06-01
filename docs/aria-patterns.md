# ARIA Patterns

Accessibility Kit includes reference notes for common ARIA patterns. These notes are intended to help developers implement predictable keyboard and screen reader behavior.

## Disclosure

Use a native button for the trigger. Add `aria-expanded` to communicate state. Use `aria-controls` when the relationship between the trigger and controlled region is not obvious.

Keyboard behavior:

- Enter toggles the disclosure.
- Space toggles the disclosure.
- Focus remains on the trigger.

## Modal Dialog

Use `role="dialog"` or `role="alertdialog"` only when the component behaves like a true modal experience.

Expected behavior:

- Move focus into the dialog when it opens.
- Keep keyboard focus inside the dialog while it is open.
- Return focus to the trigger when it closes.
- Provide an accessible name with visible heading text, `aria-labelledby`, or `aria-label`.

## Tabs

Use `tablist`, `tab`, and `tabpanel` roles when building custom tab interfaces.

Expected behavior:

- Arrow keys move between tabs.
- `aria-selected` identifies the active tab.
- Each tab should connect to its panel.
