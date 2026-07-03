import React from 'react';

const stats = [
  { label: 'Projects Completed', value: '50+' },
  { label: 'Enterprise Clients', value: '30+' },
  { label: 'System Uptime', value: '99.9%' },
  { label: 'Commitment', value: '100%' },
];

export default function Stats() {
  return (
    <section className="section-card stats-section">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
