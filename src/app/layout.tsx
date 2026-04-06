import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DtrenD Hair and Beauty Salon | Where Beauty Meets Identity",
  description: "Redefining London's beauty landscape through artisanal technique and cultural identity since 2009. Expert bridal, hair, and skin treatments in Harrow, London.",
  keywords: ["Harrow Salon", "Bridal Makeup London", "Kandyan Bridal", "Precision Hair Cut", "DtrenD Hair and Beauty"],
  openGraph: {
    title: "DtrenD Hair and Beauty Salon | Where Beauty Meets Identity",
    description: "Expert bridal, hair, and skin treatments in Harrow, London.",
    url: "https://dtrend.uk",
    siteName: "DtrenD",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased bg-ivory text-charcoal`}
      >
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
