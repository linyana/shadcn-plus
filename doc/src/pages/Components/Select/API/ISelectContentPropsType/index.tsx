import { Link } from '@/pages/Components/components';

export const ISelectContentPropsType = [
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
  {
    property: '...contentProps',
    description:
      'All props for the dropdown content. Extends SelectContentProps from @radix-ui/react-select.',
    type: <Link>SelectContentProps</Link>,
    default: '-',
  },
];
