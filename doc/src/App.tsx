import {
  Button,
  DropdownMenu,
} from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';
import { Cloud, CreditCard, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'shadcn-plus/icons';

const App = () => {
  return (
    <>
      <div className="center">
        <DropdownMenu
          items={[
            {
              label: 'My Account',
              type: 'label',
            },
            {
              type: 'separator',
            },
            {
              type: 'group',
              items: [
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
              type: 'separator',
            },
            {
              type: 'group',
              items: [
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
                      type: 'separator',
                    },
                    {
                      icon: PlusCircle,
                      label: 'More...',
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
              type: 'separator',
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
              type: 'separator',
            },
            {
              icon: LogOut,
              label: 'Log out',
              shortcut: '⇧⌘Q',
            },
          ]}
        >
          <Button variant="outline">Click</Button>
        </DropdownMenu>
      </div>
    </>
  );
};

export default App;
