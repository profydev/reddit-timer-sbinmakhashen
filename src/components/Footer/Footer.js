import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';

const Footer = () => (
  <footer id="footer">
    <a
      href="https://profy.dev/employers"
      target="_blank"
      className="footer-link"
      rel="noreferrer"
    >
      <p>profy.dev</p>
    </a>
    <div className="footer-link">
      <FooterLogo />
    </div>
    <Link to="/terms">
      <p className="footer-link"> Terms & Privacy</p>
    </Link>
  </footer>
);

export default Footer;
