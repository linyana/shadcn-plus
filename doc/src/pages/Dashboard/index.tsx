import { Button, Sidebar, SidebarTrigger } from "shadcn-plus"
import { useSidebar } from "shadcn-plus/hooks";
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
    type: "separator",
  },
  // {
  //   type: "group",
  //   items: [
  //     {
  //       icon: User,
  //       label: "Profile",
  //       shortcut: "⇧⌘P",
  //     },
  //     {
  //       icon: CreditCard,
  //       label: "Billing",
  //       shortcut: "⌘B",
  //     },
  //     {
  //       icon: Settings,
  //       label: "Settings",
  //       shortcut: "⌘S",
  //     },
  //     {
  //       icon: Keyboard,
  //       label: "Keyboard shortcuts",
  //       shortcut: "⌘K",
  //     },
  //   ],
  // },
  // {
  //   type: "separator",
  // },
  // {
  //   type: "group",
  //   items: [
  //     {
  //       icon: Users,
  //       label: "Team",
  //     },
  //     {
  //       icon: UserPlus,
  //       label: "Invite users",
  //       children: [
  //         {
  //           icon: Mail,
  //           label: "Email",
  //         },
  //         {
  //           icon: MessageSquare,
  //           label: "Message",
  //         },
  //         {
  //           type: "separator",
  //         },
  //         {
  //           icon: PlusCircle,
  //           label: "More...",
  //         },
  //       ],
  //     },
  //     {
  //       icon: Plus,
  //       label: "New Team",
  //       shortcut: "⌘+T",
  //     },
  //   ],
  // },
  // {
  //   type: "separator",
  // },
  // {
  //   icon: Github,
  //   label: "GitHub",
  // },
  // {
  //   icon: LifeBuoy,
  //   label: "Support",
  // },
  // {
  //   icon: Cloud,
  //   label: "API",
  //   disabled: true,
  // },
  // {
  //   type: "separator",
  // },
  {
    icon: LogOut,
    disabled: true,
    label: "Log out",
    shortcut: "⇧⌘Q",
  },
];

export const Dashboard = () => { 
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  return (
    <>
      <Sidebar collapsible="icon" items={items} />
      <SidebarTrigger />
    </>
  )
}