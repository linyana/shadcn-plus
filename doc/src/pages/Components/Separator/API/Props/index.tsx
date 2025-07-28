import { Badge } from 'shadcn-plus';

export const SeparatorProps = [
  {
    property: 'orientation?',
    description: 'The orientation of the separator.',
    type: (
      <>
        <Badge variant="secondary">horizontal</Badge> {' | '}
        <Badge variant="secondary">vertical</Badge>
      </>
    ),
    default: 'horizontal',
  },
  {
    property: 'decorative?',
    description: 'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.',
    type: 'boolean',
    default: 'true',
  },
  {
    property: 'className?',
    description: 'Additional CSS class names to apply to the separator.',
    type: 'string',
    default: '-',
  },
];