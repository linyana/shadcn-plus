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
    property: 'triggerProps?',
    description: 'Props for the dropdown menu trigger.',
    type: <Link>DropdownMenuTriggerProps</Link>,
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Props for the dropdown menu content.',
    type: <Link>DropdownMenuContentProps</Link>,
    default: '-',
  },
];

export const DropdownMenuTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the dropdown menu trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the dropdown menu trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const DropdownMenuContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the dropdown menu content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the dropdown menu content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
