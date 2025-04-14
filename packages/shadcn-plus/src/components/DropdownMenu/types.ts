import {
  DropdownMenuContentProps,
  DropdownMenuProps,
} from '@radix-ui/react-dropdown-menu';
import { LucideIcon } from 'lucide-react';

type IDropdownContentPropsType = Omit<
  DropdownMenuContentProps,
  'content'
>;

export type IDropdownMenuPropsType =
  DropdownMenuProps & {
    children: React.ReactNode;
    items: IMenuItemType[];
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
