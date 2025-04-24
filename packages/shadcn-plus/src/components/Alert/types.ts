export type IAlertType = React.ComponentProps<"div"> & {
  description?: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ElementType;
}