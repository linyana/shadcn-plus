import { useComponentTheme } from '@/hooks';
import { Badge as ShadcnBadge } from '../ui/badge';
import { IBadgeType } from './types';
import { cn, sn } from '@/lib/utils';

export const Badge = ({ children, ...props }: IBadgeType) => {
  const theme = useComponentTheme('Badge');
  return (
    <ShadcnBadge
      {...props}
      className={cn(theme.className, props.className)}
      style={sn(theme.style, props.style)}
    >
      {children}
    </ShadcnBadge>
  );
};
