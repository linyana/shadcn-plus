import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton';
import { ISkeletonPropsType } from './types';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Skeleton = (props: ISkeletonPropsType) => {
  const theme = useComponentTheme('Skeleton');

  return (
    <ShadcnSkeleton
      {...props}
      style={sn(theme.style, props.style)}
      className={cn(theme.className, props.className)}
    />
  );
};
