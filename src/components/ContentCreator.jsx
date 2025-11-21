import React, { useEffect, useRef, useState } from 'react';

const ContentCreator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate counter
            animateCounter();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const target = 25;
    const duration = 2000;
    const startTime = Date.now();
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(target * easeOutQuart(progress));
      
      setFollowerCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  const easeOutQuart = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const topics = [
    'Java fundamentals and advanced concepts',
    'Spring Boot development best practices',
    'Problem-solving techniques and algorithms',
    'Portfolio building and career guidance',
    'Interview preparation and technical skills',
    'Clean code principles and system design'
  ];

  const impactAreas = [
    {
      title: 'Understanding Java Basics',
      description: 'Clear explanations that make complex OOP concepts accessible'
    },
    {
      title: 'Spring Boot Mastery',
      description: 'Step-by-step guides for building production-ready applications'
    },
    {
      title: 'Career Guidance',
      description: 'Real-world advice for breaking into the tech industry'
    }
  ];

  return (
    <section 
      ref={contentRef}
      className={`content-creator fade-in ${isVisible ? 'visible' : ''}`}
      id="content-creator"
      style={{
        background: 'var(--neutral-900)',
        padding: 'var(--space-xxl) 0'
      }}
    >
      <div className="container">
        <h2 className="section-title">Content Creation & Community Impact</h2>
        
        <div 
          className="creator-content"
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div 
            className="creator-intro"
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <p 
              className="creator-description"
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                maxWidth: '60ch',
                margin: '0 auto'
              }}
            >
              I'm passionate about making programming accessible to everyone, especially Arabic-speaking students. Through my content, I break down complex Java and Spring Boot concepts into digestible lessons, helping newcomers build confidence and practical skills.
            </p>
          </div>
          
          <div 
            className="creator-stats"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <div 
              className="stat-card"
              style={{
                textAlign: 'center',
                padding: 'var(--space-lg)',
                background: 'var(--neutral-800)',
                borderRadius: '12px',
                border: '1px solid var(--neutral-700)',
                minWidth: '150px',
                transition: 'var(--transition-medium)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 4px 24px rgba(0, 122, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div 
                className="stat-number"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-500)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {followerCount}K+
              </div>
              <div 
                className="stat-label"
                style={{
                  color: 'var(--neutral-400)',
                  fontSize: '0.9rem',
                  marginTop: 'var(--space-xs)'
                }}
              >
                Instagram Followers
              </div>
            </div>
            
            <div 
              className="stat-card"
              style={{
                textAlign: 'center',
                padding: 'var(--space-lg)',
                background: 'var(--neutral-800)',
                borderRadius: '12px',
                border: '1px solid var(--neutral-700)',
                minWidth: '150px',
                transition: 'var(--transition-medium)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 4px 24px rgba(0, 122, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div 
                className="stat-number"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-500)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Daily
              </div>
              <div 
                className="stat-label"
                style={{
                  color: 'var(--neutral-400)',
                  fontSize: '0.9rem',
                  marginTop: 'var(--space-xs)'
                }}
              >
                Tips & Tutorials
              </div>
            </div>
          </div>
          
          <div 
            className="creator-highlights"
            style={{
              marginBottom: 'var(--space-xl)'
            }}
          >
            <h3 
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-md)',
                color: 'var(--primary-500)'
              }}
            >
              What I Cover
            </h3>
            
            <div 
              className="topics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-sm)'
              }}
            >
              {topics.map((topic, index) => (
                <div 
                  key={index}
                  style={{
                    padding: 'var(--space-sm)',
                    background: 'var(--neutral-800)',
                    borderRadius: '8px',
                    border: '1px solid var(--neutral-700)',
                    color: 'var(--neutral-400)',
                    position: 'relative',
                    paddingLeft: 'var(--space-lg)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--neutral-700)';
                    e.target.style.color = 'var(--neutral-200)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--neutral-800)';
                    e.target.style.color = 'var(--neutral-400)';
                  }}
                >
                  <span 
                    style={{
                      position: 'absolute',
                      left: 'var(--space-sm)',
                      color: 'var(--success)',
                      fontWeight: 'bold'
                    }}
                  >
                    ✓
                  </span>
                  {topic}
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="creator-impact"
            style={{
              marginBottom: 'var(--space-xl)'
            }}
          >
            <h3 
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-md)',
                color: 'var(--primary-500)'
              }}
            >
              How My Content Helps Students
            </h3>
            
            <div 
              className="impact-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-md)'
              }}
            >
              {impactAreas.map((area, index) => (
                <div 
                  key={index}
                  className="impact-item"
                  style={{
                    background: 'var(--neutral-800)',
                    padding: 'var(--space-md)',
                    borderRadius: '12px',
                    border: '1px solid var(--neutral-700)',
                    textAlign: 'center',
                    transition: 'var(--transition-medium)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 4px 24px rgba(0, 122, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="impact-title"
                    style={{
                      color: 'var(--neutral-200)',
                      fontWeight: 600,
                      marginBottom: 'var(--space-xs)',
                      display: 'block'
                    }}
                  >
                    {area.title}
                  </div>
                  <p 
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--neutral-400)'
                    }}
                  >
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="cta-section"
            style={{
              textAlign: 'center'
            }}
          >
            <a 
              href="https://www.instagram.com/zaidscript/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
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
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--primary-700)';
                e.target.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--primary-500)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Follow me on Instagram
            </a>
            
            <p 
              className="cta-text"
              style={{
                marginTop: 'var(--space-sm)',
                fontStyle: 'italic',
                color: 'var(--neutral-500)'
              }}
            >
              Join 25,000+ students and developers for daily tips and tutorials
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .creator-stats {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .stat-card {
            width: 100% !important;
            max-width: 200px !important;
          }
          
          .topics-grid {
            grid-template-columns: 1fr !important;
          }
          
          .impact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContentCreator;