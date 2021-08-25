import React from 'react';
import { Link } from 'react-router-dom';
import logo from './.../img/logo.png';

const Logo = () => (
  <>
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="reddit logo" className="logo" />
      </Link>
    </div>
  </>
);

export default Logo;
