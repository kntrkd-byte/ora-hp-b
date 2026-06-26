import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";

export const metadata = { title: "ACCESS | O-RA ～TOKYO～" };

const info = [
  ["店名", "O-RA ～TOKYO～"],
  ["住所", "東京都〇〇区〇〇 1-2-3\n〇〇ビル B1F"],
  ["最寄り駅", "〇〇線「〇〇駅」徒歩3分"],
  ["営業時間", "20:00 〜 翌 4:00"],
  ["定休日", "年中無休"],
];

export default function AccessPage() {
  return (
    <main>
      <div className="page-hero">
        <span className="page-hero-eyebrow">ACCESS</span>
        <h1 className="page-hero-title">アクセス</h1>
      </div>
      <section className="section">
        <div className="section-inner">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"start" }}>
            <ScrollFade>
              <div style={{ width:"100%", aspectRatio:"4/3", background:"#1a1a1a", border:"1px solid var(--color-border)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:12 }}>
                <span style={{ fontSize:12, letterSpacing:"0.2em", color:"var(--color-dim)" }}>Google Map</span>
                <a href="https://maps.google.com" target="_blank" rel="noopener" style={{ fontSize:11, color:"var(--color-gold)", borderBottom:"1px solid var(--color-border)", paddingBottom:2 }}>Googleマップで見る →</a>
              </div>
            </ScrollFade>
            <ScrollFade delay={0.15}>
              <dl style={{ display:"grid", gridTemplateColumns:"90px 1fr", gap:"18px 24px", marginBottom:32 }}>
                {info.map(([dt, dd]) => (
                  <dl key={dt} style={{ display:"contents" }}>
                    <dt style={{ fontSize:11, letterSpacing:"0.2em", color:"var(--color-gold)", fontFamily:"var(--font-serif)", paddingTop:3 }}>{dt}</dt>
                    <dd style={{ fontSize:14, lineHeight:1.8, whiteSpace:"pre-line" }}>{dd}</dd>
                  </dl>
                ))}
              </dl>
              <div style={{ textAlign:"center", padding:"40px 0", border:"1px solid var(--color-border)", marginBottom:24 }}>
                <p style={{ fontSize:12, letterSpacing:"0.2em", color:"var(--color-muted)", marginBottom:12 }}>ご予約・お問い合わせ</p>
                <a href="tel:0000000000" style={{ fontFamily:"var(--font-serif)", fontSize:28, fontWeight:200, letterSpacing:"0.15em", color:"var(--color-gold)" }}>00-0000-0000</a>
                <small style={{ display:"block", marginTop:8, fontSize:11, color:"var(--color-dim)" }}>営業時間内にお気軽にどうぞ</small>
              </div>
              <Link href="#" className="btn btn-fill" style={{ display:"block", textAlign:"center" }}>LINE でご予約</Link>
            </ScrollFade>
          </div>
        </div>
      </section>
    </main>
  );
}
