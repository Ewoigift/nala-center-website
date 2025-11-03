// src/app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import './globals.css'; // ADD THIS LINE
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showFooter = pathname !== '/';

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}