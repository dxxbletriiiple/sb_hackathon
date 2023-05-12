import Footer from '../components/Footer/Footer';
import st from './404.module.scss';

const NotFound = () => {
	return (
		<div className={st.notfound}>
			<div className={st.wrap}>
				<h2 className={st.title}>404</h2>
				<span className={st.text}>NOT FOUND :{'('}</span>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
