import React from "react";
import {
  Page,
  BlockProfil,
  Title,
  BlockP,
  Sentence,
  BlockDetails,
  ContainerDetails,
  DetailsH3,
  DetailsForm,
} from "./style";

import details from "./details.json";

export default function ProfilPage() {
  return details.map((detail, key) => {
    return (
      <>
        <Page>
          <BlockProfil>
            <Title> Bonjour {detail.prenom}! Bon match!</Title>
          </BlockProfil>
          <BlockP>
            <Sentence>Vérifiez vos informations...</Sentence>
          </BlockP>
          <BlockDetails>
            <ContainerDetails>
              <DetailsH3>Techno :</DetailsH3>
              <DetailsForm> {detail.techno}</DetailsForm>
            </ContainerDetails>
            <ContainerDetails>
              <DetailsH3>Contrat :</DetailsH3>
              <DetailsForm>{detail.contrat}</DetailsForm>
            </ContainerDetails>
            <ContainerDetails>
              <DetailsH3>Ville :</DetailsH3>
              <DetailsForm>{detail.ville}</DetailsForm>
            </ContainerDetails>

            <ContainerDetails>
              <DetailsH3>Année de code :</DetailsH3>
              <DetailsForm>{detail.anneeDeCode}</DetailsForm>
            </ContainerDetails>

            <ContainerDetails>
              <DetailsH3>email :</DetailsH3>
              <DetailsForm>{detail.email}</DetailsForm>
            </ContainerDetails>
          </BlockDetails>
        </Page>
      </>
    );
  });
}
