import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#060606", borderTop: "1px solid var(--color-border)",
      padding: "60px 0 30px",
    }}>
      <div style={{
        maxWidth: "var(--inner-w)", margin: "0 auto", padding: "0 48px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 32,
      }}>
        <p style={{
          fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 200,
          letterSpacing: "0.4em", color: "var(--color-gold)",
        }}>O · R · A ～ TOKYO ～</p>

        <nav style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { href: "/cast", label: "CAST" },
            { href: "/system", label: "SYSTEM" },
            { href: "/gallery", label: "GALLERY" },
            { href: "/access", label: "ACCESS" },
            { href: "/news", label: "NEWS" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: 11, letterSpacing: "0.2em", color: "var(--color-muted)",
              transition: "color 0.3s",
            }}>{label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { href: "#", label: "Instagram" },
            { href: "#", label: "LINE" },
          ].map(({ href, label }) => (
            <Link key={label} href={href} style={{
              fontSize: 11, letterSpacing: "0.15em", color: "var(--color-muted)",
              border: "1px solid var(--color-dim)", padding: "6px 18px",
            }}>{label}</Link>
          ))}
        </div>

        <p style={{ fontSize: 10, color: "var(--color-dim)", letterSpacing: "0.1em", marginTop: 12 }}>
          &copy; 2025 O-RA ～TOKYO～ All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
