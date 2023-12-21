import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 import * as T from './types/index';

const initialState: T.TGoodsState = {
	data:[],
};

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		setGoods(state, action) {
			state.data = action.payload;
		},
	},
});
export const { setGoods } = goodsSlice.actions;

export default goodsSlice.reducer;
