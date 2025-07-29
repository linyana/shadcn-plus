import { Badge } from 'shadcn-plus';
import { Link } from '@/pages/Components/components';

export const InputProps = [
  {
    property: 'status?',
    description: 'The visual status of the input. Use "error" for validation failures, "warning" for cautionary messages.',
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
    description: 'Helper text or error message displayed below the input. Automatically styled based on the status prop.',
    type: 'string',
    default: '-',
  },
  {
    property: 'label?',
    description: 'Accessible label text displayed above the input field. Improves form usability and screen reader support.',
    type: 'string',
    default: '-',
  },
  {
    property: 'validateTrigger?',
    description: 'When to trigger validation. Use "onChange" for real-time validation, "onBlur" for validation after losing focus, or "none" to disable automatic validation.',
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
        Array of validation rules to apply to the input. Supports required fields, length constraints, pattern matching, and custom validators with
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
