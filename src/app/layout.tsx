// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import your Navbar component

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Your Navbar component goes here */}
        {children}
      </body>
    </html>
  );
}