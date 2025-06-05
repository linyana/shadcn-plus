import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { IParagraphProps } from '../types';

const sizeClassMap = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
} as const;

export const Paragraph = ({
  children,
  asChild = false,
  className,
  style: externalStyle,
  size = 'base',
  ...rest
}: IParagraphProps) => {
  const Comp = asChild ? Slot : 'p';
  const internalStyle = {
    margin: '8px 0',
  };

  return (
    <Comp
      style={{
        ...internalStyle,
        ...externalStyle,
      }}
      className={clsx(
        sizeClassMap[size],
        'text-muted-foreground',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};
