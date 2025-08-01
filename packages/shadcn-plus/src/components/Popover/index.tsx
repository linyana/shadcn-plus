import { IPopoverPropsType } from './types';
import {
  PopoverContent,
  PopoverTrigger,
  Popover as ShadcnPopover,
} from '@/components/ui/popover';

export const Popover = ({
  children,
  trigger,
  contentProps,
  ...props
}: IPopoverPropsType) => {
  return (
    <ShadcnPopover
      {...props}
    >
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent {...contentProps}>
        {children}
      </PopoverContent>
    </ShadcnPopover>
  );
};
