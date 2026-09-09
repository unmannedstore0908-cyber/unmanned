import { HelpCircle, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Features() {
  const painPoints = [
    '人件費が高騰しており、深夜や早朝の営業枠を増やしたくても増やせない...',
    '自店舗の既存のWebサイトや顧客基盤を活用して、スマートに入退出管理を自動化したい',
    '世の中にシステムが多すぎて、どれを選び、どう連携すればいいかわからない',
    '無人化したいが、トラブル対応や防犯対策、店舗運営マニュアルがなくて不安...'
  ];

  const strengths = [
    {
      icon: <ShieldCheck size={28} color="var(--primary)" />,
      title: '実店舗「TrackLab」の運営実績に基づいた実践的なノウハウ',
      description: 'ただITシステム開発を請け負うエンジニアではありません。インドアゴルフ練習場「TrackLab」を自営し、日々トラブルを解決しながら構築したノウハウがあります。「どうすればスムーズに入室できるか」「どうすればトラブルを事前に防げるか」といった、現場主導のリアルな解決策を提供します。'
    },
    {
      icon: <Layers size={28} color="var(--secondary)" />,
      title: '枠にとらわれない「完全オーダーメイド」の無人化設計',
      description: '「既存の予約サイトを活かしながら自動化したい」「QRコードではなく、暗証番号や顔認証、LINE連携で開錠したい」など、画一的なパッケージに当てはめる提案はしません。お客様の業態、客層、既存システムに合わせて最適な手法を柔軟に組み立てます。'
    },
    {
      icon: <Zap size={28} color="var(--accent)" />,
      title: 'SaaS活用からスクラッチ開発・保守まで柔軟に対応',
      description: '既存のSaaSやAPIを賢く組み合わせてコストを抑える構成はもちろん、独自性の高い要件に応えるゼロからのフルスクラッチ開発や継続的なシステム運用保守まで柔軟に対応。事業規模と目的に合わせた最適なシステム投資を実現します。'
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
          }
          .strength-card {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            justify-items: center;
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
