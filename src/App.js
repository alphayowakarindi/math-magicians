import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
