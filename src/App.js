import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubContextProvider from './Context/SubContextProvider';
import Header from './components/Header';
import './layouts/css/main.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info/Info';
import SearchPage from './page-search/SearchPage';

function App() {
  return (
    <SubContextProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Hero />
              <Info />
            </Route>
            <Route path="/search/:sub">
              <SearchPage />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </SubContextProvider>
  );
}

export default App;
