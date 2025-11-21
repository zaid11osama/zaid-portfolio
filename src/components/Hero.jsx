import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className={`hero fade-in ${isVisible ? 'visible' : ''}`}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-xxl) 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          className="hero-content"
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <h1 
            className="hero-title"
            style={{
              marginBottom: 'var(--space-sm)',
              background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Zaid Osama
          </h1>
          
          <p 
            className="hero-subtitle"
            style={{
              fontSize: '1.25rem',
              color: 'var(--neutral-400)',
              marginBottom: 'var(--space-md)',
              fontWeight: 500
            }}
          >
            Java & Spring Boot Backend Developer | Building Scalable Financial Systems & Guiding New Developers
          </p>
          
          <p 
            className="hero-description"
            style={{
              fontSize: '1.125rem',
              maxWidth: '75ch',
              margin: `0 auto var(--space-xl)`,
              lineHeight: 1.7
            }}
          >
            Software Developer specializing in backend systems with expertise in Java, Spring Boot, Microservices, RESTful APIs, and SQL databases. Experienced in building scalable financial and data solutions in the banking and actuarial domains, with proven success in improving data accuracy, reliability, and clean architecture. Passionate about mentoring students and junior developers.
          </p>
          
          <div 
            className="hero-cta"
            style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                background: 'var(--primary-500)',
                color: 'white',
                transition: 'var(--transition-fast)',
                minHeight: '48px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              View Projects
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: 'var(--font-body)',
                border: '1px solid var(--neutral-800)',
                borderRadius: '12px',
                cursor: 'pointer',
                background: 'transparent',
                color: 'var(--neutral-200)',
                transition: 'var(--transition-fast)',
                minHeight: '48px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;