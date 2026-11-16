import { createBrowserRouter } from 'react-router';

import '@packages/ui/styles/base.scss';
import { RouterProvider } from 'react-router/dom';

import { routesConfig } from '~/pages/routes';

export default function App() {
  return <RouterProvider router={createBrowserRouter(routesConfig)} />;
}
