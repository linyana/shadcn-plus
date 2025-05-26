import { Table } from 'shadcn-plus';

export const ButtonProps = () => {
  const data = [
    {
      property: 'loading?',
      description:
        'Whether the button is in loading state.',
      type: 'boolean',
      default: 'false',
    },
    {
      property: 'children?',
      description: 'The content of the button.',
      type: 'ReactNode',
      default: 'null',
    },
    {
      property: 'className?',
      description:
        'Additional CSS classes for the button.',
      type: 'string',
      default: '-',
    },
    {
      property: 'variant?',
      description:
        'The variant of the button.',
      type: `link | default | destructive | outline | secondary | ghost`,
      default: 'default',
    },
    {
      property: 'size?',
      description:
        'The size of the button.',
      type: `default | sm | lg | icon`,
      default: 'default',
    },
    {
      property: 'asChild?',
      description: 'Whether the button is rendered as a child element.',
      type: 'boolean',
      default: 'false',
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
      dataIndex: 'default'
    },
  ];

  return <Table columns={columns} data={data} />;
};
