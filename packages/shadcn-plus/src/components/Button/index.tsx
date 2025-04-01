import { IButtonPropsType } from './types';
import { Button as ShadcnButton } from '../ui/button';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  loading,
  ...props
}: IButtonPropsType) => {
  return (
    <ShadcnButton {...props} disabled={loading}>
      {loading && (
        <Loader2 className="animate-spin" />
      )}
      {children}
    </ShadcnButton>
  );
};
