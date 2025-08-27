import { Link } from '@/pages/Components/components';

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
    description:
      'The description content of the card, displayed below the header.',
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
    type: <Link>CardContentProps</Link>,
    default: '-',
  },
  {
    property: 'headerProps?',
    description: 'Additional props passed to the card header container.',
    type: <Link>CardHeaderProps</Link>,
    default: '-',
  },
  {
    property: 'footerProps?',
    description: 'Additional props passed to the card footer container.',
    type: <Link>CardFooterProps</Link>,
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

export const CardContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the card content container.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the card content container.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const CardHeaderProps = [
  {
    property: 'title?',
    description: 'The card header title.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'description?',
    description: 'The card header description, displayed below the title.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'titleProps?',
    description: 'Additional props passed to the title container.',
    type: 'React.ComponentProps<"div">',
    default: '-',
  },
  {
    property: 'descriptionProps?',
    description: 'Additional props passed to the description container.',
    type: 'React.ComponentProps<"div">',
    default: '-',
  },
  {
    property: 'className?',
    description: 'Custom CSS class for the card header container.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the card header container.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const CardFooterProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the card footer container.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the card footer container.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
