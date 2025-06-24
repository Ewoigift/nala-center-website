// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

// Data for Who We Are dropdown (using demo_image.jpg as placeholder)
const whoWeAreLinks = [
  { name: 'About Us', href: '/who-we-are/about-us', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with about-us.jpg */ },
  { name: 'Leadership & Team', href: '/who-we-are/leadership-team', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with leadership.jpg */ },
  { name: 'Our Partners', href: '/who-we-are/our-partners', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with partners.jpg */ },
  { name: 'Join Us', href: '/who-we-are/about-us', imgSrc: '/images/who-we-are/demo_image.jpg' /* Replace with join-us.jpg */ },
];

// Data for What We Do dropdown (using demo_image.jpg as placeholder)
const whatWeDoLinks = [
  { name: 'Research & Publications', href: '/what-we-do/research-publications', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with research.jpg */ },
  { name: 'Policy Engagement', href: '/what-we-do/policy-engagement', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with policy.jpg */ },
  { name: 'Capacity Building & Training', href: '/what-we-do/capacity-building', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with capacity.jpg */ },
  { name: 'Multimedia Hub', href: '/what-we-do/multimedia-hub', imgSrc: '/images/what-we-do/demo_image.jpg' /* Replace with multimedia.jpg */ },
];

// Data for Get Involved dropdown (using demo_image.jpg as placeholder)
const getInvolvedLinks = [
  { name: 'Support Our Work', href: '/get-involved/support-us', imgSrc: '/images/get-involved/demo_image_image.jpg' /* Replace with support.jpg */ },
  { name: 'Collaborations', href: '/get-involved/collaborations', imgSrc: '/images/get-involved/demo_image.jpg' /* Replace with collaborations.jpg */ },
  { name: 'Volunteer & Intern', href: '/get-involved/volunteer', imgSrc: '/images/get-involved/demo_image.jpg' /* Replace with volunteer.jpg */ },
];

export default function Navbar() {
  return (
    <nav className="bg-quick-silver text-black-olive p-4 shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title - NALA Center */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Nala_No_Bg.png" // Updated logo image name
            alt="NALA Center Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold font-serif">NALA Center</span>
        </Link>

        {/* Main Navigation Links */}
        <div className="flex space-x-6">
          {/* Home Link */}
          <Link href="/" className="hover:text-baby-powder py-2 px-3 rounded-md transition-colors duration-200">Home</Link>

          {/* Who We Are Dropdown - Image-based */}
          <div className="relative group">
            <button className="hover:text-baby-powder focus:outline-none py-2 px-3 rounded-md transition-colors duration-200">Who We Are</button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 p-4 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 min-w-[700px]">
              <div className="flex justify-around space-x-4">
                {whoWeAreLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="group flex flex-col items-center p-3 rounded-md hover:bg-chinese-white transition-colors duration-200 text-center flex-1 min-w-[150px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={160}
                      height={100}
                      className="rounded-md object-cover mb-2"
                    />
                    <span className="text-black-olive font-medium group-hover:text-quick-silver">{item.name}</span>
                    <svg className="w-4 h-4 ml-1 text-black-olive group-hover:text-quick-silver transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* What We Do Dropdown - Image-based */}
          <div className="relative group">
            <button className="hover:text-baby-powder focus:outline-none py-2 px-3 rounded-md transition-colors duration-200">What We Do</button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 p-4 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 min-w-[700px]">
              <div className="flex justify-around space-x-4">
                {whatWeDoLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="group flex flex-col items-center p-3 rounded-md hover:bg-chinese-white transition-colors duration-200 text-center flex-1 min-w-[150px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={160}
                      height={100}
                      className="rounded-md object-cover mb-2"
                    />
                    <span className="text-black-olive font-medium group-hover:text-quick-silver">{item.name}</span>
                    <svg className="w-4 h-4 ml-1 text-black-olive group-hover:text-quick-silver transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Get Involved Dropdown - Image-based */}
          <div className="relative group">
            <button className="hover:text-baby-powder focus:outline-none py-2 px-3 rounded-md transition-colors duration-200">Get Involved</button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 p-4 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 min-w-[700px]">
              <div className="flex justify-around space-x-4">
                {getInvolvedLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="group flex flex-col items-center p-3 rounded-md hover:bg-chinese-white transition-colors duration-200 text-center flex-1 min-w-[150px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={160}
                      height={100}
                      className="rounded-md object-cover mb-2"
                    />
                    <span className="text-black-olive font-medium group-hover:text-quick-silver">{item.name}</span>
                    <svg className="w-4 h-4 ml-1 text-black-olive group-hover:text-quick-silver transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}