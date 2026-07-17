import { Award, Brain, Users, Compass, MessageSquare, Zap, GraduationCap, Languages, BookOpen } from 'lucide-react';

export default function About() {
  const strengths = [
    { name: 'Problem Solving', icon: <Brain size={20} />, desc: 'Algorithmic approach to complex engineering bugs.' },
    { name: 'Analytical Thinking', icon: <Compass size={20} />, desc: 'System architecture analysis and DB normalization.' },
    { name: 'Leadership', icon: <Award size={20} />, desc: 'Guidance and ownership in engineering tasks.' },
    { name: 'Team Collaboration', icon: <Users size={20} />, desc: 'Effective integration into agile team environments.' },
    { name: 'Communication Skills', icon: <MessageSquare size={20} />, desc: 'Bridging tech constraints and business requirements.' },
    { name: 'Quick Learner', icon: <Zap size={20} />, desc: 'Eager to grasp new stacks, tools, and AI workflows.' },
    { name: 'Continuous Learning', icon: <BookOpen size={20} />, desc: 'Staying updated with ML/AI models and Python technologies.' },
  ];

  const styles = {
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      position: 'relative',
      color: '#fff',
    },
    titleUnderline: {
      width: '45px',
      height: '2px',
      background: 'var(--accent-cyan)',
      borderRadius: '1px',
      marginBottom: '2rem',
    },
    bioText: {
      fontSize: '1.05rem',
      color: 'var(--text-secondary)',
      marginBottom: '1.5rem',
      lineHeight: '1.8',
    },
    highlights: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      margin: '2rem 0',
    },
    highlightItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      color: '#fff',
      fontWeight: '600',
      fontSize: '0.95rem',
    },
    highlightIcon: {
      color: 'var(--accent-cyan)',
      display: 'flex',
      alignItems: 'center',
    },
    strengthCard: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    },
    strengthIcon: {
      color: 'var(--accent-cyan)',
      transition: 'var(--transition-smooth)',
      marginBottom: '0.2rem',
    },
    strengthName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#fff',
    },
    strengthDesc: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      lineHeight: '1.4',
    },
    languageSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    langContainer: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    langTag: {
      padding: '0.4rem 1.2rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid var(--glass-border)',
      color: 'var(--accent-cyan)',
      fontWeight: '600',
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left: Bio & Details */}
          <div className="col-lg-7 animate-slide-left">
            <h2 style={styles.title}>About <span className="gradient-text">Me</span></h2>
            <div style={styles.titleUnderline}></div>

            <p style={styles.bioText}>
              I'm a Python Full Stack Developer passionate about backend development, REST API design, database architecture, and AI-powered applications. I enjoy building scalable, secure, and efficient software that solves real-world problems.
            </p>
            <p style={styles.bioText}>
              I have developed multiple full-stack applications using Python, FastAPI, SQLAlchemy, MySQL, React.js, Node.js, and Express.js. My projects include AI-powered applications, e-commerce platforms, healthcare systems, and real-time web applications. I focus on writing clean, maintainable code using modern backend architecture and best development practices.
            </p>
            <p style={styles.bioText}>
              Currently, I am enhancing my knowledge of Machine Learning, AI fundamentals, and modern Python technologies while continuously improving my software development skills.
            </p>

            <div style={styles.highlights}>
              <div style={styles.highlightItem}>
                <span style={styles.highlightIcon}><GraduationCap size={20} /></span>
                <span>BCA (2023 - 2026) - Vishisht School of Management, Indore</span>
              </div>
              <div style={styles.highlightItem}>
                <span style={styles.highlightIcon}><Languages size={20} /></span>
                <span>Bilingual (English & Hindi)</span>
              </div>
            </div>

            <div className="glass-panel" style={styles.languageSection}>
              <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: '600' }}>Languages Spoken</h4>
              <div style={styles.langContainer}>
                <span style={styles.langTag}>English (Professional)</span>
                <span style={{ ...styles.langTag, color: 'var(--accent-purple)' }}>Hindi (Native)</span>
              </div>
            </div>
          </div>

          {/* Right: Strengths Grid */}
          <div className="col-lg-5 animate-slide-right">
            <h3 style={{ ...styles.title, fontSize: '1.8rem', marginBottom: '0.5rem' }}>My <span className="gradient-text">Strengths</span></h3>
            <div style={{ ...styles.titleUnderline, marginBottom: '2rem' }}></div>

            <div className="row g-3 stagger-children">
              {strengths.map((item, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="glass-panel strength-card" style={styles.strengthCard}>
                    <div style={styles.strengthIcon} className="strength-icon">
                      {item.icon}
                    </div>
                    <h4 style={styles.strengthName}>{item.name}</h4>
                    <p style={styles.strengthDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .strength-card {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .strength-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .strength-card:hover .strength-icon {
          color: var(--accent-cyan);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
