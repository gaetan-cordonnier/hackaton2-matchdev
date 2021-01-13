import React from "react";
import { BlockJobs, ContainerJobs, TitleJobs } from "./style";

export default function Match() {
  return (
    <>
      <BlockJobs>
        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>
        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>

        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>

        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>

        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>
        <ContainerJobs>
          <TitleJobs>test block</TitleJobs>
        </ContainerJobs>
      </BlockJobs>
    </>
  );
}
