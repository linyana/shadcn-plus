import { Badge } from 'shadcn-plus';

export const CardProps = [
  {
    property: 'children',
    description: 'The main content of the card.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'header?',
    description: 'The header content of the card, displayed as the card title.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'description?',
    description: 'The description content of the card, displayed below the header.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'footer?',
    description: 'The footer content of the card, displayed at the bottom.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Additional props passed to the card content container.',
    type: 'React.ComponentProps<"div">',
    default: '-',
  },
  {
    property: 'headerProps?',
    description: 'Additional props passed to the card header container.',
    type: 'React.ComponentProps<"div">',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Additional CSS classes for the card.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the card.',
    type: 'React.CSSProperties',
    default: '-',
  },
];