import { Button } from '@/components';
import {
  ICustomItemType,
  IDefaultItemType,
  IGroupItemType,
} from './types';

export type ISidebarProviderType = {
  children: React.ReactNode;
};

export type ISidebarTriggerType =
  React.ComponentProps<typeof Button>;

export type ISidebarType =
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    items: ISidebarItemType[];
    activeKeys?: string[];
    defaultActiveKeys?: string[];
    exclusiveExpand?: boolean; // Default: false
  };

export type ISidebarItemType =
  | IGroupItemType
  | ICustomItemType
  | IDefaultItemType;
