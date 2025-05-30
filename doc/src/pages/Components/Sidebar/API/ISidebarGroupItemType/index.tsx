export const ISidebarGroupItemTypeProps = [
  {
    property: 'type',
    description: 'Specifies the item type as "group".',
    type: '"group"',
    default: '-',
  },
  {
    property: 'children',
    description: 'Nested dropdown menu items within the group.',
    type: 'ISidebarItemType[]',
    default: '-',
  },
  {
    property: 'label?',
    description: 'Optional label displayed above the group.',
    type: 'string',
    default: '-',
  },
  {
    property: 'separator?',
    description: 'Whether to show a separator after the group.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'key?',
    description: 'Custom key for the group.',
    type: 'string',
    default: '-',
  },
];
