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
    property: 'contentProps?',
    description: (
      <>
        Props for the popover content. Extends <Link>PopoverContentProps</Link>{' '}
        from @radix-ui/react-popover. Supports positioning, alignment, collision
        handling, and more.
      </>
    ),
    type: <Link>PopoverContentProps</Link>,
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
