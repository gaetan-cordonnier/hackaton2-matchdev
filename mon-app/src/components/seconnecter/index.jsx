import React from "react";
import {Title, Container, Submit, FormContainer, Label} from "./style";

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
       
          <Submit type="submit" value="SE CONNECTER" />
        </FormContainer>
      </Container>
    </div>
  );
};
export default SeConnecter;
