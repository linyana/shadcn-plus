import React from 'react';

export interface IThemeComponentConfigType {
  style?: React.CSSProperties;
  className?: string;
}

export interface IThemeConfigType {
  Button?: IThemeComponentConfigType;
  Card?: IThemeComponentConfigType & {
    Header?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
    Footer?: IThemeComponentConfigType;
  };
  Input?: IThemeComponentConfigType;
  // Select?: IThemeComponentConfigType;
  // Card?: IThemeComponentConfigType;
  // Badge?: IThemeComponentConfigType;
  // Alert?: IThemeComponentConfigType;
  // Accordion?: IThemeComponentConfigType;
  // Table?: IThemeComponentConfigType;
  // Tabs?: IThemeComponentConfigType;
  // Tooltip?: IThemeComponentConfigType;
  // Popover?: IThemeComponentConfigType;
  // Sheet?: IThemeComponentConfigType;
  // HoverCard?: IThemeComponentConfigType;
  // Collapsible?: IThemeComponentConfigType;
  // DropdownMenu?: IThemeComponentConfigType;
  // Sidebar?: IThemeComponentConfigType;
  // Flex?: IThemeComponentConfigType;
  // Typography?: IThemeComponentConfigType;
  // Separator?: IThemeComponentConfigType;
  // Skeleton?: IThemeComponentConfigType;
}

export interface IThemeProviderPropsType {
  children: React.ReactNode;
  theme?: IThemeConfigType;
}

export interface IThemeContextType {
  theme: IThemeConfigType;
  getComponentTheme: (
    componentName: keyof IThemeConfigType,
  ) => IThemeComponentConfigType | undefined;
}
