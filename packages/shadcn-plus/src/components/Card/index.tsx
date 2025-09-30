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
import { cn, sn } from '@/lib/utils';
import { useComponentTheme } from '@/hooks';

export const Card = ({
  footer = null,
  description = null,
  header,
  children,
  title,
  ...props
}: ICardType) => {
  const theme = useComponentTheme('Card');

  return (
    <ShadcnCard
      {...props}
      style={sn(theme?.style, props.style)}
      className={cn(theme?.className, props.className)}
    >
      <Show hideWhen={null} condition={header || description}>
        { 
          header ? <>{header}</> : (
            <CardHeader
              {...props.headerProps}
              className={cn(theme.Header?.className, props.headerProps?.className)}
              style={sn(theme.Header?.style, props.headerProps?.style)}
            >
              <Show hideWhen={null} condition={title}>
                <CardTitle
                  {...props.titleProps}
                  className={cn(
                    theme.Header?.Title?.className,
                    props.titleProps?.className,
                  )}
                  style={sn(
                    theme.Header?.Title?.style,
                    props.titleProps?.style,
                  )}
                >
                  {title}
                </CardTitle>
              </Show>
              <Show hideWhen={null} condition={description}>
                <CardDescription
                  {...props.descriptionProps}
                  className={cn(
                    theme.Header?.Description?.className,
                    props.descriptionProps?.className,
                  )}
                  style={sn(
                    theme.Header?.Description?.style,
                    props.descriptionProps?.style,
                  )}
                >
                  {description}
                </CardDescription>
              </Show>
            </CardHeader>
          )
        }
      </Show>

      <CardContent
        {...props.contentProps}
        className={cn(
          !header && !description && 'rounded-t-xl',
          !footer && 'rounded-b-xl',
          theme.Content?.className,
          props.contentProps?.className,
        )}
        style={sn(theme.Content?.style, props.contentProps?.style)}
      >
        {children}
      </CardContent>

      <Show hideWhen={null} condition={footer}>
        <CardFooter
          {...props.footerProps}
          className={cn(theme.Footer?.className, props.footerProps?.className)}
          style={sn(theme.Footer?.style, props.footerProps?.style)}
        >
          {footer}
        </CardFooter>
      </Show>
    </ShadcnCard>
  );
};
