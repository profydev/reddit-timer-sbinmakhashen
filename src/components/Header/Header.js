import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/montserrat';
import Logo from './Logo';

const Header = () => (
  <>
    <header>
      <Logo />
      <nav id="nav-bar">
        <ul style={{ fontFamily: 'montserrat' }} className="nav-links">
          <li>
            <a href="#about" className="about">
              About
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="how-it-works">
              How it Works
            </a>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
