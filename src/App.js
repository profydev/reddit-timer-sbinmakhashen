import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Header from './components/Header';
import './layouts/css/main.css';

function App() {
  return (
    <Router>
      <Normalize />
      <Header />
    </Router>
  );
}

export default App;
