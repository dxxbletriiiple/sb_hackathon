import Input from '../Input';
import st from './SignUp.module.scss';
import call from '../../assets/call.svg';
import lock from '../../assets/lock.svg';
import { Button } from '../Buttons';
import { Link, useNavigate } from 'react-router-dom';
import { onLogin } from '../../store/reducers';

export const SignUp = (): JSX.Element => {
	const nav = useNavigate();

	const handleLogin = () => {
		onLogin();
		nav('/home');
	};
	return (
		<div className={st.signup}>
			<img className={st.logo} src='http://placekitten.com/200/200' alt='logo' />
			<div className={st.form}>
				<Input icon={call} type='tel' placeholder='Номер телефона' />
				<Input icon={lock} type='password' placeholder='Пароль' />
			</div>
			<div className={st.btnwrap}>
				<Button text='Войти' onClick={handleLogin} />

				<Link to='/register'>
					<div className={st.sign_up}>Зарегистрироваться</div>
				</Link>
				<span className={st.or}>или</span>
				<Button text='Войти как гость' clazz='outline' onClick={() => nav('/guest')} />
				<div className={st.forgot}>Забыли пароль?</div>
			</div>
		</div>
	);
};
