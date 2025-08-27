import { ISidebarItemType } from 'shadcn-plus/types';
import {
  Home,
  Package,
  Database,
  Eye,
  MessageSquare,
  MousePointer,
  Layout,
  Palette,
} from 'lucide-react';

export const leftMenu: ISidebarItemType[] = [
  {
    key: '/components/overview',
    label: 'Overview',
    icon: Home,
    separator: true,
  },
  {
    key: '/components/library',
    label: 'Library',
    icon: Package,
  },
  {
    key: '/components/theme',
    label: 'Theme',
    icon: Palette,
    children: [
      {
        key: '/components/theme-provider',
        label: 'Theme Provider',
      },
    ],
  },
  {
    key: '/components/general',
    label: 'General',
    icon: MousePointer,
    children: [
      {
        key: '/components/button',
        label: 'Button',
      },
    ],
  },
  {
    key: '/components/layout',
    label: 'Layout',
    icon: Layout,
    children: [
      {
        key: '/components/flex',
        label: 'Flex',
      },
      {
        key: '/components/dropdown-menu',
        label: 'Dropdown Menu',
      },
      {
        key: '/components/sidebar',
        label: 'Sidebar',
      },
    ],
  },
  {
    key: '/components/data-entity',
    label: 'Data Entity',
    icon: Database,
    children: [
      {
        key: '/components/input',
        label: 'Input',
      },
      {
        key: '/components/select',
        label: 'Select',
      },
    ],
  },
  {
    key: '/components/data-display',
    label: 'Data Display',
    icon: Eye,
    children: [
      {
        key: '/components/accordion',
        label: 'Accordion',
      },
      {
        key: '/components/badge',
        label: 'Badge',
      },
      {
        key: '/components/card',
        label: 'Card',
      },
      {
        key: '/components/collapsible',
        label: 'Collapsible',
      },
      {
        key: '/components/hover-card',
        label: 'Hover Card',
      },
      {
        key: '/components/popover',
        label: 'Popover',
      },
      {
        key: '/components/separator',
        label: 'Separator',
      },
      {
        key: '/components/sheet',
        label: 'Sheet',
      },
      {
        key: '/components/tabs',
        label: 'Tabs',
      },
      {
        key: '/components/tooltip',
        label: 'Tooltip',
      },
    ],
  },
  {
    key: '/components/feedback',
    label: 'Feedback',
    icon: MessageSquare,
    children: [
      {
        key: '/components/skeleton',
        label: 'Skeleton',
      },
      {
        key: '/components/alert',
        label: 'Alert',
      },
    ],
  },
];
