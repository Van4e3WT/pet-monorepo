import cn from 'classnames';

import s from './loader.module.scss';

const SQUARES_COUNT = 9;

export type LoaderProps = {
  size?: 'sm' | 'md' | 'lg';
};

export function Loader({ size = 'md' }: LoaderProps) {
  return (
    <div role="status" aria-label="Загрузка" className={cn(s.loader, s[size])}>
      {Array.from({ length: SQUARES_COUNT }, (_, index) => (
        <span key={index} className={s.square} aria-hidden="true" />
      ))}
    </div>
  );
}
