import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout";
import { LenisProvider, GSAPProvider } from "@/components/providers";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Animora | Creative Agency | Digital Experiences",
  description:
    "A high-end creative agency crafting premium digital experiences. Brand strategy, digital products, and immersive experiences.",
  keywords: ["creative agency", "digital design", "brand strategy", "web design"],
  openGraph: {
    title: "Animora | Creative Agency",
    description: "Crafting premium digital experiences that inspire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <LenisProvider>
          <GSAPProvider>
            <CustomCursor />
            <ScrollProgress />
            <Header />
            <main>{children}</main>
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
