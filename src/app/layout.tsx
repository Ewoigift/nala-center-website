// src/app/layout.tsx
'use client'; // This must be a client component to use usePathname

import { usePathname } from 'next/navigation'; // Import usePathname
 // Your global styles
import Navbar from '../components/Navbar'; // Assuming Navbar is here
import Footer from '../components/Footer'; // Import the new Footer component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path

  // Determine if the footer should be shown
  const showFooter = pathname !== '/'; // Show footer on all pages EXCEPT the home page ('/')

  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar is always present */}
        {children} {/* This renders your page content (e.g., page.tsx, or other pages) */}
        {showFooter && <Footer />} {/* Conditionally render the Footer */}
      </body>
    </html>
  );
}
