export const IDropdownMenuCustomItemTypeProps = [
  {
    property: 'type',
    description: 'Specifies the item type as "custom".',
    type: '"custom"',
    default: '-',
  },
  {
    property: 'render',
    description: 'Function that returns a custom React node to render.',
    type: '() => ReactNode',
    default: '-',
  },
  {
    property: 'key?',
    description: 'Custom key for the item.',
    type: 'string',
    default: '-',
  },
];
