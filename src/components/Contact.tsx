import { ExternalLink, Clock, ShieldCheck, CheckCircle2, MessageSquareText } from 'lucide-react';

// ▼▼▼ GoogleフォームのURL ▼▼▼
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf754B8uIJkEkE-HSy4C1ZPs3IFZO_jTUTDWKi1IFYDLfFOFg/viewform?usp=publish-editor';

// ページ内にiframeで直接埋め込みたい場合は true に切り替えてください
const EMBED_IN_PAGE = false;

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" style={{ background: '#ffffff', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Contact & Consultation</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>無料個別相談・お見積り依頼</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', lineHeight: 1.7 }}>
            無人店舗化のシミュレーション、既存予約サイトとの連携可否、スクラッチ開発、概算費用など、<br className="hide-on-mobile" />
            Googleフォームよりお気軽にご相談ください。
          </p>
        </div>

        {EMBED_IN_PAGE ? (
          /* Google Form Iframe 埋め込み表示 */
          <div className="reveal" style={{ padding: '2rem', border: '1px solid var(--border-subtle)', background: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.4rem' }}>
                別タブで開く <ExternalLink size={14} />
              </a>
            </div>
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ borderRadius: '10px', background: '#fff', border: 'none', display: 'block' }}
              title="お問い合わせフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        ) : (
          /* スタイリッシュなGoogleフォーム誘導カード */
          <div
            className="reveal-scale delay-100"
            style={{
              padding: '3rem 2.5rem',
              border: '1px solid var(--border-subtle)',
              background: '#ffffff',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            
            {/* ガイド＆ご相談内容 */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MessageSquareText size={22} color="var(--primary)" />
                以下のようなご相談を承っています
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="consult-topics-grid">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>自店舗の業態に合わせた無人化の実現可能性診断</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>既存サイトやLINE等とのシステム連携可否</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>スマートロックや入退室管理機器の選定アドバイス</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>スクラッチ開発・運用保守の概算お見積り</span>
                </div>
              </div>
            </div>

            {/* 安心ポイント（所要時間・対応時間） */}
            <div style={{ display: 'flex', gap: '2rem', padding: '1.1rem 1.35rem', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <Clock size={18} color="var(--primary)" />
                <span>所要時間：<strong style={{ color: 'var(--text-primary)' }}>約2分</strong>（選択式中心）</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={18} color="var(--primary)" />
                <span>通常<strong style={{ color: 'var(--text-primary)' }}>2営業日以内</strong>にご返信</span>
              </div>
            </div>

            {/* CTAボタン（Googleフォームへ遷移） */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', marginTop: '0.25rem', width: '100%' }}>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-cta-btn"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  padding: '1.1rem 1.5rem',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word'
                }}
              >
                <span>Googleフォームで無料相談・お問い合わせ</span>
                <ExternalLink size={19} style={{ flexShrink: 0 }} />
              </a>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
                ※ クリックすると別ウィンドウでGoogleフォームが開きます。<br />
                ※ Googleアカウントへのログインなしでもご回答いただけます。
              </p>
            </div>

          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .consult-topics-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-section {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .contact-cta-btn {
            font-size: 0.94rem !important;
            padding: 0.95rem 1rem !important;
          }
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
