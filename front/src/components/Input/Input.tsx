import cn from 'classnames';
import { InputInterface } from '../../@types';
import st from './Input.module.scss';

export const Input = ({ placeholder, type, icon, err }: InputInterface): JSX.Element => {
	return (
		<>
			<div className={cn(st.input, { [st.err]: err })}>
				<img className={st.icon} src={icon} alt={placeholder} />
				<input type={type} placeholder={placeholder} />
			</div>
			{err && <div className={st.errtext}>Введите правильный номер</div>}
		</>
	);
};
