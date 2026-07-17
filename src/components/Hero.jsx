import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code2, Cpu, Database, ChevronDown, FileText } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.7'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(actionsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.5'
      )
      .fromTo(cardsRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
        '-=0.4'
      );
  }, []);

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 2rem 60px 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      maxWidth: '900px',
      textAlign: 'center',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    },
    preTitle: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--accent-cyan)',
      fontSize: '1.1rem',
      fontWeight: '600',
      letterSpacing: '3px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: 'calc(2.2rem + 2vw)',
      lineHeight: '1.1',
      fontWeight: '800',
      letterSpacing: '-1px',
      color: '#fff',
    },
    subtitle: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'calc(1.1rem + 0.5vw)',
      color: '#fff',
      fontWeight: '500',
    },
    description: {
      fontSize: '1.05rem',
      color: 'var(--text-secondary)',
      maxWidth: '650px',
      lineHeight: '1.7',
    },
    actions: {
      display: 'flex',
      gap: '1.2rem',
      marginTop: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      width: '100%',
      maxWidth: '850px',
      marginTop: '4rem',
      zIndex: 10,
    },
    card: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '0.8rem',
    },
    cardIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid var(--glass-border)',
      color: 'var(--accent-cyan)',
      transition: 'var(--transition-smooth)',
    },
    cardTitle: {
      fontSize: '1.05rem',
      fontWeight: '600',
      color: '#fff',
    },
    cardText: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
    },
    techDotsSvg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: 0.7,
      zIndex: 1,
    },
    scrollDown: {
      position: 'absolute',
      bottom: '25px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.3rem',
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      animation: 'bounce 2s infinite',
    }
  };

  return (
    <section id="home" ref={containerRef} style={styles.section}>
      {/* Main Content split into text on left and image on right */}
      <div className="container hero-container" style={{ zIndex: 10 }}>
        <div className="row align-items-center hero-row">
          
          {/* Left: Text Details */}
          <div className="col-lg-7 hero-text-col">
            <div style={styles.content} className="hero-text-container">
              <div ref={titleRef} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={styles.preTitle}>Hii, I am</span>
                <h1 style={styles.title}>
                  Madhur <span className="gradient-text">Anjana</span>
                </h1>
              </div>

              <h2 ref={subtitleRef} style={styles.subtitle}>
                Python Full Stack Developer | FastAPI Backend Developer | AI Enthusiast
              </h2>

              <p ref={descRef} style={styles.description}>
                Passionate Python Full Stack Developer with hands-on experience in building scalable web applications, RESTful APIs, and AI-powered solutions. Skilled in Python, FastAPI, SQLAlchemy, MySQL, React.js, and modern backend development. Experienced in developing secure, high-performance applications with clean architecture while continuously expanding my knowledge in Artificial Intelligence and Machine Learning.
              </p>

              <div ref={actionsRef} style={styles.actions}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>View Resume</span>
                  <FileText size={18} />
                </a>
                <a href="#contact" className="btn-secondary">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Profile Photo */}
          <div className="col-lg-5 hero-image-col">
            <div className="hero-img-wrapper animate-scale visible">
              <div className="hero-img-glow"></div>
              <div className="hero-img-frame">
                <img src={profileImg} alt="Madhur Anjana" className="hero-profile-img" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Micro-Features Grid */}
      <div ref={cardsRef} style={styles.cardsContainer} className="hero-cards">
        <div className="glass-panel hero-card" style={styles.card}>
          <div style={styles.cardIcon} className="card-icon cyan">
            <Cpu size={22} />
          </div>
          <h3 style={styles.cardTitle}>Python & FastAPI</h3>
          <p style={styles.cardText}>Highly efficient REST APIs, SQLAlchemy models, and structured Repository patterns.</p>
        </div>

        <div className="glass-panel hero-card" style={styles.card}>
          <div style={styles.cardIcon} className="card-icon purple">
            <Code2 size={22} />
          </div>
          <h3 style={styles.cardTitle}>MERN Stack</h3>
          <p style={styles.cardText}>Full stack development using React.js, Express.js, and Node.js for modern web portals.</p>
        </div>

        <div className="glass-panel hero-card" style={styles.card}>
          <div style={styles.cardIcon} className="card-icon pink">
            <Database size={22} />
          </div>
          <h3 style={styles.cardTitle}>Database Architect</h3>
          <p style={styles.cardText}>Designing scalable SQL schemas, index optimizations, and Sequelize/SQLAlchemy relations.</p>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a href="#about" style={styles.scrollDown}>
        <span>Scroll Down</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        .hero-container {
          padding: 0 1rem;
        }
        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }
        .hero-img-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-img-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(25px);
          animation: floatGlow 6s ease-in-out infinite alternate;
        }
        .hero-img-frame {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 40px;
          border: 2px solid rgba(255, 255, 255, 0.08);
          background: rgba(17, 17, 21, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          animation: floatCard 6s ease-in-out infinite;
        }
        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .hero-img-frame:hover .hero-profile-img {
          transform: scale(1.05);
        }
        @keyframes floatCard {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floatGlow {
          0% { transform: scale(0.9); opacity: 0.12; }
          100% { transform: scale(1.15); opacity: 0.22; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        @media (min-width: 992px) {
          .hero-text-container {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .hero-image-col {
            margin-top: 0;
          }
        }
        @media (max-width: 992px) {
          .hero-row {
            flex-direction: column-reverse !important;
            gap: 2rem;
          }
          .hero-img-wrapper {
            width: 270px;
            height: 270px;
          }
          .hero-img-frame {
            width: 240px;
            height: 240px;
            border-radius: 30px;
          }
        }
        @media (max-width: 768px) {
          .hero-cards {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-top: 2.5rem !important;
            padding: 0 1rem;
          }
          .hero-card {
            padding: 1.2rem !important;
          }
        }
        .hero-card {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-color: var(--accent-cyan) !important;
        }
        .hero-card:hover .card-icon.cyan {
          color: var(--accent-cyan);
          background: rgba(226, 165, 83, 0.08);
          border-color: var(--accent-cyan);
        }
        .hero-card:hover .card-icon.purple {
          color: var(--accent-purple);
          background: rgba(197, 168, 128, 0.08);
          border-color: var(--accent-purple);
        }
        .hero-card:hover .card-icon.pink {
          color: var(--accent-pink);
          background: rgba(208, 106, 76, 0.08);
          border-color: var(--accent-pink);
        }
      `}</style>
    </section>
  );
}
