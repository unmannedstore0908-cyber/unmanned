import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

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

  const navLinks = [
    { name: '特長・強み', href: '#features' },
    { name: '無人化の流れ', href: '#flow-diagram' },
    { name: '料金プラン', href: '#plans' },
    { name: '導入ステップ', href: '#steps' },
    { name: '実績', href: '#results' },
    { name: 'About Me', href: '#profile' }
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ padding: isScrolled ? '0.85rem 0' : '1.25rem 0', backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)', boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.05)' : 'none' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
        {/* Logo */}
        <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div className="logo-icon-box" style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={20} color="#ffffff" />
          </div>
          <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.02em', lineHeight: 1.15 }}>Unmanned</span>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em', lineHeight: 1, marginTop: '2px' }}>店舗無人化コンサルティング</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, padding: '0.35rem 0.2rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn btn-primary" style={{ marginLeft: '0.75rem', padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
            無料相談・お問合せ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#0f172a', cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer" style={{ position: 'fixed', top: '75px', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)', zIndex: 40, display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', gap: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.15rem', fontWeight: 600, paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '0.75rem' }}>
            無料相談・お問合せ
          </a>
        </div>
      )}

      {/* Styling specific rules that need standard CSS injections */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
