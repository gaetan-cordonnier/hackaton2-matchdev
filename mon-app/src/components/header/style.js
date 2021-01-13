import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #220bab;
	height: 70px;

	.match {
		height: 50px;
		margin-left: 20px;
	}

	.logo {
		height: 30px;
	}
	.profile {
		height: 50px;
		margin-right: 20px;
	}
`;
