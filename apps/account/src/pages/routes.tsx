import { type RouteObject, redirect } from 'react-router';

import { createRouterPath } from '~/utils';

export const RoutePath = {
  HOME: createRouterPath('/'),
  LOGIN: createRouterPath('/login'),
  REGISTER: createRouterPath('/register'),
} as const;

export const routesConfig: RouteObject[] = [
  {
    index: true,
    loader: () => redirect(RoutePath.LOGIN, 301),
  },
  {
    path: RoutePath.LOGIN,
    lazy: async () => ({ Component: (await import('~/pages/login/login.page')).default }),
  },
  {
    path: RoutePath.REGISTER,
    lazy: async () => ({ Component: (await import('~/pages/register/register.page')).default }),
  },
  // TODO: Сделать `/profile` страницу
  // TODO: Добавить 404 страницу
  // TODO: Добавить ErrorBoundary
];
