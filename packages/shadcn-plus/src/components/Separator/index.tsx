import { useComponentTheme } from '@/hooks';
import { ISeparatorType } from './types';
import { Separator as ShadcnSeparator } from '@/components/ui/separator';
import { cn, sn } from '@/lib/utils';

export const Separator = (props: ISeparatorType) => {
  const theme = useComponentTheme('Separator');

  return (
    <ShadcnSeparator
      {...props}
      style={sn(theme.style, props.style)}
      className={cn(theme.className, props.className)}
    />
  );
};
