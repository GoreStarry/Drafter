import React, { Component } from 'react';
import './App.css';
import DraftTestPlayground from './containers/DraftTestPlayground/DraftTestPlayground.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DraftTestPlayground/>
      </div>
      );
  }
}

export default App;
