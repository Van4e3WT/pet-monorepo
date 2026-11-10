import cn from 'classnames';
import type { ComponentPropsWithRef } from 'react';

import s from './button.module.scss';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

export function Button({ variant = 'primary', size = 'medium', type = 'button', children, ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(s.button, s[size], s[variant])} {...props}>
      {children}
    </button>
  );
}
