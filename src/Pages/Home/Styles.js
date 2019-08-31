import styled from "styled-components";

export const CenteredDiv = styled.div`
    text-align: center;
`;

export const HomeButton = styled.button`
  border: solid 1px #222;
  background: red;
  margin-top: ${props => props.topMargin};
  text-align: center;
  width: 75vw;
  height: 5vh;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(20, 20, 20, 0.2);
  border: none
`;

export const StyledHomeButton = styled(HomeButton)`

`;