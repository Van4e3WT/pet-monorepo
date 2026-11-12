import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { router } from './pages/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>,
);
