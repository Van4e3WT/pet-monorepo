import { routesConfig as accountRoutesConfig } from 'account/routes';
import { redirect, type RouteObject } from 'react-router';

import NotFoundPage from './not-found/not-found.page';

export const RoutePath = {
  HOME: '/',
  ACCOUNT: '/account',
} as const;

export const routesConfig: RouteObject[] = [
  {
    index: true,
    loader: () => redirect(RoutePath.ACCOUNT, 301),
  },
  {
    path: RoutePath.ACCOUNT,
    children: accountRoutesConfig,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
  // TODO: Добавить ErrorBoundary
] satisfies RouteObject[];
