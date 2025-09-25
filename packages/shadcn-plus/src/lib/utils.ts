import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type MaybeClassObject = { className?: ClassValue } | null | undefined
type MaybeStyleObject = { style?: React.CSSProperties } | null | undefined

export function cn(...inputs: (ClassValue | MaybeClassObject)[]) {
  return twMerge(
    clsx(
      inputs.map((i) =>
        typeof i === "object" && i !== null && "className" in i
          ? i.className
          : i
      )
    )
  )
}

export function sn(
  ...styles: (React.CSSProperties | MaybeStyleObject | undefined | false)[]
): React.CSSProperties {
  return Object.assign(
    {},
    ...styles
      .filter(Boolean)
      .map((s) =>
        typeof s === "object" && s !== null && "style" in s ? s.style : s
      )
  )
}