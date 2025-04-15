import { DialogContentProps, DialogProps } from "@radix-ui/react-dialog";

type ISheetContentPropsType = Omit<
  DialogContentProps,
  'content'
>;

export type ISheetPropsType = DialogProps & {
  children: React.ReactNode;
  content: React.ReactNode;
  contentProps?: ISheetContentPropsType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left"
};
