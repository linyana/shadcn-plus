import { Input as ShadcnInput } from '@/components/ui/input';

// future 
type IInputStatusType = {
  message?: string;
  inputStyle?: React.CSSProperties;
  messageStyle?: React.CSSProperties;
};

export type IInputPropsType =
  React.ComponentProps<typeof ShadcnInput> & {
    error?: string;
    warning?: string;
    label?: string;
  };
