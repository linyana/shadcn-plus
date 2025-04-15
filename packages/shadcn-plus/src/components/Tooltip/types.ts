import {
  TooltipContentProps,
  TooltipProps,
} from '@radix-ui/react-tooltip';

type ITooltipContentPropsType = Omit<
  TooltipContentProps,
  'content'
>;

export type ITooltipPropsType = TooltipProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  contentProps?: ITooltipContentPropsType;
};
