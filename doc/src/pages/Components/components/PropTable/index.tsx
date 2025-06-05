import { Heading, Table } from 'shadcn-plus';

export const PropTable = ({
  data,
  title,
}: {
  data: {
    property: React.ReactNode;
    description: React.ReactNode;
    type: React.ReactNode;
    default: React.ReactNode;
  }[];
  title?: React.ReactNode;
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

  return (
    <div
      style={{
        marginBottom: 24,
        overflowX: 'auto',
      }}
    >
      <Heading level={5}>{title}</Heading>
      <Table columns={columns} data={data} />
    </div>
  );
};
