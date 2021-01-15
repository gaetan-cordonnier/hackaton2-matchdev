import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import {
  FormContainer,
  Mandatory,
  Title,
  Title2,
  Container,
  Label,
  Button
} from "./style";
import dataTechnos from "./dataTechnos.json";
import MultiSelect from "react-multi-select-component";
import axios from "axios";

const Sinscrire = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [dataSend, setDataSend] = useState(false);
  const [selected, setSelected] = useState([]);

  const signup = (formData) => {
    axios
      .post("http://localhost:5050/user", formData)
      .then(({ data }) => {
        console.log("Profile created");
        setDataSend(true);
      })
      .catch((err) => {
        console.warn("Error");
      });
  };

  return (
    <div>
      <Title>MATCH DEV</Title>
      {dataSend ? (
        <Redirect to="/cards" />
      ) : (
        <FormContainer onSubmit={handleSubmit(signup)}>
          <Title2>Compléte ton profil</Title2>
          <Container>
            <Label>Prénom</Label>
            <input name="prenom" ref={register({ required: true })} />
            {errors.prenom && <Mandatory>Ce champs est obligatoire</Mandatory>}

            <Label>Email</Label>
            <input name="email" ref={register({ required: true })} />
            {errors.email && <Mandatory>Ce champs est obligatoire</Mandatory>}

            <Label>Mot de passe</Label>
            <input
              type="password"
              minlength="8"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && <Mandatory>Minimun 8 caractères</Mandatory>}

            <div>
              <Label>Technos</Label>
              <MultiSelect
                options={dataTechnos}
                value={selected}
                onChange={setSelected}
                LabelledBy={"Select"}
                ref={register({ required: true })}
              />
            </div>

            <Label>Type de contrat</Label>
            <select name="type fe contrat" ref={register({ required: true })}>
              <option value="select"></option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="stage">Stage</option>
              <option value="alternance">Alternance</option>
              <option value="freelance">Freelance</option>
            </select>

            <Label>Code Postal</Label>
            <input name="codePostal" ref={register({ required: true })} />
            {errors.codePostal && (
              <Mandatory>Ce champs est obligatoire</Mandatory>
            )}

            <Label>Années de code</Label>
            <input name="année de code" ref={register({ required: true })} />
            {errors.anneeDeCode && (
              <Mandatory>Ce champs est obligatoire</Mandatory>
            )}

            <Label>Salaire espéré</Label>
            <input name="salaire" ref={register({ required: true })} />
            {errors.salaire && <Mandatory>Ce champs est obligatoire</Mandatory>}

            <Button type="submit" value="ENVOYER" />
          </Container>
        </FormContainer>
      )}
    </div>
  );
};
export default Sinscrire;
