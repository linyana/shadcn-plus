import { useComponentTheme } from '@/hooks';
import { Show } from '../Show';
import { ISheetPropsType } from './types';
import {
  SheetContent,
  SheetTrigger,
  Sheet as ShadcnSheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { cn, sn } from '@/lib/utils';

export const Sheet = ({
  children,
  trigger,
  title,
  description,
  side = 'right',
  ...props
}: ISheetPropsType) => {
  const theme = useComponentTheme('Sheet');

  return (
    <ShadcnSheet {...props}>
      <SheetTrigger
        asChild
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(theme.Trigger?.className, props.triggerProps?.className)}
      >
        {trigger}
      </SheetTrigger>
      <SheetContent
        side={side}
        {...props.contentProps}
        style={sn(theme.Content?.style, props.contentProps?.style)}
        className={cn(theme.Content?.className, props.contentProps?.className)}
      >
        <Show hideWhen={null} condition={title || description}>
          <SheetHeader
            className={cn(
              theme.Content?.Header?.className,
              props.contentProps?.className,
            )}
          >
            <Show hideWhen={null} condition={title}>
              <SheetTitle
                className={cn(
                  theme.Content?.Header?.Title?.className,
                  props.contentProps?.className,
                )}
              >
                {title}
              </SheetTitle>
            </Show>
            <Show hideWhen={null} condition={description}>
              <SheetDescription
                className={cn(
                  theme.Content?.Header?.Description?.className,
                  props.contentProps?.className,
                )}
              >
                {description}
              </SheetDescription>
            </Show>
          </SheetHeader>
        </Show>
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
};
