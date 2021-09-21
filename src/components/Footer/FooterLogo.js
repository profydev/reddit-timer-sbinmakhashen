import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/footer.svg';

const FooterLogo = () => (
  <>
    <div className="logo-footer">
      <Link to="/">
        <img src={logo} alt="Footer reddit icon" className="logoF" />
      </Link>
    </div>
  </>
);

export default FooterLogo;
