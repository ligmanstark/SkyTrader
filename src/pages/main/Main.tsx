import { FC } from 'react';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import { Search } from '../../components/search/Search';
// import { Loader } from '../../components/plug/Loader';
import { useDispatch } from 'react-redux';
import { setGoods } from '../../store/slices/goodsSlice';
import { useGetAllGoodsQuery } from '../../store/service/goodsService';
import { Logomini } from '../../assets/img/index';
import * as S from './style';
import { useEffect } from 'react';
import { GoodsList } from '../../components/goodsList/GoodsList';
const Main: FC = () => {
	const dispatch = useDispatch();
	const { data = [], isLoading } = useGetAllGoodsQuery();

	useEffect(() => {
		dispatch(setGoods(data));
	}, [isLoading]);

	return (
		<>
			<HelmetHead
				title={`Авито на свой лад`}
				descr={`Заработай свой первый рубль!`}
			/>
			<S.Main>
				<Container>
					<S.SearchBox>
						{/* <Loader /> */}
						<div
							style={{
								marginTop: '1rem',
							}}
						>
							<Logomini />
						</div>
						<Search onSubmit={() => console.log(1)} />
					</S.SearchBox>
					<S.TitleBlock>
						<>
							<S.TitleBlockH1>Объявления</S.TitleBlockH1>
						</>
					</S.TitleBlock>
					<GoodsList/>
				</Container>
			</S.Main>
		</>
	);
};

export default Main;
