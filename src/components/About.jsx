import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={aboutRef}
      className={`about fade-in ${isVisible ? 'visible' : ''}`}
      id="about"
      style={{
        background: 'var(--neutral-900)',
        padding: 'var(--space-xxl) 0'
      }}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div 
          className="about-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 'var(--space-xl)',
            alignItems: 'start'
          }}
        >
          <div className="about-info">
            <p 
              className="about-text"
              style={{
                marginBottom: 'var(--space-md)',
                fontSize: '1.125rem',
                lineHeight: 1.7
              }}
            >
              I'm a passionate backend developer based in Amman, Jordan, with a strong focus on building robust, scalable systems that solve real-world problems. My expertise spans across Java, Spring Boot, and modern microservices architecture, with particular experience in the financial and banking sectors.
            </p>
            
            <p 
              className="about-text"
              style={{
                marginBottom: 'var(--space-lg)',
                fontSize: '1.125rem',
                lineHeight: 1.7
              }}
            >
              Beyond coding, I'm dedicated to sharing knowledge and helping others break into the tech industry. Through my content creation work, I've built a community of 25,000+ followers who look to me for guidance in Java, Spring Boot, and software development careers.
            </p>
            
            <div 
              className="contact-info"
              style={{ marginTop: 'var(--space-lg)' }}
            >
              <div 
                className="info-item"
                style={{
                  display: 'flex',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                <span 
                  className="info-label"
                  style={{
                    fontWeight: 600,
                    color: 'var(--neutral-200)',
                    marginRight: 'var(--space-sm)',
                    minWidth: '80px'
                  }}
                >
                  Location:
                </span>
                <span 
                  className="info-value"
                  style={{ color: 'var(--neutral-400)' }}
                >
                  Amman, Jordan
                </span>
              </div>
              
              <div 
                className="info-item"
                style={{
                  display: 'flex',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                <span 
                  className="info-label"
                  style={{
                    fontWeight: 600,
                    color: 'var(--neutral-200)',
                    marginRight: 'var(--space-sm)',
                    minWidth: '80px'
                  }}
                >
                  Phone:
                </span>
                <a 
                  href="tel:+962792105270"
                  style={{
                    color: 'var(--primary-500)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-700)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--primary-500)'}
                >
                  +962 79 210 52 70
                </a>
              </div>
              
              <div 
                className="info-item"
                style={{
                  display: 'flex',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                <span 
                  className="info-label"
                  style={{
                    fontWeight: 600,
                    color: 'var(--neutral-200)',
                    marginRight: 'var(--space-sm)',
                    minWidth: '80px'
                  }}
                >
                  Email:
                </span>
                <a 
                  href="mailto:zaidosama235@gmail.com"
                  style={{
                    color: 'var(--primary-500)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-700)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--primary-500)'}
                >
                  zaidosama235@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="education-card"
            style={{
              background: 'var(--neutral-800)',
              padding: 'var(--space-lg)',
              borderRadius: '12px',
              border: '1px solid var(--neutral-700)'
            }}
          >
            <h3 
              style={{
                marginBottom: 'var(--space-md)',
                color: 'var(--primary-500)'
              }}
            >
              Education
            </h3>
            
            <div 
              className="education-item"
              style={{
                padding: 'var(--space-sm)',
                borderLeft: '3px solid var(--primary-500)',
                background: 'var(--neutral-700)',
                borderRadius: '0 8px 8px 0'
              }}
            >
              <h4 
                style={{
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--neutral-200)'
                }}
              >
                Bachelor of Computer Science
              </h4>
              
              <p 
                className="institution"
                style={{
                  color: 'var(--neutral-400)',
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-xs)'
                }}
              >
                University of Jordan – Amman
              </p>
              
              <p 
                className="period"
                style={{
                  color: 'var(--neutral-500)',
                  fontSize: '0.9rem',
                  marginBottom: 'var(--space-xs)'
                }}
              >
                October 2020 – June 2024
              </p>
              
              <p 
                className="gpa"
                style={{
                  color: 'var(--success)',
                  fontWeight: 600
                }}
              >
                GPA: 3.52/4.0
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;