import { Link } from '@/pages/Components/components';

export const SheetProps = [
  {
    property: 'children',
    type: 'React.ReactNode',
    description: 'The content to be displayed inside the sheet.',
    default: '-',
  },
  {
    property: 'trigger',
    type: 'React.ReactNode',
    description: 'The element that triggers the sheet to open.',
    default: '-',
  },
  {
    property: 'title?',
    type: 'React.ReactNode',
    description: 'Optional title displayed in the sheet header.',
    default: '-',
  },
  {
    property: 'description?',
    type: 'React.ReactNode',
    description: 'Optional description displayed in the sheet header.',
    default: '-',
  },
  {
    property: 'side?',
    type: '"top" | "right" | "bottom" | "left"',
    description: 'The side from which the sheet slides in.',
    default: '"right"',
  },
  {
    property: 'open?',
    type: 'boolean',
    description: 'Controls the open state of the sheet.',
    default: '-',
  },
  {
    property: 'onOpenChange?',
    type: '(open: boolean) => void',
    description: 'Callback fired when the open state changes.',
    default: '-',
  },
  {
    property: 'defaultOpen?',
    type: 'boolean',
    description: 'The default open state of the sheet.',
    default: 'false',
  },
  {
    property: 'modal?',
    type: 'boolean',
    description: 'Whether the sheet should be modal.',
    default: 'true',
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
    property: 'headerProps?',
    description: 'Props to customize the Header component.',
    type: <Link>Header Props</Link>,
    default: '-',
  },
  {
    property: 'titleProps?',
    description: 'Props to customize the Title component.',
    type: <Link>Title Props</Link>,
    default: '-',
  },
  {
    property: 'descriptionProps?',
    description: 'Props to customize the Description component.',
    type: <Link>Description Props</Link>,
    default: '-',
  },
];

export const SheetTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the sheet trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the sheet trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const SheetContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the sheet content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the sheet content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const SheetHeaderProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the sheet header.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the sheet header.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const SheetTitleProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the sheet title.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the sheet title.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const SheetDescriptionProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the sheet description.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the sheet description.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
