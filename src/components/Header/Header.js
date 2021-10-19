import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import SubContext from '../../Context/SubContext';
import '@fontsource/montserrat';
import Logo from './Logo';

const Header = () => {
  const { subreddit } = useContext(SubContext);
  const labelBurger = useRef(null);
  const { current } = labelBurger;

  function showMobileMenu(e) {
    if (e.target.checked) {
      current.innerHTML = 'X';
    } else {
      current.innerHTML = '&#9776;';
    }
  }
  return (
    <>
      <header>
        <div className="nav-container">
          <Logo />
          <nav id="nav-bar">
            {/* mobile hamburger menu */}
            <input
              type="checkbox"
              id="mobile-nav-check"
              onClick={(e) => showMobileMenu(e)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="mobile-nav-check"
              className="burger"
              ref={labelBurger}
            >
              &#9776;
            </label>

            <ul style={{ fontFamily: 'montserrat' }} className="nav-links">
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
