import { Link } from '@/pages/Components/components';

export const ISidebarDefaultItemTypeProps = [
  {
    property: 'label',
    description: 'Text or element displayed in the menu item.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'icon?',
    description: 'Optional icon shown before the label.',
    type: 'ElementType',
    default: '-',
  },
  {
    property: 'shortcut?',
    description: 'Optional shortcut hint shown on the right.',
    type: 'string',
    default: '-',
  },
  {
    property: 'disabled?',
    description: 'Disables the menu item if true.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'children?',
    description: 'Submenu items.',
    type: (
      <>
        <Link>ISidebarItemType</Link>[]
      </>
    ),
    default: '-',
  },
  {
    property: 'key?',
    description: 'Custom key for the menu item.',
    type: 'string',
    default: '-',
  },
];
