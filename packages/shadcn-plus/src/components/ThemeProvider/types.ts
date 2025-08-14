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
  Accordion?: IThemeComponentConfigType & {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  // Select?: IThemeComponentConfigType;
  // Card?: IThemeComponentConfigType;
  // Badge?: IThemeComponentConfigType;
  // Alert?: IThemeComponentConfigType;
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
  config?: IThemeConfigType;
}

export interface IThemeContextType {
  config: IThemeConfigType;
  getComponentTheme: (
    componentName: keyof IThemeConfigType,
  ) => IThemeComponentConfigType | undefined;
}
