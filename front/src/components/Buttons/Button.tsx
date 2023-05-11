import cn from 'classnames';
import { IButton } from '../../@types';
import st from './Button.module.scss';

export const Button = ({ text, clazz, onClick }: IButton) => {
	return (
		<>
			<button className={cn(st.btn, { [st.outline]: clazz })} onClick={onClick}>
				{text}
			</button>
		</>
	);
};
