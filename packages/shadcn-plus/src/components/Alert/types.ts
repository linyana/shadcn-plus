import { LucideProps } from '@/icons';

export type IAlertType = React.ComponentProps<'div'> & {
  description?: React.ReactNode | null;
  header?: React.ReactNode | null;
  icon?: React.ElementType | null;
  className?: string;
  style?: React.CSSProperties;
  iconProps?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  > & {
    className?: string;
    style?: React.CSSProperties;
  };
  headerProps?: React.ComponentProps<'div'> & {
    className?: string;
    style?: React.CSSProperties;
  };
  descriptionProps?: React.ComponentProps<'div'> & {
    className?: string;
    style?: React.CSSProperties;
  };
};
