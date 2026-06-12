import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenithtrader.vercel.app"),
  title: {
    default: "Zenith Trader Academy | Trading Education",
    template: "%s | Zenith Trader Academy",
  },
  description:
    "Learn trading through candlestick patterns, risk management and trading psychology. Join our free Telegram community for daily educational content.",
  keywords: [
    "trading education",
    "candlestick patterns",
    "trading psychology",
    "risk management",
    "price action trading",
    "beginner trading guide",
    "forex education",
    "crypto trading education",
    "technical analysis",
    "trading strategies",
  ],
  authors: [{ name: "Zenith Trader Academy" }],
  creator: "Zenith Trader Academy",
  publisher: "Zenith Trader Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenithtrader.vercel.app",
    siteName: "Zenith Trader Academy",
    title: "Zenith Trader Academy | Trading Education",
    description:
      "Learn trading through candlestick patterns, risk management and trading psychology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenith Trader Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Trader Academy | Trading Education",
    description:
      "Learn trading through candlestick patterns, risk management and trading psychology.",
    images: ["/og-image.png"],
    creator: "@ZenithTraderAcademy",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://zenithtrader.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        {/* Google Analytics – replace G-XXXXXXXX */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXX');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="noise bg-background text-white antialiased">
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
