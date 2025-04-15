import { ITooltipPropsType } from './types';
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

export const Tooltip = ({
  children,
  trigger,
  contentProps,
  ...props
}: ITooltipPropsType) => {
  return (
    <TooltipProvider>
      <ShadcnTooltip {...props}>
        <TooltipTrigger>
          {trigger}
        </TooltipTrigger>
        <TooltipContent {...contentProps}>
          {children}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
};
