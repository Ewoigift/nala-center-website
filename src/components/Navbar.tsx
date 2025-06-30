// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Data for Who We Are dropdown (using demo_image.jpg as placeholder)
const whoWeAreLinks = [
  { name: 'About Us', href: '/who-we-are/about-us', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with about-us.jpg */ },
  { name: 'Leadership & Team', href: '/who-we-are/leadership-team', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with leadership.jpg */ },
  { name: 'Our Partners', href: '/who-we-are/our-partners', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with partners.jpg */ },
  { name: 'Join Us', href: '/who-we-are/join-us', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with join-us.jpg */ },
];

// Data for What We Do dropdown (using demo_image.jpg as placeholder)
const whatWeDoLinks = [
  { name: 'Research & Publications', href: '/what-we-do/research-publications', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with research.jpg */ },
  { name: 'Policy Engagement', href: '/what-we-do/policy-engagement', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with policy.jpg */ },
  { name: 'Capacity Building & Training', href: '/what-we-do/capacity-building', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with capacity.jpg */ },
  { name: 'Multimedia Hub', href: '/images/what-we-do/multimedia-hub', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with multimedia.jpg */ },
];

// Data for Get Involved dropdown (using demo_image.jpg as placeholder)
const getInvolvedLinks = [
  { name: 'Support Our Work', href: '/get-involved/support-us', imgSrc: '/images/get-involved/demo_image.jpg' /* Replace with support.jpg */ },
  { name: 'Collaborations', href: '/get-involved/collaborations', imgSrc: '/images/get-involved/demo_image.jpg' /* Replace with collaborations.jpg */ },
  { name: 'Volunteer & Intern', href: '/get-involved/volunteer', imgSrc: '/images/get-involved/demo_image.jpg' /* Replace with volunteer.jpg */ },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/who-we-are', links: whoWeAreLinks },
    { name: 'What We Do', href: '/what-we-do', links: whatWeDoLinks },
    { name: 'Get Involved', href: '/get-involved', links: getInvolvedLinks },
  ];

  return (
    <nav className="relative bg-quick-silver text-black-olive p-4 shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title - NALA Center */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Nala_No_Bg.png"
            alt="NALA Center Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold font-serif">NALA Center</span>
        </Link>

        {/* Main Navigation Links - ENSURING ALIGNMENT HERE */}
        <div className="flex space-x-2 items-center"> {/* <<< ADDED items-center to the parent flex container */}
          {navItems.map((item) => (
            <div key={item.name} className="group">
              {item.links ? (
                // For items with dropdowns, use a div with onClick handler
                <div
                  className={`
                    py-2 px-4 rounded-md transition-colors duration-200
                    hover:text-baby-powder
                    ${isActive(item.href) ? 'border-b-2 border-black-olive' : ''}
                    cursor-pointer
                    flex items-center 
                  `}
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                </div>
              ) : (
                // For 'Home' or items without dropdowns, use a regular Link
                <Link
                  href={item.href}
                  className={`
                    py-2 px-4 rounded-md transition-colors duration-200
                    hover:text-baby-powder
                    ${isActive(item.href) ? 'border-b-2 border-black-olive' : ''}
                    flex items-center 
                  `}
                >
                  {item.name}
                </Link>
              )}
              {item.links && (
                <div className={`absolute inset-x-0 top-full mt-0 p-8 bg-[#B3D9E0] shadow-lg rounded-b-md transition-all duration-300 transform origin-top z-50
                          h-[50vh]
                          ${openDropdown === item.name ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}`}>

                  <div className="container mx-auto relative z-10">
                    {/* Horizontal flex layout for dropdown items */}
                    <div className="flex justify-between items-start gap-8">
                      {item.links.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="group flex flex-col items-center p-3 rounded-md hover:bg-chinese-white transition-colors duration-200 text-center flex-grow flex-shrink-0 basis-0"
                          style={{ minWidth: '160px' }}
                        >
                          <Image
                            src={subItem.imgSrc}
                            alt={subItem.name}
                            width={160}
                            height={100}
                            className="rounded-md object-cover mb-2"
                          />
                          <span className="text-black-olive font-medium group-hover:text-quick-silver text-base">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}