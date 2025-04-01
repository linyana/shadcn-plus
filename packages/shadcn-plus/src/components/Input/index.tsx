import { IInputPropsType } from './types';
import { Input as ShadcnInput } from '@/components/ui/input';

export const Input = ({
  ...props
}: IInputPropsType) => {
  return <ShadcnInput {...props} />;
};
