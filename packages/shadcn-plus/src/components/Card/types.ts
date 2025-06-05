type ICardContentPropsType = React.ComponentProps<"div">
type ICardHeaderPropsType = React.ComponentProps<"div">

export type ICardType = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  header?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  contentProps?: ICardContentPropsType;
  headerProps?: ICardHeaderPropsType;
}