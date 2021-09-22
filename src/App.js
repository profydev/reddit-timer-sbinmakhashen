import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './layouts/css/main.css';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
      </div>
      <main>
        <Hero />
      </main>
    </Router>
  );
}

export default App;
