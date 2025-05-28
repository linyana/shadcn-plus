export const IDropdownMenuCheckboxItemTypeProps = [
  {
    property: 'type',
    description: 'Specifies the item type as "checkbox".',
    type: '"checkbox"',
    default: '-',
  },
  {
    property: 'label',
    description: 'Text displayed next to the checkbox.',
    type: 'string',
    default: '-',
  },
  {
    property: 'checked',
    description: 'Current checked state of the checkbox.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'onCheckedChange',
    description: 'Callback triggered when the checked state changes.',
    type: '(checked: boolean) => void',
    default: '-',
  },
  {
    property: 'disabled?',
    description: 'Disables the checkbox item if true.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'key?',
    description: 'Custom key for the item.',
    type: 'string',
    default: '-',
  },
];
