import { IPopoverPropsType } from './types';
import {
  PopoverContent,
  PopoverTrigger,
  Popover as ShadcnPopover,
} from '@/components/ui/popover';

export const Popover = ({
  children,
  content,
  contentProps,
  ...props
}: IPopoverPropsType) => {
  return (
    <ShadcnPopover {...props}>
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent {...contentProps}>
        {content}
      </PopoverContent>
    </ShadcnPopover>
  );
};
