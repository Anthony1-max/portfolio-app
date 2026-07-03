import React from 'react';

const brands = [
  { name: 'DUPLICATE Clothing', desc: 'A contemporary clothing brand that represents individuality.' },
  { name: 'ATS RIDE', desc: 'Smart, safe, reliable e-hailing and mobility solutions.' },
];

export default function Brands() {
  return (
    <section id="brands" className="section-card brands-section">
      <div className="section-header">
        <h2>Our Brands</h2>
        <p>Our umbrella of brands created to solve real-world problems.</p>
      </div>
      <div className="brands-grid">
        {brands.map((b) => (
          <article className="brand-card" key={b.name}>
            <h3>{b.name}</h3>
            <p>{b.desc}</p>
            <a className="button secondary" href="#">Explore {b.name.split(' ')[0]}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
