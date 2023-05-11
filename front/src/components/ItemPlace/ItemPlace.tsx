<<<<<<< HEAD
import React from 'react';
=======
import { ItemProps } from '../../@types';
>>>>>>> f2ce9a9271facf893a9ae8c468cfc9992fe765a6
import styles from './ItemPlace.module.scss';

export const ItemPlace = ({ imageUrl, title, description, isFavorite }: ItemProps): JSX.Element => {
	return (
		<div className={styles.item}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt={title} className={styles.image} />
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.favorite}>
				<svg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10.8333 19.8792L9.2625 18.4492C3.68333 13.39 0 10.0533 0 5.95833C0 2.62167 2.62167 0 5.95833 0C7.84333 0 9.6525 0.8775 10.8333 2.26417C12.0142 0.8775 13.8233 0 15.7083 0C19.045 0 21.6667 2.62167 21.6667 5.95833C21.6667 10.0533 17.9833 13.39 12.4042 18.46L10.8333 19.8792Z'
						fill={isFavorite ? '#ff6347' : '#79747E'}
					/>
				</svg>
			</div>
		</div>
	);
};
