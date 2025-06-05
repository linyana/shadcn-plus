import { Button, DropdownMenu } from 'shadcn-plus';
import { IDropdownMenuItemType } from 'shadcn-plus/types';
import { useState } from 'react';

export const RadioDropdownMenuComponent = () => {
  const [value, setValue] = useState('top');

  const menuItems: IDropdownMenuItemType[] = [
    {
      label: 'Panel Position',
      separator: true,
      type: 'group',
      children: [
        {
          type: 'radioGroup',
          items: [
            {
              label: 'Top',
              value: 'top',
            },
            {
              label: 'Bottom',
              value: 'bottom',
            },
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Left',
              value: 'left',
              disabled: true,
            },
          ],
          value,
          onValueChange: setValue,
        },
      ],
    },
  ];

  return (
    <DropdownMenu items={menuItems}>
      <Button>Click me</Button>
    </DropdownMenu>
  );
};
