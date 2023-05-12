import { onLogin } from '../store/reducers';

export const getDataFromStortage = () => {
	const data = localStorage.getItem('isLogged');
	console.log(data);
	//localStorage.setItem('isLogged', 'true');
	if (data) {
		onLogin();
	}
};
