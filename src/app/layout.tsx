import { Figtree } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScroll />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
