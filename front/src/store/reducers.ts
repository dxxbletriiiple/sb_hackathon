import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../@types';

const initialState: IRootState = {
	isLogged: false,
	isGuest: false,
};

export const mapsSlice = createSlice({
	name: 'maps',
	initialState,
	reducers: {
		onLogin: (state) => {
			console.log('qwqw');
			localStorage.setItem('isLogged', 'true');
			state.isLogged = true;
		},
	},
});
export const { onLogin } = mapsSlice.actions;
export default mapsSlice.reducer;
