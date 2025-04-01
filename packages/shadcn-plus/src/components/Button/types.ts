import { Button as ShadcnButton } from '../ui/button';

export type IButtonPropsType =
  React.ComponentProps<typeof ShadcnButton> & {
    children: React.ReactNode;
  };
