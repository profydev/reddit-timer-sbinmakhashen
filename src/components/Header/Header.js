import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import SubContext from '../../Context/SubContext';
import '@fontsource/montserrat';
import Logo from './Logo';

const Header = () => {
  const { subreddit } = useContext(SubContext);
  const navBar = useRef(null);
  function showMobileMenu() {
    const { current } = navBar;
    const mobileNav = document.querySelector('.mobile-nav-check');
    const ul = document.querySelector('.nav-links');
    const isDisplayBlock = current.style.display === 'block';
    if (!isDisplayBlock) {
      current.style.display = 'block';
      ul.classList.add('show-mobile-menu');
      ul.classList.add('nav-effect');
      mobileNav.innerHTML = 'X';
    } else {
      current.style.display = 'none';
      ul.classList.remove('show-mobile-menu');
      mobileNav.innerHTML = '&#9776';
    }
  }
  
  return (
    <>
      <header>
        <div className="nav-container">
          <Logo />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button
            type="button"
            className="mobile-nav-check"
            onClick={showMobileMenu}
          >
            &#9776;
          </button>
          <nav id="nav-bar">
            <ul
              style={{ fontFamily: 'montserrat' }}
              ref={navBar}
              className="nav-links"
            >
              <li>
                <Link
                  className="link search-link"
                  to={`/search/${subreddit}`}
                  // onClick={updateInputUrl}
                >
                  Search
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="how-it-works link">
                  How it works
                </a>
              </li>
              <li>
                <a href="#about" className="about link">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
