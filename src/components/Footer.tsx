import { Cpu } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-subtle)', padding: '4rem 0 2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        {/* Logo and brief summary */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '450px', textAlign: 'center' }}>
          <a href="#" onClick={handleScrollToTop} className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div className="logo-icon-box" style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={17} color="#ffffff" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.02em', lineHeight: 1.15 }}>Unmanned</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em', lineHeight: 1, marginTop: '2px' }}>店舗無人化コンサルティング</span>
            </div>
          </a>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            店舗無人化コンサルティング「Unmanned」は、自社インドアゴルフ場「TrackLab」の実店舗運営実績と技術力に基づき、店舗の最適な無人化・省人化をトータルで実現します。
          </p>
        </div>

        {/* Mini links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#features" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>特長・強み</a>
          <a href="#flow-diagram" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>無人化フロー</a>
          <a href="#plans" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>料金プラン</a>
          <a href="#steps" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>導入の流れ</a>
          <a href="#results" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>運営実績</a>
          <a href="#profile" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>About Me</a>
          <a href="#faq" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>よくある質問</a>
        </div>

        {/* Disclaimers & Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', width: '100%' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            ※ 本サイトで紹介している導入効果、システム連動フロー等は、TrackLabの実績および一般的な設計例に基づきます。実際の店舗扉構造やご予算により構築内容は変動します。
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Unmanned. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
