import { Link } from '@/pages/Components/components';

export const PopoverProps = [
  {
    property: 'trigger',
    description: 'The trigger element for the popover (e.g., a button).',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'children',
    description: 'The content to display inside the popover.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'triggerProps?',
    description: 'Props to customize the Trigger component.',
    type: <Link>Trigger Props</Link>,
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Props to customize the Content component.',
    type: <Link>Content Props</Link>,
    default: '-',
  },
  {
    property: '...popoverProps',
    description:
      'Other props are the same as the base <Popover> component from @radix-ui/react-popover.',
    type: 'PopoverProps',
    default: '-',
  },
];
