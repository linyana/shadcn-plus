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
    property: '...tooltipProps',
    description:
      'Other props are the same as the base <Tooltip> component from @radix-ui/react-tooltip.',
    type: 'TooltipProps',
    default: '-',
  },
];

export const TooltipTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the tooltip trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tooltip trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const TooltipContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the tooltip content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tooltip content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
