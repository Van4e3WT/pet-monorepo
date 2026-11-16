import { createBrowserRouter, RouterProvider } from 'react-router';

import '@packages/ui/styles/base.scss';
import { routesConfig } from '~/pages/routes';

export default function App() {
  return <RouterProvider router={createBrowserRouter(routesConfig)} />;
}
