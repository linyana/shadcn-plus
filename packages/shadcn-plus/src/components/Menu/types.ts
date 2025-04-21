import { IMenuItemType } from '../types';

export type ILabelItemType = {
  type: 'label';
  label: string;
  key?: string | number;
};
export type ISeparatorItemType = {
  type: 'separator';
  key?: string | number;
};
export type IGroupItemType<T> = {
  type: 'group';
  items: T[];
  key?: string | number;
};
export type ICustomItemType = {
  type: 'custom';
  content: React.ReactNode;
  key?: string | number;
};
export type ICheckboxItemType = {
  type: 'checkbox';
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  key?: string | number;
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
  key?: string | number;
};