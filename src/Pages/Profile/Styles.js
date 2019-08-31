import styled from "styled-components";

export const Title = styled.p`
  font-size: 1em;
`;

export const StyledButton = styled.button`
  border: solid 1px #222;
  background: ${props => (props.isRed ? "#f00" : "#ff0")};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const StyledDiv = styled.div`
  text-align: center;
`;

export const UserInformationBox = styled.div`
  width: 100%;
  height: 30vh;
  background: red;
  display: grid;
  grid-template-columns: 30% 60% 10%;
`;

export const ProfileImageBox = styled.div`
  width: 20vw;
  height: 100%;
  vertical-align: top;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 80%;
  height: auto;
  display: inline-block;
`;

export const InformationBox = styled.div`
  display: grid;
  grid-template-rows: 30% 30% 30%;
  text-align: left;
`;

export const DefaultInformationText = styled.p`
  display: inline-block;
`;
