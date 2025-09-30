type ICardContentPropsType = React.ComponentProps<"div">
type ICardFooterPropsType = React.ComponentProps<"div">

export type ICardType = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  header?: React.ReactNode,
  title?: React.ReactNode;
  description?: React.ReactNode;
  titleProps?: React.ComponentProps<"div">
  descriptionProps?: React.ComponentProps<"div">
  footer?: React.ReactNode;
  contentProps?: ICardContentPropsType;
  footerProps?: ICardFooterPropsType;
  headerProps?: React.ComponentProps<"div">
}