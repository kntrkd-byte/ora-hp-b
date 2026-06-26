import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "O-RA ～TOKYO～ | 東京の夜を、あなただけの時間へ",
  description: "O-RA ～TOKYO～ 接待・会食・特別なひとときをご提供する東京のエンターテインメントダイニング",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
