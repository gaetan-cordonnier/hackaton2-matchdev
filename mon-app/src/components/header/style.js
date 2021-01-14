import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #220bab;
	height: 9vh;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 2;

	.match {
		height: 7vh;
		margin-left: 3vw;
	}

	.logo {
		height: 4vh;
	}
	.profile {
		height: 7vh;
		margin-right: 3vw;
	}
`;
