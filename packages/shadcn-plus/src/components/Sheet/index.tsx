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

export const Sheet = ({
  children,
  trigger,
  title,
  description,
  side = 'right',
  contentProps,
  ...props
}: ISheetPropsType) => {
  return (
    <ShadcnSheet
      {...props}
    >
      <SheetTrigger>
        {trigger}
      </SheetTrigger>
      <SheetContent
        side={side}
        {...contentProps}
      >
        <Show rule={title || description}>
          <SheetHeader>
            <Show rule={title}>
              <SheetTitle>{title}</SheetTitle>
            </Show>
            <Show rule={description}>
              <SheetDescription>
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
