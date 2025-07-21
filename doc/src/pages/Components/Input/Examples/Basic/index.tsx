import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicInputComponent } from './component';

export const BasicInputExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicInputComponent />}
        codeContent={`<Input
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
`}
      />
    </>
  );
};
