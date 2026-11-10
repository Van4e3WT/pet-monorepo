import cn from 'classnames';
import type { ComponentPropsWithRef } from 'react';

import s from './text-field.module.scss';

export type TextFieldProps = ComponentPropsWithRef<'input'>;

export function TextField({ className, ...props }: TextFieldProps) {
  return <input {...props} className={cn(s.input, className)} />;
}
