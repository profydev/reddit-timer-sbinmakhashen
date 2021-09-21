import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './layouts/css/main.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
