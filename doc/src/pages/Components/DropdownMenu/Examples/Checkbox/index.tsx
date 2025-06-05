import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { CheckboxDropdownMenuComponent } from './component';

export const CheckboxDropdownMenuExample = () => {
  return (
    <>
      <Heading level={5}>Checkbox</Heading>
      <Component
        previewContent={<CheckboxDropdownMenuComponent />}
        codeContent={`import { Button, DropdownMenu } from 'shadcn-plus';
import { IDropdownMenuItemType } from 'shadcn-plus/types';
import { useState } from 'react';

export const CheckboxDropdownMenuComponent = () => {
  const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({
    statusBar: false,
    activityBar: false,
    panel: false,
  });

  const handleChange =
    (key: keyof typeof checkedStates) => (value: boolean) => {
      setCheckedStates((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const menuItems: IDropdownMenuItemType[] = [
    {
      label: 'Appearance',
      separator: true,
      type: 'group',
      children: [
        {
          type: 'checkbox',
          label: 'Status Bar',
          checked: checkedStates.statusBar,
          onCheckedChange: handleChange('statusBar'),
        },
        {
          type: 'checkbox',
          label: 'Activity Bar',
          checked: checkedStates.darkMode,
          onCheckedChange: handleChange('activityBar'),
          disabled: true,
        },
        {
          type: 'checkbox',
          label: 'Panel',
          checked: checkedStates.panel,
          onCheckedChange: handleChange('panel'),
        },
      ],
    },
  ];

  return (
    <DropdownMenu items={menuItems}>
      <Button>Click me</Button>
    </DropdownMenu>
  );
};`}
      />
    </>
  );
};
