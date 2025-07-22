import { IFromControlStatusType } from "@/components/Form/types";

export const INPUT_CLASS_MAP: { [key in IFromControlStatusType]: {
  input: string,
  message: string
}} = {
  error: {
    input: 'focus-visible:ring-red-300 border-red-400 shadow-red-300',
    message: 'text-destructive'
  },
  warning: {
    input: 'focus-visible:ring-orange-200 border-orange-300 shadow-orange-200',
    message: "text-orange-400"
  },
};