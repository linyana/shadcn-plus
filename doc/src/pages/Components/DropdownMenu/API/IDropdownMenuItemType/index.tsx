import { Link } from '@/pages/Components/components';

export const IDropdownMenuItemTypeProps = [
  {
    property: 'items',
    description: 'Dropdown Menu item type.',
    type: (
      <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
        <Link>IDropdownMenuDefaultItemType</Link> {' | '}
        <Link>IDropdownMenuCustomItemType</Link> {' | '}
        <Link>IDropdownMenuCheckboxItemType</Link> {' | '}
        <Link>IDropdownMenuRadioItemType</Link> {' | '}
        <Link>IDropdownMenuGroupItemType</Link>
      </div>
    ),
    default: '-',
  },
];
