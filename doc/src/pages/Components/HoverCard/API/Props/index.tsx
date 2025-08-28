import { Link } from '@/pages/Components/components';
import { Badge } from 'shadcn-plus';

export const HoverCardProps = [
  {
    property: 'children',
    description: 'The content to display inside the hover card.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'trigger',
    description: 'The element that triggers the hover card when hovered.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'open?',
    description: 'The controlled open state of the hover card.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'defaultOpen?',
    description:
      'The open state of the hover card when it is initially rendered.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'onOpenChange?',
    description:
      'Event handler called when the open state of the hover card changes.',
    type: '(open: boolean) => void',
    default: '-',
  },
  {
    property: 'openDelay?',
    description:
      'The duration from when the mouse enters the trigger until the hover card opens.',
    type: 'number',
    default: '700',
  },
  {
    property: 'closeDelay?',
    description:
      'The duration from when the mouse leaves the trigger until the hover card closes.',
    type: 'number',
    default: '300',
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
];

export const HoverCardTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the hover card trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the hover card trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const HoverCardContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the hover card content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the hover card content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
