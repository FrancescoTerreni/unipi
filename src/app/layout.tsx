import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from '@next/third-parties/google'
import { ReactionProvider } from "@/contexts/ReactionContext";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });
const gtmIdContainer: string = process.env.GTM_CONTAINER ?? '';
const isEnabled: boolean = process.env.GTM_ENABLED == 'true';

export const metadata: Metadata = {
  title: "Telemedicina & Robotica",
  description: "Scopri come le ecografie robotiche a distanza stanno rivoluzionando la sanità. Un progetto innovativo per portare la diagnostica ovunque, in sicurezza e in tempo reale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {isEnabled && <GoogleTagManager gtmId={gtmIdContainer} /> }
      <body className={inter.className}>
        <ThemeProvider forcedTheme="light" attribute="class">
          <ReactionProvider>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </ReactionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
