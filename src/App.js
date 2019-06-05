import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Nav from '../src/components/layout/navigation/Nav';
import About from '../src/components/layout/pages/About'
import CenterModal from '../src/components/layout/CenterModal/CenterModal'

class App extends Component {
  state = {
    HR: 0,
    BP: 0,
    age: 0,
    height: 0,
    weight: 0
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/about" component={About} />
        <Nav />
        <CenterModal />
      </div>
      </Router>
    );
  }
}

export default App;
