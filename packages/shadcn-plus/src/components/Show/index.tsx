import { IShowType } from "./types";

export const Show = ({ 
  rule,
  children,
}: IShowType) => { 
  return rule ? children : null
}