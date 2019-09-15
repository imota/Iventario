import styled from "styled-components";

export const Footer = styled.div`
  @media (max-width: 600px) {
    background: #336699;
    width: 100vw;
    height: 10vh;
    position: fixed;
    bottom: 0px;
    left: 0px;
    box-shadow: 0px -2px 2px rgba(20, 20, 20, 0.2);
    color: #fff;
  }
`;

export const Sandwich = styled.div`
  position: absolute;
  height: 6vh;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.2);
  width: 8vh;
  top: 2vh;
  background: white;
  left: 5vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SandwichBar = styled.div`
  width: 60%;
  height: 0.8vh;
  display: block;
  background: #339966;
`;
