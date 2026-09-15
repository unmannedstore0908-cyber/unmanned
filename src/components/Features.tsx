import { HelpCircle, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Features() {
  const painPoints = [
    '人件費の高騰や最低賃金引き上げで利益が圧迫され、深夜・早朝のシフト人員を確保できない...',
    '既存の予約サイトや会員管理SaaSにスマートロックをAPI連携し、鍵の受け渡しや入退室を自動化したい',
    '無人店舗・省人化システムの種類が多すぎて、初期費用・月額コストを抑える最適な選定がわからない',
    '店舗無人化に伴う防犯対策・監視カメラの設置基準や、夜間の緊急トラブル対応体制に不安がある...'
  ];

  const strengths = [
    {
      icon: <ShieldCheck size={28} color="var(--primary)" />,
      title: '実店舗「TrackLab」の運営実績に基づいた実践的な無人化ノウハウ',
      description: '単にシステムを導入・開発するだけのITベンダーではありません。自社でインドアゴルフ練習場「TrackLab」を運営し、人件費削減と24時間安定稼働を両立させてきた現場ノウハウがあります。「トラブルなく入退室できる仕組み」「遠隔監視・防犯セキュリティ設計」など、実践的で失敗しない店舗運営モデルをご提案します。'
    },
    {
      icon: <Layers size={28} color="var(--secondary)" />,
      title: '既存システム・スマートロックを活かす「完全オーダーメイド」設計',
      description: '「hacomono、STORES予約、LINE等の既存ツールをそのまま活かしたい」「暗証番号・QRコード・顔認証など顧客層に合わせた解錠方式にしたい」など、画一的なパッケージへの無理な乗り換えは不要。貴店の業態・客層・予算に合わせて最適なハードウェア・SaaS連携を柔軟に設計します。'
    },
    {
      icon: <Zap size={28} color="var(--accent)" />,
      title: 'SaaS×API連携からフルスクラッチ開発、省力化補助金活用まで対応',
      description: '既存のSaaSやAPIを賢く組み合わせて初期費用・ランニングコストを最小化する構成から、独自要件に応える専用システム開発まで柔軟に対応。中小企業省力化投資補助金やIT導入補助金の活用も見据え、費用対効果（ROI）を最大化する投資計画を伴走サポートします。'
    }
  ];

  return (
    <section id="features" className="section features-section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        
        {/* Pain Points Section */}
        <div className="pain-points-block" style={{ marginBottom: '6rem' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.08em', background: '#fef2f2', padding: '0.35rem 0.95rem', borderRadius: '9999px', border: '1px solid #fecaca' }}>Challenges</span>
            <h2 style={{ fontSize: '2.1rem', marginTop: '0.75rem', fontWeight: 800, color: '#0f172a' }}>こんな店舗運営の「課題」はありませんか？</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="pain-grid">
            {painPoints.map((point, index) => (
              <div key={index} className={`glass-panel reveal delay-${(index + 1) * 100}`} style={{ padding: '1.75rem 1.85rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', border: '1px solid var(--border-subtle)', background: '#ffffff', textAlign: 'left', borderRadius: '12px' }}>
                <div style={{ width: '34px', height: '34px', background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                  <HelpCircle size={18} color="#ef4444" />
                </div>
                <p style={{ fontSize: '0.94rem', color: '#334155', fontWeight: 600, lineHeight: 1.65 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths Section */}
        <div className="strengths-block">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.08em', background: '#f0f9ff', padding: '0.35rem 0.95rem', borderRadius: '9999px', border: '1px solid #bae6fd' }}>Our Strengths</span>
            <h2 style={{ fontSize: '2.1rem', marginTop: '0.75rem', fontWeight: 800, color: '#0f172a' }}>選ばれる3つの強み</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.98rem', maxWidth: '600px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
              単なるシステム導入ではない、実務目線のコンサルティングだから実現できること。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {strengths.map((strength, index) => (
              <div key={index} className={`glass-panel strength-card reveal delay-${(index + 1) * 100}`} style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '64px 1fr', gap: '2rem', alignItems: 'center', border: '1px solid var(--border-subtle)', background: '#ffffff', textAlign: 'left', borderRadius: '14px' }}>
                
                {/* Icon box */}
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: '#f0f9ff', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {strength.icon}
                </div>

                {/* Text explanation */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    STRENGTH 0{index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {strength.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.75 }}>
                    {strength.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .pain-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .pain-grid .glass-panel {
            padding: 1.25rem 1.25rem !important;
          }
          .strength-card {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            justify-items: center;
            padding: 1.75rem 1.25rem !important;
            gap: 1.25rem !important;
          }
          .strength-card h3 {
            justify-content: center;
            text-align: center;
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
}
