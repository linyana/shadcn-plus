import { Button as ShadcnButton } from '../ui/button';

export type IButtonPropsType =
  React.ComponentProps<typeof ShadcnButton> & {
    loading?: boolean
    children: React.ReactNode;
  };
