import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="footer"
      style={{
        background: 'var(--neutral-900)',
        borderTop: '1px solid var(--neutral-800)',
        padding: 'var(--space-lg) 0',
        textAlign: 'center',
        color: 'var(--neutral-500)'
      }}
    >
      <div className="container">
        <p 
          style={{
            margin: 0,
            fontSize: '0.9rem'
          }}
        >
          &copy; {currentYear} Zaid Osama. Built with passion for clean code and scalable systems.
        </p>
        <p 
          style={{
            margin: 'var(--space-xs) 0 0 0',
            fontSize: '0.8rem',
            color: 'var(--neutral-600)'
          }}
        >
          React • Java • Spring Boot • Microservices
        </p>
      </div>
    </footer>
  );
};

export default Footer;