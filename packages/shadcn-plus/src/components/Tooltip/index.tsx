import { ITooltipPropsType } from './types';
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

export const Tooltip = ({
  children,
  content,
  contentProps,
  ...props
}: ITooltipPropsType) => {
  return (
    <TooltipProvider>
      <ShadcnTooltip {...props}>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent {...contentProps}>
          {content}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
};
