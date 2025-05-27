import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import {
  ICheckboxItemType,
  ICustomItemType,
  IGroupItemType,
  IRadioIGroupItemTypeType,
} from './types';

export type IDropdownMenuPropsType = DropdownMenuProps & {
  children: React.ReactNode;
  items: IDropdownMenuItemType[];
  contentProps?: DropdownMenuContentProps;
};

type IDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: IDropdownMenuItemType[];
  key?: string;
};

export type IDropdownMenuItemType =
  | ICustomItemType
  | ICheckboxItemType
  | IRadioIGroupItemTypeType
  | IDefaultItemType
  | IGroupItemType;
