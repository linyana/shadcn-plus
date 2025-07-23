import { Link } from '@/pages/Components/components';

export const ISelectContentPropsType = [
  {
    property: '...contentProps',
    description:
      'All props for the dropdown content. Extends SelectContentProps from @radix-ui/react-select.',
    type: <Link>SelectContentProps</Link>,
    default: '-',
  },
];
