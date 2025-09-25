import { Link } from '@/pages/Components/components';

export const DialogProps = [
  {
    property: 'header?',
    description: 'The header content of the dialog, displayed as the dialog title area.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'description?',
    description: 'The description content of the dialog, displayed below the header title.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'footer?',
    description: 'The footer content of the dialog, usually for actions like buttons.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'children',
    description: 'The main content of the dialog.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'closeButton?',
    description: 'Custom close button element. Replaces the default close button if provided.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'overlay?',
    description: 'Custom overlay element, replacing the default background overlay.',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'headerProps?',
    description: 'Additional props passed to the dialog header container.',
    type: <Link>DialogHeaderProps</Link>,
    default: '-',
  },
  {
    property: 'footerProps?',
    description: 'Additional props passed to the dialog footer container.',
    type: <Link>DialogFooterProps</Link>,
    default: '-',
  },
  {
    property: 'contentProps?',
    description: 'Additional props passed to the dialog content container.',
    type: <Link>DialogContentProps</Link>,
    default: '-',
  },
  {
    property: 'className?',
    description: 'Additional CSS classes for the dialog container.',
    type: 'string',
    default: '-',
  },
  {
    property: 'style?',
    description: 'Inline styles for the dialog container.',
    type: 'React.CSSProperties',
    default: '-',
  },
];
