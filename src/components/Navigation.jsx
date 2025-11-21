import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'content-creator', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'content-creator', label: 'Mentoring' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: isScrolled 
          ? 'rgba(6, 8, 10, 0.96)' 
          : 'rgba(6, 8, 10, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        zIndex: 1000,
        transition: 'var(--transition-medium)'
      }}
    >
      <div 
        className="nav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-lg)',
          padding: '0.9rem 2rem', /* increased padding */
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div 
          className="nav-brand"
          onClick={() => scrollToSection('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <span
            className="brand-logo"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(16,185,129,0.08))',
              border: '1px solid rgba(255,255,255,0.04)',
              color: 'var(--primary-500)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              boxShadow: '0 6px 18px rgba(2,6,23,0.25)'
            }}
            aria-hidden
          >
            ZO
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.2px',
                background: 'linear-gradient(90deg, var(--primary-400), var(--primary-600))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Zaid Osama
            </span>
            <span
              style={{
                fontSize: '0.725rem',
                color: 'var(--neutral-400)',
                marginTop: '2px'
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <ul 
          className="nav-menu"
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: 'var(--space-lg)',
            alignItems: 'center'
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id ? 'linear-gradient(90deg, rgba(99,102,241,0.12), rgba(16,185,129,0.06))' : 'transparent',
                  border: activeSection === item.id ? '1px solid rgba(99,102,241,0.14)' : '1px solid transparent',
                  color: activeSection === item.id 
                    ? 'var(--primary-400)' 
                    : 'var(--neutral-300)',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                  transition: 'all 180ms ease',
                  borderRadius: '999px', /* pill */
                  padding: '8px 14px', /* increased padding */
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: activeSection === item.id ? '0 6px 18px rgba(99,102,241,0.06)' : 'none'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.color = 'var(--neutral-200)';
                  (e.currentTarget).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    (e.currentTarget).style.color = 'var(--neutral-300)';
                  }
                  (e.currentTarget).style.transform = 'none';
                }}
              >
                {item.label}
                <span 
                  style={{
                    content: '""',
                    display: 'inline-block',
                    width: activeSection === item.id ? '6px' : '0',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--primary-500)',
                    transition: 'width 180ms ease, opacity 120ms ease',
                    opacity: activeSection === item.id ? 1 : 0
                  }}
                  aria-hidden
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '6px'
          }}
          aria-label="Toggle menu"
        >
          <span 
            className={`bar ${isMobileMenuOpen ? 'active' : ''}`}
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: 'var(--neutral-200)',
              margin: '3px 0',
              transition: 'var(--transition-fast)',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              borderRadius: '2px'
            }}
          />
          <span 
            className={`bar ${isMobileMenuOpen ? 'active' : ''}`}
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: 'var(--neutral-200)',
              margin: '3px 0',
              transition: 'var(--transition-fast)',
              opacity: isMobileMenuOpen ? '0' : '1',
              borderRadius: '2px'
            }}
          />
          <span 
            className={`bar ${isMobileMenuOpen ? 'active' : ''}`}
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: 'var(--neutral-200)',
              margin: '3px 0',
              transition: 'var(--transition-fast)',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
              borderRadius: '2px'
            }}
          />
        </button>

        {/* Mobile Menu */}
        <ul 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          style={{
            position: 'fixed',
            left: isMobileMenuOpen ? '0' : '-100%',
            top: '72px',
            flexDirection: 'column',
            backgroundColor: 'rgba(6, 8, 10, 0.98)',
            width: '100%',
            textAlign: 'center',
            transition: '0.28s ease',
            boxShadow: '0 10px 27px rgba(0, 0, 0, 0.5)',
            padding: 'var(--space-lg) 0',
            listStyle: 'none',
            gap: 'var(--space-md)'
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id ? 'linear-gradient(90deg, rgba(99,102,241,0.08), rgba(16,185,129,0.04))' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.03)',
                  color: activeSection === item.id 
                    ? 'var(--primary-400)' 
                    : 'var(--neutral-300)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  transition: 'all 160ms ease',
                  display: 'inline-block',
                  boxShadow: activeSection === item.id ? '0 10px 30px rgba(99,102,241,0.06)' : 'none'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-menu {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }

        /* accessible focus styles */
        .nav-link:focus {
          outline: 3px solid rgba(99,102,241,0.12);
          outline-offset: 3px;
        }

        /* reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .nav-link, .hamburger, .mobile-menu, .nav-brand { transition: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;