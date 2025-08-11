import { Badge } from 'shadcn-plus';

export const FlexProps = [
  // Layout flexDirection
  {
    property: 'flexDirection?',
    description: 'Sets the flexDirection of the main axis.',
    type: (
      <>
        <Badge variant="secondary">row</Badge> {' | '}
        <Badge variant="secondary">row-reverse</Badge> {' | '}
        <Badge variant="secondary">column</Badge> {' | '}
        <Badge variant="secondary">column-reverse</Badge>
      </>
    ),
    default: '-',
  },

  // Alignment
  {
    property: 'justifyContent?',
    description: 'Aligns items along the main axis.',
    type: (
      <>
        <Badge variant="secondary">flex-start</Badge> {' | '}
        <Badge variant="secondary">flex-end</Badge> {' | '}
        <Badge variant="secondary">center</Badge> {' | '}
        <Badge variant="secondary">space-between</Badge> {' | '}
        <Badge variant="secondary">space-around</Badge> {' | '}
        <Badge variant="secondary">space-evenly</Badge> {' | '}
        <Badge variant="secondary">start</Badge> {' | '}
        <Badge variant="secondary">end</Badge> {' | '}
        <Badge variant="secondary">left</Badge> {' | '}
        <Badge variant="secondary">right</Badge> {' | '}
        <Badge variant="secondary">normal</Badge>
      </>
    ),
    default: "'normal'",
  },
  {
    property: 'alignItems?',
    description: 'Aligns items along the cross axis.',
    type: (
      <>
        <Badge variant="secondary">flex-start</Badge> {' | '}
        <Badge variant="secondary">flex-end</Badge> {' | '}
        <Badge variant="secondary">center</Badge> {' | '}
        <Badge variant="secondary">stretch</Badge> {' | '}
        <Badge variant="secondary">baseline</Badge> {' | '}
        <Badge variant="secondary">start</Badge> {' | '}
        <Badge variant="secondary">end</Badge> {' | '}
        <Badge variant="secondary">normal</Badge>
      </>
    ),
    default: "'normal'",
  },

  // Wrapping
  {
    property: 'wrap?',
    description: 'Controls whether items wrap to new lines.',
    type: (
      <>
        <Badge variant="secondary">wrap</Badge> {' | '}
        <Badge variant="secondary">nowrap</Badge> {' | '}
        <Badge variant="secondary">wrap-reverse</Badge>
      </>
    ),
    default: "'nowrap'",
  },

  // Spacing
  {
    property: 'gap?',
    description: 'Sets the gap between all items (both rows and columns).',
    type: 'string',
    default: '-',
  },
  {
    property: 'rowGap?',
    description: 'Sets the gap between rows when items wrap.',
    type: 'string',
    default: '-',
  },
  {
    property: 'columnGap?',
    description: 'Sets the gap between columns.',
    type: 'string',
    default: '-',
  },

  // Dimensions
  {
    property: 'width?',
    description: 'Sets the container width.',
    type: 'string',
    default: "'auto'",
  },
  {
    property: 'height?',
    description: 'Sets the container height.',
    type: 'string',
    default: "'auto'",
  },

  // Margin
  {
    property: 'margin?',
    description: 'Sets margin for all sides.',
    type: 'string',
    default: "'none'",
  },
  {
    property: 'marginTop?',
    description: 'Sets top margin.',
    type: 'string',
    default: '-',
  },
  {
    property: 'marginRight?',
    description: 'Sets right margin.',
    type: 'string',
    default: '-',
  },
  {
    property: 'marginBottom?',
    description: 'Sets bottom margin.',
    type: 'string',
    default: '-',
  },
  {
    property: 'marginLeft?',
    description: 'Sets left margin.',
    type: 'string',
    default: '-',
  },

  // Padding
  {
    property: 'padding?',
    description: 'Sets padding for all sides.',
    type: 'string',
    default: "'none'",
  },
  {
    property: 'paddingTop?',
    description: 'Sets top padding.',
    type: 'string',
    default: '-',
  },
  {
    property: 'paddingRight?',
    description: 'Sets right padding.',
    type: 'string',
    default: '-',
  },
  {
    property: 'paddingBottom?',
    description: 'Sets bottom padding.',
    type: 'string',
    default: '-',
  },
  {
    property: 'paddingLeft?',
    description: 'Sets left padding.',
    type: 'string',
    default: '-',
  },

  // Content & Events
  {
    property: 'children?',
    description: 'The content to be rendered inside the flex container.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'onClick?',
    description: 'Click event handler for the container.',
    type: 'MouseEventHandler<HTMLDivElement>',
    default: '-',
  },

  // Styling
  {
    property: 'style?',
    description: 'Additional inline styles.',
    type: 'CSSProperties',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Additional CSS class names.',
    type: 'string',
    default: "''",
  },
];
