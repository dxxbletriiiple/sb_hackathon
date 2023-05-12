import { configureStore } from '@reduxjs/toolkit';
import mapsSlice from './reducers';

export const store = configureStore({
	reducer: {
		mapsSlice,
	},
});
