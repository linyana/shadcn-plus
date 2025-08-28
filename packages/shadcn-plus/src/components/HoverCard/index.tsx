import { HoverCard as ShadcnHoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { IHoverCardType } from './types';

export const HoverCard = ({ trigger, children, ...props }: IHoverCardType) => {
  return (
    <ShadcnHoverCard {...props}>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </ShadcnHoverCard>
  );
};
