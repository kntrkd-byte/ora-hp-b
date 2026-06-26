import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";

export const metadata = { title: "SYSTEM | O-RA ～TOKYO～" };

const rows = [
  { section:"セット料金", items:[["通常セット（60分）","¥ お問い合わせください"],["延長（30分）","¥ お問い合わせください"]] },
  { section:"指名料", items:[["本指名","¥ お問い合わせください"],["場内指名","¥ お問い合わせください"]] },
  { section:"ドリンク・その他", items:[["キャストドリンク","¥ お問い合わせください"],["シャンパン","¥ お問い合わせください〜"],["フード","¥ お問い合わせください〜"]] },
];

export default function SystemPage() {
  return (
    <main>
      <div className="page-hero">
        <span className="page-hero-eyebrow">SYSTEM</span>
        <h1 className="page-hero-title">料金・システム</h1>
      </div>
      <section className="section">
        <div className="section-inner">
          {rows.map((block, i) => (
            <div key={block.section} style={{ marginBottom: 64 }}>
              <ScrollFade delay={i * 0.1}>
                <p style={{ fontFamily:"var(--font-serif)", fontSize:14, letterSpacing:"0.3em", color:"var(--color-gold)", borderBottom:"1px solid var(--color-border-dk)", paddingBottom:12, marginBottom:24 }}>{block.section}</p>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <tbody>
                    {block.items.map(([th, td]) => (
                      <tr key={th}>
                        <td style={{ padding:"16px 20px", borderBottom:"1px solid var(--color-border-dk)", fontSize:14, color:"var(--color-gold)", fontFamily:"var(--font-serif)", width:"40%", background:"rgba(201,168,76,0.04)" }}>{th}</td>
                        <td style={{ padding:"16px 20px", borderBottom:"1px solid var(--color-border-dk)", fontSize:14, color:"var(--color-text-dark)" }}>{td}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollFade>
            </div>
          ))}

          <ScrollFade>
            <div style={{ padding:"28px 32px", border:"1px solid var(--color-border-dk)", background:"var(--color-dark-2)", marginBottom:48 }}>
              <p style={{ fontSize:12, letterSpacing:"0.25em", color:"var(--color-gold)", marginBottom:12 }}>ご注意事項</p>
              <ul style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {["表示価格はすべて税別となります","サービス料が別途かかります","詳しい料金はお電話またはLINEにてお問い合わせください","20歳未満の方のご入場はお断りしております"].map(item => (
                  <li key={item} style={{ fontSize:13, color:"var(--color-muted-dk)", paddingLeft:16, position:"relative" }}>
                    <span style={{ position:"absolute", left:0, color:"var(--color-dim)" }}>—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFade>

          <div style={{ textAlign:"center", paddingTop:32, borderTop:"1px solid var(--color-border-dk)" }}>
            <ScrollFade>
              <p style={{ fontFamily:"var(--font-display)", fontSize:16, letterSpacing:"0.1em", color:"var(--color-muted-dk)", marginBottom:28 }}>ご予約・お問い合わせはこちら</p>
              <Link href="#" className="btn btn-fill">LINE で予約する</Link>
            </ScrollFade>
          </div>
        </div>
      </section>
    </main>
  );
}
