import { IFormControlValidateRuleType } from "@/types";

export const checkValidate = ({ 
  rules,
  value = '',
} : { 
  rules: IFormControlValidateRuleType[]
  value?: string
  type: 'string' | 'number'
}) => { 
  let length = 0

  if (typeof value === 'string') {
    value = value.toString()
    length = value.length
  } else if(typeof value ==='number') { 
    length = value
  }

  for (const rule of rules) {
    const validationResults: { 
      [key in keyof IFormControlValidateRuleType]: {
        condition: boolean;
        message: string;
      } | undefined
    } = {
      required: rule.required && !value ? { condition: true, message: 'This field is required' } : undefined,
      min: rule.min !== undefined && length < rule.min ? { condition: true, message: `Must be at least ${rule.min} characters` } : undefined,
      max: rule.max !== undefined && length > rule.max ? { condition: true, message: `Cannot exceed ${rule.max} characters` } : undefined,
      validator: rule.validator && !rule.validator(value) ? { condition: true, message: 'Invalid input' } : undefined,
    };

    const error = Object.entries(validationResults).find(([, value]) => value?.condition);

    if (error) {
      const [, value] = error;
      return rule.message || value?.message;
    }
  }
}