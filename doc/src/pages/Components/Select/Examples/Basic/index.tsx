import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicSelectComponent } from './component';

export const BasicSelectExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicSelectComponent />}
        codeContent={`import { Select } from 'shadcn-plus';

export const BasicSelectComponent = () => {
  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Blueberry',
      value: 'blueberry',
    },
    {
      label: 'Grapes',
      value: 'grapes',
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
    },
  ];

  return <Select options={options} placeholder='Select a fruit' />;
};
`}
      />
    </>
  );
};
