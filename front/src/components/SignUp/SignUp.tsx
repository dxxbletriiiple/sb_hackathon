import Input from '../Input';
import st from './SignUp.module.scss';
import call from '../../assets/call.svg';
import lock from '../../assets/lock.svg';
import { Button } from '../Buttons';

export const SignUp = (): JSX.Element => {
	return (
		<div className={st.signup}>
			<img className={st.logo} src='http://placekitten.com/200/200' alt='logo' />
			<div className={st.form}>
				<Input icon={call} type='tel' placeholder='Номер телефона' />
				<Input icon={lock} type='password' placeholder='Пароль' />
			</div>
			<div className={st.btnwrap}>
				<Button text='Войти' />
				<div className={st.sign_up}>Зарегистрироваться</div>
				<span className={st.or}>или</span>
				<Button text='Войти как гость' clazz='outline' />
				<div className={st.forgot}>Забыли пароль?</div>
			</div>
		</div>
	);
};
