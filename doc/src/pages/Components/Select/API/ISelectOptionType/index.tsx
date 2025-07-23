import { Badge } from 'shadcn-plus';

export const ISelectOptionType = [
  {
    property: 'value',
    description: 'The value of the option.',
    type: <Badge variant="secondary">string | number</Badge>,
    default: '-',
  },
  {
    property: 'label',
    description: 'The display label for the option.',
    type: <Badge variant="secondary">React.ReactNode</Badge>,
    default: '-',
  },
];
