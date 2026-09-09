import { Briefcase, Server, Store } from 'lucide-react';

export default function Profile() {
  const credentials = [
    {
      icon: <Server size={22} color="#0284c7" />,
      tag: '技術・セキュリティ',
      title: '元・大手SIer エンジニア',
      description: '大手SIerでの堅牢なシステム開発経験を保有。スマートロックや決済APIの接続だけでなく、止まらないシステム構造、通信エラー時の例外処理、防犯セキュリティ設計を技術面から担保します。',
      iconBg: '#e0f2fe',
      iconBorder: '#bae6fd'
    },
    {
      icon: <Briefcase size={22} color="#7c3aed" />,
      tag: 'ビジネス・業務設計',
      title: '大手コンサルティング会社 所属',
      description: '現役で大手コンサルティングファームに所属。本質的な課題抽出・要件定義・投資対効果の高いソリューション選定を高い品質水準で提供します。',
      iconBg: '#ede9fe',
      iconBorder: '#ddd6fe'
    },
    {
      icon: <Store size={22} color="#ea580c" />,
      tag: '実店舗オーナー',
      title: 'TrackLab 創業者',
      description: 'インドアゴルフ場「TrackLab」を自らゼロから創業。予約・決済・スマートロックを完全連動させ、24時間365日の安定無人営業を継続している現役の店舗経営者です。',
      iconBg: '#ffedd5',
      iconBorder: '#fed7aa'
    },
  ];

  return (
    <section id="profile" className="section profile-section" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Profile & Credibility</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>About Me</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            大手SIer / 大手コンサル / 実店舗オーナー。<br className="hide-on-mobile" />
            3つのバックボーンを融合し、確かな信頼性と成果をお約束します。
          </p>
        </div>

        {/* 3 Major Credentials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="credentials-grid">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className={`cred-card reveal delay-${(idx + 1) * 100}`}
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'left',
                border: '1px solid var(--border-subtle)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: cred.iconBg,
                    border: `1px solid ${cred.iconBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {cred.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  {cred.tag}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{cred.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .cred-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }
        @media (max-width: 991px) {
          .credentials-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .profile-section .cred-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
