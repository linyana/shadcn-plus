import { leftMenuRoutes } from './leftMenu/routes';
import { IRouteType } from './types';
import { Dashboard } from '@/pages';

const defaultRoute = {
  '/': <Dashboard />,
};

export const routes: IRouteType[] =
  Object.entries(
    Object.assign(defaultRoute, leftMenuRoutes),
  ).map(([path, element]) => ({ path, element }));
