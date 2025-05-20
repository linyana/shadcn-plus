import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ICardType } from './types';
import { Show } from '../Show';
import { cn } from '@/lib/utils';

export const Card = ({
  footer,
  description,
  header,
  children,
  headerProps,
  contentProps,
  ...props
}: ICardType) => {
  return (
    <ShadcnCard {...props}>
      <Show
        hideWhen={null}
        condition={header || description}
      >
        <CardHeader {...headerProps}>
          <Show hideWhen={null} condition={header}>
            <CardTitle>{header}</CardTitle>
          </Show>
          <Show
            hideWhen={null}
            condition={description}
          >
            <CardDescription>
              {description}
            </CardDescription>
          </Show>
        </CardHeader>
      </Show>
      
      <CardContent
        className={cn(
          !header && !description && 'rounded-t-xl',
          !footer && 'rounded-b-xl'
        )}
        {...contentProps}>
        {children}
      </CardContent>

      <Show hideWhen={null} condition={footer}>
        <CardFooter>{footer}</CardFooter>
      </Show>
    </ShadcnCard>
  );
};
