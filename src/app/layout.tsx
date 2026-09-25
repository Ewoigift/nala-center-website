// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';
import { Analytics } from '@vercel/analytics/next';

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
        <Analytics />
      </body>
    </html>
  );
}