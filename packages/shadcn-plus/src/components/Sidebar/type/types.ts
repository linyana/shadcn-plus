import { ISidebarItemType } from ".";

export type ILabelItemType = {
  type: 'label';
  label: string;
  key?: string;
};

export type ISeparatorItemType = {
  type: 'separator';
  key?: string;
};

export type ICustomItemType = {
  type: 'custom';
  content: React.ReactNode;
  key?: string;
};

export type IGroupItemType = {
  type: 'group';
  items: ISidebarItemType[];
  key?: string;
};

export type IDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: ISidebarItemType[];
  key?: string;
  active?: boolean;
  onClick?: () => void;
};