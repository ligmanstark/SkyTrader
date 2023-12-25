import { FC, useState } from 'react';
import * as S from './style';
import { BASE_URL } from '../../../utils/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Button } from '../../form/Button';
import { NothingImage } from '../../../assets/img/index';
import { Input, InputPlaceBlack } from '../../form/Input';
import { InputField } from '../../form/InputField';

export const YourSellerInfo: FC = () => {
	const [showPhone, isShowPhone] = useState(false);
	const name = useSelector((state: RootState) => state.userReducer.name);
	const email = useSelector((state: RootState) => state.userReducer.email);
	const city = useSelector((state: RootState) => state.userReducer.city);
	const phone = useSelector((state: RootState) => state.userReducer.phone);
	const surname = useSelector((state: RootState) => state.userReducer.surname);
	const avatar = useSelector((state: RootState) => state.userReducer.avatar);

	return (
		<S.Wrapper>
			{name && name ? (
				<S.Box>
					<S.H1Ad>{`Привет! ${name}`}</S.H1Ad>
					<S.SubBox>
						<S.SubBoxAvatar>
							{avatar ? (
								<S.Img src={`${BASE_URL}/${avatar}`} />
							) : (
								<NothingImage />
							)}
							<p style={{color: '#009ee4'}}>Заменить</p>
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
											/>
										</div>
										<div>
											<S.SellerName>Фамилия</S.SellerName>
											<InputPlaceBlack
												type="text"
												placeholder={surname}
											></InputPlaceBlack>
										</div>
									</S.Info1>
									<S.Info2>
										<div style={{ maxWidth: '14.8rem' }}>
											<S.SellerName>Город</S.SellerName>
											<InputPlaceBlack
												type="text"
												placeholder={city}
											></InputPlaceBlack>
										</div>
										<div>
											<S.SellerName>Телефон</S.SellerName>
											<InputPlaceBlack
												type="number"
												placeholder={phone}
											></InputPlaceBlack>
										</div>
									</S.Info2>

									<Button
										style={{ marginTop: '1rem' }}
										$border
										type="submit"
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
