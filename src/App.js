import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
