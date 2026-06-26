import ScrollFade from "@/components/ScrollFade";
import { casts } from "@/data/cast";

export const metadata = { title: "CAST | O-RA ～TOKYO～" };

export default function CastPage() {
  return (
    <main>
      <div className="page-hero">
        <span className="page-hero-eyebrow">CAST</span>
        <h1 className="page-hero-title">在籍キャスト</h1>
      </div>
      <section className="section">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {casts.map((cast, i) => (
              <ScrollFade key={cast.id} delay={(i % 3) * 0.1}>
                <article style={{
                  background: "var(--color-bg-2)", border: "1px solid var(--color-border)",
                  overflow: "hidden",
                }}>
                  <div style={{ aspectRatio: "3/4", background: "#1a1a1a", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontSize:11, letterSpacing:"0.15em", color:"var(--color-dim)" }}>PHOTO</span>
                  </div>
                  <div style={{ padding: 20, textAlign:"center", borderTop:"1px solid var(--color-border)" }}>
                    <p style={{ fontFamily:"var(--font-serif)", fontSize:18, fontWeight:300, letterSpacing:"0.15em", marginBottom:6 }}>{cast.name}</p>
                    <p style={{ fontSize:12, color:"var(--color-muted)", letterSpacing:"0.1em" }}>{cast.catch}</p>
                  </div>
                </article>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
