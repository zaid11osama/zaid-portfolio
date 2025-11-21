import React from 'react';

import rec1 from '../images/rec1.jpg';
import rec2 from '../images/rec2.jpg';
import rec3 from '../images/rec3.jpg';

const recommendations = [
  { id: 1, name: 'Aisha Khan', image: rec1 },
  { id: 2, name: 'Omar Ali', image: rec2 },
  { id: 3, name: 'Sara N.', image: rec3 }
];

const Recommendations = () => {
  return (
    <section
      id="recommendations"
      aria-label="Student photos"
      style={{
        padding: '3rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Section header (styled like ContentCreator) */}
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.6rem',
          margin: 0,
          background: 'linear-gradient(90deg,var(--primary-400),var(--primary-600))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Recommendations
        </h2>
        <p style={{ color: 'var(--neutral-400)', marginTop: '6px' }}>
          What my students say about the mentorship and workshops.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px'
        }}
      >
        {recommendations.map((r) => (
          <figure
            key={r.id}
            style={{
              position: 'relative',
              width: '100%',
              height: 320,
              borderRadius: 16,
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 30px rgba(2,6,23,0.35)',
              transition: 'transform 220ms ease, box-shadow 220ms ease'
            }}
            aria-label={r.name}
          >
            <img
              src={r.image}
              alt={r.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transformOrigin: 'center',
                transition: 'transform 420ms cubic-bezier(.2,.8,.2,1)'
              }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* name removed from overlay as requested */}
          </figure>
        ))}
      </div>

      <style>{`
        /* hover/active effects for pointer-capable devices */
        @media (hover: hover) and (pointer: fine) {
          section#recommendations figure:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 20px 48px rgba(2,6,23,0.45);
          }
          section#recommendations figure:hover img {
            transform: scale(1.06);
          }
        }

        @media (max-width: 520px) {
          section#recommendations { padding: 1.5rem 0.75rem; }
          section#recommendations figure { height: 220px; border-radius: 12px; }
        }

        @media (prefers-reduced-motion: reduce) {
          img, figure { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Recommendations;