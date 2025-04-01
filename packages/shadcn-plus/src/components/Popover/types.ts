import {
  PopoverContentProps,
  PopoverProps,
} from '@radix-ui/react-popover';

type IPopoverContentPropsType = Omit<
  PopoverContentProps,
  'content'
>;

export type IPopoverPropsType = PopoverProps & {
  children: React.ReactNode;
  content: React.ReactNode;
  contentProps?: IPopoverContentPropsType;
};
