import { DialogContentProps, DialogProps } from "@radix-ui/react-dialog";

export type ISheetPropsType = DialogProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  contentProps?: DialogContentProps
  side?: "top" | "right" | "bottom" | "left"
};
