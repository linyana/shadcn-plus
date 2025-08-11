import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { GroupedSelectComponent } from './component';

export const GroupedSelectExample = () => {
  return (
    <>
      <Heading level={5}>Grouped Options</Heading>
      <Component
        previewContent={<GroupedSelectComponent />}
        codeContent={`import { Select, Flex } from 'shadcn-plus';

export const GroupedSelectComponent = () => {
  const groupedOptions = [
    {
      label: '🍎 Fruits',
      value: 'fruits-group',
    },
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
      label: '🥕 Vegetables',
      value: 'vegetables-group',
    },
    {
      label: 'Carrot',
      value: 'carrot',
    },
    {
      label: 'Broccoli',
      value: 'broccoli',
    },
    {
      label: 'Spinach',
      value: 'spinach',
    },
  ];

  const countryOptions = [
    {
      label: '🌏 Asia',
      value: 'asia-group',
    },
    {
      label: 'China',
      value: 'china',
    },
    {
      label: 'Japan',
      value: 'japan',
    },
    {
      label: 'South Korea',
      value: 'south-korea',
    },
    {
      label: '🌍 Europe',
      value: 'europe-group',
    },
    {
      label: 'Germany',
      value: 'germany',
    },
    {
      label: 'France',
      value: 'france',
    },
    {
      label: 'United Kingdom',
      value: 'uk',
    },
  ];

  return (
    <Flex gap="16px" flexDirection="column" style={{ width: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Food Categories
        </label>
        <Select 
          options={groupedOptions} 
          placeholder="Select food item"
          triggerProps={{ className: 'w-full' }}
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Countries by Region
        </label>
        <Select 
          options={countryOptions} 
          placeholder="Select country"
          triggerProps={{ className: 'w-full' }}
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
