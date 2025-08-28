import { useComponentTheme } from '@/hooks';
import { IFlexPropsType } from './types';
import { cn, sn } from '@/lib/utils';

export const Flex = ({
  width = 'auto',
  height = 'auto',
  margin = 'none',
  padding = 'none',
  flexWrap = 'nowrap',
  justifyContent = 'normal',
  alignItems = 'normal',
  flexDirection,
  children,
  gap,
  rowGap,
  columnGap,
  onClick,
  ...props
}: IFlexPropsType) => {
  const theme = useComponentTheme('Flex');

  return (
    <div
      style={sn(
        {
          width,
          height,
          margin,
          padding,
          justifyContent,
          alignItems,
          flexWrap,
          rowGap: rowGap ?? gap ?? undefined,
          columnGap: columnGap ?? gap ?? undefined,
          flexDirection,
          display: 'flex',
        },
        theme.style,
        props.style,
      )}
      onClick={onClick ? (e) => onClick(e) : undefined}
      className={cn(theme.className, props.className)}
    >
      {children}
    </div>
  );
};
