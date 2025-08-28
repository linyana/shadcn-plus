import type { TabsProps } from '@radix-ui/react-tabs';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export type ITabItemType = {
  key?: string;
  label: React.ReactNode;
  content: React.ReactNode;
  triggerProps?: React.ForwardRefExoticComponent<
    Omit<
      TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>,
      'ref'
    > &
      React.RefAttributes<HTMLButtonElement>
  > & {
    style?: React.CSSProperties;
    className?: string;
  };
  contentProps?: React.ForwardRefExoticComponent<
    Omit<
      TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>,
      'ref'
    > &
      React.RefAttributes<HTMLDivElement>
  > & {
    style?: React.CSSProperties;
    className?: string;
  };
};

export type ITabsListProps = React.ForwardRefExoticComponent<
  Omit<
    TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>,
    'ref'
  > &
    React.RefAttributes<HTMLDivElement>
> & {
  style?: React.CSSProperties;
  className?: string;
};

export type ITabsProps = TabsProps & {
  items: ITabItemType[];
  listProps: ITabsListProps;
};
