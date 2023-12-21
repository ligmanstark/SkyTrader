import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../../styled/components';
import { Button } from '../../../components/form/Button';
import { useLocation } from 'react-router-dom';
export const Footer: FC = () => {
	const { pathname } = useLocation();
	const scrollPageUp = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			{pathname === '/register' || pathname === '/login' ? (
				''
			) : (
				<Wrapper>
					<Container>
						<Button onClick={scrollPageUp}>Вверх</Button>
					</Container>
				</Wrapper>
			)}
		</>
	);
};

const Wrapper = styled.footer``;
