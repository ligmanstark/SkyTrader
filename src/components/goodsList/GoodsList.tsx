import { FC } from 'react';
import { GoodsItem } from '../goodsItem/GoodsItem';
import * as S from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as T from './types/index';

export const GoodsList: FC = () => {
	const goods = useSelector((state: RootState) => state.goodsReducer.data);
	return (
		<S.GoodsBox>
			{goods && goods.map((el) => <GoodsItem key={el.id} {...el} />)}
		</S.GoodsBox>
	);
};
