import { useComponentTheme } from '@/hooks';
import { IPopoverPropsType } from './types';
import {
  PopoverContent,
  PopoverTrigger,
  Popover as ShadcnPopover,
} from '@/components/ui/popover';
import { cn, sn } from '@/lib/utils';

export const Popover = ({ children, trigger, ...props }: IPopoverPropsType) => {
  const theme = useComponentTheme('Popover');

  return (
    <ShadcnPopover
      {...props}
    >
      <PopoverTrigger
        asChild
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(theme.Trigger?.className, props.triggerProps?.className)}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        {...props.contentProps}
        style={sn(theme.Content?.style, props.contentProps?.style)}
        className={cn(theme.Content?.className, props.contentProps?.className)}
      >
        {children}
      </PopoverContent>
    </ShadcnPopover>
  );
};
