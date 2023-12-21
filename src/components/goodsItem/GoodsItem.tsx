import { FC } from 'react';
import * as T from './types/index';
import { BASE_URL } from '../../utils/consts';
import * as S from './style';

export const GoodsItem: FC<T.TGoods> = (props) => {
	const { title, description, id, images, price, user, created_on } = props;
	console.log(images[0]);
	const newDate = created_on
		.slice(0, 10)
		.split('-')
		.reverse()
		.reduce((el, sum) => el + '.' + sum);

	return (
		<div>
			<div>
				{images[0] && images[0].url ? (
					<S.Image src={`${BASE_URL}/${images[0].url}`} />
				) : (
					<S.Image src="src/assets/img/withoutImg.jpeg" />
				)}
			</div>
			<S.CardInfo>
				<S.Title>{title}</S.Title>
				<S.Description>{description ? description : 'Описание отсутствует'}</S.Description>
				<div>{`${price}₽`}</div>
				<S.UserInfo>
					<div>{`${user.name} из ${user.city}`}</div>
					<div>{`Создано: ${newDate}`}</div>
				</S.UserInfo>
			</S.CardInfo>
		</div>
	);
};