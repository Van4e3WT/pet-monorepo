import { Button } from '@packages/ui';
import type { ComponentProps } from 'react';

import s from './not-found-screen.module.scss';

export type NotFoundScreenProps = {
  onClick?: ComponentProps<'button'>['onClick'];
};

export function NotFoundScreen({ onClick }: NotFoundScreenProps) {
  return (
    <div className={s.wrapper}>
      <span className={s.code}>404</span>
      <p className={s.description}>Похоже, ничего не найдено</p>
      <Button size="lg" onClick={onClick}>
        На главную
      </Button>
    </div>
  );
}
