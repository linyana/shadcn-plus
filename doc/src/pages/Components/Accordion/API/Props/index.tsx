import { Badge } from 'shadcn-plus';

export const AccordionProps = [
  {
    property: 'items',
    description: 'Array of accordion items to display.',
    type: 'AccordionItemData[]',
    default: '-',
  },
  {
    property: 'type',
    description: 'Determines whether one or multiple items can be opened at the same time.',
    type: (
      <>
        <Badge variant="secondary">single</Badge> {' | '}
        <Badge variant="secondary">multiple</Badge>
      </>
    ),
    default: '-',
  },
  {
    property: 'collapsible?',
    description: 'When type is "single", allows closing content when clicking trigger of an open item.',
    type: 'boolean',
    default: 'true',
  },
  {
    property: 'defaultValue?',
    description: 'The value of the item to expand when initially rendered. Use when you do not need to control the state.',
    type: 'string | string[]',
    default: '-',
  },
  {
    property: 'value?',
    description: 'The controlled value of the item to expand. Should be used in conjunction with onValueChange.',
    type: 'string | string[]',
    default: '-',
  },
  {
    property: 'onValueChange?',
    description: 'Event handler called when the expanded state of an item changes.',
    type: '(value: string | string[]) => void',
    default: '-',
  },
  {
    property: 'disabled?',
    description: 'When true, prevents the user from interacting with the accordion.',
    type: 'boolean',
    default: 'false',
  },
];

export const AccordionItemDataProps = [
  {
    property: 'key?',
    description: 'Unique identifier for the accordion item. If not provided, a random key will be generated.',
    type: 'string',
    default: 'nanoid()',
  },
  {
    property: 'trigger',
    description: 'The trigger content that toggles the accordion item.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'content',
    description: 'The content to display when the accordion item is expanded.',
    type: 'ReactNode',
    default: '-',
  },
];