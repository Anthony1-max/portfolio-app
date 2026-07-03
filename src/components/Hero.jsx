import React from 'react';

export default function Hero({ profilePicture }) {
  return (
    <header className="hero-landing">
      <div className="hero-landing-inner">
        <div className="hero-copy">
          <h1>INNOVATING TODAY. <span>IMPACTING TOMORROW.</span></h1>
          <p>
            Delivering innovative ICT, cybersecurity, and project solutions that
            empower businesses and improve everyday life.
          </p>
          <div className="hero-ctas">
            <a className="button primary" href="#services">Explore Our Solutions</a>
            <a className="button secondary" href="#brands">Discover Our Brands</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={profilePicture} alt="illustration" />
        </div>
      </div>
    </header>
  );
}
