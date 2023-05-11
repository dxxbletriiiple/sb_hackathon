import FirstScreen from '../FirstScreen';
import { SignUp } from '../SignUp/SignUp';
import  {ItemPlace}  from '../ItemPlace/ItemPlace';
import Footer from '../Footer/Footer';
import {ConfrimPhoneScreen} from '../ConfrimPhoneScreen/ConfrimPhoneScreen'
import './App.module.scss';

function App(): JSX.Element {
	return (
		<div>
			{/*<FirstScreen />*/}
			{/* <ItemPlace imageUrl='http://placekitten.com/g/200/300' title='lorem' description='lorem ipsum' isFavorite /> */}
			<ConfrimPhoneScreen phoneNumber="+7(999) 999-99-99"/>
		</div>
	);
}

export default App;
