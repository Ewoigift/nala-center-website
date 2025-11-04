// src/app/who-we-are/about-us/page.tsx
'use client';

import Image from "next/legacy/image";
import { useRef, useState, useEffect } from 'react';

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale,
  faUsers,
  faLightbulb,
  faHandshake,
  faShieldHalved,
  faLeaf,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

export default function AboutUsPage() {
  const mission = "To drive impactful change through rigorous research, strategic insights, and inclusive dialogue for a just, peaceful, and sustainable future.";
  const vision = "A premier hub for transformative research, shaping global discourse, and pioneering solutions for a peaceful, sustainable, and inclusive world.";

  // Updated Our Story content from the Word document
  const ourStoryContent = `Nala Center is an independent, nonpartisan international policy and research think tank dedicated to advancing evidence-based solutions to today's most pressing global challenges. Positioned at the intersection of research, policy, and practice, Nala Center serves as a platform for rigorous inquiry, critical thought, and innovative analysis.

With a strong focus on peacebuilding, governance, climate justice, and human rights, we support emerging African scholars and policy thinkers through mentorship, research support, and strategic convenings. Our work is driven by a commitment to inclusivity, intersectionality, and long-term impact.

As a think tank, Nala Center generates high-quality, policy-relevant research while actively shaping public discourse and informing decision-making at national, regional, and global levels. We bridge theory and practice by fostering interdisciplinary collaboration, translating knowledge into actionable insights, and cultivating a new generation of thought leaders. Through research publications, dialogue platforms, and cross-sector partnerships, Nala Center contributes to shaping resilient, equitable, and sustainable futures.`;

  // Updated objectives from the Word document
  const objectives = [
    "To produce rigorous, policy-relevant research.",
    "To translate evidence into actionable policy recommendations.",
    "To build the capacity of emerging African scholars and practitioners.",
    "To foster multi-sectoral partnerships and coalitions.",
    "To convene dialogues that elevate youth voices in decision-making.",
    "To disseminate insights widely through publications, events and digital platforms.",
    "To shape public discourse on our focus areas."
  ];

  const coreValues = [
    {
      name: "Integrity & Transparency",
      description: "Maintaining rigorous, evidence-based research with open communication to build trust.",
      icon: faBalanceScale
    },
    {
      name: "Inclusivity & Diversity",
      description: "Embracing and empowering diverse voices across cultures, disciplines, and communities.",
      icon: faUsers
    },
    {
      name: "Innovation & Analytical Rigor",
      description: "Applying interdisciplinary methods and creative problem-solving.",
      icon: faLightbulb
    },
    {
      name: "Collaboration & Partnership",
      description: "Building strategic alliances across academia, policy, and practice.",
      icon: faHandshake
    },
    {
      name: "Equity & Social Justice",
      description: "Advocating for fairness, human rights, and ethical practices.",
      icon: faShieldHalved
    },
    {
      name: "Sustainability & Resilience",
      description: "Promoting long-term environmental, economic, and social sustainability.",
      icon: faLeaf
    },
    {
      name: "Non-Partisanship & Independence",
      description: "Ensuring objectivity free from political or special interest influences.",
      icon: faChartLine
    },
  ];

  // Animation refs and states
  const imageRef = useRef(null);
  const ourStoryRef = useRef(null);
  const [imageIsVisible, setImageIsVisible] = useState(false);
  const [ourStoryIsVisible, setOurStoryIsVisible] = useState(false);

  // Set up observers for both elements
  useEffect(() => {
    const currentImageRef = imageRef.current;
    const currentOurStoryRef = ourStoryRef.current;

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !imageIsVisible) {
          setImageIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const storyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ourStoryIsVisible) {
          setOurStoryIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentImageRef) imageObserver.observe(currentImageRef);
    if (currentOurStoryRef) storyObserver.observe(currentOurStoryRef);

    return () => {
      if (currentImageRef) imageObserver.unobserve(currentImageRef);
      if (currentOurStoryRef) storyObserver.unobserve(currentOurStoryRef);
      imageObserver.disconnect();
      storyObserver.disconnect();
    };
  }, [imageIsVisible, ourStoryIsVisible]);

  // State and Ref for Core Values slider
  const coreValuesSliderRef = useRef<HTMLDivElement>(null);
  const [isCoreValuesLeftDisabled, setIsCoreValuesLeftDisabled] = useState(true);
  const [isCoreValuesRightDisabled, setIsCoreValuesRightDisabled] = useState(false);

  const handleCoreValuesScroll = () => {
    if (coreValuesSliderRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = coreValuesSliderRef.current;
      setIsCoreValuesLeftDisabled(scrollLeft === 0);
      const atEnd = Math.round(scrollLeft + offsetWidth) >= scrollWidth;
      setIsCoreValuesRightDisabled(atEnd);
    }
  };

  const scrollCoreValuesLeft = () => {
    if (coreValuesSliderRef.current) {
      coreValuesSliderRef.current.scrollBy({
        left: -(coreValuesSliderRef.current.offsetWidth / 2),
        behavior: 'smooth',
      });
    }
  };

  const scrollCoreValuesRight = () => {
    if (coreValuesSliderRef.current) {
      coreValuesSliderRef.current.scrollBy({
        left: coreValuesSliderRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sliderContainer = coreValuesSliderRef.current;
    if (sliderContainer) {
      handleCoreValuesScroll();
      sliderContainer.addEventListener('scroll', handleCoreValuesScroll);
      return () => {
        sliderContainer.removeEventListener('scroll', handleCoreValuesScroll);
      };
    }
  }, []);

  return (
    <main className="bg-white text-[#050505]">
      {/* Hero Section */}
      <section className="relative bg-[#050505] text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 leading-tight">About Us</h1>
            <p className="text-lg md:text-xl max-w-xl">
              Advancing Knowledge for a Sustainable Future.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <Image
              src="/images/Nala_No_Bg_White.png"
              alt="NALA Center Logo"
              width={200}
              height={200}
              className="object-contain hidden md:block"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <div className="container mx-auto px-4">
        {/* Animated Image */}
        <div 
          ref={imageRef}
          className={`relative w-full mb-6 -mt-8 z-30
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${imageIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="w-full md:w-4/5 lg:w-2/3 mx-auto rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/our_story.jpg"
              alt="Our Story Illustration showing team collaboration in a modern office setting"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              style={{
                maxHeight: '500px',
                borderRadius: '12px'
              }}
              priority
            />
          </div>
        </div>

        {/* Animated Text Section */}
        <section
          ref={ourStoryRef}
          className={`relative mx-auto z-20 bg-[#f2eae4] rounded-lg shadow-lg overflow-hidden
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${ourStoryIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="p-8 md:p-12">
            <div className="text-lg leading-relaxed">
              {ourStoryContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Mission</h3>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              {mission}
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Vision</h3>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              {vision}
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section - New Design */}
      <section className="bg-gradient-to-br from-[#f8f8f8] to-[#f2eae4] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Objectives</h2>
          
          <div className="relative">
            {/* Vertical line connector for larger screens */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#050505] opacity-20"></div>
            
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <div 
                  key={index}
                  className="relative flex items-start group"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#050505] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    {index + 1}
                  </div>
                  
                  {/* Objective Content */}
                  <div className="flex-1 ml-6 bg-white p-6 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 border-l-4 border-[#050505] group-hover:border-[#2F2F2F]">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#F8F8F8] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Core Values</h2>

          <div className="relative">
            {/* Scrollable container for core values cards */}
            <div
              ref={coreValuesSliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
            >
              {coreValues.map((value, index) => (
                <div key={index} className="flex-none w-11/12 md:w-1/2 lg:w-1/3 snap-start pr-4">
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-[250px] justify-center
                              transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                    {value.icon && (
                      <div className="text-[#050505] text-4xl mb-4">
                        <FontAwesomeIcon icon={value.icon} />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Core Values Slider */}
            <div className="flex justify-center mt-8 space-x-8">
              <button
                onClick={scrollCoreValuesLeft}
                disabled={isCoreValuesLeftDisabled}
                className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                  isCoreValuesLeftDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
                }`}
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button
                onClick={scrollCoreValuesRight}
                disabled={isCoreValuesRightDisabled}
                className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none ${
                  isCoreValuesRightDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2F2F2F]'
                }`}
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}