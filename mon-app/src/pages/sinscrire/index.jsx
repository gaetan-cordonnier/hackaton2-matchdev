import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer, Mandatory } from "./style";
import dataTechnos from "./dataTechnos.json";

const Sinscrire = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(watch("example"));

	return (
		<div>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<h2>Compléte ton profil</h2>

				<label>Prénom</label>
				<input
					name="example"
					defaultValue="test"
					ref={register({ required: true })}
				/>
				{errors.prénom && <Mandatory>Ce champs est obligatoire</Mandatory>}

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
				<label>Technos visés</label>
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

				<label>Télétravail</label>
				<select name="télétravail" ref={register({ required: true })}>
					<option value="select"></option>
					<option value="occasionnel">occasionnel</option>
					<option value="temps plein">temps plein</option>
					<option value="pas du tout">pas du tout</option>
				</select>

				<label>Ville</label>
				<input name="ville" ref={register({ required: true })} />
				{errors.ville && <Mandatory>Ce champs est obligatoire</Mandatory>}

				<label>Année de code</label>
				<input name="année de code" ref={register({ required: true })} />
				{errors.anneeDeCode && <Mandatory>Ce champs est obligatoire</Mandatory>}

				<label>Projet coup de coeur</label>
				<textarea name="projet" ref={register({ required: true })} />
				{errors.projet && <Mandatory>Ce champs est obligatoire</Mandatory>}

				{/*<label>Le plus important</label>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Ambiance</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Challenge</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>salaire</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Horraires flex</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Formation</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Responsabilités</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Avantages</input>
        <input type= "checkbox" name="choix" ref={register({ required: true })}>Autre</input>
        {errors.email && <Mandatory>Ce champs est obligatoire</Mandatory>}*/}

				<label>Salaire espéré</label>
				<input name="salaire" ref={register({ required: true })} />
				{errors.salaire && <Mandatory>Ce champs est obligatoire</Mandatory>}

				<label>Langues</label>
				<input name="langues" ref={register({ required: true })} />
				{errors.langues && <Mandatory>Ce champs est obligatoire</Mandatory>}

				<label>Autre</label>
				<input name="autre" ref={register({ required: true })} />
				{errors.autre && <Mandatory>Ce champs est obligatoire</Mandatory>}

				<input type="submit" value="ENVOYER" />
			</FormContainer>
		</div>
	);
};
export default Sinscrire;
