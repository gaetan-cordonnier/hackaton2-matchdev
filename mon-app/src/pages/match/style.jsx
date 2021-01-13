import styled from "styled-components";
import { Device } from "../../assets/device/Device";

export const BlockJobs = styled.div`
  @media ${Device.mobile} {
    border: 1px solod green;
    margin-left: 5vw;
    margin-right: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2vw;
  }
`;

export const ContainerJobs = styled.div`
  @media ${Device.mobile} {
    border: 1px solid red;
  }
`;

export const TitleJobs = styled.h2`
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.5rem;
  }
`;
