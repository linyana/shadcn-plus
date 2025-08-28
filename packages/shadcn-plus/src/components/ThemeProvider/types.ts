import React from 'react';

export interface IThemeComponentConfigType {
  style?: React.CSSProperties;
  className?: string;
}

export interface IThemeConfigType {
  Alert?: IThemeComponentConfigType & {
    Icon?: IThemeComponentConfigType;
    Header?: IThemeComponentConfigType;
    Description?: IThemeComponentConfigType;
  };
  Accordion?: IThemeComponentConfigType & {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Badge?: IThemeComponentConfigType;
  Button?: IThemeComponentConfigType;
  Card?: IThemeComponentConfigType & {
    Header?: IThemeComponentConfigType & {
      Title?: IThemeComponentConfigType;
      Description?: IThemeComponentConfigType;
    };
    Content?: IThemeComponentConfigType;
    Footer?: IThemeComponentConfigType;
  };
  Collapsible?: IThemeComponentConfigType & {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Input?: IThemeComponentConfigType;
  // Select?: IThemeComponentConfigType;
  // Table?: IThemeComponentConfigType;
  // Tabs?: IThemeComponentConfigType;
  // Tooltip?: IThemeComponentConfigType;
  // Popover?: IThemeComponentConfigType;
  // Sheet?: IThemeComponentConfigType;
  // HoverCard?: IThemeComponentConfigType;
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
