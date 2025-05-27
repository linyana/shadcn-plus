import { Link } from '@/pages/Components/components';

export const DropdownMenuProps = [
  {
    property: 'items',
    description: 'Menu item content.',
    type: (
      <>
        <Link>IDropdownMenuItemType</Link>[]
      </>
    ),
    default: '-',
  },
  {
    property: 'children',
    description: 'The trigger component for the dropdown menu.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Props for the dropdown menu content.',
    type: <Link>DropdownMenuContentProps</Link>,
    default: '-',
  },
];
