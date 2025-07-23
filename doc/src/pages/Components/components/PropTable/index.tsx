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
    {
      title: 'Property',
      dataIndex: 'property',
      width: '20%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '45%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: '20%',
    },
    {
      title: 'Default',
      dataIndex: 'default',
      width: '15%',
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
