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
  content: React.ReactNode;
  contentProps?: ITooltipContentPropsType;
};
