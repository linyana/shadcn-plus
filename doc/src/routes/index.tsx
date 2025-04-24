import { leftRoutes } from './leftMenu';
import { IRouteType } from './types';
import { Dashboard } from '@/pages';

export const routes: IRouteType[] = [
  {
    id: '/',
    path: '/',
    element: <Dashboard />,
  },
  ...leftRoutes,
];
