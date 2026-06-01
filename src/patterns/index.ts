export interface AriaPattern {
  name: string;
  description: string;
  roles: string[];
  keyboard: string[];
  notes: string[];
}

export const patterns: AriaPattern[] = [
  {
    name: 'Disclosure',
    description: 'A control that shows and hides a related section of content.',
    roles: ['button'],
    keyboard: ['Enter or Space toggles the disclosure.', 'Focus remains on the disclosure button.'],
    notes: ['Use aria-expanded on the button.', 'Use aria-controls when the relationship is not obvious.']
  },
  {
    name: 'Modal Dialog',
    description: 'A window over the page that requires user interaction before returning to the page.',
    roles: ['dialog', 'alertdialog'],
    keyboard: ['Escape closes the dialog when safe.', 'Tab and Shift+Tab stay within the dialog.'],
    notes: ['Move focus into the dialog on open.', 'Return focus to the trigger on close.', 'Provide an accessible name.']
  },
  {
    name: 'Tabs',
    description: 'A set of layered content panels where one panel is shown at a time.',
    roles: ['tablist', 'tab', 'tabpanel'],
    keyboard: ['Left and Right arrows move between horizontal tabs.', 'Home and End move to first and last tab.'],
    notes: ['Use aria-selected on active tab.', 'Connect tabs and panels with aria-controls and aria-labelledby.']
  }
];

export function findPattern(name: string): AriaPattern | undefined {
  return patterns.find((pattern) => pattern.name.toLowerCase() === name.toLowerCase());
}
