import { Badge } from 'shadcn-plus';

export const IFormControlValidateRuleType = [
  {
    property: 'required?',
    description: (
      <>
        Whether the field is required. If{' '}
        <Badge variant="secondary">true</Badge>, the input must not be empty.
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'min?',
    description: <>Minimum length (for string) or value (for number).</>,
    type: 'number',
    default: '-',
  },
  {
    property: 'max?',
    description: <>Maximum length (for string) or value (for number).</>,
    type: 'number',
    default: '-',
  },
  {
    property: 'validator?',
    description: (
      <>
        Custom validation function. Should return{' '}
        <Badge variant="secondary">true</Badge> if valid,{' '}
        <Badge variant="secondary">false</Badge> otherwise.
      </>
    ),
    type: <Badge variant="secondary">{`(value: string) => boolean`}</Badge>,
    default: '-',
  },
  {
    property: 'message?',
    description: 'Custom error message for this rule.',
    type: 'string',
    default: '-',
  },
];
