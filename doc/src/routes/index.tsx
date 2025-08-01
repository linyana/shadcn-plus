import { Navigate } from 'react-router-dom';
import { leftMenuRoutes } from './leftMenu/routes';
import { IRouteType } from './types';
import { Dashboard, ComponentsPage } from '@/pages';

const defaultRoute = {
  '/': <Dashboard />,
  '*': <Navigate to="/" />,
  '/components/overview': <ComponentsPage />,
};

export const routes: IRouteType[] = Object.entries(
  Object.assign(defaultRoute, leftMenuRoutes),
).map(([path, element]) => ({ path, element }));
