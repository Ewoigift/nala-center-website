// src/app/layout.tsx
'use client'; // This must be a client component to use usePathname

import { usePathname } from 'next/navigation'; // Import usePathname
import './globals.css'; // Your global styles
import Navbar from '../components/Navbar'; // Assuming Navbar is here
import Footer from '../components/Footer'; // Import the new Footer component

// Import the specific fonts you want to use for your custom CSS variables
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

// Define your fonts and configure them to export as CSS variables
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "700"],
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
  weight: ["400", "700"],
});

// REMOVED: export const metadata = { ... }
// Metadata exports are not allowed in 'use client' components.
// If you need global metadata, define it in a parent Server Component layout
// or in a separate metadata file (e.g., app/layout.ts if it's a Server Component)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path

  // Determine if the footer should be shown
  const showFooter = pathname !== '/'; // Show footer on all pages EXCEPT the home page ('/')

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${sourceSansPro.variable}`}
    >
      <body>
        <Navbar /> {/* Navbar is always present */}
        {children} {/* This renders your page content (e.g., page.tsx, or other pages) */}
        {showFooter && <Footer />} {/* Conditionally render the Footer */}
      </body>
    </html>
  );
}
