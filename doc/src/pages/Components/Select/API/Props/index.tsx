import { Badge } from 'shadcn-plus';
import { Link } from '@/pages/Components/components';

export const SelectProps = [
  {
    property: 'options',
    description: 'Options to display in the dropdown.',
    type: (
      <>
        <Link>ISelectOptionType</Link>[]
      </>
    ),
    default: '-',
  },
  {
    property: 'placeholder?',
    description: 'Placeholder text displayed when no value is selected.',
    type: <Badge variant="secondary">string</Badge>,
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Props for the dropdown content.',
    type: <Link>ISelectContentPropsType</Link>,
    default: '-',
  },
  {
    property: 'triggerProps?',
    description: 'Props for the trigger element.',
    type: <Link>ISelectTriggerPropsType</Link>,
    default: '-',
  },
  {
    property: 'valueProps?',
    description: 'Props for the value element.',
    type: <Link>ISelectValuePropsType</Link>,
    default: '-',
  },
  {
    property: '...selectProps',
    description: 'Other props are the same as the base <Select> component.',
    type: 'React.ComponentProps<typeof Select>',
    default: '-',
  },
];
