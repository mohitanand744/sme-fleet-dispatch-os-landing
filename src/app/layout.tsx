import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0E1528",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://antcolos.com"),
  title: {
    default: "Antcolos | Next-Gen Logistics & Fleet Dispatch OS",
    template: "%s | Antcolos",
  },
  description:
    "Antcolos is an intelligent end-to-end fleet and dispatch operating system connecting freight carriers, dispatch agencies, independent dispatchers, and commercial drivers with automated AI rate con parsing, Telegram dispatching, and accounting.",
  keywords: [
    "Antcolos",
    "Antcolos Fleet OS",
    "Antcolos Dispatch OS",
    "Fleet Dispatch OS",
    "Trucking Software",
    "Logistics Management System",
    "TMS",
    "AI Rate Confirmation Parser",
    "Telegram Driver Dispatch",
    "Carrier Management",
    "Dispatch Agency Platform",
    "Freight Matching",
    "Automated Factoring Accounting",
    "ELD Telematics Integration",
    "Commercial Truck Dispatching",
    "Fleet Telematics",
    "Proof of Delivery POD Scanner",
  ],
  authors: [{ name: "Antcolos Team" }],
  creator: "Antcolos",
  publisher: "Antcolos",
  icons: {
    icon: [
      { url: "/LOGO.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antcolos.com",
    title: "Antcolos | Next-Gen Logistics & Fleet Dispatch Platform",
    description:
      "Stop running your multimillion-dollar fleet on spreadsheets. Automate rate con extraction, Telegram dispatching, and carrier accounting with Antcolos.",
    siteName: "Antcolos",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Antcolos Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antcolos",
    description:
      "Intelligent logistics & fleet operating system connecting carriers, dispatch agencies, and commercial drivers.",
    images: ["/LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
