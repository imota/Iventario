import styled from "styled-components";
import DefaultButton from "../../ReusableStyles/DefaultButton";

export const StyledDiv = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: block;
  background: #339999;
`;

export const ProfileImage = styled.img`
  /*This css code only works at screens
  bigger than 600 px, i'm using to develop 
  a mobile design */
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    box-shadow: 0px 0px 5px rgba(20, 20, 20, 0.2);
    border-radius: 20px;
  }
`;

export const StyledButton = styled(DefaultButton)`
  width: 80%;
  margin: 10px auto;
  height: 50px;
`;
