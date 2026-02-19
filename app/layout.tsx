import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from '@/components/LightRays'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-Schibsted_-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DecEvent",
  description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SchibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased flex flex-col`}
      >
        <NavBar />
        <div className="fixed inset-0 z-[-1]">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
          />
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

