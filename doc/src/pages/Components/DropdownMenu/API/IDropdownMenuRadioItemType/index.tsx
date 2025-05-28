export const IDropdownMenuRadioItemTypeProps = [
  {
    property: 'type',
    description: 'Specifies the item type as "radioGroup".',
    type: '"radioGroup"',
    default: '-',
  },
  {
    property: 'value',
    description: 'Currently selected value in the radio group.',
    type: 'string',
    default: '-',
  },
  {
    property: 'onValueChange',
    description: 'Callback triggered when a new value is selected.',
    type: '(value: string) => void',
    default: '-',
  },
  {
    property: 'items',
    description: 'Array of radio options with label, value, and optional disabled state.',
    type: '{ label: string; value: string; disabled?: boolean; }[]',
    default: '-',
  },
  {
    property: 'key?',
    description: 'Custom key for the item.',
    type: 'string',
    default: '-',
  },
];
