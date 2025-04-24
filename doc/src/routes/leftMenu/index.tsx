import { IRouteType } from '../types';

export const leftRoutes: IRouteType[] = [
  {
    id: '/components/label',
    element: <></>,
    leftMenu: true,
    sidebar: {
      type: 'label',
      label: 'Accordion',
    },
  },
  {
    id: '/components/accordion',
    path: '/components/accordion',
    element: <></>,
    leftMenu: true,
    sidebar: {
      label: 'Accordion',
    },
  },
  {
    id: '/components/alert',
    path: '/components/alert',
    element: <></>,
    leftMenu: true,
    sidebar: {
      label: 'Alert',
    },
  },
];
