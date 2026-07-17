import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      type: 'training',
      year: '2025 – 2026',
      location: 'Indore',
      title: 'Python Full Stack Trainee',
      subtitle: 'Infobeans Foundation (ITEP Program)',
      bullets: [
        'Completed an industry-oriented Python Full Stack training program focused on backend development, REST API development, database design, and AI fundamentals.',
        'Built multiple real-world projects using FastAPI, SQLAlchemy, MySQL, React.js, and Git.',
        'Gained hands-on experience in authentication, API integration, database management, and scalable application development.'
      ],
      icon: <Briefcase size={18} />
    },
    {
      type: 'education',
      year: '2023 – 2026',
       location: 'Indore',
      title: 'Bachelor of Computer Application (BCA)',
      subtitle: 'Vishisht School of Management, Indore',
      bullets: [
        'Focused on Computer Architecture, Database Management Systems (DBMS), and Software Engineering.',
        'Acquired strong fundamentals in Python, JavaScript, and Structured Query Language (SQL).'
      ],
      icon: <GraduationCap size={18} />
    },
    {
      type: 'education',
      year: '2023',
      location: 'Mandsaur',
      title: 'Higher Secondary (12th) - CBSE',
      subtitle: 'Paramount Academy School, Sitamau, Mandsaur, MP',
      bullets: [
        'Completed board examination with a science and mathematics focus.'
      ],
      icon: <GraduationCap size={18} />
    },
    {
      type: 'education',
      year: '2021',
        location: 'Mandsaur',
      title: 'Secondary (10th) - CBSE',
      subtitle: 'Paramount Academy School, Sitamau, Mandsaur, MP',
      bullets: [
        'Acquired foundational skills in general sciences and mathematics.'
      ],
      icon: <GraduationCap size={18} />
    }
  ];

  useEffect(() => {
    // Timeline items slide-in animations
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    const triggers = [];
    
    items.forEach((item, index) => {
      const isEven = index % 2 === 0;
      const xOffset = window.innerWidth <= 768 ? 40 : (isEven ? -50 : 50);

      const anim = gsap.fromTo(item,
        { opacity: 0, x: xOffset, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const styles = {
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#fff',
    },
    titleUnderline: {
      width: '45px',
      height: '2px',
      background: 'var(--accent-cyan)',
      borderRadius: '1px',
      margin: '0 auto 4rem auto',
    },
    card: {
      position: 'relative',
      padding: '1.8rem',
      borderLeft: '3px solid var(--accent-cyan)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    cardTraining: {
      borderLeftColor: 'var(--accent-purple)',
    },
    metaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      flexWrap: 'wrap',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#fff',
    },
    cardSubtitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: 'var(--text-secondary)',
    },
    bullets: {
      paddingLeft: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      fontSize: '0.88rem',
      color: 'var(--text-secondary)',
    },
    iconWrapper: {
      position: 'absolute',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'var(--bg-tertiary)',
      border: '2px solid var(--accent-cyan)',
      color: 'var(--accent-cyan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: '2rem',
      zIndex: 5,
    }
  };

  return (
    <section id="experience" ref={containerRef} className="section">
      <h2 style={styles.title}>Journey & <span className="gradient-text">Education</span></h2>
      <div style={styles.titleUnderline}></div>

      <div ref={timelineRef} className="timeline">
        {timelineData.map((item, idx) => {
          return (
            <div key={idx} className="timeline-item">
              <div 
                style={{
                  ...styles.iconWrapper,
                  borderColor: item.type === 'training' ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                  color: item.type === 'training' ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                  boxShadow: item.type === 'training' ? '0 4px 10px rgba(197, 168, 128, 0.15)' : '0 4px 10px rgba(226, 165, 83, 0.15)'
                }}
                className="timeline-icon"
              >
                {item.icon}
              </div>

              <div 
                className="glass-panel timeline-content" 
                style={{
                  ...styles.card,
                  borderLeftColor: item.type === 'training' ? 'var(--accent-purple)' : 'var(--accent-cyan)'
                }}
              >
                <div style={styles.metaRow}>
                  <div style={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 style={styles.cardTitle}>{item.title}</h3>
                <h4 style={styles.cardSubtitle}>{item.subtitle}</h4>

                <ul style={styles.bullets}>
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .timeline-content {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-content:hover {
          transform: scale(1.02) translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .timeline-icon {
          position: absolute;
          top: 2rem;
          z-index: 5;
        }
        .timeline-item:nth-child(odd) .timeline-icon {
          right: -18px;
        }
        .timeline-item:nth-child(even) .timeline-icon {
          left: -18px;
        }
        @media (max-width: 768px) {
          .timeline-item:nth-child(odd) .timeline-icon,
          .timeline-item:nth-child(even) .timeline-icon {
            left: 2px !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
