import { IInputPropsType } from './types';
import { Input as ShadcnInput } from '@/components/ui/input';

export const Input = ({
  error,
  warning,
  ...props
}: IInputPropsType) => {
  let style = props.style;

  return (
    <div>
      <ShadcnInput {...props} />
      <p className="text-[0.8rem] font-medium text-destructive">
        error message
      </p>
    </div>
  );
};
