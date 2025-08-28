import { nanoid } from 'nanoid';
import { ISelectPropsType } from './types';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from '@/components/ui/select';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Select = ({
  options,
  placeholder,
  valueProps,
  ...props
}: ISelectPropsType) => {
  const theme = useComponentTheme('Select');

  return (
    <ShadcnSelect {...props}>
      <SelectTrigger
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(
          'w-[180px]',
          theme.Trigger?.className,
          props.triggerProps?.className,
        )}
      >
        <SelectValue
          placeholder={placeholder}
          {...valueProps}
          style={sn(theme.Value?.style, valueProps?.style)}
          className={cn(theme.Value?.className, valueProps?.className)}
        />
      </SelectTrigger>
      <SelectContent
        {...props.contentProps}
        style={sn(theme.Content?.style, props.contentProps?.style)}
        className={cn(theme.Content?.className, props.contentProps?.className)}
      >
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
