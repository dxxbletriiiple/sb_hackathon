import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons';
import styles from './ConfrimPhoneScreen.module.scss';

type Props = {
	phoneNumber?: string;
};

export const ConfrimPhoneScreen: React.FC<Props> = ({ phoneNumber }) => {
	const nav = useNavigate();

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Подтверждение номера телефона</h2>
			<p className={styles.subtitle}>На номер {phoneNumber} был отправлен код</p>
			<div className={styles.inputWrapper}>
				<span className={styles.inputIcon}>
					<svg width='25' height='27' viewBox='0 0 25 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13.2924 15.5957V19.8511H11.2707V15.5957H13.2924Z' fill='#C7C4DC' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M18.3465 10.2766V8.14894C18.3465 4.62371 15.6311 1.76596 12.2815 1.76596C8.93192 1.76596 6.21654 4.62371 6.21654 8.14894V10.2766H2.17322V25.1702H22.3898V10.2766H18.3465ZM12.2815 3.89362C10.0485 3.89362 8.2382 5.79879 8.2382 8.14894V10.2766H16.3248V8.14894C16.3248 5.79879 14.5146 3.89362 12.2815 3.89362ZM4.19488 12.4043V23.0426H20.3682V12.4043H4.19488Z'
							fill='#C7C4DC'
						/>
					</svg>
				</span>
				<input type='text' className={styles.input} placeholder='Код' />
			</div>
			<Button text='Подтвердить' onClick={() => nav('/home')} />
		</div>
	);
};
