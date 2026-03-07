import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoulSync | Date by Vibe, Not by Swipe",
  description: "The compatibility-first dating app for GenZ. Real connections through quizzes and video introductions.",
  keywords: "dating app, GenZ dating, compatibility quiz, video dating, SoulSync",
  openGraph: {
    title: "SoulSync | Date by Vibe, Not by Swipe",
    description: "The compatibility-first dating app for GenZ.",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
