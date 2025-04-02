import { Flex } from '../Flex';
import { IInputPropsType } from './types';
import { Input as ShadcnInput } from '@/components/ui/input';

export const Input = ({
  error,
  warning,
  className,
  ...props
}: IInputPropsType) => {
  // Alert
  const errorMessage = error;
  const errorClassName = error
    ? 'focus-visible:ring-destructive border-destructive shadow-red-300'
    : '';

  const warningMessage = warning;
  const warningClassName = warning
    ? 'focus-visible:ring-orange-300 border-orange-400 shadow-orange-200'
    : '';

  return (
    <Flex flexDirection="column" gap="4px">
      <ShadcnInput
        {...props}
        className={[
          errorClassName,
          warningClassName,
        ].join(' ')}
      />
      {error && (
        <p className="text-[0.8rem] font-medium text-destructive">
          {errorMessage || 'Invalid'}
        </p>
      )}
      {warning && (
        <p className="text-[0.8rem] font-medium text-orange-400">
          {warningMessage || 'Invalid'}
        </p>
      )}
    </Flex>
  );
};
