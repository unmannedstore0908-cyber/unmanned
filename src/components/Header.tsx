import { useState, useEffect } from 'react';
import { Menu, X, Cpu, ChevronRight, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: '特長・強み', href: '#features' },
    { name: '無人化の流れ', href: '#flow-diagram' },
    { name: '料金プラン', href: '#plans' },
    { name: '導入ステップ', href: '#steps' },
    { name: '実績', href: '#results' },
    { name: 'About Me', href: '#profile' },
    { name: 'よくある質問', href: '#faq' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className="header-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
          padding: isScrolled ? '0.75rem 0' : '1.15rem 0',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: isOpen ? 'none' : 'blur(10px)',
          WebkitBackdropFilter: isOpen ? 'none' : 'blur(10px)',
          borderBottom: '1px solid var(--border-subtle)',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.06)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem', maxWidth: '1240px' }}>
          {/* Logo */}
          <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', flexShrink: 0 }}>
            <div className="logo-icon-box" style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Cpu size={20} color="#ffffff" />
            </div>
            <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.02em', lineHeight: 1.15, whiteSpace: 'nowrap' }}>Unmanned</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em', lineHeight: 1, marginTop: '2px', whiteSpace: 'nowrap' }}>店舗無人化コンサルティング</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.2rem',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-primary"
              style={{
                marginLeft: '0.35rem',
                padding: '0.5rem 1.15rem',
                fontSize: '0.82rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              無料相談・お問合せ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: '#f8fafc',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: '#0f172a',
              cursor: 'pointer',
              padding: '0.55rem',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Styling specific rules for breakpoint */}
        <style>{`
          @media (max-width: 1140px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: flex !important;
            }
          }
        `}</style>
      </header>

      {/* Full-Screen Mobile Drawer Overlay (Rendered outside header to guarantee full viewport) */}
      {isOpen && (
        <div
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: '#ffffff',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Top Bar inside Overlay */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.1rem 1.5rem',
              borderBottom: '1px solid var(--border-subtle)',
              backgroundColor: '#ffffff',
              flexShrink: 0
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={18} color="#ffffff" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>Unmanned</span>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1, marginTop: '2px' }}>店舗無人化コンサルティング</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#f1f5f9',
                border: 'none',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Scrollable Navigation Area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '1.25rem 1.5rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Links List */}
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 0.5rem',
                    borderBottom: '1px solid #f1f5f9',
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} color="#94a3b8" />
                </a>
              ))}
            </nav>

            {/* Bottom CTA Block */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)'
                }}
              >
                <PhoneCall size={19} />
                無料相談・お見積りはこちら
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                実店舗オーナー×大手エンジニアが直接回答します
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
