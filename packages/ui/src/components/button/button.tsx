import cn from 'classnames';
import type { ComponentPropsWithRef } from 'react';

import s from './button.module.scss';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} type={type} className={cn(s.button, s[size], s[variant], className)}>
      {children}
    </button>
  );
}
