import { routesConfig as accountRoutesConfig } from 'account/routes';
import { redirect, type RouteObject } from 'react-router';

export const RoutePath = {
  HOME: '/',
  ACCOUNT: '/account',
} as const;

export const routesConfig: RouteObject[] = [
  {
    path: RoutePath.HOME,
    loader: () => redirect(RoutePath.ACCOUNT, 301),
  },
  {
    path: RoutePath.ACCOUNT,
    children: accountRoutesConfig,
  },
  // TODO: Добавить 404 страницу
  // TODO: Добавить ErrorBoundary
] satisfies RouteObject[];
