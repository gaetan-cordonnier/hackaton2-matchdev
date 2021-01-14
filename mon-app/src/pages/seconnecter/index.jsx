import React, { useState } from "react";
import { Title, Container, Submit, FormContainer, Label } from "./style";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const SeConnecter = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const { loggedIn } = useState;

  return (
    <div>
      {loggedIn ? (
        <Redirect to="/cards" />
      ) : (
        <Container onSubmit={handleSubmit(onSubmit)}>
          <Title>MATCH DEV</Title>
          <FormContainer>
            <Label>Email</Label>
            <input name="email" ref={register({ required: true })} />
            {errors.email && <Label>Ce champs est obligatoire</Label>}

            <Label>Mot de passe</Label>
            <input
              type="password"
              minlength="8"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && <Label>Minimun 8 caractères</Label>}

            <Submit type="submit" value="SE CONNECTER" />
          </FormContainer>
        </Container>
      )}
    </div>
  );
};
export default SeConnecter;
