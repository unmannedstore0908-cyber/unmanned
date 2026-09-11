import { Clock, Users, ArrowRight, ShieldAlert } from 'lucide-react';

export default function Results() {
  const stats = [
    {
      icon: <Clock size={20} color="var(--primary)" />,
      label: '営業時間',
      before: '10時間 / 日',
      after: '24時間 / 365日',
      desc: '深夜・早朝の無人運営化により、売上最大化と顧客利便性向上を同時に達成。'
    },
    {
      icon: <Users size={20} color="var(--primary)" />,
      label: 'スタッフ常駐時間',
      before: '拘束 8時間 / 日',
      after: '完全ゼロ (遠隔管理)',
      desc: 'スマホからログ監視、不具合対応が可能。実務作業は定期清掃のみに。'
    }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="results" className="section results-section" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="results-grid">
          
          {/* Left panel: Info & Concept */}
          <div className="reveal-left" style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="glow-badge">Case Study</span>
            </div>

            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.3, color: 'var(--text-primary)' }}>
              自社インドアゴルフ場<br />
              『TrackLab』での実証済みモデル
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              私たちは、机上の構想だけでコンサルティングを行いません。インドアゴルフレンジ「TrackLab」を自社でゼロから設計・構築し、24時間365日の安定無人稼働を継続しています。
              <br /><br />
              予約サイトでの決済完了に同期した「一時アクセスキー（QR・暗証番号等）の即時発行」や、不審者の侵入・不法滞在を防ぐ「監視カメラと連動した防犯設計」、トラブル時の遠隔アナウンスなど、実店舗運営で蓄積した「活きた知見」をすべて提供します。
            </p>

            {/* Case Study Photo / Graphic Placeholder */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                borderRadius: '12px'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={16} color="var(--primary)" /> 防犯・セキュリティ体制の例
              </span>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                無人店舗で最大の不安要素であるセキュリティ。TrackLabでは「使い捨て予約キーによる時間外入室の防止」「スマートスピーカーによる遠隔声掛け」を組み合わせ、安全性の極めて高い運用を実証しています。
              </p>
            </div>
          </div>

          {/* Right panel: Before / After Statistics cards */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', textAlign: 'left', marginBottom: '0.25rem' }}>
              無人化システム導入による劇的効果実績
            </h3>
            
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  border: '1px solid var(--border-subtle)',
                  background: '#ffffff',
                  textAlign: 'left',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-sm)',
                  boxSizing: 'border-box',
                  maxWidth: '100%'
                }}
              >
                
                {/* Header of statistic */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      background: '#e0f2fe',
                      border: '1px solid #bae6fd',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stat.icon}
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{stat.label}</span>
                </div>

                {/* Compare segment */}
                <div className="compare-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 36px 1.15fr', alignItems: 'center', margin: '0.25rem 0', gap: '0.35rem' }}>
                  <div style={{ textAlign: 'center', padding: '0.75rem 0.4rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.25rem', whiteSpace: 'nowrap' }}>一般的な有人店舗</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{stat.before}</div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight size={16} color="var(--primary)" />
                  </div>

                  <div style={{ textAlign: 'center', padding: '0.75rem 0.4rem', background: '#f0f9ff', borderRadius: '8px', border: '1.5px solid #bae6fd', minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.25rem', whiteSpace: 'nowrap' }}>TrackLab 実績</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stat.after}</div>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {stat.desc}
                </p>

              </div>
            ))}

            {/* Quick Consultation CTA from stats */}
            <button onClick={handleScrollToContact} className="btn btn-secondary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', fontWeight: 600 }}>
              自店舗での効果シミュレーションを相談する
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .results-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .stat-card {
            padding: 1.25rem 0.95rem !important;
          }
          .compare-grid {
            grid-template-columns: 1fr 20px 1fr !important;
          }
          .compare-grid > div {
            padding: 0.6rem 0.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
