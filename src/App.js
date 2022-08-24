import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
