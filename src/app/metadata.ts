// src/app/metadata.ts
// Kept in a separate file because layout.tsx uses 'use client',
// which prevents metadata exports. This file is imported by a
// server-side wrapper that wraps the client layout.
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Nala Center',
    template: '%s | Nala Center',
  },
  description:
    'Nala Center is dedicated to advancing meaningful and sustainable development through rigorous research, strategic policy insights, and inclusive dialogue',
  metadataBase: new URL('https://www.nalacenter.org'),
  openGraph: {
    siteName: 'Nala Center',
    url: 'https://www.nalacenter.org',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NalaCenter',
  },
};