import { Figtree } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SmoothScroll } from "@/components/SmoothScroll";
import { METADATA } from "@/consts";

const font = Figtree({ subsets: ["latin"] });

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <LanguageProvider>
          <SmoothScroll />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
