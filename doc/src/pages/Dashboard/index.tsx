import { Sidebar, SidebarTrigger } from "shadcn-plus"
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
  LogOut
} from "lucide-react";
import { ISidebarItemType } from "shadcn-plus/types";

const items: ISidebarItemType[] = [
  {
    label: "My Account",
    type: "label",
  },
  {
    type: "group",
    items: [
      {
        icon: User,
        label: "Profile",
        shortcut: "⇧⌘P",
      },
      {
        icon: CreditCard,
        label: "Billing",
        shortcut: "⌘B",
      },
      {
        icon: Settings,
        label: "Settings",
        shortcut: "⌘S",
      },
      {
        icon: Keyboard,
        label: "Keyboard shortcuts",
        shortcut: "⌘K",
      },
    ],
  },
  {
    type: "separator",
  },
  {
    type: "group",
    items: [
      {
        icon: Users,
        label: "Team",
      },
      {
        icon: UserPlus,
        label: "Invite users",
        children: [
          {
            icon: Mail,
            label: "Email",
          },
          {
            icon: MessageSquare,
            label: "Message",
          },
          {
            icon: PlusCircle,
            label: "More...",
          },
        ],
      },
    ],
  },
  {
    icon: Github,
    label: "GitHub",
  },
  {
    icon: LifeBuoy,
    label: "Support",
  },
  {
    icon: Cloud,
    label: "API",
    disabled: true,
  },
  {
    type: "separator",
  },
  {
    icon: LogOut,
    label: "Log out",
    shortcut: "⇧⌘Q",
  },
];

export const Dashboard = () => { 
  return (
    <>
      <Sidebar collapsible="icon" items={items} />
      <SidebarTrigger />
    </>
  )
}