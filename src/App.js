import React, { Component } from 'react';
import './App.css';
import Nav from '../src/components/layout/navigation/Nav';

class App extends Component {
  state = {
    HR: 0,
  }
  render() {
    return (
      <div className="App">
        Heart Track!
        <Nav />
      </div>
    );
  }
}

export default App;
