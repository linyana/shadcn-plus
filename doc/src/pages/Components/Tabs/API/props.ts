export const TabsProps = [
  {
    property: 'items',
    type: 'ITabItemType[]',
    default: '-',
    description: 'Array of tab configurations, each item contains key, label and content',
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
    property: 'className',
    type: 'string',
    default: '-',
    description: 'Custom CSS class name',
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
];