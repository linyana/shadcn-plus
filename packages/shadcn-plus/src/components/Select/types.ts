import { Select as ShadcnSelect } from '@/components/ui/select';
import {
  SelectContentProps,
  SelectTriggerProps,
  SelectValueProps,
} from '@radix-ui/react-select';

export type ISelectPropsType =
  React.ComponentProps<typeof ShadcnSelect> & {
    contentProps?: ISelectContentPropsType;
    triggerProps?: ISelectTriggerPropsType;
    valueProps?: ISelectValuePropsType;
  } & {
    options: ISelectOptionType[];
    placeholder?: string;
  };

type ISelectContentPropsType =
  SelectContentProps;
type ISelectTriggerPropsType =
  SelectTriggerProps;
type ISelectValuePropsType = SelectValueProps;

export type ISelectOptionType = {
  value: string | number;
  label: React.ReactNode;
};
