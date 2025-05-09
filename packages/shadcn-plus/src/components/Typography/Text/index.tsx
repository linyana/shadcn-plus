import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ITextProps } from "../types";

const sizeClassMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

export const Text = ({
  children,
  asChild = false,
  className,
  size = "base",
  ...rest
}: ITextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(sizeClassMap[size], "text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </Comp>
  );
};
