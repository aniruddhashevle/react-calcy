import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header className="app-header">
          <h1 className="app-title">React Retro Calculator</h1>
        </header>
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
