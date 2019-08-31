import React, { Component } from "react";
import {CenteredDiv, StyledHomeButton, HomeButtonBox, HomeButton} from "./Styles";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <CenteredDiv>
                <StyledHomeButton topMargin = {"10vh"}>Login</StyledHomeButton>
            </CenteredDiv>
            <CenteredDiv>
                <StyledHomeButton topMargin = {"1vh"}>Registro</StyledHomeButton>
            </CenteredDiv>
            <CenteredDiv>
                <a href = "#">Esqueci minha senha</a>
            </CenteredDiv>
        </div>
    );
  }
}

export default Home;
