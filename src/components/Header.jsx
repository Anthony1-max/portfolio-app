import React from 'react';

export default function Header() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <div className="logo">ATS<span className="logo-sub">TECH</span></div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="button primary nav-cta" href="#contact">Let's Talk</a>
      </div>
    </nav>
  );
}
