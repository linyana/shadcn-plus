import { TooltipContentProps, TooltipProps, TooltipTriggerProps } from '@radix-ui/react-tooltip';

type ITooltipContentPropsType = Omit<TooltipContentProps, 'content'>;

type ITooltipTriggerPropsType = Omit<TooltipTriggerProps, 'content'>;

export type ITooltipPropsType = TooltipProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  triggerProps?: ITooltipTriggerPropsType;
  contentProps?: ITooltipContentPropsType;
};
