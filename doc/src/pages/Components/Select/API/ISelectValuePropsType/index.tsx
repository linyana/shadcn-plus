import { Link } from '@/pages/Components/components';

export const ISelectValuePropsType = [
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
    property: '...valueProps',
    description:
      'All props for the trigger element. Extends SelectValueProps from @radix-ui/react-select.',
    type: <Link>SelectValueProps</Link>,
    default: '-',
  },
];
