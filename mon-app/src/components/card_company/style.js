import styled from "styled-components";

export const Container = styled.div`
	background: linear-gradient(#f9f9f9, #d7d7d7);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	min-height: 91vh;
	overflow: hidden;

	h2 {
		color: blue;
	}

	.swipe {
		position: absolute;
	}

	.cardContainer {
		width: 90vw;
		max-width: 360px;
		height: 450px;
		background-color: #fff;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		border-radius: 20px;
	}

	.card {
		position: relative;
		background-color: #fff;
		width: 80vw;
		margin-top: 5vw;
		margin-left: 5vw;
		max-width: 300px;
		height: 300px;
		border: 1px solid #e6e6e6;
		border-radius: 20px;
		background-size: cover;
		background-position: center;
	}

	.cardContent {
		width: 100%;
		height: 100%;
	}

	.swipe:last-of-type {
	}

	.card h3 {
		bottom: 0;
		margin: 10px;
		color: #fd1470;
	}

	.infoText {
		width: 100%;
		height: 28px;
		justify-content: center;
		display: flex;
		color: #fff;
		animation-name: popup;
		animation-duration: 800ms;
	}

	.buttons {
		margin: 20px;
		display: flex;
	}

	.buttons button {
		flex-shrink: 0;
		padding: 10px;
		border-radius: 20px;
		border: none;
		color: #fff;
		font-size: 18px;
		background-color: #fd1470;
		transition: 200ms;
		margin: 0 10px;
		font-weight: bolder;
		width: 160px;
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
	}

	.buttons button:hover {
		transform: scale(1.05);
	}

	@keyframes popup {
		0% {
			transform: scale(1, 1);
		}
		10% {
			transform: scale(1.1, 1.1);
		}
		30% {
			transform: scale(0.9, 0.9);
		}
		50% {
			transform: scale(1, 1);
		}
		57% {
			transform: scale(1, 1);
		}
		64% {
			transform: scale(1, 1);
		}
		100% {
			transform: scale(1, 1);
		}
	}
`;
