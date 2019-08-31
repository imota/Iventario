import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 1px #222;
  background: ${props => (props.isRed ? "#f00" : "#ff0")};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledText = styled.p`
  cursor: pointer;
  border: solid 1px #222;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 20vw;
  height: 20vh;
  padding: 10px;
  margin: 10px;
  :hover {
    background: #22f;
  }
  transition: all 1s;
`;

const ButtonProps = props => {
  return (
    <StyledText onClick={() => props.updateClick()}>
      Clicked {props.times}
    </StyledText>
  );
};

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgb(255,0,255)",
      times: 0
    };
  }

  updateClick = () => {
    this.setState({ times: this.state.times + 1 });
  };

  render() {
    return (
      <StyledDiv className="App">
        <StyledButton isRed>hello world</StyledButton>
        <ButtonProps
          updateClick={this.updateClick.bind(this)}
          times={this.state.times}
        />
      </StyledDiv>
    );
  }
}

export default Inicio;
