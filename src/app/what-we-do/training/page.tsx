// TrainingPage.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Handshake, Briefcase,Landmark, Rocket, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const primaryColor = "#6CAED9";
const textColor = "#2F2F2F";
const headingColor = "#050505";
const cardBgColor = "#FFFFFF";
const sectionBgColor = "#EBEBEB";

// Data for the training programs with uploaded images
const trainingPrograms = [
  {
    title: "Peacebuilding & Conflict Resolution",
    summary: "Hands-on training in mediation, negotiation, and community dialogue to build skills for sustainable peace.",
    icon: <Handshake className={`w-8 h-8 text-[${primaryColor}]`} />,
image: "/images/focus-areas/peace-security.jpg"  },
  {
    title: "Democratic Governance & Civic Engagement",
    summary: "Workshops on institutional strengthening, policy advocacy, and empowering citizens to participate in democratic processes.",
    icon: <Landmark className={`w-8 h-8 text-[${primaryColor}]`} />,
image: "/images/focus-areas/democracy-governance.jpg"  },
  {
    title: "Economic Development & Entrepreneurship",
    summary: "Programs focused on business management, financial literacy, and creating sustainable livelihoods for youth and women.",
    icon: <Briefcase className={`w-8 h-8 text-[${primaryColor}]`} />,
image: "/images/focus-areas/economic-systems.jpg"  },
];

// Data for the new courses section, with a mix of uploaded images and placeholders
const courses = [
  {
    title: "Data Analysis for Policy Making",
    summary: "A foundational course on collecting, analyzing, and visualizing data to inform evidence-based policy decisions.",
image: "/images/what-we-do/policy-engagement.jpg" },
  {
    title: "Leadership in Post-Conflict Societies",
    summary: "An in-depth course exploring effective leadership strategies for rebuilding communities and institutions after conflict.",
image: "/images/focus-areas/migration-human-rights.jpg"  },
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const cardWidth = current.children[0].clientWidth + 24; // Card width + gap
      const currentScroll = current.scrollLeft;
      const scrollWidth = current.scrollWidth;
      const clientWidth = current.clientWidth;

      if (direction === 'right') {
        const newScrollPosition = currentScroll + cardWidth;
        // If at the end, jump to the start to create a loop
        if (newScrollPosition >= scrollWidth - clientWidth) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        const newScrollPosition = currentScroll - cardWidth;
        // If at the beginning, jump to the end to create a loop
        if (newScrollPosition <= 0) {
          current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  // Function to check scroll position and update button state for a non-looping slider
  // This function is no longer strictly necessary for the looping behavior but is kept for visual feedback
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // We don't disable the buttons for a looping slider, but we can set the state to handle visual cues
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Set up event listener for scroll changes
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

      {/* Training Programs Section */}
      <section className={`p-6 md:p-10 rounded-xl bg-[${sectionBgColor}] mb-12`}>
        <div className="flex items-center gap-3 mb-6">
          <Rocket className={`w-8 h-8 text-[${primaryColor}]`} />
          <h2 className={`text-3xl font-bold text-[${headingColor}]`}>Our Workshops</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPrograms.map((program, i) => (
            <div key={`program-${i}`} className={`flex flex-col bg-[${cardBgColor}] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg`}>
              <Image
                src={program.image}
                alt={`Image for ${program.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {program.icon}
                    <h3 className={`font-semibold text-xl text-[${headingColor}]`}>{program.title}</h3>
                  </div>
                  <p className={`mt-2 text-base text-[${textColor}] line-clamp-3`}>
                    {program.summary}
                  </p>
                </div>
                <Link href="#" className={`text-[${primaryColor}] font-medium inline-flex items-center mt-4 hover:underline`}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
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
          <button
            onClick={() => scroll('left')}
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg transition-all duration-300`}
          >
            <ChevronLeft className={`w-6 h-6 text-[${primaryColor}]`} />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg transition-all duration-300`}
          >
            <ChevronRight className={`w-6 h-6 text-[${primaryColor}]`} />
          </button>
        </div>
      </section>

      {/* Custom Training CTA */}
      <section className={`text-center p-8 bg-[${primaryColor}] rounded-xl text-white`}>
        <h2 className="text-3xl font-bold mb-4">
          Need a Custom Training Program?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          We can design bespoke workshops and training sessions tailored to your organization's specific needs. Get in touch to discuss your requirements.
        </p>
        <Link href="#" className={`bg-white text-[${primaryColor}] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105`}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
