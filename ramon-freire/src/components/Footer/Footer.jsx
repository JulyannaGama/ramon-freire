import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Ramon Freire. Todos os direitos reservados.</p>

        <div className="footer-links">
          <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.instagram.com/ramfrey.ifbbpro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:seuemail@email.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
