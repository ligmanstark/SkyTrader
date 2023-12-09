import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_ROUTE } from '../../../utils/consts';
import { Button } from '../../../components/form/Button';
import * as S from './style';
export const Header: FC = () => {
	const { pathname } = useLocation();
	const isAuth = true;
	return (
		<S.Wrapper
			style={{
				backgroundColor: pathname === '/' ? '#009EE4' : '#009EE4',
			}}
		>
			<S.MyContainer>
				<S.Img to={MAIN_ROUTE}></S.Img>
				{!isAuth ? (
					<Link to="/login">
						<Button style={{ marginTop: '1rem' }} $color $border>
							Вход в личный кабинет
						</Button>
					</Link>
				) : (
					<S.ButtonBox>
						<Button style={{ marginTop: '1rem' }} $color $border>
							Разместить объявление
						</Button>
						<Button style={{ marginTop: '1rem' }} $color $border>
							Личный кабинет
						</Button>
					</S.ButtonBox>
				)}
			</S.MyContainer>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<Link to="/404">404</Link>
		</S.Wrapper>
	);
};
