import { HTMLAttributes } from "react";

export type TextSize = "sm" | "base" | "lg" | "xl";

export interface ITextProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  size?: TextSize;
}

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  size?: TextSize;
}

export interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  asChild?: boolean;
  className?: string;
}
