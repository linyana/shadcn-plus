import { useComponentTheme } from '@/hooks';
import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { IHoverCardType } from './types';
import { cn, sn } from '@/lib/utils';

export const HoverCard = ({ trigger, children, ...props }: IHoverCardType) => {
  const theme = useComponentTheme('HoverCard');

  return (
    <ShadcnHoverCard {...props}>
      <HoverCardTrigger
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(theme.Trigger?.className, props.triggerProps?.className)}
      >
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent
        {...props.contentProps}
        style={sn(theme.Content?.style, props.contentProps?.style)}
        className={cn(theme.Content?.className, props.contentProps?.className)}
      >
        {children}
      </HoverCardContent>
    </ShadcnHoverCard>
  );
};
