import React, { Component } from 'react';
import './App.css';
import Nav from '../src/components/layout/navigation/Nav';
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
      <div className="App">
        <Nav />
        <CenterModal />
      </div>
    );
  }
}

export default App;
