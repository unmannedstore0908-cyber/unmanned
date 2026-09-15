import { Trophy, Activity, Music, Building2, Sparkles, Store, ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <Trophy size={24} color="#0284c7" />,
      tag: '自社運営実績あり',
      tagColor: '#0284c7',
      tagBg: '#e0f2fe',
      title: 'インドアゴルフ・シミュレーター施設',
      desc: '自社インドアゴルフ場「TrackLab」の運営ノウハウを直結。打席予約と同時に一時利用キーを即時発行し、照明やシミュレーター機器と連動した24時間365日の完全自動営業を実現します。',
      keywords: ['予約サイト決済連動', '使い捨て暗証番号', 'シミュレーター連動']
    },
    {
      icon: <Activity size={24} color="#16a34a" />,
      tag: '需要急増中',
      tagColor: '#16a34a',
      tagBg: '#dcfce7',
      title: '24時間フィットネス・パーソナルジム',
      desc: '月額会員管理（hacomono等）や都度ビジター決済とスマートロックを連動。深夜・早朝枠の無人化により人件費を大幅に削減しつつ、防犯カメラ連動で会員の安全性を担保します。',
      keywords: ['hacomono/STORES連携', '会員証・QR入室', '監視カメラ防犯設計']
    },
    {
      icon: <Music size={24} color="#7c3aed" />,
      tag: '高稼働・高収益',
      tagColor: '#7c3aed',
      tagBg: '#ede9fe',
      title: 'レンタルスタジオ・ダンス/音楽練習場',
      desc: '1時間単位の時間貸し予約とスマートロックをシームレスに連携。予約時間枠のみ有効な暗証番号やURLキーを自動発行し、鍵の受け渡しコストをゼロにします。',
      keywords: ['時間枠単位の鍵発行', 'LINE公式予約連動', '空調・照明の自動制御']
    },
    {
      icon: <Building2 size={24} color="#ea580c" />,
      tag: '法人利用・高単価',
      tagColor: '#ea580c',
      tagBg: '#ffedd5',
      title: 'コワーキングスペース・貸し会議室',
      desc: 'エントランスおよび個別会議室の二重入退室管理。既存のWebシステムやポータルサイトとWebhookで直結し、入退室ログの自動記録や領収書自動発行まで自動化します。',
      keywords: ['入退室ログ自動取得', '部屋別アクセス権限', '一時利用・定期利用対応']
    },
    {
      icon: <Sparkles size={24} color="#db2777" />,
      tag: 'プライベート空間',
      tagColor: '#db2777',
      tagBg: '#fce7f3',
      title: '個室サウナ・セルフエステ・脱毛サロン',
      desc: '人目を気にせず利用したいプライベート空間ビジネスに最適。LINE連携での予約・事前決済・開錠案内を一気通貫させ、スタッフ無配置での安心運営を確立します。',
      keywords: ['完全非対面チェックイン', '清掃員専用キー発行', '利用時間厳守アナウンス']
    },
    {
      icon: <Store size={24} color="#0d9488" />,
      tag: '省人化リテール',
      tagColor: '#0d9488',
      tagBg: '#ccfbf1',
      title: '無人販売所・セルフショールーム',
      desc: 'セルフレジやキャッシュレス決済と組み合わせた無人リテール空間の構築。夜間自動施錠、クレジットカード認証による入店ゲート連携など、防犯性を重視した設計を行います。',
      keywords: ['夜間自動施錠', 'クレカ/LINE認証入店', '万引き防止セキュリティ']
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
    <section id="industries" className="section industries-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Use Cases</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            無人化・省人化システムの対応業種
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '680px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            予約・事前決済・入退室管理が発生するあらゆる「空間・時間貸しビジネス」に対応。<br className="hide-on-mobile" />
            人件費を大幅に削減しながら、24時間365日の高収益な店舗運営を実現します。
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}>
          {industries.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel industry-card reveal delay-${((idx % 3) + 1) * 100}`}
              style={{
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
                background: '#ffffff',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.25s ease',
                boxSizing: 'border-box'
              }}
            >
              {/* Header: Icon & Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: item.tagColor,
                    backgroundColor: item.tagBg,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7, flexGrow: 1, marginBottom: '1.5rem' }}>
                {item.desc}
              </p>

              {/* Keywords Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                {item.keywords.map((kw, kIdx) => (
                  <span
                    key={kIdx}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: '#0369a1',
                      background: '#f0f9ff',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      border: '1px solid #e0f2fe'
                    }}
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner inside Industries */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            「自社の業態でも無人化できる？」「既存のシステムと繋がる？」など、お気軽にご相談ください。
          </p>
          <button
            onClick={handleScrollToContact}
            className="btn btn-secondary"
            style={{ padding: '0.8rem 1.8rem', fontSize: '0.92rem', gap: '0.5rem' }}
          >
            自店舗の無人化について無料相談する
            <ArrowRight size={16} color="var(--primary)" />
          </button>
        </div>

      </div>

      <style>{`
        .industry-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary) !important;
          box-shadow: var(--shadow-hover);
        }
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .industry-card {
            padding: 1.75rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
