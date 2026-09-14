import { Check, Info, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'スポット相談・要件定義',
      englishName: 'Spot Advisory',
      subTitle: '仕様策定・システム選定・セカンドオピニオン',
      priceDisplay: '初回 30分 無料',
      priceNote: '※詳細な仕様書策定・図面精査等は都度お見積もり',
      modelCase: '自社に開発リソースがある、または何から始めるべきか整理・比較したい方向け',
      description: '「そもそも自店舗が無人化できるか」「既存の予約サイトと繋がるか」「見積もり金額が妥当か」など、専門家が客観的にアドバイス・要件整理いたします。',
      features: [
        '要件定義ヒアリング・無人化適合性診断',
        '最適な予約SaaS・スマートロック等の選定アドバイス',
        'システム構成案・通信エラー時の例外処理設計支援',
        '他社ベンダー見積もりの妥当性診断・セカンドオピニオン'
      ],
      popular: false,
      ctaText: 'まずは無料で相談してみる'
    },
    {
      name: 'パッケージ導入・API連携',
      englishName: 'SaaS & IoT Integration',
      subTitle: '既存SaaS＋スマートロック連携',
      priceDisplay: '個別お見積もり',
      priceNote: 'ご要件・店舗規模・既存システムに応じて最適化',
      modelCase: '例：小規模スタジオのスマートロック＋Stripe決済連携 など、既存の仕組みを活用してコストを抑えたい方向け',
      description: '既存の予約システムやSaaSを活用し、決済連動・スマートロック開錠・鍵情報通知までをワンストップで接続。無駄な開発費を抑えて最短で自動化します。',
      features: [
        '要件定義・システム構成設計・機材選定',
        '決済システム（Stripe/Square等）の自動決済連携',
        'API/Webhook連携による入退室キー自動発行システム構築',
        'スマートロック連携テスト・現地動作検証サポート',
        '自動メール/LINE等での暗証番号・QRキー即時通知シナリオ',
        '照明・空調などのスマートIoT自動オン/オフ連携設計'
      ],
      popular: true,
      ctaText: '連携構成・概算を相談する'
    },
    {
      name: '専用システム・フルスクラッチ開発',
      englishName: 'Custom Development',
      subTitle: '完全独自開発＆運用保守',
      priceDisplay: '個別お見積もり',
      priceNote: '独自要件・独自UI/UX・保守体制までトータル設計',
      modelCase: '自社専用の会員基盤、特殊機器の制御、独自アプリなど、完全独自仕様で開発・運用したい方向け',
      description: 'パッケージでは実現できない特殊な店舗オペレーションや、自社ブランド独自の会員基盤・専用ダッシュボードをゼロから開発。開業後の保守監視まで完全伴走します。',
      features: [
        '要件定義・専用UI/UXデザイン設計',
        '予約・会員管理・決済基盤のフルスクラッチ独自開発',
        'スマートロック・特殊IoTデバイスとの専用API連携',
        '店舗運営専用ダッシュボード・売上管理画面構築',
        'クラウドインフラ構築・セキュリティ対策・負荷分散設計',
        'リリース後の月次システム運用保守・死活監視体制'
      ],
      popular: false,
      ctaText: '独自仕様の開発を相談する'
    }
  ];

  const handleCtaClick = (planName: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const selectElement = document.querySelector('#inquiry-type') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = planName;
      }
      
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
    <section id="plans" className="section plans-section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Service Menu</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            ご提供プラン・支援領域
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            店舗規模や既存ツールの活用状況、求めるサポート範囲に合わせて柔軟に対応いたします。<br className="hide-on-mobile" />
            無理な独自開発を提案することは一切ありません。
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.75rem', alignItems: 'stretch' }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`plan-card reveal delay-${(idx + 1) * 100} ${plan.popular ? 'plan-card-popular' : ''}`}
              style={{
                padding: '2.75rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-subtle)',
                position: 'relative',
                boxShadow: plan.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                background: '#ffffff',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary)',
                    color: '#ffffff',
                    padding: '0.3rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
                  }}
                >
                  RECOMMENDED
                </div>
              )}

              {/* Header */}
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.35rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plan.englishName}</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.25rem 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>{plan.name}</h3>
                <p style={{ fontSize: '0.82rem', color: plan.popular ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600, marginBottom: '1.1rem' }}>{plan.subTitle}</p>
                
                {/* Price Display Box */}
                <div style={{ background: plan.popular ? '#f0f9ff' : '#f8fafc', padding: '0.85rem 1rem', borderRadius: '10px', border: plan.popular ? '1px solid #bae6fd' : '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: plan.popular ? 'var(--primary)' : 'var(--text-primary)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                    {plan.priceDisplay}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: 500, lineHeight: 1.4 }}>
                    {plan.priceNote}
                  </div>
                </div>
              </div>

              {/* Model Case Box */}
              <div style={{ background: '#f8fafc', padding: '0.75rem 0.9rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.78rem' }}>想定されるケース：</strong>
                {plan.modelCase}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem', minHeight: '58px' }}>
                {plan.description}
              </p>

              {/* Features List */}
              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  含まれる主な支援内容：
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#f0f9ff',
                          border: '1px solid #bae6fd',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.15rem'
                        }}
                      >
                        <Check size={11} color="var(--primary)" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleCtaClick(plan.name)}
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.92rem' }}
              >
                {plan.ctaText}
              </button>

            </div>
          ))}
        </div>

        {/* Killer Phrase Conversion Banner */}
        <div
          className="reveal plans-killer-banner"
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.25rem',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
            border: '1.5px solid #bae6fd',
            borderRadius: '16px',
            boxShadow: '0 8px 24px -6px rgba(2, 132, 199, 0.12)',
            display: 'flex',
            gap: '1.75rem',
            alignItems: 'center',
            textAlign: 'left'
          }}
        >
          <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ffffff', boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)' }}>
            <ShieldCheck size={28} />
          </div>
          <div style={{ flexGrow: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.45rem' }}>
              無理な独自開発を提案することは一切ありません
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.75, margin: 0 }}>
              店舗規模や既存ツールの活用度合いによって、最適な構成と費用は大きく変動します。既存の無料・安価なSaaSで十分な場合はそちらを推奨し、無駄なシステム投資を徹底的に抑えます。まずは<strong>30分の無料相談</strong>にて、御社の構想に合わせた最小コストの実現方法と概算見積もりをご案内します。
            </p>
          </div>
          <button
            onClick={() => handleCtaClick('無料相談・概算見積もり')}
            className="btn btn-primary killer-cta-btn"
            style={{ flexShrink: 0, padding: '0.9rem 1.6rem', fontSize: '0.95rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>無料相談で概算を聞く</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Real World Reality Box */}
        <div
          className="reveal plans-info-box"
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem 2rem',
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'center',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-subtle)',
            textAlign: 'left',
            borderRadius: '12px'
          }}
        >
          <div style={{ background: '#e0f2fe', padding: '0.6rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Info size={20} color="var(--primary)" />
          </div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: 'var(--text-primary)' }}>スマートロック設置工事や電気工事について：</strong> 物理的なスマートロック設置（電気錠・扉工事など）に伴う工事費用は、各施工業者様への直接の実費お支払いとなります。当サービスは、その機器選定や要件定義、調整業務を代行・サポートいたします。
          </p>
        </div>

      </div>

      <style>{`
        .plan-card:hover {
          transform: translateY(-6px);
        }
        .plan-card-popular {
          transform: scale(1.02);
        }
        .plan-card-popular:hover {
          transform: translateY(-6px) scale(1.02);
        }
        @media (max-width: 991px) {
          .plans-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .plan-card {
            padding: 2rem 1.25rem !important;
          }
          .plans-killer-banner {
            flex-direction: column !important;
            text-align: center !important;
            padding: 1.5rem 1.25rem !important;
            gap: 1.25rem !important;
          }
          .killer-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .plans-info-box {
            padding: 1.25rem 1rem !important;
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.75rem !important;
          }
          .plan-card-popular {
            transform: scale(1) !important;
          }
          .plan-card-popular:hover {
            transform: translateY(-6px) !important;
          }
        }
      `}</style>
    </section>
  );
}
