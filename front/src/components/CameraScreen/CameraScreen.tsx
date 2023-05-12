import React, { useRef, useState } from 'react';
import { Dropbox } from 'dropbox';
import st from './CameraScreen.module.scss';
import Footer from '../Footer/Footer';

const dbx = new Dropbox({
	accessToken:
		'Bearer sl.BeP7OzIW2QDbjFk0pzzkoboW1xRPlId7gGGtr8GOWUSeh13t_2bGQY3NEcPZhynYz-Nqj-XxnW7cNEzv358eQ9x5H8L3z0UnxF-4jBxmI-kBGdITTYkTk1vEUsBMO8-Vt3csIFY',
});

const CameraScreen = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const videoRef = useRef(null);

	/*const handleTakePhoto = async () => {
		try {
			const constraints = { video: true };
			const handleCapture = () => {
				const context = canvasRef.current.getContext('2d');
				context.drawImage(videoRef.current, 0, 0, 640, 480);
				const dataUrl = canvasRef.current.toDataURL('image/jpeg');
				const blob = dataURItoBlob(dataUrl);
				const filename = 'photo-' + Date.now() + '.jpg';

				dbx
					.filesUpload({ path: '/' + filename, contents: blob })
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
						console.error(error);
					});
			};
		} catch (error) {
			console.error('Error taking photo:', error);
		}
	};*/

	return (
		<div className={st.camera}>
			<video ref={videoRef} className={st.img}></video>
			<canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
			<button className={st.btn}>Take Photo</button>
			<Footer />
		</div>
	);
};

export default CameraScreen;
