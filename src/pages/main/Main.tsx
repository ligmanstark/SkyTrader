import { FC } from 'react';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import { Search } from '../../components/form/search/Search';
// import { Loader } from '../../components/plug/Loader';
import {
	useGetAllGoodsQuery,
	useGetAllUsersQuery,
} from '../../store/service/goodsService';
import { Logomini } from '../../assets/img/index';
import * as S from './style';
import { useEffect } from 'react';
const Main: FC = () => {
	const { data = [], error, isLoading } = useGetAllGoodsQuery();
	// const { data = [], error, isLoading } = useGetAllUsersQuery();

	console.log(data, error);
	useEffect(() => {
		console.log('error =', error);
		console.log(isLoading);
	}, [error]);

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
				</Container>
			</S.Main>
		</>
	);
};

export default Main;
