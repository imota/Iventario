import React, { Component } from "react";
import {
  StyledButton,
  StyledDiv,
  UserInformationBox,
  ProfileImage,
  InformationBox,
  DefaultInformationText,
  ProfileImageBox
} from "./Styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false
    };
  }

  updateClick = () => {
    this.setState({ times: this.state.times + 1 });
  };

  render() {
    return (
      <StyledDiv>
        <UserInformationBox>
          <ProfileImageBox>
            <ProfileImage src={"logo192.png"} alt="no image" />
          </ProfileImageBox>
          <InformationBox>
            <DefaultInformationText>Nome</DefaultInformationText>
            <DefaultInformationText>Email</DefaultInformationText>
            <DefaultInformationText>Telefone</DefaultInformationText>
          </InformationBox>
        </UserInformationBox>
        <StyledButton isRed>hello world</StyledButton>
      </StyledDiv>
    );
  }
}

export default Profile;
