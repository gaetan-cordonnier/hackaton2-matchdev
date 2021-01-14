import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { FormContainer, Mandatory } from "./style";
import dataTechnos from "./dataTechnos.json";
import MultiSelect from "react-multi-select-component";
import axios from "axios";

const Sinscrire = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [dataSend, setDataSend] = useState(false);
  const [selected, setSelected] = useState([]);

  const signup = (formData) => {
    axios
      .post("http://localhost:5050/profile", formData)
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
      {dataSend ? (
        <Redirect to="/cards" />
      ) : (
        <FormContainer onSubmit={handleSubmit(signup)}>
          <h2>Compléte ton profil</h2>

          <label>Prénom</label>
          <input name="prenom" ref={register({ required: true })} />
          {errors.prenom && <Mandatory>Ce champs est obligatoire</Mandatory>}

          <label>Email</label>
          <input name="email" ref={register({ required: true })} />
          {errors.email && <Mandatory>Ce champs est obligatoire</Mandatory>}

          <label>Mot de passe</label>
          <input
            type="password"
            minlength="8"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <Mandatory>Minimun 8 caractères</Mandatory>}

          <div>
            <h1>Technos</h1>
            <MultiSelect
              options={dataTechnos}
              value={selected}
              onChange={setSelected}
              labelledBy={"Select"}
            />
          </div>

          <label>Type de contrat</label>
          <select name="type fe contrat" ref={register({ required: true })}>
            <option value="select"></option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="stage">Stage</option>
            <option value="alternance">Alternance</option>
            <option value="freelance">Freelance</option>
          </select>

          <label>Code Postal</label>
          <input name="codePostal" ref={register({ required: true })} />
          {errors.codePostal && (
            <Mandatory>Ce champs est obligatoire</Mandatory>
          )}

          <label>Années de code</label>
          <input name="année de code" ref={register({ required: true })} />
          {errors.anneeDeCode && (
            <Mandatory>Ce champs est obligatoire</Mandatory>
          )}

          <label>Salaire espéré</label>
          <input name="salaire" ref={register({ required: true })} />
          {errors.salaire && <Mandatory>Ce champs est obligatoire</Mandatory>}

          <input type="submit" value="ENVOYER" />
        </FormContainer>
      )}
    </div>
  );
};
export default Sinscrire;
