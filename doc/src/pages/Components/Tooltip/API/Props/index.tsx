import { Link } from '@/pages/Components/components';

export const TooltipProps = [
  {
    property: 'trigger',
    description:
      'The trigger element for the tooltip (e.g., a button or icon).',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'children',
    description: 'The content to display inside the tooltip.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'contentProps?',
    description: (
      <>
        Props for the tooltip content. Extends <Link>TooltipContentProps</Link>{' '}
        from @radix-ui/react-tooltip. Supports positioning, alignment, delay,
        and more.
      </>
    ),
    type: <Link>TooltipContentProps</Link>,
    default: '-',
  },
  {
    property: '...tooltipProps',
    description:
      'Other props are the same as the base <Tooltip> component from @radix-ui/react-tooltip.',
    type: 'TooltipProps',
    default: '-',
  },
];
