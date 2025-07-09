// src/components/Footer.tsx
'use client'; // This component might be used in a client-side layout

import Link from 'next/link';
import Image from 'next/image';

// Import Font Awesome icons for social media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#EBEBEB] py-12 px-4 font-sans">
      {/* Changed lg:grid-cols-4 to lg:grid-cols-3 to maintain 3 columns on large screens */}
      {/* Removed justify-center as justify-items-center handles individual cell centering,
          and the container's mx-auto centers the grid itself if it doesn't fill the width. */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">

        {/* Column 1: Logo & Mission Statement */}
        {/* Changed items-center to items-start and removed text-center for left alignment */}
        <div className="flex flex-col items-start text-left">
          {/* The Link already makes the Image and Span a single unit */}
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Image
              src="/images/Nala_No_Bg_White.png" // Using the white logo version
              alt="NALA Center Logo"
              width={60} // Increased logo size
              height={60} // Increased logo size
              priority
            />
            <span className="text-3xl font-bold font-serif text-[#FFFFFF]">NALA CENTER</span>
          </Link>
          {/* Removed max-w-xs to allow the paragraph to take more space and balance column widths */}
          <p className="text-sm leading-relaxed">
            Driving meaningful and lasting change through transformative research, strategic insights, and inclusive dialogue for a sustainable future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        {/* Removed text-center for left alignment */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFFFFF]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/who-we-are/about-us" className="hover:text-[#FFFFFF] transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/what-we-do" className="hover:text-[#FFFFFF] transition-colors duration-200">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/what-we-do/research-publications" className="hover:text-[#FFFFFF] transition-colors duration-200">
                Research & Publications
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-[#FFFFFF] transition-colors duration-200">
                Get Involved
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFFFFF] transition-colors duration-200">
                Contact Us
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        {/* Removed text-center for left alignment */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFFFFF]">Contact</h3>
          <p className="text-sm mb-2">
            P.O. Box 12345-00100, Nairobi, Kenya
          </p>
          <p className="text-sm mb-2">
            Email: <a href="mailto:info@nalacenter.org" className="hover:text-[#FFFFFF] transition-colors duration-200">info@nalacenter.org</a>
          </p>
          <p className="text-sm mb-4">
            Phone: <a href="tel:+254712345678" className="hover:text-[#FFFFFF] transition-colors duration-200">+254 712 345 678</a>
          </p>

          {/* Social Media Icons */}
          {/* Changed justify-center to justify-start for left alignment */}
          <div className="flex justify-start space-x-6 mt-4">
            <a href="https://x.com/NalaCenter" target="_blank" rel="noopener noreferrer" className="text-[#EBEBEB] hover:text-[#FFFFFF] text-2xl transition-colors duration-300" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com/company/nala-center/" target="_blank" rel="noopener noreferrer" className="text-[#EBEBEB] hover:text-[#FFFFFF] text-2xl transition-colors duration-300" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://facebook.com/nala-center" target="_blank" rel="noopener noreferrer" className="text-[#EBEBEB] hover:text-[#FFFFFF] text-2xl transition-colors duration-300" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com/nalacenter_/" target="_blank" rel="noopener noreferrer" className="text-[#EBEBEB] hover:text-[#FFFFFF] text-2xl transition-colors duration-300" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/+254718302179" target="_blank" rel="noopener noreferrer" className="text-[#EBEBEB] hover:text-[#FFFFFF] text-2xl transition-colors duration-300" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {currentYear} NALA Center. All rights reserved.
      </div>
    </footer>
  );
}
