import { type VariantProps } from 'class-variance-authority';
import { badgeVariants } from '../ui/badge';

export type IBadgeType = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean } & {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  };
