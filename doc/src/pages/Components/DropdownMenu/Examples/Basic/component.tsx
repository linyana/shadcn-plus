import { Button, DropdownMenu } from 'shadcn-plus';
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
} from 'shadcn-plus/icons';
import { IDropdownMenuItemType } from 'shadcn-plus/types';

export const BasicDropdownMenuComponent = () => {
  const menuItems: IDropdownMenuItemType[] = [
    {
      label: 'My Account',
      separator: true,
      type: 'group',
      children: [
        {
          icon: User,
          label: 'Profile',
          shortcut: '⇧⌘P',
        },
        {
          icon: CreditCard,
          label: 'Billing',
          shortcut: '⌘B',
        },
        {
          icon: Settings,
          label: 'Settings',
          shortcut: '⌘S',
        },
        {
          icon: Keyboard,
          label: 'Keyboard shortcuts',
          shortcut: '⌘K',
        },
      ],
    },
    {
      type: 'group',
      separator: true,
      children: [
        {
          icon: Users,
          label: 'Team',
        },
        {
          icon: UserPlus,
          label: 'Invite users',
          children: [
            {
              icon: Mail,
              label: 'Email',
            },
            {
              icon: MessageSquare,
              label: 'Message',
            },
            {
              type: 'group',
              separator: true,
              children: [
                {
                  icon: PlusCircle,
                  label: 'More...',
                },
              ],
            },
          ],
        },
        {
          icon: Plus,
          label: 'New Team',
          shortcut: '⌘+T',
        },
      ],
    },
    {
      type: 'group',
      separator: true,
      children: [
        {
          icon: Github,
          label: 'GitHub',
        },
      ],
    },
    {
      icon: LifeBuoy,
      label: 'Support',
    },
    {
      icon: Cloud,
      label: 'API',
      disabled: true,
    },
    {
      type: 'group',
      separator: true,
      children: [
        {
          icon: LogOut,
          label: 'Log out',
          shortcut: '⇧⌘Q',
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
