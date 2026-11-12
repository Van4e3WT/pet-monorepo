import type { RouterProviderProps } from 'react-router';

import '@packages/ui/styles/base.scss';
import { RouterProvider } from 'react-router/dom';

type Props = {
  router: RouterProviderProps['router'];
};

export default function App({ router }: Props) {
  // TODO: Завернуть в Error Boundary
  return <RouterProvider router={router} />;
}
