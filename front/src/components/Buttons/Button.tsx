import cn from 'classnames';
import { IButton } from '../../@types';
import st from './Button.module.scss';

export const Button = ({ text, clazz }: IButton) => {
	return (
		<>
			<button className={cn(st.btn, { [st.outline]: clazz })}>{text}</button>
		</>
	);
};
