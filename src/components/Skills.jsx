import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Backend & Languages',
      skills: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices Architecture']
    },
    {
      title: 'Databases & Data',
      skills: ['SQL', 'SQL Server', 'JPA/Hibernate', 'Data Pipelines', 'Data Modeling']
    },
    {
      title: 'Tools & Ecosystem',
      skills: ['Maven', 'Git', 'Apache Kafka', 'xlwings', 'Python']
    },
    {
      title: 'Computer Science',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Design', 'Clean Code Principles', 'Debugging & Problem Solving', 'Team Collaboration']
    }
  ];

  return (
    <section 
      ref={skillsRef}
      className={`skills fade-in ${isVisible ? 'visible' : ''}`}
      id="skills"
      style={{
        padding: 'var(--space-xxl) 0'
      }}
    >
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div 
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)'
          }}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category"
              style={{
                background: 'var(--neutral-900)',
                padding: 'var(--space-lg)',
                borderRadius: '12px',
                border: '1px solid var(--neutral-800)',
                transition: 'var(--transition-medium)',
                cursor: 'pointer'
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
              <h3 
                style={{
                  marginBottom: 'var(--space-md)',
                  color: 'var(--primary-500)'
                }}
              >
                {category.title}
              </h3>
              
              <div 
                className="skill-badges"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-xs)'
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-badge"
                    style={{
                      background: 'var(--neutral-800)',
                      color: 'var(--neutral-200)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      border: '1px solid var(--neutral-700)',
                      transition: 'var(--transition-fast)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.background = 'var(--primary-500)';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.background = 'var(--neutral-800)';
                      e.target.style.color = 'var(--neutral-200)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;