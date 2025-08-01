import { ISidebarItemType } from '.';

export type ICustomItemType = {
  type: 'custom';
  content: React.ReactNode;
  key?: string;
  children: undefined;
};

export type IGroupItemType = {
  type: 'group';
  label?: string;
  separator?: boolean;
  children: ISidebarItemType[];
  key?: string;
};

export type IDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: ISidebarItemType[];
  key?: string;
  onClick?: (event: React.MouseEvent) => void;
};
