import { Table } from 'shadcn-plus';

export const PropTable = ({
  data,
}: {
  data: {
    property: React.ReactNode;
    description: React.ReactNode;
    type: React.ReactNode;
    default: React.ReactNode;
  }[];
}) => {
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
