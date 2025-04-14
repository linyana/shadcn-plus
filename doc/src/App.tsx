import {
  Button,
  DropdownMenu,
  Tooltip,
} from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';
import { Cloud, CreditCard, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'shadcn-plus/icons';
import { IMenuItemType } from 'shadcn-plus/types';
import { useState } from 'react';

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
    <>
      <Tooltip content="Fullname">
        <div>Name</div>
      </Tooltip>
    </>
  );
};

export default App;
