import * as T from './index';

export type TGoodsState = {
	data: T.TGoods[];
	status?: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string | undefined;
};
