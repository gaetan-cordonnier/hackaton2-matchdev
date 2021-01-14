import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormContainer, Mandatory } from "./style";
import dataTechnos from "./dataTechnos.json";

const Sinscrire = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Compléte ton profil</h2>

        <label>Prénom</label>
        <input name="prenom" ref={register({ required: true })} />
        {errors.prenom && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <label>Mot de passe</label>
        <input name="password" ref={register({ required: true })} />
        {errors.password && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <label>Technos</label>
        <select>
          <option>Choix multiple</option>
          {dataTechnos.map((dataTechno) => (
            <option key={dataTechno.technos}>{dataTechno.technos}</option>
          ))}
        </select>

        <label>Type de contrat</label>
        <select name="type fe contrat" ref={register({ required: true })}>
          <option value="select"></option>
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="stage">Stage</option>
          <option value="alternance">Alternance</option>
          <option value="freelance">Freelance</option>
        </select>

        <label>Ville</label>
        <input name="ville" ref={register({ required: true })} />
        {errors.ville && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <label>Année de code</label>
        <input name="année de code" ref={register({ required: true })} />
        {errors.anneeDeCode && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <label>Salaire espéré</label>
        <input name="salaire" ref={register({ required: true })} />
        {errors.salaire && <Mandatory>Ce champs est obligatoire</Mandatory>}

        <Link to="/cards">
          <input type="submit" value="ENVOYER" />
        </Link>
      </FormContainer>
    </div>
  );
};
export default Sinscrire;
