import React from "react";
import { Title, Container, Submit, FormContainer, Label } from "./style";
import { Link } from "react-router-dom";

const SeConnecter = () => {
	return (
		<div>
			<Container>
				<Title>MATCH DEV</Title>
				<FormContainer>
					<Label>Email</Label>
					<input type="text" email="email" />
					<Label>Mot de passe</Label>
					<input type="text" emapassword="password" />

					<Link to="/cards">
						<Submit type="submit" value="SE CONNECTER" />
					</Link>
				</FormContainer>
			</Container>
		</div>
	);
};
export default SeConnecter;
