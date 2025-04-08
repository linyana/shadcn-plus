import { Input as ShadcnInput } from '@/components/ui/input';
import { IFromControlStatusType, IFormControlValidateRuleType } from '@/types';

export type IInputPropsType =
  React.ComponentProps<typeof ShadcnInput> & {
    status?: IFromControlStatusType
    message?: string;
    label?: string;
    validateTrigger?: 'onChange' | 'onBlur' | 'none'
    rules?: IFormControlValidateRuleType[];
  };
