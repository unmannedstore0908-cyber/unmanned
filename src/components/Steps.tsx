import { MessageSquare, Eye, FileText, Code, CheckSquare, Rocket } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare size={22} color="var(--primary)" />,
      title: '無料個別相談・ヒアリング',
      description: 'お客様の現在の課題や「無人化して実現したい店舗モデル」をお聞きします。現在ご利用中のシステム（HP、LINE、会員管理等）の有無や、大体の予算規模についてオンラインにて丁寧にお伺いします。'
    },
    {
      num: '02',
      icon: <Eye size={22} color="var(--primary)" />,
      title: '要件調査・適合性診断',
      description: '導入予定の店舗の扉構造（自動ドア・電気錠・サムターン錠など）、インターネット環境、および既存システムのAPIドキュメントなどを調査。実現可能性と最適な組み合わせを診断します。'
    },
    {
      num: '03',
      icon: <FileText size={22} color="var(--primary)" />,
      title: '無人化設計・お見積り提案',
      description: '診断結果に基づき、どのようなツール、スマートロック、決済方法を組み合わせるのが最適かを示した「オーダーメイド無人店舗システム構成案」と、コンサルティング・構築にかかる詳細な見積書を提示します。'
    },
    {
      num: '04',
      icon: <Code size={22} color="var(--primary)" />,
      title: 'システム開発・機器設定',
      description: 'ご契約後、予約・決済システムの設定・構築を開始。スマートロックAPIと連携し、予約完了時に自動で鍵情報を生成・配送するシステムをインテグレーション。'
    },
    {
      num: '05',
      icon: <CheckSquare size={22} color="var(--primary)" />,
      title: 'テスト稼働',
      description: '実際の店舗で現地テストを繰り返し実施。「予約時間の前後のみ開錠可能か」「通信エラー時の対応手順は？」といった例外処理を網羅的に検証。'
    },
    {
      num: '06',
      icon: <Rocket size={22} color="var(--primary)" />,
      title: 'グランドオープン・稼働支援',
      description: 'いよいよ無人営業の開始です。開業後も、予約システムの不具合やスマートロック開錠トラブルに備え、1ヶ月間の「優先サポート期間」を設定。万全の体制でスタートダッシュを支えます。'
    }
  ];

  return (
    <section id="steps" className="section steps-section" style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Project Lifecycle</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>導入までの6つのステップ</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '600px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            最初のご相談からオープン後のサポートまで、すべての工程を伴走しながら丁寧に進めます。
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`step-timeline-card reveal delay-${(idx + 1) * 100}`}
              style={{
                padding: '2.25rem 2rem',
                textAlign: 'left',
                border: '1px solid var(--border-subtle)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden'
              }}
            >
              
              {/* Giant Background Number */}
              <div
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '0.75rem',
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  color: 'rgba(15, 23, 42, 0.04)',
                  userSelect: 'none',
                  lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}
              >
                {step.num}
              </div>

              {/* Step Icon & Number Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#e0f2fe',
                    border: '1px solid #bae6fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.06em',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  STEP {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', position: 'relative', zIndex: 1, lineHeight: 1.4 }}>
                {step.title}
              </h3>
              
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1, position: 'relative', zIndex: 1 }}>
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .step-timeline-card {
          transition: all 0.3s ease;
        }
        .step-timeline-card:hover {
          border-color: var(--primary) !important;
          box-shadow: var(--shadow-md) !important;
          transform: translateY(-4px);
        }
        @media (max-width: 991px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
