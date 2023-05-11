import FirstScreen from '../FirstScreen';
import { SignUp } from '../SignUp/SignUp';
import  ItemPlace  from '../ItemPlace/ItemPlace';
import Footer from '../Footer/Footer';
import './App.module.scss';

function App(): JSX.Element {

	return (
		<div>
			{/* <SignUp /> */}
			<ItemPlace
          image='https://cdn.tripster.ru/thumbs2/725b6ada-9815-11ed-87d9-ee8b4c069e8d.1220x600.jpeg'
          title='Some text'
          description='Some text'
          isFavorite= {true}
        />
			<Footer />
		</div>
	);
}

export default App;
