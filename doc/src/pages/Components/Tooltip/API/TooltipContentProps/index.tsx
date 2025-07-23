import { Link } from '@/pages/Components/components';

export const TooltipContentProps = [
  {
    property: 'side?',
    description:
      'The side of the trigger to render against. One of top, right, bottom, left.',
    type: '"top" | "right" | "bottom" | "left"',
    default: 'top',
  },
  {
    property: 'align?',
    description:
      'The alignment of the tooltip content relative to the trigger.',
    type: '"start" | "center" | "end"',
    default: 'center',
  },
  {
    property: 'sideOffset?',
    description: 'The distance in pixels from the trigger.',
    type: 'number',
    default: '0',
  },
  {
    property: 'delayDuration?',
    description: 'The delay in milliseconds before showing the tooltip.',
    type: 'number',
    default: '700',
  },
  {
    property: 'avoidCollisions?',
    description: 'Whether to avoid collisions with the viewport edges.',
    type: 'boolean',
    default: 'true',
  },
  {
    property: 'onOpenAutoFocus?',
    description: 'Callback when the tooltip opens and receives focus.',
    type: '() => void',
    default: '-',
  },
  {
    property: 'onCloseAutoFocus?',
    description: 'Callback when the tooltip closes and focus is returned.',
    type: '() => void',
    default: '-',
  },
];
