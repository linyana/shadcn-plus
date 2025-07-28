export type IAlertType = React.ComponentProps<"div"> & {
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ElementType;
}