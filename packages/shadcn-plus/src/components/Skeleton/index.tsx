import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton';
import { ISkeletonPropsType } from './types';

export const Skeleton = (props: ISkeletonPropsType) => (
  <ShadcnSkeleton {...props} />
)