import styled from '@emotion/styled';
export const Main = styled.div`
	background-color: #f5f5f5;
	padding-bottom: 3.75rem;
	position: relative;
`;
export const SearchBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	flex-wrap: nowrap;
	align-items: center;
`;
export const TitleBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TitleBlockH1 = styled.h1`
	color: black;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 2.5rem;
	font-style: normal;
	line-height: 91.5%; /* 54.9px */
	letter-spacing: -0.07306rem;
	max-width: 51rem;
`;

export const ScrollUpBtn = styled.button`
	cursor: pointer;
	padding: 0.4375rem 1.5rem 0.5625rem 1.5rem;
	margin: 0 auto;
	display: block;
	border-radius: 2.875rem;
	background: #c7e957;
	height: 3rem;
	color: #000;
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1.5rem;
	font-style: normal;
	line-height: 32px; /* 133.333% */
	letter-spacing: -0.00625rem;
	transition: background 0.3s;

	&:hover {
		background: #daf289;
	}

	&:active {
		background: #ebffab;
	}
`;
