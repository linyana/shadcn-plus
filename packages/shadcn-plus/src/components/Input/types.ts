import { Input as ShadcnInput } from '@/components/ui/input';
import { IFormControlValidateRuleType, IFromControlStatusType } from '../Form/types';

export type IInputPropsType =
  React.ComponentProps<typeof ShadcnInput> & {
    status?: IFromControlStatusType
    message?: string;
    label?: string;
    validateTrigger?: 'onChange' | 'onBlur' | 'none'
    rules?: IFormControlValidateRuleType[];
  };
