import styled from "styled-components";
import { Device } from "../../assets/device/Device";

export const Page = styled.div`
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const BlockProfil = styled.div`
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d7d7d7;
    color: #fd1470;
    height: 7vh;
    width: 100vw;
  }
`;

export const Title = styled.h2`
  @media ${Device.mobile} {
    padding-top: 1vh;
    font-size: 2.5rem;
  }
`;

export const BlockP = styled.div`
  @media ${Device.mobile} {
    background-color: #d7d7d7;
    display: flex;
    padding-top: 2vh;
  }
`;

export const Sentence = styled.p`
  @media ${Device.mobile} {
    background-color: #d7d7d7;
    color: #fd1470;
    font-size: 1rem;
    width: 100vw;
    text-align: center;
  }
`;

export const BlockDetails = styled.div`
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    background-color: #d7d7d7;
    height: 60vh;
    width: 100vw;
    padding-top: 35vw;
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1vh solid #220bab;
  margin-bottom: 2vh;
  padding-left: 5vw;
  padding-right: 5vw;
  height: 8vh;
`;

export const DetailsH3 = styled.h3`
  @media ${Device.mobile} {
    color: black;
    font-size: 1.5rem;
  }
`;

export const DetailsForm = styled.p`
  color: black;
  font-size: 1rem;
`;
