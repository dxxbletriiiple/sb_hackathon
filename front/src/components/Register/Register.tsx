import { Button } from '../Buttons';
import Input from '../Input';
import st from './Register.module.scss';
import lock from '../../assets/lock.svg';
import call from '../../assets/call.svg';
import acc from '../../assets/acc.svg';

export const Register = (): JSX.Element => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};
	return (
		<div className={st.register}>
			<h2 className={st.title}>Регистрация</h2>
			<form className={st.form}>
				<Input placeholder={'Номер телефона'} type={'tel'} icon={call} />
				<Input placeholder={'Логин'} type={'text'} icon={acc} />
				<Input placeholder={'Пароль'} type={'password'} icon={lock} />
				<Input placeholder={'Повтор пароля'} type={'password'} icon={lock} />
				<Button text={'Зарегистрироваться'} onClick={handleClick} />
			</form>
		</div>
	);
};
