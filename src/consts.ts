import type { Metadata } from "next";

export const METADATA: Metadata = {
  metadataBase: new URL("https://ocp-nexspace.vercel.app"),
  title: "OCP Nexspace",
  description:
    "OCP Nexspace, software house profesional di Indonesia, menyediakan solusi pengembangan perangkat lunak inovatif dan terintegrasi dengan teknologi terkini untuk mendukung transformasi digital bisnis.",
  icons: {
    icon: [
      { url: "/meta/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/meta/icon.svg" },
    ],
    apple: "/meta/apple-touch-icon.png",
  },
  manifest: "/meta/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://ocp-nexspace.vercel.app/",
    title: "OCP Nexspace",
    siteName: "OCP Nexspace",
    description:
      "OCP Nexspace, software house profesional di Indonesia, menyediakan solusi pengembangan perangkat lunak inovatif dan terintegrasi dengan teknologi terkini untuk mendukung transformasi digital bisnis.",
    images: [
      {
        url: "/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "OCP Nexspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCP Nexspace",
    description:
      "OCP Nexspace, software house profesional di Indonesia, menyediakan solusi pengembangan perangkat lunak inovatif dan terintegrasi dengan teknologi terkini untuk mendukung transformasi digital bisnis.",
    images: ["/meta/logo.png"],
  },
};
