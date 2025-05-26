import { Table } from "shadcn-plus";

export const ButtonProps = () => {
  const data = [
    {
      property: 'loading',
      description: 'Whether the button is in loading state.',
      type: 'boolean',
      default: 'false',
    },
    {
      property: 'children',
      description: 'The content of the button.',
      type: 'ReactNode',
      default: 'null',
    },
  ]

  const columns = [
    { title: 'Property', dataIndex: 'property' },
    { title: 'Description', dataIndex: 'description' },
    { title: 'Type', dataIndex: 'type' },
    { title: 'Default', dataIndex: 'default' },
  ];

  return (
    <Table columns={columns} data={data} />
  )
}