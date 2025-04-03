export type IFlexPropsType = {
  width?: string;
  height?: string;
  margin?: string;
  marginBottom?: string;
  marginTop?: string;
  padding?: string;
  className?: string;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'normal'
    | 'flex-start'
    | 'flex-end';
  alignItems?:
    | 'center'
    | 'start'
    | 'end'
    | 'normal'
    | 'stretch'
    | 'flex-start';
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';
  gap?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
