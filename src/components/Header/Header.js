import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/montserrat';
import Logo from './Logo';

const Header = () => (
  <>
    <header>
      <div className="nav-container">
        <Logo />
        <nav id="nav-bar">
          <ul style={{ fontFamily: 'montserrat' }} className="nav-links">
            <li>
              <Link to="/search/javascript">Search</Link>
            </li>
            <li>
              <a href="#how-it-works" className="how-it-works">
                How it works
              </a>
            </li>
            <li>
              <a href="#about" className="about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
