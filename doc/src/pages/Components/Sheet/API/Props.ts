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
    property: 'contentProps?',
    type: 'DialogContentProps',
    description: 'Additional props to pass to the sheet content.',
    default: '-',
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
];