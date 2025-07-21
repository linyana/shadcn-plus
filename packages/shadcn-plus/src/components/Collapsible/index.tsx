import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent as ShadcnCollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ICollapsiblePropsType } from './types';
import { AnimatedDisplayWrapper } from '../Custom';
import { useState } from 'react';

export const Collapsible = ({
  children,
  trigger,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  ...props
}: ICollapsiblePropsType) => {
  const [internalOpen, internalSetOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = externalOnOpenChange ?? internalSetOpen;

  return (
    <ShadcnCollapsible open={open} onOpenChange={setOpen} {...props}>
      <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      <AnimatedDisplayWrapper activeKey={open}>
        <ShadcnCollapsibleContent asChild forceMount>
          {children}
        </ShadcnCollapsibleContent>
      </AnimatedDisplayWrapper>
    </ShadcnCollapsible>
  );
};
