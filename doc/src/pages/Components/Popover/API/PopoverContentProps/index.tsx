import { Link } from '@/pages/Components/components';

export const PopoverContentProps = [
  {
    property: 'side?',
    description:
      'The side of the trigger to render against. One of top, right, bottom, left.',
    type: '"top" | "right" | "bottom" | "left"',
    default: 'bottom',
  },
  {
    property: 'align?',
    description:
      'The alignment of the popover content relative to the trigger.',
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
    property: 'collisionPadding?',
    description: 'The distance in pixels from the edge of the viewport.',
    type: 'number | Partial<{ top: number; right: number; bottom: number; left: number }>',
    default: '8',
  },
  {
    property: 'avoidCollisions?',
    description: 'Whether to avoid collisions with the viewport edges.',
    type: 'boolean',
    default: 'true',
  },
  {
    property: 'onOpenAutoFocus?',
    description: 'Callback when the popover opens and receives focus.',
    type: '() => void',
    default: '-',
  },
  {
    property: 'onCloseAutoFocus?',
    description: 'Callback when the popover closes and focus is returned.',
    type: '() => void',
    default: '-',
  },
];
