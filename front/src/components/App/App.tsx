import { useEffect, useRef } from 'react';
import FirstScreen from '../FirstScreen';
import Footer from '../Footer/Footer';
<<<<<<< HEAD
import MapComp from '../MapComp/MapComp';
import {ConfrimPhoneScreen} from '../ConfrimPhoneScreen/ConfrimPhoneScreen'
=======
import ItemPlace from '../ItemPlace';
import Register from '../Register';
>>>>>>> e153b804a46fff782410cccbaef1c1ba920e1381
import './App.module.scss';

function App(): JSX.Element {
	const fullscreenRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		fetch('https://sbhackathon-production.up.railway.app/', {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Access-Control-Allow-Origin': 'https://sb-hackathon-8v3kvduim-dxxbletriiiple.vercel.app',
			},
		}).then(console.log);
	}, []);

	const enterFullscreen = async () => {
		const element = fullscreenRef.current;

		if (element && element?.requestFullscreen) {
			element.requestFullscreen();
		}
	};

	return (
<<<<<<< HEAD
		<div>
			{/*<FirstScreen />*/}
			{/* <ItemPlace imageUrl='http://placekitten.com/g/200/300' title='lorem' description='lorem ipsum' isFavorite /> */}
			{/* <ConfrimPhoneScreen phoneNumber="+7(999) 999-99-99"/> */}
			<MapComp/>
=======
		<div className='app' ref={fullscreenRef}>
			<FirstScreen />
>>>>>>> e153b804a46fff782410cccbaef1c1ba920e1381
		</div>
	);
}

export default App;
