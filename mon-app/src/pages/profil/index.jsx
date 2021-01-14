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
import test from "./test.json";

export default function ProfilPage() {
  return (
    <>
      <Page>
        <BlockProfil>
          <Title> My profile</Title>
        </BlockProfil>
        <BlockP>
          <Sentence>Check your informations</Sentence>
        </BlockP>
        <BlockDetails>
          <ContainerDetails>
            <DetailsH3>Techno :</DetailsH3>
            <DetailsForm> {test.techno}</DetailsForm>
          </ContainerDetails>
          <ContainerDetails>
            <DetailsH3>Contrat :</DetailsH3>
            <DetailsForm>{test.contrat}</DetailsForm>
          </ContainerDetails>
          <ContainerDetails>
            <DetailsH3>Ville :</DetailsH3>
            <DetailsForm>{test.ville}</DetailsForm>
          </ContainerDetails>

          <ContainerDetails>
            <DetailsH3>Télétravail :</DetailsH3>
            <DetailsForm>{test.teletravail}</DetailsForm>
          </ContainerDetails>

          <ContainerDetails>
            <DetailsH3>email :</DetailsH3>
            <DetailsForm>{test.email}</DetailsForm>
          </ContainerDetails>
        </BlockDetails>
      </Page>
    </>
  );
}
