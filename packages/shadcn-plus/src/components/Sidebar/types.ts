import { Button } from '../Button';
import {
  ICustomItemType,
  ILabelItemType,
  ISeparatorItemType,
} from '../types';

export type ISidebarProviderType = {
  children: React.ReactNode;
};

export type ISidebarType =
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    items: ISidebarItemType[];
  };

export type ISidebarTriggerType =
  React.ComponentProps<typeof Button>;

type IGroupItemType = {
  type: 'group';
  items: ISidebarItemType[];
  key?: string | number;
};

type IDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: ISidebarItemType[];
  key?: string | number;
};

export type ISidebarItemType =
  | ILabelItemType
  | ISeparatorItemType
  | IGroupItemType
  | ICustomItemType
  | IDefaultItemType;
