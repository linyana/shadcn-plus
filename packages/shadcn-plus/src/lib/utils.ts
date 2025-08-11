import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sn(
  ...styles: (React.CSSProperties | undefined | false)[]
): React.CSSProperties {
  return Object.assign({}, ...styles.filter(Boolean));
}
