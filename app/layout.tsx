import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: {
    default: "Syed Hammad Ali — Creative Manager",
    template: "%s — Syed Hammad Ali",
  },
  description:
    "Portfolio of Syed Hammad Ali, a Karachi-based Creative Manager and multidisciplinary designer with 13 years of experience across brand, motion and spatial design.",
  keywords: [
    "Creative Manager",
    "Brand Designer",
    "Motion Designer",
    "3D Visualizer",
    "Karachi Designer",
    "Syed Hammad Ali",
  ],
  authors: [{ name: "Syed Hammad Ali" }],
  creator: "Syed Hammad Ali",
  openGraph: {
    type: "website",
    locale: "en_PK",
    title: "Syed Hammad Ali — Creative Manager",
    description: "13 years shaping brands through design, motion and spatial experiences.",
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: { icon: assetPath("/favicon.svg"), shortcut: assetPath("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
