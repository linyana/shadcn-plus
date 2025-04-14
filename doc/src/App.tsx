import {
  Tooltip,
} from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';
import { useState } from 'react';
import { IMenuItemType } from 'shadcn-plus/types';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState('system');

  const menuItems: IMenuItemType[] = [
    { type: 'label', label: 'Display' },
    {
      type: 'checkbox',
      label: 'Dark Mode',
      checked: darkMode,
      onCheckedChange: setDarkMode,
    },
    { type: 'separator' },
    {
      type: 'radioGroup',
      value: theme,
      onValueChange: setTheme,
      items: [
        { label: 'System', value: 'system' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ];

  return (
    <div className="center">
      <Tooltip content="Fullname">
        <div>Name</div>
      </Tooltip>
    </div>
  );
};

export default App;
