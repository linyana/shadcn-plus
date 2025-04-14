import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';

export type IDropdownMenuPropsType =
  DropdownMenuProps & {
    children: React.ReactNode;
    items: IMenuItemType[];
    contentProps?: DropdownMenuContentProps
  };

type LabelItem = { type: 'label'; label: string };
type SeparatorItem = { type: 'separator' };
type GroupItem = { type: 'group'; items: IMenuItemType[] };
type CustomItem = { type: 'custom'; content: React.ReactNode };
type CheckboxItem = {
  type: 'checkbox';
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};
type RadioGroupItem = {
  type: 'radioGroup';
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string; disabled?: boolean }[];
};

type DefaultItem = {
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  disabled?: boolean;
  children?: IMenuItemType[];
};

export type IMenuItemType =
  | LabelItem
  | SeparatorItem
  | GroupItem
  | CustomItem
  | CheckboxItem
  | RadioGroupItem
  | DefaultItem;
