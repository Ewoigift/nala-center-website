// src/app/layout.tsx
// NOTE: No 'use client' here — this must stay a server component
// so that Next.js can pick up the metadata export.
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout'; // ← new file (see below)

export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}