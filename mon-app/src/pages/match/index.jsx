import React from "react";
import { BlockJobs, ContainerJobs, TitleJobs } from "./style";
import jobs from "./jobs.json";

export default function Match() {
  return jobs.map((job, i) => {
    return (
      <>
        <BlockJobs>
          <ContainerJobs>
            <TitleJobs>{job.techno}</TitleJobs>
            <p>{job.ville}</p>
          </ContainerJobs>
        </BlockJobs>
      </>
    );
  });
}
