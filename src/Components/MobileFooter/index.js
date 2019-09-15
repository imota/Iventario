import React, { Component, Fragment } from "react";
import { Footer, Sandwich, SandwichBar } from "./Style";

class MobileFooter extends Component {
  render() {
    return (
      <Footer>
        <Sandwich>
          <SandwichBar></SandwichBar>
          <SandwichBar></SandwichBar>
          <SandwichBar></SandwichBar>
        </Sandwich>
      </Footer>
    );
  }
}

export default MobileFooter;
