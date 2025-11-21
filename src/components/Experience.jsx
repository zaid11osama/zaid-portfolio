import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Java Developer',
      company: 'Arab Bank',
      period: 'March 2025 – Present',
      location: 'Amman, Jordan',
      responsibilities: [
        'Supporting the development and implementation of a Master Data Management (MDM) system to centralize and standardize critical data across the organization',
        'Improved data quality and reduced duplication by <span style="color: var(--success); font-weight: 600;">60%</span> through the adoption of robust data governance policies'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Allied Actuarial Consultancy',
      period: 'June 2024 – December 2024',
      location: 'Amman, Jordan',
      responsibilities: [
        'Automated repetitive Excel tasks, improving workflows and reducing manual effort by <span style="color: var(--success); font-weight: 600;">50%</span>',
        'Reduced data errors by <span style="color: var(--success); font-weight: 600;">70%</span> through robust validation and automation processes, ensuring accurate and reliable reporting'
      ]
    }
  ];

  return (
    <section 
      ref={experienceRef}
      className={`experience fade-in ${isVisible ? 'visible' : ''}`}
      id="experience"
      style={{
        background: 'var(--neutral-900)',
        padding: 'var(--space-xxl) 0'
      }}
    >
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div 
          className="timeline"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Timeline line */}
          <div 
            style={{
              content: '""',
              position: 'absolute',
              left: '30px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--primary-500)'
            }}
          />
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
              style={{
                position: 'relative',
                marginBottom: 'var(--space-xl)',
                paddingLeft: '80px'
              }}
            >
              {/* Timeline dot */}
              <div 
                style={{
                  content: '""',
                  position: 'absolute',
                  left: '22px',
                  top: 0,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'var(--primary-500)',
                  border: '4px solid var(--neutral-950)'
                }}
              />
              
              <div 
                className="timeline-content"
                style={{
                  background: 'var(--neutral-900)',
                  padding: 'var(--space-lg)',
                  borderRadius: '12px',
                  border: '1px solid var(--neutral-800)',
                  transition: 'var(--transition-medium)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 24px rgba(0, 122, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div 
                  className="timeline-header"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: 'var(--space-sm)',
                    flexWrap: 'wrap',
                    gap: 'var(--space-xs)'
                  }}
                >
                  <h3 
                    style={{
                      color: 'var(--neutral-200)',
                      margin: 0
                    }}
                  >
                    {exp.title}
                  </h3>
                  
                  <span 
                    className="company"
                    style={{
                      color: 'var(--primary-500)',
                      fontWeight: 600,
                      fontSize: '1.125rem'
                    }}
                  >
                    {exp.company}
                  </span>
                </div>
                
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  <span 
                    className="period"
                    style={{
                      color: 'var(--neutral-500)',
                      fontSize: '0.9rem'
                    }}
                  >
                    {exp.period}
                  </span>
                  
                  <span 
                    className="location"
                    style={{
                      color: 'var(--neutral-500)',
                      fontSize: '0.9rem'
                    }}
                  >
                    {exp.location}
                  </span>
                </div>
                
                <ul 
                  className="responsibilities"
                  style={{
                    listStyle: 'none',
                    marginTop: 'var(--space-md)'
                  }}
                >
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li 
                      key={respIndex}
                      style={{
                        marginBottom: 'var(--space-xs)',
                        paddingLeft: 'var(--space-sm)',
                        position: 'relative',
                        color: 'var(--neutral-400)',
                        lineHeight: 1.6
                      }}
                    >
                      <span 
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--primary-500)',
                          fontWeight: 'bold'
                        }}
                      >
                        →
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: responsibility }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline::before {
            left: 15px !important;
          }
          
          .timeline-item {
            padding-left: 50px !important;
          }
          
          .timeline-item::before {
            left: 7px !important;
          }
          
          .timeline-header {
            flex-direction: column !important;
            align-items: start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;