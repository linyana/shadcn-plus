import { Badge } from 'shadcn-plus';

export const FlexProps = [
  {
    property: 'justifyContent?',
    description: 'Aligns items on the main axis.',
    type: (
      <>
        <Badge variant="secondary">space-between</Badge> {' | '}
        <Badge variant="secondary">space-around</Badge> {' | '}
        <Badge variant="secondary">center</Badge> {' | '}
        <Badge variant="secondary">normal</Badge> {' | '}
        <Badge variant="secondary">flex-start</Badge> {' | '}
        <Badge variant="secondary">flex-end</Badge>
      </>
    ),
    default: 'false',
  },
  {
    property: 'alignItems?',
    description: 'Aligns items on the cross axis.',
    type: (
      <>
        <Badge variant="secondary">center</Badge> {' | '}
        <Badge variant="secondary">start</Badge> {' | '}
        <Badge variant="secondary">end</Badge> {' | '}
        <Badge variant="secondary">normal</Badge> {' | '}
        <Badge variant="secondary">stretch</Badge> {' | '}
        <Badge variant="secondary">flex-start</Badge>
      </>
    ),
    default: 'false',
  },
  {
    property: 'flexWrap?',
    description: 'Controls item wrapping.',
    type: (
      <>
        <Badge variant="secondary">wrap</Badge> {' | '}
        <Badge variant="secondary">nowrap</Badge> {' | '}
        <Badge variant="secondary">wrap-reverse</Badge>
      </>
    ),
    default: '-',
  },
  {
    property: 'gap?',
    description: 'Gap between items.',
    type: 'string',
    default: '-',
  },
  {
    property: 'children?',
    description: 'Flex content.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'onClick?',
    description: 'Click event handler.',
    type: 'MouseEventHandler<HTMLDivElement>',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles.',
    type: 'CSSProperties',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Custom class name.',
    type: 'string',
    default: '-',
  },
  {
    property: 'width?',
    description: 'Container width.',
    type: 'string',
    default: '-',
  },
  {
    property: 'height?',
    description: 'Container height.',
    type: 'string',
    default: '-',
  },
  {
    property: 'padding?',
    description: 'Inner spacing.',
    type: 'string',
    default: '-',
  },
  {
    property: 'margin?',
    description: 'Outer spacing.',
    type: 'string',
    default: '-',
  },
  {
    property: 'marginTop?',
    description: 'Top margin.',
    type: 'string',
    default: '-',
  },
  {
    property: 'marginBottom?',
    description: 'Bottom margin.',
    type: 'string',
    default: '-',
  },
];
