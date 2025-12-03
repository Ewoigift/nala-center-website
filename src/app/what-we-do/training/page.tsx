// src/app/what-we-do/training/page.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { GraduationCap, Users, Calendar, MapPin } from 'lucide-react';

const primaryColor = "#6CAED9";
const textColor = "#2F2F2F";
const headingColor = "#050505";
const cardBgColor = "#FFFFFF";
const sectionBgColor = "#EBEBEB";

// Data for courses
const courses = [
  {
    title: "Data Analysis for Policy Making",
    summary: "A foundational course on collecting, analyzing, and visualizing data to inform evidence-based policy decisions.",
    image: "/images/what-we-do/policy-engagement.jpg"
  },
  {
    title: "Leadership in Post-Conflict Societies",
    summary: "An in-depth course exploring effective leadership strategies for rebuilding communities and institutions after conflict.",
    image: "/images/focus-areas/migration-human-rights.jpg"
  },
  {
    title: "Grant Writing & Fundraising",
    summary: "Master the art of writing compelling grant proposals and developing sustainable fundraising strategies for non-profits.",
    image: "/images/what-we-do/capacity-building.jpg"
  },
  {
    title: "Monitoring & Evaluation for Development Projects",
    summary: "Learn best practices for designing, implementing, and reporting on project monitoring and evaluation frameworks.",
    image: "/images/demo2_image.jpeg"
  },
  {
    title: "Digital Security for Activists",
    summary: "A course on protecting digital identity and communication channels for civil society leaders and journalists.",
    image: "/images/what-we-do/multimedia-hub.jpg"
  },
];

export default function TrainingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

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

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    const { current } = scrollContainerRef;
    if (current) {
      current.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition();
      return () => {
        current.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white p-6 sm:p-10">
      <header className="mb-12 text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[${headingColor}]`}>
          Training & Workshops
        </h1>
        <p className={`text-lg max-w-3xl mx-auto text-[${textColor}]`}>
          We offer a range of training and capacity-building workshops and courses designed to empower individuals, organizations, and communities with the skills needed to drive positive change in Africa.
        </p>
      </header>

      {/* Featured Workshops Section */}
      <section className={`mb-12`}>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#050505]">Our Workshops</h2>
        
        <div className="space-y-8">
          {/* Workshop 1: UN Simulation Training */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src="/images/workshops/un-simulation-hero.jpg"
              alt="United Nations Simulation Training"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-block bg-[#6CAED9] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Workshop Highlight
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  United Nations Simulation Training
                </h3>
                <p className="text-xl text-white/90 mb-2">
                  SDG4Impact Conference & Green Gold Cup 2025
                </p>
                
                {/* Event Details */}
                <div className="flex flex-wrap gap-4 mb-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>8–9 November 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Strathmore University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>University Students & Young Professionals</span>
                  </div>
                </div>

                <p className="text-lg text-white/90 mb-6 line-clamp-3">
                  A dynamic, hands-on program that brought together passionate university students, young professionals, and emerging leaders to experience the inner workings of international diplomacy through structured UN simulations.
                </p>

                <Link 
                  href="/what-we-do/training/un-simulation-2025"
                  className="inline-block bg-white text-[#6CAED9] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
                >
                  Learn More & View Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Workshop 2: Youth Environment Assembly 2025 */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src="/images/workshops/yea-2025-hero.jpg"
              alt="Youth Environment Assembly 2025"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-block bg-[#7BB661] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Workshop Highlight
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Youth Environment Assembly 2025
                </h3>
                <p className="text-xl text-white/90 mb-2">
                  Global Youth Declaration on the Environment
                </p>
                
                {/* Event Details */}
                <div className="flex flex-wrap gap-4 mb-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>29–30 November 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>UNEP Headquarters, Nairobi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>500+ Young Leaders Globally</span>
                  </div>
                </div>

                <p className="text-lg text-white/90 mb-6 line-clamp-3">
                  The largest youth-led environmental assembly ahead of UNEA-7, bringing together young leaders and representatives from multilateral environmental agreements to develop a sophisticated policy instrument addressing the triple planetary crisis.
                </p>

                <Link 
                  href="/what-we-do/training/yea-2025"
                  className="inline-block bg-white text-[#7BB661] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
                >
                  Learn More & View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Slider Section */}
      <section className={`p-6 md:p-10 rounded-xl bg-[${sectionBgColor}] mb-12 relative`}>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className={`w-8 h-8 text-[${primaryColor}]`} />
          <h2 className={`text-3xl font-bold text-[${headingColor}]`}>Online Courses</h2>
        </div>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-scroll hide-scrollbar scroll-snap-x"
          >
            {courses.map((course, i) => (
              <div key={`course-${i}`} className={`flex-none w-72 md:w-80 lg:w-96 flex flex-col bg-[${cardBgColor}] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg snap-start`}>
                <Image
                  src={course.image}
                  alt={`Image for ${course.title}`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className={`font-semibold text-lg text-[${headingColor}]`}>{course.title}</h3>
                    <p className={`mt-2 text-sm text-[${textColor}] line-clamp-3`}>
                      {course.summary}
                    </p>
                  </div>
                  <Link href="#" className={`text-[${primaryColor}] text-sm font-medium inline-flex items-center mt-3 hover:underline`}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Slider navigation buttons */}
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
      </section>

      {/* Custom Training CTA */}
      <section className={`text-center p-8 bg-[${primaryColor}] rounded-xl text-white`}>
        <h2 className="text-3xl font-bold mb-4">
          Need a Custom Training Program?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          We can design bespoke workshops and training sessions tailored to your organization&apos;s specific needs. Get in touch to discuss your requirements.
        </p>
        <Link href="/contact" className={`bg-white text-[${primaryColor}] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105`}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}