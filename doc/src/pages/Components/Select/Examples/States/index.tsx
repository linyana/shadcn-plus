import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { StatesSelectComponent } from './component';

export const StatesSelectExample = () => {
  return (
    <>
      <Heading level={5}>Different States</Heading>
      <Component
        previewContent={<StatesSelectComponent />}
        codeContent={`import { Select, Flex } from 'shadcn-plus';
import { useState } from 'react';

export const StatesSelectComponent = () => {
  const [value, setValue] = useState<string>('apple');

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
      label: 'Orange',
      value: 'orange',
    },
    {
      label: 'Grape',
      value: 'grape',
    },
  ];

  const optionsWithDisabled = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
      disabled: true,
    },
    {
      label: 'Orange',
      value: 'orange',
    },
    {
      label: 'Grape',
      value: 'grape',
      disabled: true,
    },
  ];

  return (
    <Flex gap="16px" flexDirection="column" style={{ width: '300px' }}>
      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Default Select
        </label>
        <Select
          options={options}
          placeholder="Choose a fruit"
          triggerProps={{ className: 'w-full' }}
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          With Default Value
        </label>
        <Select
          options={options}
          value={value}
          onValueChange={setValue}
          triggerProps={{ className: 'w-full' }}
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          With Disabled Options
        </label>
        <Select
          options={optionsWithDisabled}
          placeholder="Some options are disabled"
          triggerProps={{ className: 'w-full' }}
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#6b7280',
          }}
        >
          Disabled Select
        </label>
        <Select
          options={options}
          value="banana"
          disabled
          triggerProps={{ className: 'w-full' }}
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Custom Width
        </label>
        <Select
          options={options}
          placeholder="Small select"
          triggerProps={{ className: 'w-32' }}
        />
      </div>
    </Flex>
  );
};
`}
      />
    </>
  );
};
