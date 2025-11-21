import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Master Data Management (MDM) System',
      role: 'Backend Developer (Java & Spring Boot)',
      description: 'Worked on a large-scale MDM project within the banking sector to centralize and govern critical enterprise data. Designed and developed backend microservices, implemented RESTful APIs for seamless system integration, and utilized Apache Kafka for real-time data streaming between distributed services.',
      impact: [
        '60% reduction in data duplication',
        'Enhanced system reliability',
        'Improved data accuracy'
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Apache Kafka', 'SQL Server']
    },
    {
      title: 'Data Pipeline & Advanced Analytics',
      role: 'Backend Developer',
      description: 'Built a comprehensive data pipeline using Python and xlwings to extract data from Excel files into SQL Server. Leveraged Python\'s data analysis libraries, such as Pandas, to analyze and visualize data directly from the database, enabling insightful reporting and informed decision-making.',
      impact: [
        'Automated reporting workflows',
        'Enhanced decision-making capabilities'
      ],
      tech: ['Python', 'xlwings', 'SQL Server', 'Pandas']
    },
    {
      title: 'InternHub – Internship Matching Platform',
      role: 'Full-stack / Backend-focused Developer',
      description: 'A platform that connects university students with IT companies offering training/internships. Designed with a focus on real-world use: user authentication, company dashboards, and listing/filtering opportunities.',
      impact: [
        'Streamlined internship matching process',
        'Improved student-company connections'
      ],
      tech: ['React', 'Java', 'Spring Boot', 'SQL Server']
    },
    {
      title: 'Smart Expense Tracker (SmartSpend)',
      role: 'Backend & System Design',
      description: 'A personal finance app to track expenses, categories, and budgets. Implemented secure authentication, roles, and a robust backend for managing financial data with proper access controls.',
      impact: [
        'Secure financial data management',
        'Role-based access control',
        'Real-time expense tracking'
      ],
      tech: ['React', 'Spring Boot', 'SQL Server', 'JWT', 'Role-based Access']
    }
  ];

  return (
    <section 
      ref={projectsRef}
      className={`projects fade-in ${isVisible ? 'visible' : ''}`}
      id="projects"
      style={{
        padding: 'var(--space-xxl) 0'
      }}
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-lg)'
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
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
                e.target.style.boxShadow = '0 8px 32px rgba(0, 122, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <h3 
                style={{
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--neutral-200)'
                }}
              >
                {project.title}
              </h3>
              
              <p 
                className="project-role"
                style={{
                  color: 'var(--primary-500)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-md)'
                }}
              >
                {project.role}
              </p>
              
              <p 
                className="project-description"
                style={{
                  marginBottom: 'var(--space-md)',
                  lineHeight: 1.6,
                  color: 'var(--neutral-400)'
                }}
              >
                {project.description}
              </p>
              
              {project.impact && project.impact.length > 0 && (
                <div 
                  className="impact-metrics"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-xs)',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  {project.impact.map((metric, metricIndex) => (
                    <span 
                      key={metricIndex}
                      className="metric"
                      style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        color: 'var(--success)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
              
              <div 
                className="tech-stack"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-xs)'
                }}
              >
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="tech-badge"
                    style={{
                      background: 'var(--neutral-800)',
                      color: 'var(--neutral-200)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
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
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;