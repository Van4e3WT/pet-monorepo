import { Button, TextField } from '@packages/ui';
import { Link } from 'react-router';

import { RoutePath } from '~/pages/routes';

import s from './register.page.module.scss';

export default function RegisterPage() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>Регистрация</h1>
        <form onSubmit={handleSubmit} className={s.form}>
          <TextField placeholder="Электронная почта" type="email" name="email" />
          <TextField placeholder="Пароль" type="password" name="password" />
          <TextField placeholder="Подтверждение пароля" type="password" name="confirmPassword" />
          <Button type="submit" size="large">
            Регистрация
          </Button>
        </form>
        <Link className={s.link} to={RoutePath.LOGIN}>
          Вход
        </Link>
      </div>
    </div>
  );
}
