import { Select } from 'shadcn-plus';

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
