import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Players", href: "/players" },
    { label: "Matches", href: "/matches" },
    { label: "Tournaments", href: "/tournaments" },
    { label: "News", href: "/news" },
  ];

  const copyrightLinks = [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__list-wrapper'>
          <ul className='privacy__list'>
            {copyrightLinks.map((link) => (
              <li key={link.label} className='privacy__item'>
                <Link to={link.href} className='privacy__link'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='footer__list'>
            {mainLinks.map((link) => (
              <li key={link.label} className='list__item'>
                <Link className='list__link' to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__copyright'>
          <div className='copyright-left'>
            <div className='img__container'>
              <img src={`${process.env.PUBLIC_URL}/img/barca_logo(60px).webp`} alt='FC Barcelona' className='logo' />
            </div>
            <div className='info'>
              <p className='title'>fc barcelona</p>
              <p className='subtitle'>mes que un club</p>
            </div>
          </div>
          <p className='copyright-right'>Copyright © 2025 FC Barcelona</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
