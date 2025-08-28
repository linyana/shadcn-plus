import { Link } from '@/pages/Components/components';

export const ISelectTriggerPropsType = [
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
    property: '...triggerProps',
    description:
      'All props for the trigger element. Extends SelectTriggerProps from @radix-ui/react-select.',
    type: <Link>SelectTriggerProps</Link>,
    default: '-',
  },
];
