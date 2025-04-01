import { Select as ShadcnSelect } from '@/components/ui/select';
import {
  SelectContentProps,
  SelectTriggerProps,
  SelectValueProps,
} from '@radix-ui/react-select';

export type ISelectPropsType =
  React.ComponentProps<typeof ShadcnSelect> & {
    contentProps?: IPopoverContentPropsType;
    triggerProps?: IPopoverTriggerPropsType;
    valueProps?: IPopoverValuePropsType;
  } & {
    options: ISelectOptionType[];
    placeholder?: string;
  };

type IPopoverContentPropsType =
  SelectContentProps;
type IPopoverTriggerPropsType =
  SelectTriggerProps;
type IPopoverValuePropsType = SelectValueProps;

export type ISelectOptionType = {
  value: string | number;
  label: React.ReactNode;
};
