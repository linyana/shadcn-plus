import { Badge } from 'shadcn-plus';
import { Link } from '@/pages/Components/components';

export const SelectProps = [
  {
    property: 'options',
    description: 'Array of options to display in the dropdown. Each option should have a label and value.',
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
    type: 'string',
    default: 'undefined',
  },
  {
    property: 'value?',
    description: 'The controlled value of the select. Must be used with onValueChange.',
    type: 'string',
    default: 'undefined',
  },
  {
    property: 'defaultValue?',
    description: 'The default value of the select when uncontrolled.',
    type: 'string',
    default: 'undefined',
  },
  {
    property: 'onValueChange?',
    description: 'Callback function called when the value changes.',
    type: '(value: string) => void',
    default: 'undefined',
  },

  {
    property: 'required?',
    description: 'Whether the select is required.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'name?',
    description: 'The name attribute for form submission.',
    type: 'string',
    default: 'undefined',
  },
  {
    property: 'contentProps?',
    description: 'Props for customizing the dropdown content container.',
    type: <Link>ISelectContentPropsType</Link>,
    default: '{}',
  },
  {
    property: 'triggerProps?',
    description: 'Props for customizing the trigger button element.',
    type: <Link>ISelectTriggerPropsType</Link>,
    default: '{}',
  },
  {
    property: 'valueProps?',
    description: 'Props for customizing the value display element.',
    type: <Link>ISelectValuePropsType</Link>,
    default: '{}',
  },
];
