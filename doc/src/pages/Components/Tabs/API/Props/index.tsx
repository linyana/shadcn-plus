import { Link } from '@/pages/Components/components';

export const TabsProps = [
  {
    property: 'items',
    type: 'ITabItemType[]',
    default: '-',
    description:
      'Array of tab configurations, each item contains key, label and content',
  },
  {
    property: 'defaultValue',
    type: 'string',
    default: 'Key of the first tab',
    description: 'Default active tab',
  },
  {
    property: 'value',
    type: 'string',
    default: '-',
    description: 'Current active tab in controlled mode',
  },
  {
    property: 'onValueChange',
    type: '(value: string) => void',
    default: '-',
    description: 'Callback function when tab changes',
  },
  {
    property: 'className?',
    description: 'Custom CSS class for the tabs container.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tabs container.',
    type: 'React.CSSProperties',
    default: '-',
  },
  {
    property: 'listProps?',
    description: 'Props to customize the List component.',
    type: <Link>List Props</Link>,
    default: '-',
  },
];

export const TabItemProps = [
  {
    property: 'key',
    type: 'string',
    default: 'Auto-generated',
    description: 'Unique identifier for the tab',
  },
  {
    property: 'label',
    type: 'React.ReactNode',
    default: '-',
    description: 'Tab title content, supports text, icons, etc.',
  },
  {
    property: 'content',
    type: 'React.ReactNode',
    default: '-',
    description: 'Tab content area',
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

export const TabsListProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the tabs list.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tabs list.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const TabsTriggerProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the tabs trigger.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tabs trigger.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const TabsContentProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the tabs content.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the tabs content.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
