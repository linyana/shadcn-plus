import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import {
  IDropdownMenuCheckboxItemType,
  IDropdownMenuCustomItemType,
  IDropdownMenuGroupItemType,
  IDropdownMenuRadioItemType,
} from './types';

export type IDropdownMenuPropsType = DropdownMenuProps & {
  children: React.ReactNode;
  items: IDropdownMenuItemType[];
  contentProps?: DropdownMenuContentProps;
};

type IDropdownMenuDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: IDropdownMenuItemType[];
  key?: string;
};

export type IDropdownMenuItemType =
  | IDropdownMenuCustomItemType
  | IDropdownMenuCheckboxItemType
  | IDropdownMenuRadioItemType
  | IDropdownMenuDefaultItemType
  | IDropdownMenuGroupItemType;
