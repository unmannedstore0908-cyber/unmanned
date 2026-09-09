import { ArrowRight, Server, Key, CreditCard } from 'lucide-react';
import entranceImg from '../img/Gemini_Generated_Image_t4gwlwt4gwlwt4gw.jfif';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="section hero-section"
      style={{
        position: 'relative',
        paddingTop: '9.5rem',
        paddingBottom: '6.5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f8fafc'
      }}
    >
      {/* Ambient Background Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${entranceImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          opacity: 0.28,
          zIndex: 0
        }}
      />
      
      {/* Horizontal Gradient Overlay for Clean Typography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.65) 80%, rgba(255,255,255,0.3) 100%)',
          zIndex: 0
        }}
      />
      
      {/* Vertical Gradient Overlay to Smoothly Blend with Page */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(240,249,255,0.5) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, #ffffff 100%)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left column: Text Content */}
        <div className="hero-content reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          {/* Badge */}
          <div className="glow-badge" style={{ marginBottom: '1.75rem' }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369a1', letterSpacing: '0.04em' }}>店舗無人化コンサルティング「Unmanned」</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.75rem', letterSpacing: '-0.02em', wordBreak: 'keep-all', color: '#0f172a' }}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>店舗ごとの最適な</span><br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--primary)' }}>『無人化』</span>をデザインする。
            </span>
          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.08rem', color: '#475569', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
            予約・決済の自動化、スマートロック連携、最適なIoT機器の選定。<br className="hide-on-mobile" />
            画一的なパッケージに縛られず、あなたのビジネスモデルと顧客体験に合わせた「オーダーメイドな無人店舗」を構築します。
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => handleScrollTo('#contact')} className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
              無料相談・お見積り <ArrowRight size={17} />
            </button>
            <button onClick={() => handleScrollTo('#plans')} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}>
              提供プランを見る
            </button>
          </div>

          {/* Social Proof Stats Cards */}
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '3.5rem', width: '100%', maxWidth: '420px' }}>
            <div className="glass-panel" style={{ padding: '1.1rem 1.35rem', textAlign: 'left', borderRadius: '10px', background: '#ffffff', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>24/7</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>完全自動営業化</div>
            </div>
            <div className="glass-panel" style={{ padding: '1.1rem 1.35rem', textAlign: 'left', borderRadius: '10px', background: '#ffffff', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>オーダーメイド設計</div>
            </div>
          </div>

        </div>

        {/* Right column: Interactive Visual Representation */}
        <div className="hero-visual reveal-scale delay-200" style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative' }}>
          
          {/* Main Visual Box (Clean, Architectural Style) */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem 2.25rem',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.09)',
              borderRadius: '16px',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.95rem' }}>
              <h3 style={{ fontSize: '0.96rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.55rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                <Server size={18} color="var(--primary)" style={{ flexShrink: 0 }} /> 
                <span>コアシステム自動連携構造</span>
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 700, background: '#e0f2fe', padding: '0.22rem 0.65rem', borderRadius: '9999px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                全SaaS対応
              </span>
            </div>

            {/* Step cards with subtle connectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative' }}>
              <div className="visual-card" style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.1rem 1.35rem', display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#e0f2fe', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CreditCard size={19} color="var(--primary)" />
                </div>
                <div style={{ textAlign: 'left', flexGrow: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>1. 自由な予約・事前決済</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem', whiteSpace: 'nowrap' }}>既存Webサイト / LINE / 専用SaaS</div>
                </div>
              </div>

              <div className="visual-card" style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.1rem 1.35rem', display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#e0f2fe', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Server size={19} color="var(--primary)" />
                </div>
                <div style={{ textAlign: 'left', flexGrow: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>2. リアルタイム自動連携</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem', whiteSpace: 'nowrap' }}>暗証番号 / QRキーを即時自動生成</div>
                </div>
              </div>

              <div className="visual-card" style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.1rem 1.35rem', display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#e0f2fe', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Key size={19} color="var(--primary)" />
                </div>
                <div style={{ textAlign: 'left', flexGrow: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>3. スマートロック自動開錠</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem', whiteSpace: 'nowrap' }}>各種IoT電気錠 / 自動ドアと直結</div>
                </div>
              </div>
            </div>

            {/* Tiny tag */}
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 500, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.95rem', whiteSpace: 'nowrap' }}>
              店舗の扉形状・運用に合わせて認証デバイスを自在に選定
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-section {
            padding-top: 8rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-section .container {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-content {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-title {
            font-size: clamp(1.5rem, 5.5vw, 2.3rem) !important;
            text-align: center;
            line-height: 1.35 !important;
          }
          .hero-subtitle {
            text-align: center;
          }
          .hero-actions {
            justify-content: center !important;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
          }
          .hero-stats {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
