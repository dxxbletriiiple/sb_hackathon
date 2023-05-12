import { IProgress } from '../../@types';
import st from './Progress.module.scss';

const Progress = ({ lvl, points }: IProgress) => {
	return (
		<div className={st.wrap}>
			<div className={st.progres_txt}>
				<span className={st.lvl}>Lvl {lvl}</span>
				<span className={st.points}>
					{points[0]}/{points[1]}
				</span>
			</div>
			<div className={st.progress}>
				<div className={st.body}></div>
			</div>
		</div>
	);
};

export default Progress;
