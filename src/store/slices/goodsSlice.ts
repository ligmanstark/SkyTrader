import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as T from './types/index';

const initialState: T.TGoodsState = {
	data: [],
	searchData: [],
	searchRef: '',
};

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		setGoods(state, action) {
			state.data = action.payload;
		},
		setSearchRef(state, action: PayloadAction<string>) {
			console.log(action.payload);
			state.searchRef = action.payload;
		},
		setSearchGood(state, action) {
			if (state.searchRef !== '') {
				state.searchData = action.payload;
			} else {
				state.searchData = [];
			}
		},
	},
});
export const { setGoods, setSearchRef, setSearchGood } = goodsSlice.actions;

export default goodsSlice.reducer;
