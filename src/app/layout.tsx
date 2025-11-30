import { Figtree } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/consts";

const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Figtree({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
