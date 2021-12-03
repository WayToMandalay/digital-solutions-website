import React from "react";
import './footer.css';
import logo from './footer-logo.png';
import policy from './policy.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">

        <div className="footer__info-block">
          <div className="footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="footer__text">All Rights Reserved to info.com</p>
          <p className="footer__text">© DDD – Web Marketing</p>
          <p className="footer__text">Privacy Policy</p>
          <div className="footer__policy">
            <img src={policy} alt="logo" />
          </div>
        </div>

        <div className="footer_contact-us">
          <div className="footer__title">Contact us</div>
          <div className="footer__tel-block">
            <div className="footer__tel">
              <div className="footer__tel_country">UK</div>
              <div className="footer__tel_numbers">
                <div className="footer__tel_number">+44-2020202020</div>
                <div className="footer__tel_number">+44-2020202020</div>
              </div>
            </div>
            <div className="footer__tel">
              <div className="footer__tel_country">AUT</div>
              <div className="footer__tel_numbers">
                <div className="footer__tel_number">+44-2020202020</div>
              </div>
            </div>
            <div className="footer__tel">
              <div className="footer__tel_country">AUT</div>
              <div className="footer__tel_numbers">
                <div className="footer__tel_number">+44-2020202020</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="footer__right">
        <div className="footer__right_section">
          <div className="footer__title">Address</div>
          <div className="footer__right__text">Lorem ipsum</div>
          <div className="footer__right__text">set amet</div>
        </div>
        <div className="footer__right_section">
          <div className="footer__title">Our office hours</div>
          <div className="footer__right__text">Mon-Fr: 8:00-18:00 GMT</div>
          <div className="footer__right__text">Sat/Su: Closed</div>
        </div>
        <div className="footer__right_section">
          <div className="footer__title">Email us</div>
          <div className="footer__right__text">info@info.com</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;