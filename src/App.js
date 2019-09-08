import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
