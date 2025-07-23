// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Data for Who We Are dropdown
const whoWeAreLinks = [
  { name: 'About Us', href: '/who-we-are/about-us', imgSrc: '/images/who-we-are/demo_image.jpg' },
  { name: 'Leadership & Team', href: '/who-we-are/leadership-team', imgSrc: '/images/who-we-are/demo_image.jpg' },
  { name: 'Our Partners', href: '/who-we-are/our-partners', imgSrc: '/images/who-we-are/demo_image.jpg' },
  { name: 'Join Us', href: '/who-we-are/join-us', imgSrc: '/images/who-we-are/demo_image.jpg' },
];


// Data for Focus Areas dropdown
const focusAreasLinks = [
  { name: "Peace & Security", href: "/focus-areas/peace-security", imgSrc: '/images/focus-areas/peace-security.jpg' },
  { name: "Democracy, Governance & Civic Innovation", href: "/focus-areas/democracy-governance", imgSrc: '/images/focus-areas/democracy-governance.jpg' },
  { name: "Economic Systems, Equity & Inclusive Development", href: "/focus-areas/economic-systems", imgSrc: '/images/focus-areas/economic-systems.jpg' },
  { name: "Sustainable Energy & Climate Resilience", href: "/focus-areas/sustainable-energy", imgSrc: '/images/focus-areas/sustainable-energy.jpg' },
  { name: "Migration, Mobility & Human Rights", href: "/focus-areas/migration-human-rights", imgSrc: '/images/focus-areas/migration-human-rights.jpg' },
];

// Data for What We Do dropdown
const whatWeDoLinks = [
  { name: 'Research & Publications', href: '/what-we-do/research-publications', imgSrc: '/images/what-we-do/demo_image.jpg' },
  { name: 'Policy Engagement', href: '/what-we-do/policy-engagement', imgSrc: '/images/what-we-do/demo_image.jpg' },
  { name: 'Capacity Building & Training', href: '/images/what-we-do/capacity-building', imgSrc: '/images/what-we-do/demo_image.jpg' },
  { name: 'Multimedia Hub', href: '/what-we-do/multimedia-hub', imgSrc: '/images/what-we-do/demo_image.jpg' },
];

// Data for Get Involved dropdown
const getInvolvedLinks = [
  { name: 'Support Our Work', href: '/get-involved/support-us', imgSrc: '/images/get-involved/demo_image.jpg' },
  { name: 'Collaborations', href: '/get-involved/collaborations', imgSrc: '/images/get-involved/demo_image.jpg' },
  { name: 'Volunteer & Intern', href: '/get-involved/volunteer', imgSrc: '/images/get-involved/demo_image.jpg' },
];

// Define props for Navbar to accept a callback for height
interface NavbarProps {
  onHeightChange?: (height: number) => void;
}

export default function Navbar({ onHeightChange }: NavbarProps) {
  const pathname = usePathname();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  const navRef = useRef<HTMLElement>(null);

  // Effect for handling scroll to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; // Pixels scrolled before navbar becomes sticky
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Measure navbar height and report it to parent
  useEffect(() => {
    const measureHeight = () => {
      if (navRef.current && onHeightChange) {
        onHeightChange(navRef.current.offsetHeight);
      }
    };

    // Measure on mount
    measureHeight();

    // Measure on window resize
    window.addEventListener('resize', measureHeight);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', measureHeight);
    };
  }, [onHeightChange]); // Re-run if onHeightChange callback itself changes (unlikely but good practice)


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
    { name: 'Focus Areas', href: '/focus-areas', links: focusAreasLinks }, // New Focus Areas link
    { name: 'What We Do', href: '/what-we-do', links: whatWeDoLinks },
    { name: 'Get Involved', href: '/get-involved', links: getInvolvedLinks },
  ];

  return (
    // Added fixed, top-0, w-full, and increased z-index for fixed navbar
    <nav ref={navRef}  className={`
        bg-[#FFFFFF] text-[#050505] shadow-md font-sans
        transition-all duration-300 ease-in-out
        ${isSticky ? 'fixed top-0 w-full z-[100] py-6' : 'relative p-4'}
      `}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title - NALA CENTER */}
        <Link
          href="/"
          // Dynamically set text color for the logo/site title
          className={`
            flex items-center space-x-2 z-50
            ${isMobileMenuOpen ? 'text-[#FFFFFF]' : 'text-[#050505]'}
          `}
        >
          <Image
            // Conditionally load white logo when mobile menu is open
            src={isMobileMenuOpen ? '/images/Nala_No_Bg_White.png' : '/images/Nala_No_Bg.png'}
            alt="NALA Center Logo"
            width={40}
            height={40}
            priority
          />
          {/* Changed text to NALA CENTER */}
          <span className="text-2xl font-bold font-serif">NALA CENTER</span>
        </Link>

        {/* Hamburger Icon (visible on small screens) */}
        <button
          // Dynamically set text color based on mobile menu state for icon visibility
          className={`
            md:hidden text-2xl focus:outline-none z-50
            ${isMobileMenuOpen ? 'text-[#FFFFFF]' : 'text-[#050505]'}
          `}
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
                    hover:bg-[#EBEBEB] hover:text-[#050505]
                    ${isActive(item.href) ? 'border-b-2 border-[#050505]' : ''}
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
                    hover:bg-[#EBEBEB] hover:text-[#050505]
                    ${isActive(item.href) ? 'border-b-2 border-[#050505]' : ''}
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
              bg-[#2F2F2F] shadow-lg rounded-b-md
              transition-all duration-300 transform origin-top z-40 w-full max-w-screen-xl
              ${openDesktopDropdown === item.name ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}
            `}
          >
            <div className="container mx-auto relative z-10">
              <div className="grid grid-cols-4 gap-8"> {/* Changed to grid and grid-cols-4 */}
                {item.links.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="group flex flex-col items-center p-3 rounded-md hover:bg-[#1F1F1F] transition-colors duration-200 text-center"
                    onClick={() => setOpenDesktopDropdown(null)}
                  >
                    {/* Standardized image dimensions using a wrapper div and layout="fill" */}
                    <div className="relative w-[160px] h-[90px] overflow-hidden rounded-md mb-2">
                      <Image
                        src={subItem.imgSrc}
                        alt={subItem.name}
                        layout="fill" // Ensures the image fills the parent div
                        objectFit="cover" // Crops the image to cover the area
                        className="" // No additional classes needed here as rounded-md is on parent div
                      />
                    </div>
                    <span className="text-[#FFFFFF] font-medium group-hover:text-[#FFFFFF] text-base">{subItem.name}</span>
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
          fixed inset-0 bg-[#2F2F2F] z-40 transform transition-transform duration-300 ease-in-out
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
                  hover:bg-[#1F1F1F] flex justify-between items-center cursor-pointer text-[#FFFFFF] font-semibold text-lg
                  ${isActive(item.href) ? 'border-l-4 border-[#FFFFFF]' : ''}
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
                  hover:bg-[#1F1F1F] text-[#FFFFFF] font-semibold text-lg
                  ${isActive(item.href) ? 'border-l-4 border-[#FFFFFF]' : ''}
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
                <div className="flex flex-col pl-6 py-2 space-y-2 bg-[#1F1F1F] rounded-b-md mt-1">
                  {item.links.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-2 px-3 rounded-md hover:bg-[#2F2F2F] text-[#FFFFFF] text-base"
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
