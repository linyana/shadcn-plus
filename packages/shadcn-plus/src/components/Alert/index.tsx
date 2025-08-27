import { Terminal } from 'lucide-react';
import {
  Alert as ShadcnAlert,
  AlertDescription,
  AlertTitle,
} from '../ui/alert';
import { Show } from '../Show';
import { IAlertType } from './types';
import { useComponentTheme } from '@/hooks';
import { cn } from '@/lib/utils';

export const Alert = ({ title, description, icon: Icon }: IAlertType) => {
  const theme = useComponentTheme('Alert');

  return (
    <ShadcnAlert className={theme.className} style={theme.style}>
      <Show hideWhen={null} condition={Icon}>
        {Icon ? (
          <Icon className={cn(theme.Icon?.className, 'mr-2 h-4 w-4')} />
        ) : (
          <Terminal className={cn(theme.Icon?.className, 'h-4 w-4')} />
        )}
      </Show>
      <Show hideWhen={null} condition={title}>
        <AlertTitle
          className={theme.Title?.className}
          style={theme.Title?.style}
        >
          {title}
        </AlertTitle>
      </Show>
      <Show hideWhen={null} condition={description}>
        <AlertDescription
          className={theme.Description?.className}
          style={theme.Description?.style}
        >
          {description}
        </AlertDescription>
      </Show>
    </ShadcnAlert>
  );
};
