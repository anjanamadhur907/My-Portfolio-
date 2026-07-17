import { ExternalLink, ShieldCheck, HeartPulse, Truck, ShoppingCart } from 'lucide-react';

const Github = ({ size = 24, className }) => (
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
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectsData = [
    {
      title: 'AI Resume Analyzer',
      desc: 'An AI-powered resume analysis platform that evaluates resumes using Artificial Intelligence. The application extracts content from PDF resumes, analyzes technical skills, calculates ATS scores, identifies strengths and weaknesses, and provides personalized recommendations to improve resume quality.',
      bullets: [
        'User Authentication & Resume Dashboard',
        'PDF Parsing & Resume Upload Management',
        'AI-Based Resume Analysis & Skill Extraction',
        'ATS Score Calculation & Personalized Recommendations'
      ],
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Jinja2', 'Google Gemini API', 'Bootstrap'],
      icon: <ShieldCheck size={28} />,
      accent: 'var(--accent-cyan)',
      glow: 'var(--glow-cyan)',
      github: 'https://github.com/anjanamadhur907'
    },
    {
      title: 'Python Full Stack E-Commerce System',
      desc: 'A full-stack e-commerce platform developed using Python, FastAPI, SQLAlchemy, MySQL, and React.js. The application enables users to browse products, manage shopping carts, place orders, and securely manage their accounts, while administrators can efficiently manage products, categories, customers, inventory, and orders through a dedicated admin dashboard.',
      bullets: [
        'User Registration, Login & JWT Authentication',
        'Product/Category Management, Search & Filtering',
        'Shopping Cart, Wishlist & Order Placement/History',
        'Admin Dashboard, Inventory & Order Management'
      ],
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Alembic', 'React.js', 'Bootstrap', 'Axios', 'JWT Authentication'],
      icon: <ShoppingCart size={28} />,
      accent: 'var(--accent-purple)',
      glow: 'var(--glow-purple)',
      github: 'https://github.com/anjanamadhur907'
    },
    {
      title: 'Roadside Assistance Platform',
      desc: 'A real-time roadside assistance platform that connects users with nearby mechanics during vehicle breakdowns using live location tracking and real-time communication.',
      bullets: [
        'Live Location Tracking & Nearby Mechanic Search',
        'Real-Time Communication via Socket.IO Integration',
        'OTP Verification & Booking Management',
        'Payment Flow & Telemetry operations'
      ],
      tags: ['Node.js', 'Express.js', 'React.js', 'Socket.IO', 'Sequelize', 'MySQL'],
      icon: <Truck size={28} />,
      accent: 'var(--accent-pink)',
      glow: '0 4px 20px rgba(208, 106, 76, 0.08)',
      github: 'https://github.com/anjanamadhur907'
    },
    {
      title: 'Smart Health Recommendation System',
      desc: 'A healthcare recommendation platform that predicts diseases based on user symptoms and provides personalized home remedies and Ayurvedic suggestions.',
      bullets: [
        'Symptom-Based Disease Prediction model',
        'Home Remedies & Ayurvedic Suggestions database',
        'REST API Integration with Express.js & Sequelize',
        'Secure endpoints and normalized query lookup schema'
      ],
      tags: ['Node.js', 'Express.js', 'React.js', 'Sequelize', 'MySQL'],
      icon: <HeartPulse size={28} />,
      accent: 'var(--accent-cyan)',
      glow: 'var(--glow-cyan)',
      github: 'https://github.com/anjanamadhur907'
    }
  ];

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
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    iconBox: {
      width: '52px',
      height: '52px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid var(--glass-border)',
      transition: 'var(--transition-smooth)',
    },
    cardTitle: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: '#fff',
      marginTop: '0.8rem',
    },
    cardDesc: {
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      lineHeight: '1.6',
    },
    bullets: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)',
      paddingLeft: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      flexGrow: 1,
    },
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      margin: '0.5rem 0',
    },
    tag: {
      fontSize: '0.75rem',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid var(--glass-border)',
      color: 'var(--text-secondary)',
      fontWeight: '500',
    },
    linksRow: {
      display: 'flex',
      gap: '1rem',
      marginTop: 'auto',
      borderTop: '1px solid var(--glass-border)',
      paddingTop: '1.2rem',
    },
    linkBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: 'var(--text-secondary)',
      transition: 'var(--transition-fast)',
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 style={styles.title}>Featured <span className="gradient-text">Projects</span></h2>
        <div style={styles.titleUnderline}></div>

        <div className="row g-4 stagger-children">
          {projectsData.map((project, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div
                className="glass-panel project-card h-100"
                style={{
                  ...styles.card,
                  '--card-accent': project.accent,
                  '--card-glow': project.glow
                }}
              >
                <div style={styles.cardHeader}>
                  <div
                    style={{ ...styles.iconBox, color: project.accent, borderColor: 'var(--glass-border)' }}
                    className="project-icon-box"
                  >
                    {project.icon}
                  </div>
                </div>

                <div>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={{ ...styles.cardDesc, marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {project.desc}
                  </p>
                </div>

                <ul style={styles.bullets}>
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div style={styles.tagContainer}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={styles.tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div style={styles.linksRow}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.linkBtn}
                    className="project-link-btn"
                  >
                    <Github size={16} />
                    <span>Codebase</span>
                  </a>
                  <a
                    href="#"
                    style={styles.linkBtn}
                    className="project-link-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Demonstration view of "${project.title}" will open locally. Code is available on GitHub.`);
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-accent) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .project-card:hover .project-icon-box {
          background: rgba(255, 255, 255, 0.04);
          transform: scale(1.03);
        }
        .project-link-btn:hover {
          color: var(--card-accent) !important;
        }
        .project-card:hover .project-tag {
          border-color: rgba(255, 255, 255, 0.15);
          color: #fff;
        }
      `}</style>
    </section>
  );
}
