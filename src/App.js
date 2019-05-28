import React, { Component } from 'react';
import './App.css';
import Nav from '../src/components/layout/navigation/Nav';

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
        <h1>❤HearTrack❤</h1>
        <Nav />
      </div>
    );
  }
}

export default App;
