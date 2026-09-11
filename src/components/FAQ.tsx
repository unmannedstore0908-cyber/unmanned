import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'どのような業種の店舗が無人化・省人化に対応していますか？',
    answer: 'インドアゴルフ練習場、無人フィットネスジム、コワーキングスペース、音楽・ダンススタジオ、セルフエステ・脱毛サロン、貸し会議室、セルフフォトスタジオ、無人サウナなど、「予約」「事前決済」「入退室管理」が必要となるあらゆる業種に対応可能です。既存店舗の一部時間帯（早朝・深夜）のみの無人化にも対応しています。'
  },
  {
    question: '既存のWebサイトや導入済みの予約システムを活用したまま無人化できますか？',
    answer: 'はい、可能です。hacomono、STORES予約、Square、LINE公式アカウント連携、WordPressなど、既存のSaaSや独自WebシステムにAPIやWebhookを活用してスマートロックや監視システムを連動させます。高額な専用パッケージへの強制乗り換えをさせず、既存資産を最大活用したオーダーメイド設計を行います。'
  },
  {
    question: 'スマートロックはどのようなドアにも設置可能ですか？',
    answer: '一般的な開き戸（シリンダー錠）はもちろん、自動ドア、電気錠、引き戸、ガラス扉など多種多様な扉に対応可能です。RemoteLOCK、Akerun、SESAME、bitlockなど各種スマートロックから、店舗の設置基準や通信環境（Wi-Fi/LTE/有線LAN）に合わせて最適なハードウェアを選定・設置サポートします。'
  },
  {
    question: '通信障害や停電、鍵が開かない等の緊急トラブル対策はどうなっていますか？',
    answer: '大手SIerでのシステム設計思想を導入し、通信障害時でもローカル認証で解錠できるバックアップ機構、遠隔リブート機能、24時間駆けつけ可能な物理解錠キーボックスの設置など、多層的な安全対策・冗長化をあらかじめ設計します。また、現場オペレーション用のトラブルシューティングマニュアルも提供します。'
  },
  {
    question: '相談から店舗オープンまでの標準的な期間はどのくらいですか？',
    answer: '要件定義から機器選定・システム構築・動作検証まで、標準的には1.5ヶ月〜3ヶ月程度で稼働可能です。店舗の改装工事や回線手配のスケジュールに合わせて柔軟に進行いたします。短納期のオープンをご希望の場合もまずはご相談ください。'
  },
  {
    question: '補助金や助成金（IT導入補助金・ものづくり補助金等）の活用相談はできますか？',
    answer: 'はい、IT導入補助金や省力化投資補助金などの活用を見据えたシステム構成のご相談が可能です。提携する行政書士や中小企業診断士との連携も含め、費用対効果を最大化する導入計画をご提案いたします。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="glow-badge" style={{ marginBottom: '0.75rem' }}>FAQ</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            よくあるご質問
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            店舗無人化・省人化システムの導入に関して、多く寄せられるご質問をまとめています。
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel faq-card reveal delay-${((index % 3) + 1) * 100}`}
                style={{
                  border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  background: '#ffffff',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? '0 4px 14px rgba(2, 132, 199, 0.08)' : 'var(--shadow-card)',
                  boxSizing: 'border-box',
                  maxWidth: '100%'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-btn"
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.85rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                  }}
                  aria-expanded={isOpen}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: isOpen ? 'var(--primary)' : '#f1f5f9',
                        color: isOpen ? '#ffffff' : 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Q
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.45 }}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      color: isOpen ? 'var(--primary)' : '#94a3b8',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    className="faq-answer"
                    style={{
                      padding: '0 1.5rem 1.35rem 3.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: 1.8,
                      borderTop: '1px solid #f8fafc',
                      boxSizing: 'border-box'
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            その他のご質問や自社店舗特有のご相談も、お気軽にお問い合わせください。
          </p>
          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ padding: '0.75rem 1.8rem', fontSize: '0.92rem', gap: '0.5rem' }}
          >
            <HelpCircle size={17} color="var(--primary)" />
            個別で質問・相談してみる
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .faq-btn {
            padding: 1.1rem 1rem !important;
            gap: 0.65rem !important;
          }
          .faq-btn span {
            font-size: 0.95rem !important;
          }
          .faq-answer {
            padding: 0 1rem 1.25rem 1rem !important;
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </section>
  );
}
