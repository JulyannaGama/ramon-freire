import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <img src="/assets/logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
