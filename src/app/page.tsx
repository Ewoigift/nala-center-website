// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  // For Hero Section Rotating Backgrounds
  const backgroundImages = [
    '/images/hero-background.jpg',
    '/images/hero-background3.jpg', // Updated to hero-background3.jpg
    '/images/hero-background2.jpg', // Updated to hero-background2.jpg
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);


  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollContainerRef.current;

      setIsLeftDisabled(scrollLeft === 0);

      const atEnd = Math.round(scrollLeft + offsetWidth) >= scrollWidth;
      setIsRightDisabled(atEnd);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      handleScroll(); // Set initial state
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll); // Ensure correct cleanup
      };
    }
  }, []);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -(scrollContainerRef.current.offsetWidth / 3),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth / 3,
        behavior: 'smooth',
      });
    }
  };

  const eventCards = [
    {
      date: 'July 15, 2025 | Online Webinar',
      title: 'Webinar: Future of Governance in Africa',
      description: 'Join experts to discuss democratic innovations and civic participation across the continent.',
    },
    {
      date: 'August 5-7, 2025 | Nairobi, Kenya',
      title: 'Workshop: Data-Driven Policy Making',
      description: 'A hands-on workshop for policymakers and researchers on leveraging data for effective decision-making.',
    },
    {
      date: 'September 22, 2025 | Virtual Summit',
      title: 'Annual Climate Resilience Summit',
      description: 'Leading experts from across the globe gather to discuss innovative solutions for climate adaptation.',
    },
    {
      date: 'October 10, 2025 | Online Seminar',
      title: 'Seminar: Youth in Peacebuilding',
      description: 'Exploring the crucial role of young people in conflict resolution and sustainable peace efforts.',
    },
    {
      date: 'November 1-2, 2025 | Kampala, Uganda',
      title: 'Training: Ethical AI in Development',
      description: 'Practical training on integrating ethical AI practices into development projects for social good.',
    },
    {
      date: 'December 5, 2025 | Addis Ababa, Ethiopia',
      title: 'Conference: Sustainable Urbanization',
      description: 'Discussing challenges and opportunities for sustainable urban growth in African cities.',
    },
  ];

  return (
    // Added pt-[80px] to the main tag to push content below the fixed navbar
    <main className="pt-[75px]">
      {/* Hero Section */}
      {/* Changed height to min-h-screen to take up full viewport height */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-white overflow-hidden">
        {/* Rotating Backgrounds */}
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`NALA Center Hero Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-70' : 'opacity-0'
            }`}
          />
        ))}

        <div className="relative z-10 text-[#050505] p-4 md:p-8 max-w-4xl mx-auto rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Driving Meaningful and Lasting Change
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nala Center is dedicated to transformative research, strategic insights, and inclusive dialogue for a sustainable future.
          </p>
          <Link href="/what-we-do" className="bg-[#050505] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 shadow-lg">
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="container mx-auto py-16 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#050505] text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insight Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/images/demo1_image.jpeg"
              alt="Insight 1 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">Category | June 24, 2025</span>
              <h3 className="font-semibold text-xl text-[#050505] my-2">The Role of Community-Led Solutions in Climate Resilience</h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                Exploring how grassroots initiatives are building climate resilience in vulnerable communities across the NALA region, with case studies from local projects.
              </p>
              <Link href="#" className="text-[#2F2F2F] hover:text-[#1F1F1F] hover:underline font-medium">
                Read more &rarr;
              </Link>
            </div>
          </div>

          {/* Insight Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/images/demo2_image.jpeg"
              alt="Insight 2 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">Policy Brief | June 18, 2025</span>
              <h3 className="font-semibold text-xl text-[#050505] my-2">Policy Pathways for Inclusive Economic Development</h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                A new policy brief outlining strategies for governments and stakeholders to foster equitable economic growth and reduce disparities in the region.
              </p>
              <Link href="#" className="text-[#2F2F2F] hover:text-[#1F1F1F] hover:underline font-medium">
                Read more &rarr;
              </Link>
            </div>
          </div>

          {/* Insight Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/images/demo1_image.jpeg"
              alt="Insight 3 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-gray-500">Research | June 10, 2025</span>
              <h3 className="font-semibold text-xl text-[#050505] my-2">Understanding Migration Patterns in East Africa</h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                An in-depth analysis of demographic shifts and their implications for regional stability, development, and human rights, based on recent field research.
              </p>
              <Link href="#" className="text-[#2F2F2F] hover:text-[#1F1F1F] hover:underline font-medium">
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/what-we-do/research-publications" className="bg-[#050505] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 shadow-lg">
            View All Insights
          </Link>
        </div>
      </section>

      {/* Upcoming Events & Workshops Section - Now a Carousel */}
      <section className="bg-[#EBEBEB] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] text-center mb-12">Upcoming Events & Workshops</h2>

          <div className="relative">
            {/* Scrollable container for event cards */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
            >
              {eventCards.map((event, index) => (
                <div key={index} className="flex-none w-11/12 md:w-1/2 lg:w-1/3 snap-start pr-4">
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#EBEBEB] hover:border-[#050505] transition-all duration-300 min-h-[230px] flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                      <h3 className="font-semibold text-xl text-[#050505] mb-3">{event.title}</h3>
                      <p className="text-gray-700 text-base mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      </div>
                      <Link href="#" className="text-[#2F2F2F] hover:text-[#1F1F1F] hover:underline font-medium">
                        Register &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center mt-8 space-x-8">
                <button
                  onClick={scrollLeft}
                  disabled={isLeftDisabled}
                  className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                    isLeftDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
                  }`}
                  aria-label="Scroll left"
                >
                  &larr;
                </button>
                <button
                  onClick={scrollRight}
                  disabled={isRightDisabled}
                  className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                    isRightDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
                  }`}
                  aria-label="Scroll right"
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#" className="bg-[#050505] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 shadow-lg">
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* Subscribe / Stay Connected Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest research, insights, and event updates from NALA Center.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 border border-gray-300 rounded-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-[#2F2F2F]"
              />
              <button className="bg-[#050505] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 w-full md:w-auto">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              {/* Twitter Icon */}
              <a href="https://x.com/NalaCenter" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/company/nala-center/" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* Facebook Icon */}
              <a href="https://facebook.com/nala-center" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              {/* Instagram Icon */}
              <a href="https://instagram.com/nalacenter_/" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/+254718302179" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}
