import {
  DialogContentProps,
  DialogDescriptionProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from '@radix-ui/react-dialog';

export type ISheetPropsType = DialogProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  contentProps?: DialogContentProps;
  triggerProps?: DialogTriggerProps;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  titleProps?: DialogTitleProps;
  descriptionProps?: DialogDescriptionProps;
  side?: 'top' | 'right' | 'bottom' | 'left';
};
