import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';

const Footer = () => (
  <footer id="footer">
    <a
      href="profy.dev/employers"
      target="_blank"
      className="profy-link"
      rel="noreferrer"
    >
      <p>profy.dev</p>
    </a>
    <FooterLogo />
    <Link to="/terms">
      <p>Terms & Privacy</p>
    </Link>
  </footer>
);

export default Footer;
