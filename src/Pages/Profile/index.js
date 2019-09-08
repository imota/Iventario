import React, { Component } from "react";
import { StyledDiv, ProfileImage } from "./Styles";
import DefaultInput from "../../ReusableStyles/DefaultInput";

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
        <ProfileImage src="/logo192.png"></ProfileImage>
        <DefaultInput placeholder="nome"></DefaultInput>
        <DefaultInput placeholder="email"></DefaultInput>
        <DefaultInput placeholder="telefone"></DefaultInput>
      </StyledDiv>
    );
  }
}

export default Profile;
