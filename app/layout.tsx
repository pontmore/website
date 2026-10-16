import type { Metadata } from "next";
import "./globals.css";

const themeScript = `(function(){var theme;try{theme=localStorage.getItem('pontmore-theme')}catch(e){}if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme})()`;

export const metadata: Metadata = {
  metadataBase: new URL("https://pontmore.xyz"),
  title: "Pontmore — Coordinate. On open terms.",
  description:
    "An open, Nostr-native protocol for capability discovery, escrow compatibility, and verifiable economic coordination.",
  openGraph: {
    title: "Pontmore — Coordinate. On open terms.",
    description:
      "A shared language for independent people and apps to coordinate economic activity. Discover the protocol and explore an illustrative coordination walkthrough.",
    type: "website",
    url: "https://pontmore.xyz",
    siteName: "Pontmore",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Pontmore: Coordinate. On open terms.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
