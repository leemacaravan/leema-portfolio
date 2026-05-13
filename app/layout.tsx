import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leemacaravan.com"),
  title: {
    default: "Leema Caravan",
    template: "%s · Leema Caravan",
  },
  description:
    "Computer Science senior at Rensselaer Polytechnic Institute. Class of 2026.",
  openGraph: {
    title: "Leema Caravan",
    description:
      "Computer Science senior at Rensselaer Polytechnic Institute. Class of 2026.",
    images: [{ url: "/badge-1024.png", width: 1024, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leema Caravan",
    description:
      "Computer Science senior at Rensselaer Polytechnic Institute. Class of 2026.",
    images: ["/badge-1024.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${patrickHand.variable} ${shadowsIntoLight.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
