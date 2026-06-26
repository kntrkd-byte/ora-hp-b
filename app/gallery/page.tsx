import ScrollFade from "@/components/ScrollFade";

export const metadata = { title: "GALLERY | O-RA ～TOKYO～" };

export default function GalleryPage() {
  const photos = [...Array(9)].map((_, i) => i + 1);
  return (
    <main>
      <div className="page-hero">
        <span className="page-hero-eyebrow">GALLERY</span>
        <h1 className="page-hero-title">ギャラリー</h1>
      </div>
      <section className="section">
        <div className="section-inner">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
            {photos.map((n, i) => (
              <ScrollFade key={n} delay={(i % 3) * 0.1}>
                <div style={{
                  aspectRatio:"4/3", background:"#1a1a1a",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  cursor:"pointer", overflow:"hidden",
                }}>
                  <span style={{ fontSize:10, letterSpacing:"0.3em", color:"var(--color-dim)" }}>
                    PHOTO {String(n).padStart(2,"0")}
                  </span>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
