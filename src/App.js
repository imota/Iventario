import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from "./Pages/Profile";

class App extends Component {
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
      <div>
        <Router>
          <Route exact path="/" component={Inicio} />
          <Route path="/inicio" component={Inicio} />
        </Router>
      </div>
    );
  }
}

export default App;
