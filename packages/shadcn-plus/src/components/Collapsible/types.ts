import {
  CollapsibleProps,
} from '@radix-ui/react-collapsible';

export type ICollapsiblePropsType =
  CollapsibleProps & {
    children: React.ReactNode;
    trigger: React.ReactNode;
  };
