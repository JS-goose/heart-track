import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/layout/Navigation/Nav";
import About from "../src/components/layout/pages/About";
import Home from "./components/layout/pages/Home";
import Charts from "./components/layout/pages/Charts";
import OpenSource from "./components/layout/pages/OpenSource";
import Contributors from "./components/layout/pages/Contributors";
import HomeWidgets from "./components/layout/HomeWidgets/HomeWidgets";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/charts" component={Charts} />
          <Route path="/contributors" component={Contributors} />
          <Route path="/opensource" component={OpenSource} />
          <HomeWidgets />
        </div>
      </Router>
    );
  }
}

export default App;
