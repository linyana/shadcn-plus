import { IFlexPropsType } from './types';

export const Flex = ({
  width = 'auto',
  height = 'auto',
  margin = 'none',
  padding = 'none',
  flexWrap = 'nowrap',
  justifyContent = 'normal',
  alignItems = 'normal',
  className = '',
  flexDirection,
  children,
  gap,
  style,
  rowGap,
  columnGap,
  onClick,
}: IFlexPropsType) => (
  <div
    style={{
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
      ...style,
    }}
    onClick={onClick ? (e) => onClick(e) : undefined}
    className={className}
  >
    {children}
  </div>
);
