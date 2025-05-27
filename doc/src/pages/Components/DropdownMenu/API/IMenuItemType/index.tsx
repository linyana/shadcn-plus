import { Link } from '@/pages/Components/components';
import { Table } from 'shadcn-plus';

export const IMenuItemTypeProps = () => {
  const data = [
    {
      property: 'items',
      description: 'Menu item content.',
      type: (
        <>
          <Link>IMenuItemType</Link>[]
        </>
      ),
      default: '-',
    },
    {
      property: 'children',
      description: 'The trigger component for the dropdown menu.',
      type: 'ReactNode',
      default: 'null',
    },
    {
      property: 'contentProps?',
      description: 'Props for the dropdown menu content.',
      type: <Link>DropdownMenuContentProps</Link>,
      default: '-',
    },
  ];

  const columns = [
    { title: 'Property', dataIndex: 'property' },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: '200px',
    },
    {
      title: 'Default',
      dataIndex: 'default',
    },
  ];

  return <Table columns={columns} data={data} />;
};
