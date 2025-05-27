import { Badge as ShadcnBadge } from '../ui/badge';
import { IBadgeType } from './types';

export const Badge = ({ children, ...props }: IBadgeType) => {
  return <ShadcnBadge {...props}>{children}</ShadcnBadge>;
};
