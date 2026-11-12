import { createBrowserRouter, redirect } from 'react-router';

export const RoutePath = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
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
]);
