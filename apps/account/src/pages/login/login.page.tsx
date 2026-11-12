import { Button, TextField } from '@packages/ui';
import { Link } from 'react-router';

import { RoutePath } from '~/pages/routes';

import s from './login.page.module.scss';

export default function LoginPage() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>Вход в аккаунт</h1>
        <form onSubmit={handleSubmit} className={s.form}>
          <TextField placeholder="Электронная почта" type="email" name="email" />
          <TextField placeholder="Пароль" type="password" name="password" />
          <Button type="submit" size="large">
            Вход
          </Button>
        </form>
        <Link className={s.link} to={RoutePath.REGISTER}>
          Регистрация
        </Link>
      </div>
    </div>
  );
}
