import { FC, useState } from 'react';
import * as S from './style';
import { TGoods } from '../../../store/service/types/TGoods';
import { Button } from '../../form/Button';
import { BASE_URL } from '../../../utils/consts';
import { Link } from 'react-router-dom';
export const ArticleInfo: FC<TGoods> = (props) => {
	const [showPhone, isShowPhone] = useState(false);
	const { title, price, created_on, user } = props;
	const newDate = created_on
		.slice(0, 10)
		.split('-')
		.reverse()
		.reduce((el, sum) => el + '.' + sum);

	const startSells = user.sells_from
		.slice(0, 10)
		.split('-')
		.reverse()
		.reduce((el, sum) => el + '.' + sum);
	const newPhone = user.phone.slice(0, 7) + 'XXXXXX';
	const phoneShow = () => {
		isShowPhone((prev) => !prev);
	};
	return (
		<S.Box>
			<S.H1Ad>{title}</S.H1Ad>
			<S.H3Box>
				<S.H3Ad>{`Создано: ${newDate}`}</S.H3Ad>
				<S.H3Ad>{user.city}</S.H3Ad>
				<S.H3FB>12 отзывов</S.H3FB>
			</S.H3Box>
			<S.SellsBox>
				<S.H1Ad>{`${price} ₽`}</S.H1Ad>
				<S.Buttons>
					{!showPhone ? (
						<Button $color $border onClick={phoneShow}>
							{`Показать телефон`}
							<br />
							{newPhone}
						</Button>
					) : (
						<Button $color $border onClick={phoneShow}>
							{`Показать телефон`}
							<br />
							{user.phone}
						</Button>
					)}
				</S.Buttons>
				<S.SellerBox>
					<S.SellerImg src={`${BASE_URL}/${user.avatar}`} />
					<S.SubSellerBox>
						<Link
							to={`/profile/${user.id}`}
							style={{
								textDecoration: 'none',
							}}
						>
							<S.SellerName>{user.name}</S.SellerName>
							<S.SellerStartSells>{`Продает товары с ${startSells}`}</S.SellerStartSells>
						</Link>
					</S.SubSellerBox>
				</S.SellerBox>
			</S.SellsBox>
		</S.Box>
	);
};
