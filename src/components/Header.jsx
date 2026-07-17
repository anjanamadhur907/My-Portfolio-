import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Mail } from 'lucide-react';
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
const Linkedin = ({ size = 24, className }) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > 50;
                    setScrolled(prev => {
                        if (prev !== isScrolled) return isScrolled;
                        return prev;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -40% 0px',
            threshold: 0.1
        };
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        navLinks.forEach(link => {
            const el = document.querySelector(link.href);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    const toggleMenu = () => setIsOpen(!isOpen);
    const styles = {
        header: {
            position: 'fixed',
            top: scrolled ? '15px' : '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: scrolled ? 'min(92%, 1100px)' : '100%',
            height: scrolled ? '65px' : '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: scrolled ? '0 2.5rem' : '0 4rem',
            transition: 'var(--transition-smooth)',
            zIndex: 1000,
            background: scrolled ? 'rgba(10, 10, 12, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
            borderRadius: scrolled ? '50px' : '0px',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)',
            borderLeft: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
            borderRight: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
            borderTop: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
            boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: '800',
            color: '#fff',
            cursor: 'pointer',
        },
        logoIcon: {
            color: 'var(--accent-cyan)',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
        },
        navLinksContainer: {
            display: 'flex',
            gap: '2rem',
        },
        mobileToggle: {
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
        },
        socials: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        },
        socialIcon: {
            color: 'var(--text-secondary)',
            transition: 'var(--transition-fast)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: '1px solid var(--glass-border)',
            background: 'rgba(255, 255, 255, 0.02)',
        },
        mobileMenu: {
            position: 'fixed',
            top: scrolled ? '90px' : '115px',
            left: '50%',
            transform: isOpen ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-15px) scale(0.95)',
            width: scrolled ? 'min(92%, 1100px)' : 'min(95%, 1200px)',
            background: 'rgba(10, 10, 12, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: '1.8rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            opacity: isOpen ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 999,
            pointerEvents: isOpen ? 'all' : 'none',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        },
        mobileLink: {
            fontSize: '1.1rem',
            fontWeight: '600',
            padding: '0.7rem 1.2rem',
            borderRadius: '12px',
            transition: 'var(--transition-fast)',
        }
    };
    return (
        <>
            <header style={styles.header}>
                {/* Logo */}
                <a href="#home" style={styles.logo}>
                    {/* <Code size={24} style={styles.logoIcon} /> */}
                    {/* <span className="gradient-text"> Portfolio</span> */}
                    <span>Portfolio</span>
                </a>
                {/* Desktop Nav */}
                <nav className="desktop-only" style={styles.nav}>
                    <div style={styles.navLinksContainer}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
                {/* Socials & Mobile button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="desktop-only" style={styles.socials}>
                        <a href="https://github.com/anjanamadhur907" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-btn">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/madhur-anjana-353139381/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-btn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:madhuranjana907@gmail.com" style={styles.socialIcon} className="social-btn">
                            <Mail size={18} />
                        </a>
                    </div>
                    <button style={styles.mobileToggle} className="mobile-toggle-btn" onClick={toggleMenu}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </header>
            {/* Mobile Drawer Menu */}
            <div style={styles.mobileMenu}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        style={{
                            ...styles.mobileLink,
                            color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                            background: activeSection === link.href.substring(1) ? 'rgba(226, 165, 83, 0.05)' : 'transparent',
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingLeft: '1rem' }}>
                    <a href="https://github.com/anjanamadhur907" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/madhur-anjana-353139381/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:madhuranjana907@gmail.com" style={styles.socialIcon}>
                        <Mail size={18} />
                    </a>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        .social-btn:hover {
          color: var(--accent-cyan) !important;
          border-color: var(--accent-cyan) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(226, 165, 83, 0.12);
        }
        .social-btn:nth-child(2):hover {
          color: var(--accent-purple) !important;
          border-color: var(--accent-purple) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(197, 168, 128, 0.12);
        }
      `}</style>
        </>
    );
}
