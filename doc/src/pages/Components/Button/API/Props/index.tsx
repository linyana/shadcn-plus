import { Badge } from 'shadcn-plus';

export const ButtonProps = [
  {
    property: 'children?',
    description:
      'The content of the button. Can include text, icons, or other React elements.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'variant?',
    description: 'The visual style variant of the button.',
    type: (
      <>
        <Badge variant="secondary">default</Badge> {' | '}
        <Badge variant="secondary">secondary</Badge> {' | '}
        <Badge variant="secondary">outline</Badge> {' | '}
        <Badge variant="secondary">ghost</Badge> {' | '}
        <Badge variant="secondary">link</Badge> {' | '}
        <Badge variant="secondary">destructive</Badge>
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
    property: 'loading?',
    description:
      'Whether the button is in loading state. Shows a spinner and disables the button.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'disabled?',
    description:
      'Whether the button is disabled. Prevents user interaction and applies disabled styling.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'type?',
    description: 'The type attribute for the button element.',
    type: (
      <>
        <Badge variant="secondary">button</Badge> {' | '}
        <Badge variant="secondary">submit</Badge> {' | '}
        <Badge variant="secondary">reset</Badge>
      </>
    ),
    default: 'button',
  },
  {
    property: 'onClick?',
    description: 'Callback function called when the button is clicked.',
    type: '(event: MouseEvent) => void',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Custom CSS class for the button.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the button.',
    type: 'React.CSSProperties',
    default: '-',
  },
  {
    property: 'asChild?',
    description:
      'When true, the button will be rendered as its child element, passing all props to the child.',
    type: 'boolean',
    default: 'false',
  },
];
