import { useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import { ConfrimPhoneScreen } from '../ConfrimPhoneScreen/ConfrimPhoneScreen';
import FirstScreen from '../FirstScreen';
import Register from '../Register';
import { SignUp } from '../SignUp/SignUp';
import './App.module.scss';
import NotFound from '../../pages/404';

const App = (): JSX.Element => {
	const navigate = useNavigate();
	const fullscreenRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		fetch('https://sbhackathon-production.up.railway.app/', {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Access-Control-Allow-Origin': 'https://sb-hackathon.vercel.app/',
			},
		}).then((r) => {
			if (!r.ok) {
				return navigate('/login');
			}
		});
	}, []);

	const enterFullscreen = async () => {
		const element = fullscreenRef.current;

		if (element && element?.requestFullscreen) {
			element.requestFullscreen();
		}
	};

	return (
		<div className='app' ref={fullscreenRef}>
			<Routes>
				<Route path='/' element={<FirstScreen />} />
				<Route path='/login' element={<SignUp />} />
				<Route path='/register' element={<Register />} />
				<Route path='/confirm' element={<ConfrimPhoneScreen />} />
				<Route path='/home' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
