import React, { Component } from 'react';
import { Counter } from './features/counter/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
