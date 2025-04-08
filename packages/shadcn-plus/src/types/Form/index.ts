export type IFormControlValidateRuleType = {
  required?: boolean;
  min?: number;
  max?: number;
  validator?: (value: any) => boolean;
  message?: string;
}

export type IFromControlStatusType = 'error' | 'warning'