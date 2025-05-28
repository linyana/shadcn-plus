import { IDropdownMenuItemType } from ".";

export type IDropdownMenuGroupItemType = {
  type: 'group';
  children: IDropdownMenuItemType[];
  label?: string;
  separator?: boolean
  key?: string;
};

export type IDropdownMenuCustomItemType = {
  type: 'custom';
  content: React.ReactNode;
  key?: string;
};

export type IDropdownMenuCheckboxItemType = {
  type: 'checkbox';
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  key?: string;
};

export type IDropdownMenuRadioItemType = {
  type: 'radioGroup';
  value: string;
  onValueChange: (value: string) => void;
  items: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  key?: string;
};

