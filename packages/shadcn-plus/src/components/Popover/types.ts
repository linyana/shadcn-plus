import {
  PopoverContentProps,
  PopoverProps,
} from '@radix-ui/react-popover';

type IPopoverContentPropsType = PopoverContentProps

export type IPopoverPropsType = PopoverProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  contentProps?: IPopoverContentPropsType;
};
