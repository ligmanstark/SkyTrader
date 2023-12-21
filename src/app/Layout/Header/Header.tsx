import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_ROUTE } from '../../../utils/consts';
import { Button } from '../../../components/form/Button';
import * as S from './style';
export const Header: FC = () => {
	const { pathname } = useLocation();
	const isAuth = false;
	return (
		<>
			{pathname === '/register' || pathname === '/login' ? (
				''
			) : (
				<S.Wrapper
					style={{
						backgroundColor: pathname === '/' ? '#009EE4' : '#009EE4',
					}}
				>
					<S.MyContainer>
						<S.Img to={MAIN_ROUTE}></S.Img>
						{!isAuth ? (
							<Link to="/login">
								<Button style={{ margin: '1rem' }} $color $border>
									Вход в личный кабинет
								</Button>
							</Link>
						) : (
							<S.ButtonBox>
								<Button style={{ margin: '1rem' }} $color $border>
									Разместить объявление
								</Button>
								<Button style={{ margin: '1rem' }} $color $border>
									Личный кабинет
								</Button>
							</S.ButtonBox>
						)}
					</S.MyContainer>
				</S.Wrapper>
			)}
		</>
	);
};
