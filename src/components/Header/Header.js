import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SubContext from '../../Context/SubContext';
import '@fontsource/montserrat';
import Logo from './Logo';

const Header = () => {
  const { subreddit } = useContext(SubContext);

  return (
    <>
      <header>
        <div className="nav-container">
          <Logo />
          <nav id="nav-bar">
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
