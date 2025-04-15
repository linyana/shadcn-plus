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
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
};
