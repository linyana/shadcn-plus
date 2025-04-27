import { ISidebarItemType } from 'shadcn-plus/types';
import { IRouteType } from '../types';

export const leftRoutes: IRouteType[] = [
  {
    id: '/components/label/general',
    sidebar: {
      type: 'label',
      label: 'General',
    },
  },
  {
    id: '/components/separator/1',
    sidebar: {
      type: 'separator',
    } as ISidebarItemType,
  },
  {
    id: '/components/button',
    path: '/components/button',
    element: <></>,
    sidebar: {
      label: 'Button',
    },
  },
  {
    id: '/components/label/layout',
    sidebar: {
      type: 'label',
      label: 'Layout',
    },
  },
  {
    id: '/components/separator/2',
    sidebar: {
      type: 'separator',
    } as ISidebarItemType,
  },
  {
    id: '/components/flex',
    path: '/components/flex',
    element: <></>,
    sidebar: {
      label: 'Flex',
    },
  },
  {
    id: '/components/dropdown-menu',
    path: '/components/dropdown-menu',
    element: <></>,
    sidebar: {
      label: 'Dropdown Menu',
    },
  },
  {
    id: '/components/sidebar',
    path: '/components/sidebar',
    element: <></>,
    sidebar: {
      label: 'Sidebar',
    },
  },
  {
    id: '/components/label/data-entry',
    sidebar: {
      type: 'label',
      label: 'Data Entry',
    },
  },
  {
    id: '/components/separator/3',
    sidebar: {
      type: 'separator',
    } as ISidebarItemType,
  },
  {
    id: '/components/input',
    path: '/components/input',
    element: <></>,
    sidebar: {
      label: 'Input',
    },
  },
  {
    id: '/components/select',
    path: '/components/select',
    element: <></>,
    sidebar: {
      label: 'Select',
    },
  },
  {
    id: '/components/label/data-display',
    sidebar: {
      type: 'label',
      label: 'Data Display',
    },
  },
  {
    id: '/components/separator/4',
    sidebar: {
      type: 'separator',
    } as ISidebarItemType,
  },
  {
    id: '/components/popover',
    path: '/components/popover',
    element: <></>,
    sidebar: {
      label: 'Popover',
    },
  },
  {
    id: '/components/tooltip',
    path: '/components/tooltip',
    element: <></>,
    sidebar: {
      label: 'Tooltip',
    },
  },
  {
    id: '/components/collapsible',
    path: '/components/collapsible',
    element: <></>,
    sidebar: {
      label: 'Collapsible',
    },
  },
  {
    id: '/components/sheet',
    path: '/components/sheet',
    element: <></>,
    sidebar: {
      label: 'Sheet',
    },
  },
  {
    id: '/components/separator',
    path: '/components/separator',
    element: <></>,
    sidebar: {
      label: 'Separator',
    },
  },
  {
    id: '/components/card',
    path: '/components/card',
    element: <></>,
    sidebar: {
      label: 'Card',
    },
  },
  {
    id: '/components/hover-card',
    path: '/components/hover-card',
    element: <></>,
    sidebar: {
      label: 'Hover Card',
    },
  },
  {
    id: '/components/accordion',
    path: '/components/accordion',
    element: <></>,
    sidebar: {
      label: 'Accordion',
    },
  },
  {
    id: '/components/label/feedback',
    sidebar: {
      type: 'label',
      label: 'Feedback',
    },
  },
  {
    id: '/components/separator/5',
    sidebar: {
      type: 'separator',
    } as ISidebarItemType,
  },
  {
    id: '/components/skeleton',
    path: '/components/skeleton',
    element: <></>,
    sidebar: {
      label: 'Skeleton',
    },
  },
  {
    id: '/components/alert',
    path: '/components/alert',
    element: <></>,
    sidebar: {
      label: 'Alert',
    },
  },
].map((route) => ({
  ...route,
  leftMenu: true,
}));
