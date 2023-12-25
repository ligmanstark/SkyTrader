import { FC } from 'react';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import * as S from './style';
import { SubHeader } from '../../components/subHeader/SubHeader';
import { CardComponents } from '../../components/cardComponents/CardComponents';
export const GoodsCard: FC = () => {
	return (
		<S.Wrapper>
			<HelmetHead
				title={`Авито на свой лад`}
				descr={`Заработай свой первый рубль!`}
			/>

			<Container>
				<SubHeader />
				<CardComponents />
			</Container>
		</S.Wrapper>
	);
};
