export const ThemeProviderProps = [
  {
    property: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'Child components',
  },
  {
    property: 'theme',
    type: 'ThemeConfig',
    default: '{}',
    description: 'Theme configuration object containing style configurations for various components',
  },
];

export const IThemeComponentConfigTypeProps = [
  {
    property: 'style',
    type: 'React.CSSProperties',
    default: '-',
    description: 'Inline styles for the component',
  },
  {
    property: 'className',
    type: 'string',
    default: '-',
    description: 'CSS class name for the component',
  },
];

export const ThemeConfigProps = [
  {
    property: 'Button',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Button component',
  },
  {
    property: 'Input',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Input component',
  },
  {
    property: 'Select',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Select component',
  },
  {
    property: 'Card',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Card component',
  },
  {
    property: 'Badge',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Badge component',
  },
  {
    property: 'Alert',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Theme configuration for Alert component',
  },
  {
    property: '...',
    type: 'IThemeComponentConfigType',
    default: '-',
    description: 'Configuration for other supported components',
  },
];
