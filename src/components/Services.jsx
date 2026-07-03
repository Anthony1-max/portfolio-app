import React from 'react';

const items = [
  { title: 'ICT Solutions', desc: 'End-to-end ICT services including networking, cloud, infrastructure.' },
  { title: 'Cybersecurity', desc: 'Risk assessments, security solutions and compliance.' },
  { title: 'Project Management', desc: 'Professional project management delivered on time and budget.' },
  { title: 'Cloud Solutions', desc: 'Scalable cloud services that optimize performance.' },
  { title: 'IT Support', desc: 'Reliable IT support and maintenance.' },
  { title: 'Software Development', desc: 'Custom software solutions to meet business needs.' },
];

export default function Services() {
  return (
    <section id="services" className="section-card services-section">
      <div className="section-header">
        <h2>Technology That Powers Your Growth</h2>
        <p>Our core services designed to accelerate your business.</p>
      </div>
      <div className="services-grid">
        {items.map((s) => (
          <article key={s.title} className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
