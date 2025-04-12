import {
  CollapsibleProps,
  CollapsibleContentProps,
} from '@radix-ui/react-collapsible';

type CollapsiblePropsType = Omit<
  CollapsibleProps,
  'content'
>;

export type ICollapsiblePropsType =
  CollapsiblePropsType & {
    children: React.ReactNode;
    content: React.ReactNode;
    contentProps?: CollapsibleContentProps;
  };
