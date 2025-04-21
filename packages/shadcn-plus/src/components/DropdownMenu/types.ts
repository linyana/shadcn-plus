import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import {
  ICheckboxItemType,
  ICustomItemType,
  ILabelItemType,
  IRadioIGroupItemTypeType,
  ISeparatorItemType,
} from '../types';

export type IDropdownMenuPropsType =
  DropdownMenuProps & {
    children: React.ReactNode;
    items: IMenuItemType[];
    contentProps?: DropdownMenuContentProps;
  };

type IGroupItemType = {
  type: 'group';
  items: IMenuItemType[];
};

type IDefaultItemType = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: IMenuItemType[];
  key?: string | number;
};

export type IMenuItemType =
  | ILabelItemType
  | ISeparatorItemType
  | ICustomItemType
  | ICheckboxItemType
  | IRadioIGroupItemTypeType
  | IDefaultItemType
  | IGroupItemType;
