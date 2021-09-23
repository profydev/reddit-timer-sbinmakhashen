import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;
