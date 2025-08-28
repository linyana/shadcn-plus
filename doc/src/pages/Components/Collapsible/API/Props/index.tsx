import { Link } from '@/pages/Components/components';
import { Badge } from 'shadcn-plus';

export const CollapsibleProps = [
  {
    property: 'children',
    description:
      'The content to be shown/hidden when the collapsible is toggled.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'trigger',
    description: 'The trigger element that controls the collapsible state.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'open?',
    description:
      'The controlled open state of the collapsible. When provided, the component becomes controlled.',
    type: 'boolean',
    default: '-',
  },
  {
    property: 'onOpenChange?',
    description:
      'Event handler called when the open state of the collapsible changes.',
    type: '(open: boolean) => void',
    default: '-',
  },
  {
    property: 'defaultOpen?',
    description:
      'The default open state when the collapsible is initially rendered. Use when you do not need to control its open state.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'disabled?',
    description:
      'When true, prevents the user from interacting with the collapsible.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'asChild?',
    description:
      'Change the default rendered element for the one passed as a child, merging their props and behavior.',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'triggerProps?',
    description: 'Props for the collapsible trigger.',
    type: <Link>CollapsibleTriggerProps</Link>,
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Props for the collapsible content.',
    type: <Link>CollapsibleContentProps</Link>,
    default: '-',
  },
];

export const CollapsibleTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the collapsible trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the collapsible trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const AccordionContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the accordion content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the accordion content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
