import { useState } from 'react';
import Progress from '../Progress/Progress';
import st from './Home.module.scss';
import map from '../../assets/map.svg';
import list from '../../assets/list.svg';
import ItemPlace from '../ItemPlace';
import MapComp from '../MapComp/MapComp';
import Footer from '../Footer/Footer';
const Home = () => {
	const [idx, setIdx] = useState(0);
	const arr = [
		{ img: map, txt: 'Вид карты' },
		{ img: list, txt: 'Список' },
	];
	const handleChange = () => {
		if (idx === 0) return setIdx(1);
		setIdx(0);
	};
	return (
		<div className={st.home}>
			<h2 className={st.title}>Интересные места</h2>
			<Progress lvl={1} points={[300, 700]} />
			<div className={st.btns}>
				<button className={st.btn} onClick={handleChange}>
					<img src={arr[idx].img} alt={arr[idx].txt} />
					<span>{arr[idx].txt}</span>
				</button>
				<button className={st.settings}>
					<svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9.99996 19.9375C7.89329 19.9375 6.12929 21.395 5.55063 23.375H2.66663V26.125H5.55063C6.12929 28.105 7.89329 29.5625 9.99996 29.5625C12.1066 29.5625 13.8706 28.105 14.4493 26.125H29.3333V23.375H14.4493C13.8706 21.395 12.1066 19.9375 9.99996 19.9375ZM9.99996 26.8125C8.89729 26.8125 7.99996 25.8871 7.99996 24.75C7.99996 23.6129 8.89729 22.6875 9.99996 22.6875C11.1026 22.6875 12 23.6129 12 24.75C12 25.8871 11.1026 26.8125 9.99996 26.8125ZM22 11.6875C19.8933 11.6875 18.1293 13.145 17.5506 15.125H2.66663V17.875H17.5506C18.1293 19.855 19.8933 21.3125 22 21.3125C24.1066 21.3125 25.8706 19.855 26.4493 17.875H29.3333V15.125H26.4493C25.8706 13.145 24.1066 11.6875 22 11.6875ZM22 18.5625C20.8973 18.5625 20 17.6371 20 16.5C20 15.3629 20.8973 14.4375 22 14.4375C23.1026 14.4375 24 15.3629 24 16.5C24 17.6371 23.1026 18.5625 22 18.5625Z'
							fill='#C7C4DC'
						/>
						<path
							d='M17.116 6.875C16.5373 4.895 14.7733 3.4375 12.6666 3.4375C10.56 3.4375 8.79596 4.895 8.21729 6.875H2.66663V9.625H8.21729C8.79596 11.605 10.56 13.0625 12.6666 13.0625C14.7733 13.0625 16.5373 11.605 17.116 9.625H29.5V6.875H17.116ZM12.6666 10.3125C11.564 10.3125 10.6666 9.38713 10.6666 8.25C10.6666 7.11287 11.564 6.1875 12.6666 6.1875C13.7693 6.1875 14.6666 7.11287 14.6666 8.25C14.6666 9.38713 13.7693 10.3125 12.6666 10.3125Z'
							fill='#C7C4DC'
						/>
					</svg>
				</button>
			</div>
			<div className={st.content}>
				{idx == 0 ? (
					<MapComp />
				) : (
					new Array(6)
						.fill(6)
						.map((_) => <ItemPlace imageUrl='https://placekitten.com/g/200/300' title='lorem' description='lorem ipsum dolor amet ' isFavorite />)
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
