import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import { LucideIcon } from 'lucide-react';

export type IDropdownMenuPropsType =
  DropdownMenuProps & {
    children: React.ReactNode;
    items: IMenuItemType[];
    contentProps?: DropdownMenuContentProps
  };

export type IMenuItemType =
  | {
      type: 'label';
      label: string;
    }
  | {
      type: 'separator';
    }
  | {
      type: 'group';
      items: IMenuItemType[];
  }
  | {
    type: 'custom';
    content: React.ReactNode
  }
  | {
    type: 'checkbox';
    label: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
  }
  | {
      type: 'radioGroup';
      value: string;
      onValueChange: (value: string) => void;
      items: {
        label: string;
        value: string;
        disabled?: boolean;
      }[];
    }
  | {
      label: string;
      icon?:
        | LucideIcon
        | React.ComponentType<
            React.SVGProps<SVGSVGElement>
          >;
      shortcut?: string;
      disabled?: boolean;
      children?: IMenuItemType[];
    };
