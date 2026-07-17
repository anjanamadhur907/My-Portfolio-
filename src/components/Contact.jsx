import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('madhuranjana907@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('7987308696');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Open phone dialer when clicking the phone card
  const handleCallPhone = () => {
    // Using tel: URI to initiate a call on supported devices
    window.open('tel:+917987308696', '_self');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in the required fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

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
    infoCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      height: '100%',
    },
    contactCard: {
      padding: '1.8rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      position: 'relative',
    },
    iconWrapper: {
      width: '46px',
      height: '46px',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid var(--glass-border)',
      color: 'var(--accent-cyan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardLabel: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    cardValue: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#fff',
      marginTop: '0.2rem',
    },
    copyBtn: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '6px',
      transition: 'var(--transition-fast)',
    },
    formCol: {
      padding: '2.5rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: 'var(--text-secondary)',
    },
    input: {
      padding: '0.9rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid var(--glass-border)',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '0.95rem',
      fontFamily: 'var(--font-body)',
      transition: 'var(--transition-smooth)',
    },
    textarea: {
      padding: '0.9rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid var(--glass-border)',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '0.95rem',
      fontFamily: 'var(--font-body)',
      minHeight: '130px',
      resize: 'vertical',
      transition: 'var(--transition-smooth)',
    },
    footer: {
      marginTop: '6rem',
      borderTop: '1px solid var(--glass-border)',
      padding: '2rem 0',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <h2 style={styles.title}>Get In <span className="gradient-text">Touch</span></h2>
        <div style={styles.titleUnderline}></div>

        <div className="row g-5 align-items-start animate-on-scroll">
          {/* Info Column */}
          <div className="col-lg-5">
            <div style={styles.infoCol}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>Let's Build Something</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  I'm always open to collaborating on innovative projects and exploring opportunities in Python Full Stack Development and Artificial Intelligence. Feel free to connect for professional opportunities, technical discussions, or collaboration on impactful software solutions.
                </p>
              </div>

              <div className="glass-panel contact-info-card" style={styles.contactCard}>
                <div style={styles.iconWrapper}><Mail size={20} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={styles.cardLabel}>Email Me</span>
                  <p style={{ ...styles.cardValue, wordBreak: 'break-word' }}>madhuranjana907@gmail.com</p>
                </div>
                <button style={styles.copyBtn} className="copy-action-btn" onClick={handleCopyEmail}>
                  {copiedEmail ? <Check size={16} style={{ color: 'var(--accent-cyan)' }} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="glass-panel contact-info-card" style={{ ...styles.contactCard, cursor: 'pointer' }} onClick={handleCallPhone}>
                <div style={{ ...styles.iconWrapper, color: 'var(--accent-purple)' }}><Phone size={20} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={styles.cardLabel}>Call Me</span>
                  <p style={styles.cardValue}>+91 7987308696</p>
                </div>
                <button style={styles.copyBtn} className="copy-action-btn" onClick={(e) => { e.stopPropagation(); handleCopyPhone(); }}>
                  {copiedPhone ? <Check size={16} style={{ color: 'var(--accent-purple)' }} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="glass-panel contact-info-card" style={styles.contactCard}>
                <div style={{ ...styles.iconWrapper, color: 'var(--accent-pink)' }}><MapPin size={20} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={styles.cardLabel}>Location</span>
                  <p style={styles.cardValue}>Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-7">
            <div className="glass-panel contact-form-wrapper" style={styles.formCol}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.1)', border: '2px solid var(--accent-cyan)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', margin: '0 auto 1.5rem' , justifyContent: 'center' }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out, Madhur will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Name *</label>
                    <input 
                      type="text" 
                      style={styles.input} 
                      className="form-input" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Email *</label>
                    <input 
                      type="email" 
                      style={styles.input} 
                      className="form-input" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <input 
                      type="text" 
                      style={styles.input} 
                      className="form-input" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Message *</label>
                    <textarea 
                      style={styles.textarea} 
                      className="form-input" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>© 2026 <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>Madhur Anjana. </span>All rights reserved.</p>
        </footer>
      </div>

      <style>{`
        .contact-info-card {
          transition: var(--transition-smooth);
        }
        .contact-info-card:hover {
          border-color: var(--glass-border-hover) !important;
          background: rgba(255, 255, 255, 0.03) !important;
        }
        .copy-action-btn:hover {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.05);
        }
        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 0 10px rgba(226, 165, 83, 0.08);
        }
      `}</style>
    </section>
  );
}
