import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { ValidationInputComponent } from './component';

export const ValidationInputExample = () => {
  return (
    <>
      <Heading level={5}>Validation</Heading>
      <Component
        previewContent={<ValidationInputComponent />}
        codeContent={`import { Flex, Input } from 'shadcn-plus';

export const ValidationInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Input
        label="Required Field"
        placeholder="Enter your name"
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            message: 'Name is required',
          },
        ]}
      />
      <Input
        label="Email Validation"
        placeholder="Enter your email"
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            message: 'Email is required',
          },
          {
            validator: (value: string) => {
              const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
              return emailRegex.test(value);
            },
            message: 'Invalid email address',
          },
        ]}
      />
      <Input
        label="Length Validation"
        placeholder="Enter 5-10 characters"
        validateTrigger="onChange"
        rules={[
          {
            min: 5,
            message: 'Minimum 5 characters required',
          },
          {
            max: 10,
            message: 'Maximum 10 characters allowed',
          },
        ]}
      />
    </Flex>
  );
};
`}
      />
    </>
  );
};