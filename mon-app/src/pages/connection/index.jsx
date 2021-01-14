import React from "react";
import { Container, Title, Button, Text, Connect } from "./style";
import { Link } from "react-router-dom";

const Connection = () => {
	return (
		<Connect>
			<Title>MATCH DEV</Title>
			<Container>
				<Link to="/seconnecter">
					<Button>SE CONNECTER</Button>
				</Link>
				<Text>OU</Text>
				<Link to="/sinscrire">
					<Button>S'INSCRIRE</Button>
				</Link>
			</Container>
		</Connect>
	);
};
export default Connection;
