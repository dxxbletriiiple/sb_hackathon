import { useEffect, memo, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import { ConfrimPhoneScreen } from '../ConfrimPhoneScreen/ConfrimPhoneScreen';
import FirstScreen from '../FirstScreen';
import Register from '../Register';
import { SignUp } from '../SignUp/SignUp';
import NotFound from '../../pages/404';
import CameraScreen from '../CameraScreen/CameraScreen';
import { useSelector } from 'react-redux';
import { IRootState } from '../../@types';
import { getDataFromStortage } from '../../utils/getDataFromStortage';
import './App.module.scss';

const App = (): JSX.Element => {
	const { isLogged } = useSelector((state: IRootState) => state);
	const fullscreenRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		//enterFullscreen();
		getDataFromStortage();
		if (!isLogged) {
			fetch('https://sbhackathon-production.up.railway.app/', {
				method: 'GET',
				mode: 'no-cors',
				headers: {
					'Access-Control-Allow-Origin': 'https://sb-hackathon.vercel.app/',
				},
			}).then((r) => {
				if (!r.ok && !isLogged) {
					return navigate('/login');
				}
			});
		}
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
				<Route path='/camera' element={<CameraScreen />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
