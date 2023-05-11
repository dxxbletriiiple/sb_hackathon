import FirstScreen from '../FirstScreen';
import ItemPlace from '../ItemPlace';
import './App.module.scss';

function App(): JSX.Element {
	return (
		<div>
			{/*<FirstScreen />*/}
			<ItemPlace imageUrl='http://placekitten.com/g/200/300' title='lorem' description='lorem ipsum' isFavorite />
		</div>
	);
}

export default App;
