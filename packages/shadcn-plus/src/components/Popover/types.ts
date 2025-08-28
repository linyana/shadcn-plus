import {
  PopoverContentProps,
  PopoverTriggerProps,
  PopoverProps,
} from '@radix-ui/react-popover';

type IPopoverContentPropsType = PopoverContentProps;
type IPopoverTriggerPropsType = PopoverTriggerProps;

export type IPopoverPropsType = PopoverProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  triggerProps?: IPopoverTriggerPropsType;
  contentProps?: IPopoverContentPropsType;
};
