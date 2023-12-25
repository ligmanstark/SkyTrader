import { FC, useState, useRef } from 'react';
import * as S from './style';
import { BASE_URL } from '../../../utils/consts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { Button } from '../../form/Button';
import { NothingImage } from '../../../assets/img/index';
import { Input, InputPlaceBlack } from '../../form/Input';
import { InputField } from '../../form/InputField';
import { useUpdateUserMutation } from '../../../store/service/goodsService';
import { setUser } from '../../../store/slices/userSlice';
export const YourSellerInfo: FC = () => {
	const dispatch = useDispatch()
	const [updateDateUSer] = useUpdateUserMutation();
	const [showPhone, isShowPhone] = useState(false);
	const token = useSelector(
		(state: RootState) => state.userReducer.access_token
	);
	const name = useSelector((state: RootState) => state.userReducer.name);
	const email = useSelector((state: RootState) => state.userReducer.email);
	const city = useSelector((state: RootState) => state.userReducer.city);
	const phone = useSelector((state: RootState) => state.userReducer.phone);
	const surname = useSelector((state: RootState) => state.userReducer.surname);
	const avatar = useSelector((state: RootState) => state.userReducer.avatar);

	const nameContoll = useRef<HTMLInputElement | null>(null);
	const surnameContoll = useRef<HTMLInputElement | null>(null);
	const cityControll = useRef<HTMLInputElement | null>(null);
	const phoneControll = useRef<HTMLInputElement | null>(null);

	const handleUpdate = () => {
		updateDateUSer({
			body: {
				city: cityControll.current?.value,
				name: nameContoll.current?.value,
				surname: surnameContoll.current?.value,
				phone: phoneControll.current?.value,
			},
			accessToken: token as string,
		})
			.unwrap()
			.then((user) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						name: user.name,
						surname: user.surname,
						city: user.city,
						phone: user.phone,
						id: user.id,
					})
				);
			});
	};
	return (
		<S.Wrapper>
			{name && name ? (
				<S.Box>
					<S.H1Ad>{`Привет! ${name}`}</S.H1Ad>
					<S.H4Ad>Настройки профиля</S.H4Ad>
					<S.SubBox>
						<S.SubBoxAvatar>
							{avatar ? (
								<S.Img src={`${BASE_URL}/${avatar}`} />
							) : (
								<NothingImage />
							)}
							<p style={{ color: '#009ee4' }}>Заменить</p>
						</S.SubBoxAvatar>
						<S.SubBoxInfo>
							<div>
								<InputField>
									<S.Info1>
										<div>
											<S.SellerName>Имя</S.SellerName>
											<InputPlaceBlack
												type="text"
												placeholder={name}
												required
												ref={nameContoll}
											/>
										</div>
										<div>
											<S.SellerName>Фамилия</S.SellerName>
											<InputPlaceBlack
												type="text"
												placeholder={surname}
												ref={surnameContoll}
											></InputPlaceBlack>
										</div>
									</S.Info1>
									<S.Info2>
										<div style={{ maxWidth: '14.8rem' }}>
											<S.SellerName>Город</S.SellerName>
											<InputPlaceBlack
												type="text"
												placeholder={city}
												ref={cityControll}
											></InputPlaceBlack>
										</div>
										<div>
											<S.SellerName>Телефон</S.SellerName>
											<InputPlaceBlack
												type="number"
												placeholder={phone}
												ref={phoneControll}
											></InputPlaceBlack>
										</div>
									</S.Info2>

									<Button
										style={{ marginTop: '1rem' }}
										$border
										type="submit"
										onClick={handleUpdate}
									>
										Сохранить
									</Button>
								</InputField>
							</div>
						</S.SubBoxInfo>
					</S.SubBox>
				</S.Box>
			) : (
				''
			)}
		</S.Wrapper>
	);
};