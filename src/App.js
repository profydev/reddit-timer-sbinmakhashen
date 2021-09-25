import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './layouts/css/main.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info/Info';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Info />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
