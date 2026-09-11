import { useState } from 'react';
import { DoorOpen, Power, Calendar, Key } from 'lucide-react';

export default function Flow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. 自由な予約＆決済',
      subtitle: '予約体験の自動化',
      icon: <Calendar size={24} />,
      optionsLabel: '選べる手段：',
      options: ['既存のWeb予約サイト', 'LINE公式アカウント/ミニアプリ', '自社ネイティブアプリ', '会員カード/回数券システム'],
      details: 'お客様の業態に合わせて予約・決済手段を選定します。新規開発を抑え、すでに導入済みのシステムを利用してスマートに予約を受け付け、事前クレジットカード決済などを連携します。'
    },
    {
      title: '2. 鍵情報の自動生成',
      subtitle: 'セキュリティキー発行',
      icon: <Key size={24} />,
      optionsLabel: '選べる鍵タイプ：',
      options: ['QRコード（予約時に自動表示）', '暗証番号（時間限定のテンキー）', 'ICカード（会員証/スマホ）', '生体認証（顔認証/指紋）'],
      details: '予約が確定すると、その予約日時のみ有効な入室用キー情報がバックエンドで即座に自動生成されます。これにより、第三者の不正侵入を防ぎつつ、人手を介さない安全なセルフインドア体験のベースを作ります。'
    },
    {
      title: '3. スマートに入退室',
      subtitle: 'スマートロック連動',
      icon: <DoorOpen size={24} />,
      optionsLabel: '対応スマートロック例：',
      options: ['Akerun', 'RemoteLOCK', 'Qrio Lock', 'KEYVOX'],
      details: '店舗の入口に設置したスマートロックに、発行された鍵（QRや暗証番号）をかざすだけで開錠。一般的な玄関扉から、オフィスビルの電気錠、商業施設の自動ドアまで、物理的なドア構造に合わせて最適なIoTハードウェアを選定し構築します。'
    },
    {
      title: '4. IoT連動＆スマート管理',
      subtitle: '照明・空調などの自動制御',
      icon: <Power size={24} />,
      optionsLabel: '連動可能な設備：',
      options: ['照明・エアコン（入室時オン）', '監視カメラ録画（入室時同期）', '音響・サイネージ機器'],
      details: '鍵が開錠されたタイミングで、予約された打席・ブースの照明やエアコンを自動的にオンに。利用時間が終了すると自動的に消灯し、不必要な電気代を削減。防犯カメラと入退室ログを連動させ、遠隔監視体制を構築します。'
    }
  ];

  return (
    <section id="flow-diagram" className="section flow-section" style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>Customer Experience</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            無人店舗の「顧客体験」と連動するシステムフロー
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '700px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            入店から退店、防犯まで一連のプロセスを完全自動化。<br />
            組み合わせるテクノロジーは、すべて貴社の業態に合わせてオーダーメイドで選定可能です。
          </p>
        </div>

        {/* Dynamic Interactive Flow Segment */}
        <div className="flow-interactive-container" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '2rem', alignItems: 'stretch' }}>
          
          {/* Left panel: Vertical Steps Selector */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="step-selector"
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    border: isActive ? '1.5px solid var(--primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: isActive ? '#f0f9ff' : '#ffffff',
                    borderRadius: '12px',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: isActive ? 'var(--primary)' : '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    {step.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: isActive ? 'var(--primary)' : 'var(--text-muted)', letterSpacing: '0.06em' }}>
                        STEP 0{idx + 1}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isActive ? 'var(--primary)' : 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {step.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{step.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel: Detail Showcase */}
          <div
            className="reveal-right flow-detail-card"
            style={{
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'left',
              border: '1px solid var(--border-subtle)',
              background: '#ffffff',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              boxSizing: 'border-box',
              maxWidth: '100%'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: '#e0f2fe',
                  border: '1px solid #bae6fd',
                  color: '#0369a1',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.05em'
                }}
              >
                STEP 0{activeStep + 1} CONCEPT
              </div>
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {steps[activeStep].title}
              </h3>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                {steps[activeStep].details}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {steps[activeStep].optionsLabel}
                </span>
                
                {/* Options Chips */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {steps[activeStep].options.map((opt, oIdx) => (
                    <span
                      key={oIdx}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        color: 'var(--text-primary)',
                        fontWeight: 600
                      }}
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .step-selector:hover {
          border-color: var(--primary) !important;
          transform: translateX(4px);
        }
        @media (max-width: 991px) {
          .flow-interactive-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .flow-detail-card {
            padding: 1.5rem 1.25rem !important;
          }
          .step-selector {
            padding: 1rem 1.15rem !important;
          }
          .step-selector:hover {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </section>
  );
}
