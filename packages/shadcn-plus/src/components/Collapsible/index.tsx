import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ICollapsiblePropsType } from './types';
import { AnimatedDisplayWrapper } from '../Custom';
import { useState } from 'react';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Collapsible = ({
  children,
  trigger,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  ...props
}: ICollapsiblePropsType) => {
  const theme = useComponentTheme('Collapsible');

  const [internalOpen, internalSetOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = externalOnOpenChange ?? internalSetOpen;

  return (
    <ShadcnCollapsible
      open={open}
      onOpenChange={setOpen}
      {...props}
      style={sn(theme.style, props.style)}
      className={cn(theme.className, props.className)}
    >
      <CollapsibleTrigger
        asChild
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(theme.Trigger?.className, props.triggerProps?.className)}
      >
        {trigger}
      </CollapsibleTrigger>
      <AnimatedDisplayWrapper activeKey={open}>
        <CollapsibleContent
          asChild
          {...props.contentProps}
          style={sn(theme.Content?.style, props.contentProps?.style)}
          className={cn(
            theme.Content?.className,
            props.contentProps?.className,
          )}
        >
          {children}
        </CollapsibleContent>
      </AnimatedDisplayWrapper>
    </ShadcnCollapsible>
  );
};
