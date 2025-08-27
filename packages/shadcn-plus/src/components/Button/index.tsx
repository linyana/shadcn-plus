import { IButtonPropsType } from './types';
import { Button as ShadcnButton } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { cn, sn } from '@/lib/utils';
import { useComponentTheme } from '@/hooks';

export const Button = ({
  children,
  loading,
  ...props
}: IButtonPropsType) => {
  const theme = useComponentTheme('Button');

  return (
    <ShadcnButton
      {...props}
      className={cn(theme.className, props.className)}
      style={sn(theme.style, props.style)}
      disabled={loading}
    >
      {loading && <Loader2 className="animate-spin"/>}
      {children}
    </ShadcnButton>
  );
};
