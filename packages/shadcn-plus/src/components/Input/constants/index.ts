import { IFromControlStatusType } from "@/types";

export const INPUT_CLASS_MAP: { [key in IFromControlStatusType]: {
  input: string,
  message: string
}} = {
  error: {
    input: 'focus-visible:ring-destructive border-red-400 shadow-red-300',
    message: 'text-destructive'
  },
  warning: {
    input: 'focus-visible:ring-orange-400 border-orange-400 shadow-orange-300',
    message: "text-orange-400"
  },
};