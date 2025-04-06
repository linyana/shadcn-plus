import { nanoid } from 'nanoid';
import { Flex } from '../Flex';
import { IInputPropsType } from './types';
import { Input as ShadcnInput } from '@/components/ui/input';

export const Input = ({
  error,
  warning,
  className,
  label,
  id,
  ...props
}: IInputPropsType) => {
  // Alert
  const errorMessage = error;
  const errorClassName = error
    ? 'focus-visible:ring-destructive border-red-400 shadow-red-300'
    : '';

  const warningMessage = warning;
  const warningClassName = warning
    ? 'focus-visible:ring-orange-400 border-orange-400 shadow-orange-300'
    : '';

  const inputId = id || nanoid();

  return (
    <Flex flexDirection="column" gap="8px">
      <label
        htmlFor={inputId}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <ShadcnInput
        id={inputId}
        {...props}
        className={[
          errorClassName,
          warningClassName,
        ].join(' ')}
      />
      {error && (
        <p className="text-sm font-medium text-destructive">
          {errorMessage || 'Invalid'}
        </p>
      )}
      {warning && (
        <p className="text-sm font-medium text-orange-400 font-custom">
          {warningMessage || 'Invalid'}
        </p>
      )}
    </Flex>
  );
};
