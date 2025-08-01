import { ISidebarItemType } from 'shadcn-plus/types';

export const leftMenu: ISidebarItemType[] = [
  {
    type: 'group',
    label: 'General',
    separator: true,
    children: [
      {
        key: '/components/button',
        label: 'Button',
      },
    ],
  },
  {
    type: 'group',
    label: 'Layout',
    separator: true,
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
    type: 'group',
    label: 'Data Entity',
    separator: true,
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
    type: 'group',
    label: 'Data Display',
    separator: true,
    children: [
      {
        key: '/components/popover',
        label: 'Popover',
      },
      {
        key: '/components/tooltip',
        label: 'Tooltip',
      },
      {
        key: '/components/collapsible',
        label: 'Collapsible',
      },
      {
        key: '/components/sheet',
        label: 'Sheet',
      },
      {
        key: '/components/separator',
        label: 'Separator',
      },
      {
        key: '/components/card',
        label: 'Card',
      },
      {
        key: '/components/hover-card',
        label: 'Hover Card',
      },
      {
        key: '/components/accordion',
        label: 'Accordion',
      },
      {
        key: '/components/tabs',
        label: 'Tabs',
      },
    ],
  },
  {
    type: 'group',
    label: 'Feedback',
    separator: true,
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
