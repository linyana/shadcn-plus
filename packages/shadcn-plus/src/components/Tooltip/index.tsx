import { useComponentTheme } from '@/hooks';
import { ITooltipPropsType } from './types';
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { cn, sn } from '@/lib/utils';

export const Tooltip = ({
  children,
  trigger,
  ...props
}: ITooltipPropsType) => {
  const theme = useComponentTheme('Tooltip');

  return (
    <TooltipProvider>
      <ShadcnTooltip {...props}>
        <TooltipTrigger
          asChild
          {...props.triggerProps}
          style={sn(theme.Trigger?.style, props.triggerProps?.style)}
          className={cn(
            theme.Trigger?.className,
            props.triggerProps?.className,
          )}
        >
          {trigger}
        </TooltipTrigger>
        <TooltipContent
          {...props.contentProps}
          style={sn(theme.Content?.style, props.contentProps?.style)}
          className={cn(
            theme.Content?.className,
            props.contentProps?.className,
          )}
        >
          {children}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
};
