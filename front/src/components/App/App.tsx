import { SignUp } from '../SignUp/SignUp';
import  ItemPlace  from '../ItemPlace/ItemPlace';
import './App.module.scss';

function App(): JSX.Element {

	return (
		<div>
			{/* <SignUp /> */}
			<ItemPlace
			image= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/DSC07437-%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8C.jpg/600px-DSC07437-%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8C.jpg'
			title="Place Title"
			description="Place Description"
			isFavorite={true}
      		/>
		</div>
	);
}

export default App;
