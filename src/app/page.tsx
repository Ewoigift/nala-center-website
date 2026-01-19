// src/app/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react'; 

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const insightsScrollRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [isInsightsLeftDisabled, setIsInsightsLeftDisabled] = useState(true);
  const [isInsightsRightDisabled, setIsInsightsRightDisabled] = useState(false);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // For Hero Section Rotating Backgrounds
  const backgroundImages = [
    '/images/hero-background.jpg',
    '/images/hero-background3.jpg',
    '/images/hero-background2.jpg',
    '/images/hero-background4.jpg',
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Events carousel scroll handlers
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollContainerRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      const atEnd = Math.round(scrollLeft + offsetWidth) >= scrollWidth;
      setIsRightDisabled(atEnd);
    }
  };

  // Insights carousel scroll handlers
  const handleInsightsScroll = () => {
    if (insightsScrollRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = insightsScrollRef.current;
      setIsInsightsLeftDisabled(scrollLeft === 0);
      const atEnd = Math.round(scrollLeft + offsetWidth) >= scrollWidth;
      setIsInsightsRightDisabled(atEnd);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      handleScroll();
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const insightsContainer = insightsScrollRef.current;
    if (insightsContainer) {
      handleInsightsScroll();
      insightsContainer.addEventListener('scroll', handleInsightsScroll);
      return () => {
        insightsContainer.removeEventListener('scroll', handleInsightsScroll);
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

  const scrollInsightsLeft = () => {
    if (insightsScrollRef.current) {
      insightsScrollRef.current.scrollBy({
        left: -(insightsScrollRef.current.offsetWidth / 3),
        behavior: 'smooth',
      });
    }
  };

  const scrollInsightsRight = () => {
    if (insightsScrollRef.current) {
      insightsScrollRef.current.scrollBy({
        left: insightsScrollRef.current.offsetWidth / 3,
        behavior: 'smooth',
      });
    }
  };

  // Newsletter submission handler
  const handleSubscribe = async () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      setSubmissionStatus('error');
      setMessage('Please enter a valid email address.');
      setTimeout(() => {
        setSubmissionStatus('idle');
        setMessage('');
      }, 3000);
      return;
    }

    setSubmissionStatus('loading');
    setMessage('Subscribing...');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setMessage(data.message || 'Successfully subscribed! Check your inbox.');
        setEmail('');
      } else {
        setSubmissionStatus('error');
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubmissionStatus('error');
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setTimeout(() => {
        setSubmissionStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const insightCards = [
    {
      date: 'January 15, 2026',
      type: 'Article',
      title: "What Would Israeli Recognition of Somaliland Mean for the Horn of Africa's Geopolitics?",
      description: "Israel's recognition of Somaliland marks a significant diplomatic breakthrough, but what does it mean for regional stability? This analysis explores the geopolitical implications.",
      image: '/images/articles/somaliland-israel-recognition.jpg',
      link: '/what-we-do/research-publications/israeli-recognition-somaliland'
    },
    {
      date: 'November 03, 2025',
      type: 'Article',
      title: "Africa's Democracy on Life Support",
      description: "Africa's democratic experiment is in deep crisis. Once hailed as the continent of promise, where multiparty politics and constitutional reform would herald a new dawn, much of Africa today finds itself in democratic regression.",
      image: '/images/articles/africas-democracy-life-support.png',
      link: '/what-we-do/research-publications/africas-democracy-on-life-support'
    },
    {
      date: 'October 13, 2025',
      type: 'Article',
      title: 'GERD Beyond Conflict: Unlocking Regional Value & Cooperation in the Horn of Africa',
      description: "An important turning point in the history of infrastructure in the Horn of Africa was reached in September 2025 when the turbines of the Grand Ethiopian Renaissance Dam (GERD) were synchronized to Ethiopia's national grid.",
      image: '/images/articles/gerd-beyond-conflict.jpg',
      link: '/what-we-do/research-publications/gerd-beyond-conflict'
    },
    {
      date: 'September 12, 2025',
      type: 'Article',
      title: "Africa's Climate Crossroads: From Nairobi's Promises to Addis Ababa's Demands",
      description: 'The Second Africa Climate Summit (ACS2) builds on the Nairobi Declaration, pushing into the far more complex terrain of implementation and accountability.',
      image: '/images/articles/AfricasClimateCrossroads.jpg',
      link: '/what-we-do/research-publications/africas-climate-crossroads'
    },
    {
      date: 'November 06, 2025',
      type: 'Research',
      title: 'Rethinking How Youth Shape the Future of Nature and Finance',
      description: 'This brief interrogates the financialisation of nature through Nature-based Solutions (NbS), examining how ecological restoration initiatives intersect with market logics that commodify ecosystems.',
      image: '/images/focus-areas/rethinking-youth-nature-finance.png',
      link: '/uploads/sustainable-energy/rethinking-youth-nature-finance.pdf'
    }
  ];

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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-white overflow-hidden">
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`NALA Center Hero Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="relative z-20 text-[#FFFFFF] p-4 md:p-8 max-w-4xl mx-auto rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Driving Meaningful and Lasting Change
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nala center is dedicated to transformative research, strategic insights, and inclusive dialogue for a sustainable future.
          </p>
          <Link
            href="/who-we-are/about-us"
            className="bg-[#050505] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 shadow-lg"
          >
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Latest Insights Section - Now a Carousel */}
      <section className="container mx-auto py-16 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#050505] text-center mb-12">Latest Insights</h2>
        
        <div className="relative">
          {/* Scrollable container for insight cards */}
          <div
            ref={insightsScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
          >
            {insightCards.map((insight, index) => (
              <div key={index} className="flex-none w-11/12 md:w-1/2 lg:w-1/3 snap-start pr-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <Image
                    src={insight.image}
                    alt={`${insight.title} Thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{insight.type} | {insight.date}</span>
                      <h3 className="font-semibold text-xl text-[#050505] my-2 line-clamp-2">{insight.title}</h3>
                      <p className="text-gray-700 text-base mb-4 line-clamp-3">
                        {insight.description}
                      </p>
                    </div>
                    <Link href={insight.link} className="text-[#2F2F2F] hover:text-[#1F1F1F] hover:underline font-medium">
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-8">
            <button
              onClick={scrollInsightsLeft}
              disabled={isInsightsLeftDisabled}
              className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                isInsightsLeftDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
              }`}
              aria-label="Scroll insights left"
            >
              &larr;
            </button>
            <button
              onClick={scrollInsightsRight}
              disabled={isInsightsRightDisabled}
              className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                isInsightsRightDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
              }`}
              aria-label="Scroll insights right"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Workshops Section - Carousel */}
      <section className="bg-[#EBEBEB] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] text-center mb-12">Upcoming Events & Workshops</h2>

          <div className="relative">
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
        </div>
      </section>

      {/* Subscribe / Stay Connected Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research, insights, and event updates from Nala center.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 border border-gray-300 rounded-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-[#2F2F2F]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submissionStatus === 'loading'}
            />
            <button
              className="bg-[#050505] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 w-full md:w-auto"
              onClick={handleSubscribe}
              disabled={submissionStatus === 'loading'}
            >
              {submissionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-center ${
              submissionStatus === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </p>
          )}
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/NalaCenter" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#050505] text-3xl transition-colors duration-300" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com/company/nala-center/" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#0077B5] text-3xl transition-colors duration-300" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com/nalacenter_/" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#E4405F] text-3xl transition-colors duration-300" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/+254718302179" target="_blank" rel="noopener noreferrer" className="text-[#1F1F1F] hover:text-[#25D366] text-3xl transition-colors duration-300" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}