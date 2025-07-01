// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Data for Who We Are dropdown
const whoWeAreLinks = [
  { name: 'About Us', href: '/who-we-are/about-us', imgSrc: '/images/who-we-are/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Leadership & Team', href: '/who-we-are/leadership-team', imgSrc: '/images/who-we-are/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Our Partners', href: '/who-we-are/our-partners', imgSrc: '/images/who-we-are/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Join Us', href: '/who-we-are/join-us', imgSrc: '/images/who-we-are/demo_image.jpg' }, // Reverted to demo_image.jpg
];

// Data for What We Do dropdown
const whatWeDoLinks = [
  { name: 'Research & Publications', href: '/what-we-do/research-publications', imgSrc: '/images/what-we-do/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Policy Engagement', href: '/what-we-do/policy-engagement', imgSrc: '/images/what-we-do/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Capacity Building & Training', href: '/what-we-do/capacity-building', imgSrc: '/images/what-we-do/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Multimedia Hub', href: '/what-we-do/multimedia-hub', imgSrc: '/images/what-we-do/demo_image.jpg' }, // Reverted to demo_image.jpg
];

// Data for Get Involved dropdown
const getInvolvedLinks = [
  { name: 'Support Our Work', href: '/get-involved/support-us', imgSrc: '/images/get-involved/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Collaborations', href: '/get-involved/collaborations', imgSrc: '/images/get-involved/demo_image.jpg' }, // Reverted to demo_image.jpg
  { name: 'Volunteer & Intern', href: '/get-involved/volunteer', imgSrc: '/images/get-involved/demo_image.jpg' }, // Reverted to demo_image.jpg
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const toggleDesktopDropdown = (dropdownName: string) => {
    setOpenDesktopDropdown(openDesktopDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileAccordion = (dropdownName: string) => {
    setOpenMobileAccordion(openMobileAccordion === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    setOpenDesktopDropdown(null);
    setOpenMobileAccordion(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setOpenDesktopDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowX = '';
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowX = '';
      document.body.style.overflowY = '';
    };
  }, [isMobileMenuOpen]);


  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/who-we-are', links: whoWeAreLinks },
    { name: 'What We Do', href: '/what-we-do', links: whatWeDoLinks },
    { name: 'Get Involved', href: '/get-involved', links: getInvolvedLinks },
  ];

  return (
    <nav ref={navRef} className="relative bg-[#FFFFFF] text-[#050505] p-4 shadow-md font-sans z-30"> {/* White background, Almost Black text */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title - NALA Center */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <Image
            src="/images/Nala_No_Bg.png"
            alt="NALA Center Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold font-serif">NALA Center</span>
        </Link>

        {/* Hamburger Icon (visible on small screens) */}
        <button
          className="md:hidden text-[#050505] text-2xl focus:outline-none z-50" // Almost Black
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Desktop Main Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-2 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              {item.links ? (
                <div
                  className={`
                    py-2 px-4 rounded-md transition-colors duration-200
                    hover:bg-[#EBEBEB] hover:text-[#050505] {/* Light Gray background, Almost Black text */}
                    ${isActive(item.href) ? 'border-b-2 border-[#050505]' : ''} {/* Almost Black */}
                    cursor-pointer flex items-center
                  `}
                  onClick={() => toggleDesktopDropdown(item.name)}
                >
                  {item.name}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`
                    py-2 px-4 rounded-md transition-colors duration-200
                    hover:bg-[#EBEBEB] hover:text-[#050505] {/* Light Gray background, Almost Black text */}
                    ${isActive(item.href) ? 'border-b-2 border-[#050505]' : ''} {/* Almost Black */}
                    flex items-center
                  `}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RENDER DESKTOP DROPDOWNS OUTSIDE THE MAIN LOOP, BUT WITHIN THE NAV */}
      {navItems.map((item) => (
        item.links && (
          <div
            key={`dropdown-${item.name}`}
            className={`
              hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-0 p-8
              bg-[#2F2F2F] shadow-lg rounded-b-md {/* Dark Gray */}
              transition-all duration-300 transform origin-top z-40 w-full max-w-screen-xl
              ${openDesktopDropdown === item.name ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}
            `}
          >
            <div className="container mx-auto relative z-10">
              <div className="flex justify-between items-start gap-8">
                {item.links.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="group flex flex-col items-center p-3 rounded-md hover:bg-[#1F1F1F] transition-colors duration-200 text-center flex-grow flex-shrink-0 basis-0" // Very Dark Gray
                    style={{ minWidth: '160px' }} // This specific inline style for minWidth can be kept if no Tailwind equivalent is desired or available.
                    onClick={() => setOpenDesktopDropdown(null)}
                  >
                    <Image
                      src={subItem.imgSrc}
                      alt={subItem.name}
                      width={160}
                      height={100}
                      className="rounded-md object-cover mb-2"
                    />
                    <span className="text-[#FFFFFF] font-medium group-hover:text-[#FFFFFF] text-base">{subItem.name}</span> {/* White, White */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      ))}

      {/* Mobile Menu Container (slides in/out) */}
      <div
        className={`
          fixed inset-0 bg-[#2F2F2F] z-40 transform transition-transform duration-300 ease-in-out {/* Dark Gray */}
          md:hidden flex flex-col p-8 space-y-4 pt-20
          ${isMobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
        `}
      >
        {navItems.map((item) => (
          <div key={item.name} className="w-full">
            {item.links ? (
              // Mobile Accordion Header
              <div
                className={`
                  py-3 px-4 rounded-md transition-colors duration-200
                  hover:bg-[#1F1F1F] flex justify-between items-center cursor-pointer text-[#FFFFFF] font-semibold text-lg {/* Very Dark Gray, White */}
                  ${isActive(item.href) ? 'border-l-4 border-[#FFFFFF]' : ''} {/* White */}
                `}
                onClick={() => toggleMobileAccordion(item.name)}
              >
                <span>{item.name}</span>
                <span>{openMobileAccordion === item.name ? '-' : '+'}</span>
              </div>
            ) : (
              // Mobile Link (e.g., Home)
              <Link
                href={item.href}
                className={`
                  block py-3 px-4 rounded-md transition-colors duration-200
                  hover:bg-[#1F1F1F] text-[#FFFFFF] font-semibold text-lg {/* Very Dark Gray, White */}
                  ${isActive(item.href) ? 'border-l-4 border-[#FFFFFF]' : ''} {/* White */}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
            {item.links && (
              // Mobile Accordion Content (Dropdown without images)
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openMobileAccordion === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="flex flex-col pl-6 py-2 space-y-2 bg-[#1F1F1F] rounded-b-md mt-1"> {/* Very Dark Gray */}
                  {item.links.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-2 px-3 rounded-md hover:bg-[#2F2F2F] text-[#FFFFFF] text-base" // Dark Gray, White
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}