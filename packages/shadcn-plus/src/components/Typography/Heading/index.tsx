import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { IHeadingProps } from '../types';

const levelTagMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

const levelClassMap: Record<
  1 | 2 | 3 | 4 | 5 | 6,
  string
> = {
  1: 'text-4xl font-bold',
  2: 'text-3xl font-semibold',
  3: 'text-2xl font-semibold',
  4: 'text-xl font-medium',
  5: 'text-lg font-medium',
  6: 'text-base font-medium',
};

export const Heading = ({
  children,
  level = 3,
  asChild = false,
  className,
  style,
  ...props
}: IHeadingProps) => {
  const Tag = asChild ? Slot : levelTagMap[level];
  const combinedClassName = clsx(
    levelClassMap[level],
    className,
  );

  return (
    <Tag
      className={combinedClassName}
      style={{
        ...style,
        marginBottom: 4 * level,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};
