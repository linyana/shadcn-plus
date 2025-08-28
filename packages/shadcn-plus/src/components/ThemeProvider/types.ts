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
  DropdownMenu?: IThemeComponentConfigType & {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Flex?: IThemeComponentConfigType;
  HoverCard?: {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Input?: IThemeComponentConfigType;
  Popover?: {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Select?: {
    Value?: IThemeComponentConfigType;
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  Separator?: IThemeComponentConfigType;
  Sheet?: {
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType & {
      Header?: IThemeComponentConfigType & {
        Title?: IThemeComponentConfigType;
        Description?: IThemeComponentConfigType;
      };
    };
  };
  Skeleton?: IThemeComponentConfigType;
  Tabs?: IThemeComponentConfigType & {
    List?: IThemeComponentConfigType;
    Trigger?: IThemeComponentConfigType;
    Content?: IThemeComponentConfigType;
  };
  // Table?: IThemeComponentConfigType;
  // Tooltip?: IThemeComponentConfigType;
  // Sidebar?: IThemeComponentConfigType;
  // Typography?: IThemeComponentConfigType;
}

export interface IThemeProviderPropsType {
  children: React.ReactNode;
  config?: IThemeConfigType;
}

export interface IThemeContextType {
  config: IThemeConfigType;
  getComponentTheme: <T extends keyof IThemeConfigType>(
    componentName: T,
  ) => IThemeConfigType[T] | undefined;
}
