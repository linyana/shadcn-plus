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

export const Card = ({
  footer,
  description,
  title,
  children,
  ...props
}: ICardType) => {
  return (
    <ShadcnCard {...props}>
      <Show
        hideWhen={null}
        condition={title || description}
      >
        <CardHeader>
          <Show hideWhen={null} condition={title}>
            <CardTitle>{title}</CardTitle>
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
      
      <CardContent>{children}</CardContent>

      <Show hideWhen={null} condition={footer}>
        <CardFooter>{footer}</CardFooter>
      </Show>
    </ShadcnCard>
  );
};
