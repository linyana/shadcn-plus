import { Badge } from 'shadcn-plus';

export const ButtonProps = [
  {
    property: 'loading?',
    description: 'Whether the button is in loading state.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'children?',
    description: 'The content of the button.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Additional CSS classes for the button.',
    type: 'string',
    default: '-',
  },
  {
    property: 'variant?',
    description: 'The variant of the button.',
    type: (
      <>
        <Badge variant="secondary">default</Badge> {' | '}
        <Badge variant="secondary">link</Badge> {' | '}
        <Badge variant="secondary">destructive</Badge> {' | '}
        <Badge variant="secondary">outline</Badge> {' | '}
        <Badge variant="secondary">secondary</Badge> {' | '}
        <Badge variant="secondary">ghost</Badge>
      </>
    ),
    default: 'default',
  },
  {
    property: 'size?',
    description: 'The size of the button.',
    type: (
      <>
        <Badge variant="secondary">default</Badge> {' | '}
        <Badge variant="secondary">sm</Badge> {' | '}
        <Badge variant="secondary">lg</Badge> {' | '}
        <Badge variant="secondary">icon</Badge>
      </>
    ),
    default: 'default',
  },
  {
    property: 'asChild?',
    description: 'Whether the button is rendered as a child element.',
    type: 'boolean',
    default: 'false',
  },
];
