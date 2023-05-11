import FirstScreen from '../FirstScreen';
import ItemPlace from '../ItemPlace';
import Register from '../Register';
import './App.module.scss';

function App(): JSX.Element {
	return (
		<div>
			{/*<ItemPlace imageUrl='http://placekitten.com/g/200/300' title='lorem' description='lorem ipsum' isFavorite />*/}
			<Register />
		</div>
	);
}

export default App;
