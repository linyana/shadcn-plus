export type IAlertType = React.ComponentProps<"div"> & {
  description?: React.ReactNode | null;
  title?: React.ReactNode | null;
  icon?: React.ElementType | null;
}