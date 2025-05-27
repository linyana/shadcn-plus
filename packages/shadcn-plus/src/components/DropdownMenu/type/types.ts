import { IMenuItemType } from ".";

export type IGroupItemType = {
  type: 'group';
  children: IMenuItemType[];
  label?: string;
  separator?: boolean
  key?: string;
};

export type ICustomItemType = {
  type: 'custom';
  content: React.ReactNode;
  key?: string;
};

export type ICheckboxItemType = {
  type: 'checkbox';
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  key?: string;
};

export type IRadioIGroupItemTypeType = {
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

