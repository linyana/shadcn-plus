import { Link } from '@/pages/Components/components';
import { Badge } from 'shadcn-plus';

export const AlertProps = [
  {
    property: 'header',
    description: 'The header content of the alert',
    type: 'React.ReactNode',
    default: '-',
  },
  {
    property: 'description',
    description: 'The description content of the alert',
    type: 'React.ReactNode',
    default: '-',
  },
  {
    property: 'icon',
    description: 'Icon component to display in the alert',
    type: 'React.ElementType',
    default: <Badge variant="secondary">Terminal</Badge>,
  },
  {
    property: 'className',
    description: 'Additional CSS classes to apply to the alert',
    type: 'string',
    default: '-',
  },
  {
    property: 'style',
    description: 'Inline styles to apply to the alert',
    type: 'React.CSSProperties',
    default: '-',
  },
  {
    property: 'variant?',
    description: 'Optional variant type for the alert',
    type: (
      <>
        <Badge variant="secondary">default</Badge> {' | '}
        <Badge variant="secondary">success</Badge> {' | '}
        <Badge variant="secondary">warning</Badge> {' | '}
        <Badge variant="secondary">error</Badge>
      </>
    ),
    default: <Badge variant="secondary">default</Badge>,
  },
  {
    property: 'iconProps?',
    description:
      'Props to customize the Icon component.',
    type: <Link>Icon Props</Link>,
    default: '-',
  },
  {
    property: 'headerProps?',
    description:
      'Props to customize the Header component.',
    type: <Link>Header Props</Link>,
    default: '-',
  },
  {
    property: 'descriptionProps?',
    description:
      'Props to customize the Description component.',
    type: <Link>Description Props</Link>,
    default: '-',
  },
];

export const AlertIconProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the alert icon.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the alert icon.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const AlertHeaderProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the alert header.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the alert header.',
    type: 'React.CSSProperties',
    default: '-',
  },
];

export const AlertDescriptionProps = [
  {
    property: 'className?',
    description: 'Custom CSS class for the alert description.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Custom inline style for the alert description.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
