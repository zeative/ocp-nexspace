import { Metadata } from "next";

export const METADATA: Metadata = {
  metadataBase: new URL("https://ocpnexspace.com"),
  title: "OCP Nexspace",
  icons: {
    icon: [
      { url: "/meta/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/meta/icon.svg" },
    ],
    apple: "/meta/apple-touch-icon.png",
  },
  manifest: "/meta/site.webmanifest",
};
