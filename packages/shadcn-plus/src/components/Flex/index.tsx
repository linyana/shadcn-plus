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
      gap,
      flexDirection,
      display: 'flex',
      ...style,
    }}
    onClick={
      onClick ? (e) => onClick(e) : undefined
    }
    className={className}
  >
    {children}
  </div>
);
