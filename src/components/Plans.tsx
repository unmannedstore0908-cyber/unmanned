import { Check, Info } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'ライトプラン',
      englishName: 'Lite Plan',
      subTitle: 'ソリューション選定＆アドバイザリー',
      price: '¥50,000〜',
      pricePeriod: '/ 回',
      description: '自社に開発チームや運用担当者がおり、専門家による「要件定義・システム選定・セキュリティ設計」のアドバイスやセカンドオピニオンを必要とされる店舗様向けです。',
      features: [
        '要件定義ヒアリング・無人化適合性診断',
        '最適な予約SaaS・スマートロック等の選定＆提案',
        'システム構成案・セキュリティ設計支援',
        'ハードウェア構成＆初期導入費用の見積算出サポート'
      ],
      popular: false,
      ctaText: 'ライトプランについて相談する'
    },
    {
      name: 'スタンダードプラン',
      englishName: 'Standard Plan',
      subTitle: 'オーダーメイド・システム構築',
      price: '¥500,000〜',
      pricePeriod: ' / 初期構築費用',
      description: '要件定義から実際の予約システムのカスタマイズ、決済ゲートウェイの接続、スマートロックの自動開錠API連携まで、システム構築のすべてを代行します。',
      features: [
        'ライトプランの全コンサルティング内容',
        '決済システム（Stripe等）の自動決済連携',
        'API連携による入退室キーの自動発行・開錠システム開発',
        'スマートロック連携テスト・現地動作検証',
        '自動メール/LINE等での鍵情報通知シナリオ構築',
        '照明・空調などのスマートIoT自動オン/オフ連携設計'
      ],
      popular: true,
      ctaText: 'スタンダードプランについて相談する'
    },
    {
      name: 'プレミアムプラン',
      englishName: 'Premium Plan',
      subTitle: 'スクラッチ開発＆運用保守',
      price: '¥990,000〜',
      pricePeriod: ' / 初期構築費用（保守費用別途）',
      description: '既存のSaaSやパッケージでは対応できない独自の業務フロー、専用の会員基盤、特殊な入退室・IoT制御などをゼロからフルスクラッチで開発。リリース後の安定稼働を支える継続的なシステム保守・監視まで一貫して支援します。',
      features: [
        '要件定義・専用UI/UXデザイン設計',
        '予約・会員管理・決済基盤のフルスクラッチ独自開発',
        'スマートロック・特殊IoTデバイスとの専用API連携',
        '店舗運営専用ダッシュボード・管理画面構築',
        'クラウドインフラ構築・セキュリティ対策・負荷分散設計',
        'リリース後の月次システム運用保守・死活監視',
        '障害発生時の緊急トラブルシューティング・機能改修対応'
      ],
      popular: false,
      ctaText: 'プレミアムプランについて相談する'
    }
  ];

  const handleCtaClick = (planName: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      // Set the inquiry type value if possible, or just scroll to contact
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
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Service & Pricing</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>ご提供プランと料金体系</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '600px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            自社開発・運用リソースの有無や、サポートを求める範囲に応じて3つのプランから選択いただけます。
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.75rem', alignItems: 'stretch' }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`plan-card reveal delay-${(idx + 1) * 100} ${plan.popular ? 'plan-card-popular' : ''}`}
              style={{
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-subtle)',
                position: 'relative',
                boxShadow: plan.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                background: '#ffffff',
                borderRadius: '16px',
                transition: 'all 0.3s ease'
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
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plan.englishName}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.3rem 0', color: 'var(--text-primary)' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.85rem', color: plan.popular ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600, marginBottom: '1.25rem' }}>{plan.subTitle}</p>
                
                {/* Price block */}
                <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>{plan.pricePeriod}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem', minHeight: '70px' }}>
                {plan.description}
              </p>

              {/* Features List */}
              <div style={{ flexGrow: 1, marginBottom: '2.25rem' }}>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  含まれるサービス内容：
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#f0f9ff',
                          border: '1px solid #bae6fd',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.1rem'
                        }}
                      >
                        <Check size={12} color="var(--primary)" strokeWidth={3} />
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

        {/* Real World Reality Box */}
        <div
          className="reveal plans-info-box"
          style={{
            marginTop: '3.5rem',
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
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--text-primary)' }}>スマートロック設置工事や電気工事について：</strong> スタンダードプラン、プレミアムプラン共に、物理的なスマートロック設置（電気工事・扉工事など）に伴う工事費用は、各施工業者様への直接の実費お支払いとなります。当サービスは、その選定や要件定義、調整業務を代行・サポートいたします。
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
