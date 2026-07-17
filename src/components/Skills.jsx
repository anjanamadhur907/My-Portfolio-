import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, Terminal, Server, Database, Settings, Brain, 
  Atom, Layout, GitBranch, ShieldCheck, Rocket, Lock, ChevronRight 
} from 'lucide-react';

const Github = ({ size = 20, style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const badgesRef = useRef(null);

  const skillsData = [
    {
      category: 'Programming Languages',
      slug: 'languages',
      color: 'var(--accent-cyan)',
      icon: <Terminal size={20} />,
      desc: 'Writing clean, optimized, and structured code across multiple programming languages and query interfaces.',
      items: [
        { name: 'Python', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--accent-cyan)" /></svg> },
        { name: 'JavaScript', icon: <Code size={18} style={{ color: '#c5a880' }} /> },
        { name: 'SQL', icon: <Database size={18} style={{ color: '#d06a4c' }} /> },
        { name: 'HTML5', icon: <Layout size={18} style={{ color: '#c5a880' }} /> },
        { name: 'CSS3', icon: <Layout size={18} style={{ color: '#d06a4c' }} /> },
      ]
    },
    {
      category: 'Frontend Development',
      slug: 'frontend',
      color: 'var(--accent-purple)',
      icon: <Code size={20} />,
      desc: 'Building responsive, high-performance user interfaces with clean state management, modular components, and polished micro-animations.',
      items: [
        { name: 'React.js', icon: <Atom size={18} className="tech-icon-spin" style={{ color: '#c5a880' }} /> },
        { name: 'React Router', icon: <GitBranch size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'HTML & CSS', icon: <Layout size={18} style={{ color: '#d06a4c' }} /> },
        { name: 'Bootstrap', icon: <Code size={18} style={{ color: '#c5a880' }} /> },
      ]
    },
    {
      category: 'Backend Development',
      slug: 'backend',
      color: 'var(--accent-pink)',
      icon: <Server size={20} />,
      desc: 'Designing robust, scalable server architectures, high-efficiency REST endpoints, secure authentication systems, and optimized business logic.',
      items: [
        { name: 'FastAPI', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--accent-cyan)" /></svg> },
        { name: 'Node.js', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#c5a880' }}><path d="M12 2L3 7v10l9 5 9-5V7L12 2zm-1 14.5l-3-1.7V11.2l3 1.7v3.6zm0-5.2l-3-1.7 3-1.7 3 1.7-3 1.7zm5 3.5l-3-1.7V11.2l3 1.7v3.6z" /></svg> },
        { name: 'Express.js', icon: <div className="ex-icon-badge">ex</div> },
        { name: 'SQLAlchemy', icon: <Database size={18} style={{ color: '#e2a553' }} /> },
        { name: 'Jinja2', icon: <Code size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'Session Authentication', icon: <Lock size={18} style={{ color: 'var(--accent-purple)' }} /> },
        { name: 'Alembic', icon: <Settings size={18} style={{ color: 'var(--accent-cyan)' }} /> },
      ]
    },
    {
      category: 'Databases',
      slug: 'databases',
      color: 'var(--accent-cyan)',
      icon: <Database size={20} />,
      desc: 'Structuring relational models, normalizing schemas, indexing query flows for speed, and validating transaction safety.',
      items: [
        { name: 'MySQL', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2"><path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4z" /><path d="M3 7v6c0 2.2 4.03 4 9 4s9-1.8 9-4V7" /><path d="M3 13v6c0 2.2 4.03 4 9 4s9-1.8 9-4v-6" /></svg> },
        { name: 'Sequelize', icon: <div className="seq-icon-badge">S</div> },
        { name: 'Database Design', icon: <Layout size={18} style={{ color: 'var(--accent-pink)' }} /> },
      ]
    },
    {
      category: 'Tools & Platforms',
      slug: 'tools',
      color: 'var(--accent-purple)',
      icon: <Settings size={20} />,
      desc: 'Managing source control workflows, API testing suites, clean code formatters, and local staging servers.',
      items: [
        { name: 'Git & GitHub', icon: <Github size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'VS Code', icon: <Code size={18} style={{ color: 'var(--accent-cyan)' }} /> },
        { name: 'Postman', icon: <Rocket size={18} style={{ color: 'var(--accent-purple)' }} /> },
        { name: 'MySQL Workbench', icon: <Database size={18} style={{ color: 'var(--accent-pink)' }} /> },
      ]
    },
    {
      category: 'Concepts',
      slug: 'concepts',
      color: 'var(--accent-cyan)',
      icon: <Brain size={20} />,
      desc: 'Implementing core design patterns, structural layouts, data flow mechanisms, and authorization standards.',
      items: [
        { name: 'Object-Oriented Programming (OOP)', icon: <Brain size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'Data Structures & Algorithms', icon: <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} /> },
        { name: 'CRUD Operations', icon: <Settings size={18} style={{ color: 'var(--accent-purple)' }} /> },
        { name: 'Authentication & Authorization', icon: <Lock size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'API Integration', icon: <GitBranch size={18} style={{ color: 'var(--accent-cyan)' }} /> },
        { name: 'Database Design', icon: <Layout size={18} style={{ color: 'var(--accent-pink)' }} /> },
        { name: 'Repository-Service Pattern', icon: <Server size={18} style={{ color: 'var(--accent-purple)' }} /> },
        { name: 'MVC Architecture', icon: <Layout size={18} style={{ color: 'var(--accent-pink)' }} /> },
      ]
    }
  ];

  useEffect(() => {
    // GSAP Scroll animation for the Left Graphic
    const anim = gsap.fromTo(leftRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    // Stagger in the skill badges every time active index shifts
    if (badgesRef.current) {
      gsap.fromTo(badgesRef.current.children,
        { opacity: 0, scale: 0.95, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [activeIdx]);

  const styles = {
    section: {
      position: 'relative',
      padding: '100px 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      zIndex: 2,
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    subtitle: {
      fontFamily: 'var(--font-body)',
      color: 'var(--accent-cyan)',
      fontSize: '0.9rem',
      fontWeight: '700',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginBottom: '0.8rem',
    },
    subtitleDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--accent-purple)',
    },
    title: {
      fontSize: 'calc(1.8rem + 1.2vw)',
      fontWeight: '800',
      color: '#fff',
      marginBottom: '1rem',
    },
    desc: {
      color: 'var(--text-secondary)',
      fontSize: '1.05rem',
      maxWidth: '600px',
      margin: '0 auto',
    }
  };

  return (
    <section id="skills" ref={containerRef} style={styles.section}>
      {/* Headings */}
      <div style={styles.header}>
        <span style={styles.subtitle}>
          <div style={styles.subtitleDot}></div>
          WHAT I DO BEST
        </span>
        <h2 style={styles.title}>
          My Technical <span className="gradient-text">Skills</span>
        </h2>
        <p style={styles.desc}>
          Hover or click on categories to explore my developer toolkit
        </p>
      </div>

      {/* Main Core Skills Layout */}
      <div className="skills-interactive-container">
        {/* Left: Manifesto & Tab Controls */}
        <div ref={leftRef} className="skills-left-col">
          <div className="skills-manifesto-card">
            <h3 className="manifesto-title">Engineering Philosophy</h3>
            <p className="manifesto-desc">
              I believe in building clean, maintainable systems that scale. My developer toolkit centers around crafting solid backend applications in Python and Node.js, blending them with responsive, highly polished user interfaces in React.
            </p>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="skills-nav-tabs desktop-only">
            {skillsData.map((category, index) => {
              const isActive = activeIdx === index;
              return (
                <div
                  key={index}
                  className={`skills-tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIdx(index)}
                  onMouseEnter={() => setActiveIdx(index)}
                  style={{ '--tab-color': category.color }}
                >
                  <span className="tab-number">0{index + 1}</span>
                  <span className="tab-label">{category.category}</span>
                  <div className="tab-indicator-line"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Detail Showcase / Accordion wrapper */}
        <div ref={rightRef} className="skills-right-col">
          {/* Desktop Showcase View */}
          <div className="skills-showcase-card glass-panel desktop-only" style={{ '--active-accent': skillsData[activeIdx].color }}>
            <div className="showcase-header">
              <span className="showcase-icon" style={{ color: skillsData[activeIdx].color }}>
                {skillsData[activeIdx].icon}
              </span>
              <h3 className="showcase-title">{skillsData[activeIdx].category}</h3>
            </div>
            <p className="showcase-desc">{skillsData[activeIdx].desc}</p>
            
            <div className="showcase-divider"></div>
            
            <h4 className="tools-title">Primary Stack & Frameworks</h4>
            <div ref={badgesRef} className="skills-grid-container">
              {skillsData[activeIdx].items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-grid-badge">
                  <div className="badge-icon-wrapper">{skill.icon}</div>
                  <span className="badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="skills-accordion-wrapper mobile-only">
            {skillsData.map((category, index) => {
              const isActive = activeIdx === index;
              return (
                <div
                  key={index}
                  className={`accordion-item glass-panel ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIdx(index)}
                  style={{ '--active-accent': category.color }}
                >
                  <div className="accordion-header">
                    <span className="accordion-icon" style={{ color: category.color }}>
                      {category.icon}
                    </span>
                    <span className="accordion-title">{category.category}</span>
                    <ChevronRight size={16} className="accordion-arrow" />
                  </div>
                  
                  {isActive && (
                    <div className="accordion-content">
                      <p className="accordion-desc">{category.desc}</p>
                      <div className="accordion-divider"></div>
                      <div className="skills-grid-container">
                        {category.items.map((skill, sIdx) => (
                          <div key={sIdx} className="skill-grid-badge">
                            <div className="badge-icon-wrapper">{skill.icon}</div>
                            <span className="badge-name">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Core Skills Layout grid */
        .skills-interactive-container {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }

        .skills-left-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skills-manifesto-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
        }

        .manifesto-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: #fff;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .manifesto-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .skills-nav-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .skills-tab-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.2rem 1.5rem;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          cursor: pointer;
          position: relative;
          transition: var(--transition-fast);
        }

        .skills-tab-item:hover, .skills-tab-item.active {
          background: rgba(255, 255, 255, 0.03);
          border-color: var(--tab-color);
        }

        .tab-number {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .skills-tab-item.active .tab-number {
          color: var(--tab-color);
        }

        .tab-label {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .skills-tab-item.active .tab-label {
          color: #fff;
        }

        .tab-indicator-line {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0%;
          background: var(--tab-color);
          transition: height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0 4px 4px 0;
        }

        .skills-tab-item.active .tab-indicator-line {
          height: 50%;
        }

        .skills-showcase-card {
          padding: 3rem;
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .skills-showcase-card:hover {
          border-color: var(--active-accent) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 2px var(--active-accent);
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .showcase-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
        }

        .showcase-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: #fff;
          font-weight: 600;
        }

        .showcase-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .showcase-divider {
          height: 1px;
          background: linear-gradient(to right, var(--glass-border), transparent);
          margin-bottom: 2rem;
        }

        .tools-title {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.2rem;
          font-weight: 700;
        }

        .skills-grid-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skill-grid-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transition: var(--transition-smooth);
        }

        .skill-grid-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .badge-name {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .skill-grid-badge:hover .badge-name {
          color: #ffffff;
        }

        /* Custom Badge Icon Styles */
        .ex-icon-badge {
          width: 18px;
          height: 18px;
          background: #252525;
          color: #fff;
          font-size: 8px;
          font-weight: 800;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: lowercase;
          border: 1px solid rgba(255,255,255,0.25);
        }

        .seq-icon-badge {
          width: 18px;
          height: 18px;
          background: #3e75c3;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-icon-spin {
          animation: spin-logo 8s linear infinite;
        }

        @keyframes spin-logo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Mobile Accordion details */
        .skills-accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .accordion-item {
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition-fast);
        }

        .accordion-item.active {
          border-color: var(--active-accent);
        }

        .accordion-header {
          display: flex;
          align-items: center;
          padding: 1.2rem 1.5rem;
          cursor: pointer;
          gap: 1rem;
        }

        .accordion-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .accordion-title {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          flex: 1;
        }

        .accordion-arrow {
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }

        .accordion-item.active .accordion-arrow {
          transform: rotate(90deg);
          color: #fff;
        }

        .accordion-content {
          padding: 0 1.5rem 1.8rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .accordion-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .accordion-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        /* Responsive displays */
        .desktop-only {
          display: flex !important;
        }
        .mobile-only {
          display: none !important;
        }

        @media (max-width: 900px) {
          .skills-interactive-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .skill-grid-badge {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
