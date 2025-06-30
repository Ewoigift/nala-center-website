// src/app/layout.tsx
import type { Metadata } from "next";
// Import the specific fonts you want to use for your custom CSS variables
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";

// Define your fonts and configure them to export as CSS variables
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "700"], // <-- CORRECTED: Changed to 'weight' (singular)
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
  weight: ["400", "700"], // <-- CORRECTED: Changed to 'weight' (singular)
});

export const metadata: Metadata = {
  title: "NALA Center Website",
  description: "Advancing Knowledge for a Sustainable Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${sourceSansPro.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}