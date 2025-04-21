import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import {
  ICheckboxItemType,
  ICustomItemType,
  IDefaultItemType,
  ILabelItemType,
  IRadioIGroupItemTypeType,
  ISeparatorItemType
} from '../types';

export type IDropdownMenuPropsType =
  DropdownMenuProps & {
    children: React.ReactNode;
    items: IMenuItemType[];
    contentProps?: DropdownMenuContentProps
  };

type IGroupItemType = { type: 'group'; items: IMenuItemType[] };

export type IMenuItemType =
  ILabelItemType
  | ISeparatorItemType
  | ICustomItemType
  | ICheckboxItemType
  | IRadioIGroupItemTypeType
  | IDefaultItemType
  | IGroupItemType;
