import { useEffect, useRef } from 'react';
import FirstScreen from '../FirstScreen';
import Footer from '../Footer/Footer';
import ItemPlace from '../ItemPlace';
import Register from '../Register';
import './App.module.scss';
import CameraScreen from '../CameraScreen/CameraScreen';

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
		<div className='app' ref={fullscreenRef}>
			{/* <FirstScreen /> */}
			<CameraScreen/>
		</div>
	);
}

export default App;
