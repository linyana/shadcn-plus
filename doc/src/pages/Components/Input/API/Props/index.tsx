import { Badge } from 'shadcn-plus';
import { Link } from '@/pages/Components/components';

export const InputProps = [
  {
    property: 'status?',
    description: 'The status of the input, affects style and message display.',
    type: (
      <>
        <Badge variant="secondary">error</Badge> {' | '}
        <Badge variant="secondary">warning</Badge>
      </>
    ),
    default: '-',
  },
  {
    property: 'message?',
    description: 'The message displayed below the input.',
    type: 'string',
    default: '-',
  },
  {
    property: 'label?',
    description: 'The label text for the input.',
    type: 'string',
    default: '-',
  },
  {
    property: 'validateTrigger?',
    description: 'When to trigger validation.',
    type: (
      <>
        <Badge variant="secondary">onChange</Badge> {' | '}
        <Badge variant="secondary">onBlur</Badge> {' | '}
        <Badge variant="secondary">none</Badge>
      </>
    ),
    default: 'onBlur',
  },
  {
    property: 'rules?',
    description: (
      <>
        Validation rules. Supports
        <Badge variant="secondary">required</Badge>,{' '}
        <Badge variant="secondary">min</Badge>,{' '}
        <Badge variant="secondary">max</Badge>,{' '}
        <Badge variant="secondary">validator</Badge>,{' '}
        <Badge variant="secondary">message</Badge>.
      </>
    ),
    type: (
      <>
        <Link>IFormControlValidateRuleType</Link>[]
      </>
    ),
    default: '-',
  },
  {
    property: '...inputProps',
    description: 'Other props are the same as native <input> element.',
    type: 'React.InputHTMLAttributes<HTMLInputElement>',
    default: '-',
  },
];
