import { nanoid } from 'nanoid';
import { ISelectPropsType } from './types';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from '@/components/ui/select';

export const Select = ({
  options,
  placeholder,
  contentProps,
  triggerProps,
  valueProps,
  ...props
}: ISelectPropsType) => {
  return (
    <ShadcnSelect {...props}>
      <SelectTrigger
        className="w-[180px]"
        {...triggerProps}
      >
        <SelectValue
          placeholder={placeholder}
          {...valueProps}
        />
      </SelectTrigger>
      <SelectContent {...contentProps}>
        {options?.map((option) => (
          <SelectItem
            key={nanoid()}
            value={option.value as string}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};
