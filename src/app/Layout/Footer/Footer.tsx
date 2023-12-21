import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../../styled/components';
import { Button } from '../../../components/form/Button';
import { useLocation } from 'react-router-dom';
import { BackUp } from '../../../assets/img/index';
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
							<button onClick={scrollPageUp}>
								<BackUp/>
						</button>
					</Container>
				</Wrapper>
			)}
		</>
	);
};

const Wrapper = styled.footer`
	background-color: #f5f5f5;
`;
