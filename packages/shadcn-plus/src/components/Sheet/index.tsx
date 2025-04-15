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
  content,
  contentProps,
  title,
  description,
  side = 'right',
  ...props
}: ISheetPropsType) => {
  return (
    <ShadcnSheet {...props}>
      <SheetTrigger>
        {children}
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        <div {...contentProps}>
          {content}
        </div>
      </SheetContent>
    </ShadcnSheet>
  );
};
