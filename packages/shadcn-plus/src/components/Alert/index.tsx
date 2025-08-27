import { Terminal } from 'lucide-react';
import {
  Alert as ShadcnAlert,
  AlertDescription,
  AlertTitle,
} from '../ui/alert';
import { Show } from '../Show';
import { IAlertType } from './types';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Alert = ({
  header,
  description,
  icon: Icon,
  ...props
}: IAlertType) => {
  const theme = useComponentTheme('Alert');

  return (
    <ShadcnAlert
      {...props}
      className={cn(theme.className, props.className)}
      style={sn(theme.style, props.style)}
    >
      <Show hideWhen={null} condition={Icon}>
        {Icon ? (
          <Icon
            {...props.iconProps}
            className={cn(
              'mr-2 h-4 w-4',
              theme.Icon?.className,
              props.iconProps?.className,
            )}
            style={sn(theme.Icon?.style, props.iconProps?.style)}
          />
        ) : (
          <Terminal
            {...props.iconProps}
            className={cn(
              'h-4 w-4',
              theme.Icon?.className,
              props.iconProps?.className,
            )}
            style={sn(theme.Icon?.style, props.iconProps?.style)}
          />
        )}
      </Show>
      <Show hideWhen={null} condition={header}>
        <AlertTitle
          {...props.headerProps}
          className={cn(theme.Header?.className, props.headerProps?.className)}
          style={sn(theme.Header?.style, props.headerProps?.style)}
        >
          {header}
        </AlertTitle>
      </Show>
      <Show hideWhen={null} condition={description}>
        <AlertDescription
          {...props.descriptionProps}
          className={cn(
            theme.Description?.className,
            props.descriptionProps?.className,
          )}
          style={sn(theme.Description?.style, props.descriptionProps?.style)}
        >
          {description}
        </AlertDescription>
      </Show>
    </ShadcnAlert>
  );
};
