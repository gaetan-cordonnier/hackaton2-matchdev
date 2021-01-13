import React from "react";
import { useForm } from "react-hook-form";
import {FormContainer} from "./style";


const Sinscrire = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Compléte ton profil</h2>
        <label>Prénom</label>
        <input name="prénom" ref={register({ required: true })} />
        {errors.prénom && <span>Ce champs est obligatoire</span>}

        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <span>Ce champs est obligatoire</span>}

        <label>Mot de passe</label>
        <input name="password" ref={register({ required: true })} />
        {errors.password && <span>Ce champs est obligatoire</span>}

        <label>Technos</label>
        <select></select>

        <label>Technos visés</label>
        <select></select>

        <label>Type de contrat</label>
        <select name="type fe contrat" ref={register({ required: true })}>
          <option value="select"></option>
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="stage">Stage</option>
          <option value="alternance">Alternance</option>
          <option value="freelance">Freelance</option>
        </select>

        <label>Télétravail</label>
        <select name="télétravail" ref={register({ required: true })}>
          <option value="select"></option>
          <option value="occasionnel">occasionnel</option>
          <option value="temps plein">temps plein</option>
          <option value="pas du tout">pas du tout</option>
        </select>

        <label>Ville</label>
        <input name="ville" ref={register({ required: true })} />
        {errors.ville && <span>Ce champs est obligatoire</span>}

        <label>Année de code</label>
        <input name="année de code" ref={register({ required: true })} />
        {errors.annéeDeCode && <span>Ce champs est obligatoire</span>}

        <label>Projet coup de coeur</label>
        <textarea name="projet" ref={register({ required: true })} />
        {errors.projet && <span>Ce champs est obligatoire</span>}

        {/*<label>Le plus important</label>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Ambiance</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Challenge</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>salaire</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Horraires flex</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Formation</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Responsabilités</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Avantages</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Autre</input>
        {errors.email && <span>Ce champs est obligatoire</span>}*/}

        <label>Salaire espéré</label>
        <input name="salaire" ref={register({ required: true })} />
        {errors.salaire && <span>Ce champs est obligatoire</span>}

        <label>Langues</label>
        <input name="langues" ref={register({ required: true })} />
        {errors.langues && <span>Ce champs est obligatoire</span>}

        <label>Autre</label>
        <input name="autre" ref={register({ required: true })} />
        {errors.autre && <span>Ce champs est obligatoire</span>}

        <input type="submit" />
      </FormContainer>
    </div>
  );
};
export default Sinscrire;
