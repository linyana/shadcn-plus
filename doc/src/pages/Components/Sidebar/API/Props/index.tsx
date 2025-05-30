import { Link } from '@/pages/Components/components';

export const SidebarProps = [
  {
    property: 'items',
    description: 'Menu item content.',
    type: (
      <>
        <Link>ISidebarItemType</Link>[]
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
    type: <Link>SidebarContentProps</Link>,
    default: '-',
  },
];
