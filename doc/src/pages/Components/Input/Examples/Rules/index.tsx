import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { RuleInputComponent } from './components';

export const RuleInputExample = () => {
  return (
    <>
      <Heading level={5}>Rules</Heading>
      <Component
        previewContent={<RuleInputComponent />}
        codeContent={`<Flex flexDirection="column" gap="16px">
  <Input
    label="Required"
    placeholder="Name"
    validateTrigger="onChange"
    rules={[
      {
        required: true,
        message: 'Name is required',
      },
    ]}
  />
  <Input
    label="Min 5"
    placeholder="Name"
    validateTrigger="onChange"
    rules={[
      {
        min: 5,
        message: 'Min 5 characters',
      },
    ]}
  />
  <Input
    label="Max 5"
    placeholder="Name"
    validateTrigger="onChange"
    rules={[
      {
        max: 5,
        message: 'Max 5 characters',
      },
    ]}
  />
  <Input
    label="Required and email verification"
    placeholder="Email"
    validateTrigger="onChange"
    rules={[
      {
        required: true,
        message: 'Email is required',
      },
      {
        validator: (value: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: 'Invalid email address',
      },
    ]}
  />
</Flex>
`}
      />
    </>
  );
};
