import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../@types';

const initialState: IRootState = {
	isLogged: false,
	isGuest: false,
};

export const mapsSlice = createSlice({
	name: 'maps',
	initialState,
	reducers: {},
});

export default mapsSlice.reducer;
