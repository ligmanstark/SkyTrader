import { FC } from 'react';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import { Search } from '../../components/search/Search';
// import { Loader } from '../../components/plug/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setGoods, setSearchGood } from '../../store/slices/goodsSlice';
import {
	useGetAllGoodsQuery,
	useLazyGetByIdGoodQuery,
} from '../../store/service/goodsService';
import { Logomini } from '../../assets/img/index';
import * as S from './style';
import { useEffect } from 'react';
import { GoodsList } from '../../components/goodsList/GoodsList';
import { searchID } from '../../components/helpers/searchID';
const Main: FC = () => {
	const dispatch = useDispatch();
	const { data = [], isLoading } = useGetAllGoodsQuery();
	const searchRef = useSelector(
		(state: RootState) => state.goodsReducer.searchRef
	);
	const [fetchSearch] = useLazyGetByIdGoodQuery();

	useEffect(() => {
		dispatch(setGoods(data));
	}, [isLoading]);

	const fetchGood = () => {
		if (searchRef !== '') {
			console.log(searchID(data, searchRef));
			const searchDataID: number = searchID(data, searchRef)[0].id;
			console.log(searchID(data, searchRef));
			fetchSearch(searchDataID)
				.unwrap()
				.then((data) => {
					dispatch(setSearchGood([data]));
				})
				.catch((err) => alert(err));
		} else if (searchRef === '') {
			dispatch(setSearchGood([]));
		}
	};

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
						<Search hasError={!data} onSubmit={fetchGood} />
					</S.SearchBox>
					<S.TitleBlock>
						<>
							<S.TitleBlockH1>Объявления</S.TitleBlockH1>
						</>
					</S.TitleBlock>
					<GoodsList />
				</Container>
			</S.Main>
		</>
	);
};

export default Main;
