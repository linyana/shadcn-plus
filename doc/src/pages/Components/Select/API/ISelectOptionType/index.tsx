import { Badge } from 'shadcn-plus';

export const ISelectOptionType = [
  {
    property: 'value',
    description: 'The unique value of the option. This is what gets passed to onValueChange when selected.',
    type: <Badge variant="secondary">string | number</Badge>,
    default: '-',
  },
  {
    property: 'label',
    description: 'The display content for the option. Can be text, JSX elements, or any React node for custom styling.',
    type: <Badge variant="secondary">React.ReactNode</Badge>,
    default: '-',
  },
  {
    property: 'disabled',
    description: 'Whether this option is disabled. Disabled options cannot be selected and are visually distinguished.',
    type: <Badge variant="secondary">boolean</Badge>,
    default: 'false',
  },
];
