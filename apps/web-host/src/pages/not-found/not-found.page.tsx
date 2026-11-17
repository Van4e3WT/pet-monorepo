import { NotFoundScreen } from '@packages/ui';
import { useNavigate } from 'react-router';

import { RoutePath } from '~/pages/routes';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    void navigate(RoutePath.HOME);
  };

  return <NotFoundScreen onClick={handleClick} />;
}
