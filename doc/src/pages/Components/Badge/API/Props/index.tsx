import { Badge } from 'shadcn-plus';

export const BadgeProps = [
  {
    property: 'children',
    description: 'The content of the badge (text or element).',
    type: 'React.ReactNode',
    default: '-',
  },
  {
    property: 'variant?',
    description: 'Visual style of the badge.',
    type: (
      <>
        <Badge variant="secondary">default</Badge> {' | '}
        <Badge variant="secondary">secondary</Badge> {' | '}
        <Badge variant="secondary">destructive</Badge> {' | '}
        <Badge variant="secondary">outline</Badge>
      </>
    ),
    default: <Badge variant="secondary">default</Badge>,
  },
  {
    property: 'asChild?',
    description:
      'If true, renders the badge as a child element using Radix Slot.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'className?',
    description: 'Custom CSS class for the badge.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the badge.',
    type: 'React.CSSProperties',
    default: '-',
  },
  {
    property: '...spanProps',
    description: 'All other valid props for a native <span> element.',
    type: 'React.ComponentProps<"span">',
    default: '-',
  },
];
