import FirstScreen from '../FirstScreen';
<<<<<<< HEAD
import { SignUp } from '../SignUp/SignUp';
import  ItemPlace  from '../ItemPlace/ItemPlace';
import Footer from '../Footer/Footer';
=======
import ItemPlace from '../ItemPlace';
>>>>>>> f2ce9a9271facf893a9ae8c468cfc9992fe765a6
import './App.module.scss';

function App(): JSX.Element {
	return (
		<div>
<<<<<<< HEAD
			{/* <SignUp /> */}
			<ItemPlace
          image='https://cdn.tripster.ru/thumbs2/725b6ada-9815-11ed-87d9-ee8b4c069e8d.1220x600.jpeg'
          title='Some text'
          description='Some text'
          isFavorite= {true}
        />
			<Footer />
=======
			{/*<FirstScreen />*/}
			<ItemPlace imageUrl='http://placekitten.com/g/200/300' title='lorem' description='lorem ipsum' isFavorite />
>>>>>>> f2ce9a9271facf893a9ae8c468cfc9992fe765a6
		</div>
	);
}

export default App;
