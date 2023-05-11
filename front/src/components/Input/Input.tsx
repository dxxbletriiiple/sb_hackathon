import st from './Input.module.scss';

interface InputInterface {
	placeholder: string;
	type: string;
}
export const Input = ({ placeholder, type }: InputInterface): JSX.Element => {
	return (
		<>
			<input className={st.input} type={type} placeholder={placeholder} />
		</>
	);
};
