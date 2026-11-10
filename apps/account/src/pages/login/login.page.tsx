import { Button, TextField } from '@packages/ui';

import s from './login.page.module.scss';

export default function LoginPage() {
  return (
    <form className={s.form}>
      <TextField placeholder="Email" type="email" />
      <TextField placeholder="Password" type="password" />
      <Button type="submit">Вход</Button>
    </form>
  );
}
