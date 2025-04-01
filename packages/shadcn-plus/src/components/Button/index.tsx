import { IButtonPropsType } from './types';
import { Button as ShadcnButton } from '../ui/button';

export const Button = ({
  children,
  ...props
}: IButtonPropsType) => {
  return (
    <ShadcnButton {...props}>
      {children}
    </ShadcnButton>
  );
};
