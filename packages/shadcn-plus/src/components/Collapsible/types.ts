import {
  CollapsibleProps,
  CollapsibleContentProps,
} from '@radix-ui/react-collapsible';

type ICollapsibleContentPropsType = Omit<
  CollapsibleContentProps,
  'content'
>;

export type ICollapsiblePropsType = CollapsibleProps & {
  children: React.ReactNode;
  content: React.ReactNode;
  contentProps?: ICollapsibleContentPropsType;
};
