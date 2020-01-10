import styled from "styled-components";

export const Card = styled.article`
	box-shadow: 0px 1px 1px 1px lightgrey;
	margin: 16px;
	padding: 16px;
	cursor: pointer;
	
	&:hover {
		background-color: rgba(211,211,211, 0.2);
	}
`;

export const Column = styled.div`
`;

export const Row = styled.div`
	display: flex;
    justify-content: space-between;
`;

export const FullName = styled.h2`
	font-size: 24px;
`;

export const Description = styled.p`
	color: darkslategrey;
`;

export const Meta = styled.section`
	margin-top: 8px;
`;

