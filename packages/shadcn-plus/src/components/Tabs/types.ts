import type { TabsProps } from "@radix-ui/react-tabs";

export type ITabItemType = {
  key?: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type ITabsProps = TabsProps & {
  items: ITabItemType[];
};
