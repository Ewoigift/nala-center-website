// src/app/who-we-are/about-us/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link'; 
import { useRef, useState, useEffect } from 'react';

export default function AboutUsPage() {
   const mission = "To drive impactful change through rigorous research, strategic insights, and inclusive dialogue for a just, peaceful, and sustainable future.";
  const vision = "A premier hub for transformative research, shaping global discourse, and pioneering solutions for a peaceful, sustainable, and inclusive world.";

  // Summarized content for Our Story (reduced to two paragraphs)
  const ourStoryContent = `NALA Center is a youth-led hub pioneering curiosity-driven basic research and advancing epistemological inquiry across disciplines. We believe genuine innovation and transformative insight arise from unfettered intellectual curiosity, empowering emerging scholars with autonomy, resources, and mentorship to pursue deep investigations.

Beyond foundational research, NALA Center focuses on developing inclusive, actionable, and sustainable solutions. Through engaging diverse perspectives, fostering collaboration, and translating knowledge into real-world dialogue, we aim to empower decision-makers and influence global discourse on critical issues, equipping tomorrow’s leaders with visionary insights for an evolving world.`;

  const objectives = [
    {
      title: "Produce Rigorous, Impactful Research",
      points: [
        "Transparent protocols and peer-review for methodological excellence.",
        "Prioritize open-access publications for broad reach and uptake.",
        "Ongoing quality assurance through internal and external advisory committees."
      ]
    },
    {
      title: "Cultivate Emerging Youth Leadership & Innovation",
      points: [
        "Fellowship & Mentorship programmes pairing early-career scholars with senior researchers.",
        "Annual innovation challenges (hackathons, policy sprints) to surface novel solutions.",
        "Peer-learning networks and masterclasses for interdisciplinary exchange."
      ]
    },
    {
      title: "Forge Strategic Partnerships & Coalitions",
      points: [
        "MOUs with universities, policy institutes, and civil society for joint research.",
        "Multi-stakeholder roundtables to co-create inclusive solutions.",
        "Establish an Advisory Council of youth leaders, practitioners, and policymakers."
      ]
    },
    {
      title: "Translate Insight into Actionable Policy & Practice",
      points: [
        "Evidence-based policy briefs and white papers tailored for decision-makers.",
        "Policy dialogues, workshops, and high-level briefings to champion recommendations.",
        "Feedback loops with partners to track uptake and refine guidance."
      ]
    },
    {
      title: "Lead & Shape Global Discourse",
      points: [
        "Quarterly Thought Leadership series (op-eds, blogs, podcasts).",
        "Social media campaigns and webinars to engage global youth audiences.",
        "Participation in international fora to elevate youth-led perspectives."
      ]
    }
  ];

  const coreValues = [
    {
      name: "Integrity & Transparency",
      description: "Maintaining rigorous, evidence-based research with open communication to build trust.",
      // icon: faBalanceScale // Example icon
    },
    {
      name: "Inclusivity & Diversity",
      description: "Embracing and empowering diverse voices across cultures, disciplines, and communities.",
      // icon: faUsers // Example icon
    },
    {
      name: "Innovation & Analytical Rigor",
      description: "Applying interdisciplinary methods and creative problem-solving.",
      // icon: faLightbulb // Example icon
    },
    {
      name: "Collaboration & Partnership",
      description: "Building strategic alliances across academia, policy, and practice.",
      // icon: faHandshake // Example icon
    },
    {
      name: "Equity & Social Justice",
      description: "Advocating for fairness, human rights, and ethical practices.",
      // icon: faShieldHalved // Example icon
    },
    {
      name: "Sustainability & Resilience",
      description: "Promoting long-term environmental, economic, and social sustainability.",
      // icon: faLeaf // Example icon
    },
    {
      name: "Non-Partisanship & Independence",
      description: "Ensuring objectivity free from political or special interest influences.",
      // icon: faChartLine // Example icon
    },
  ];

  // Animation refs and states
  const imageRef = useRef<HTMLDivElement>(null);
  const ourStoryRef = useRef<HTMLDivElement>(null);
  const [imageIsVisible, setImageIsVisible] = useState(false);
  const [ourStoryIsVisible, setOurStoryIsVisible] = useState(false);

  // Core Values Slider Implementation
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  // Animation and scroll handlers
  useEffect(() => {
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

    // Core Values slider scroll handler
    const checkScrollPosition = () => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition();
    }

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (ourStoryRef.current) storyObserver.observe(ourStoryRef.current);

    return () => {
      imageObserver.disconnect();
      storyObserver.disconnect();
      if (slider) {
        slider.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      }
    };
  }, [imageIsVisible, ourStoryIsVisible]);

  const scrollToSlide = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.querySelector('.value-card')?.clientWidth || 300;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

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

        <section
          ref={ourStoryRef}
          className={`relative mx-auto z-20 bg-[#f2eae4] rounded-lg shadow-lg overflow-hidden
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${ourStoryIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
           <div className="p-8 md:p-12">
            <div className="text-lg leading-relaxed">
              {ourStoryContent.split('\n').map((paragraph, index) => (
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
          <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md flex flex-col justify-between border-t-4 border-[#050505]">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Mission</h3>
            <blockquote className="text-xl italic text-gray-700 text-center leading-relaxed">
              &ldquo;{mission}&rdquo;
            </blockquote>
          </div>
          <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md flex flex-col justify-between border-t-4 border-[#050505]">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Vision</h3>
            <blockquote className="text-xl italic text-gray-700 text-center leading-relaxed">
              &ldquo;{vision}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

       {/* Objectives Section */}
      <section className="bg-[#f8f8f8] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#050505]">
                <h3 className="text-xl font-semibold mb-3">{objective.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {objective.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Slider with Original Arrow Positioning */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Core Values</h2>
          
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4 gap-4 px-2"
          >
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="value-card flex-none w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 snap-start"
              >
                <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <h3 className="text-lg font-semibold mb-2">{value.name}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows with Original Positioning */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => scrollToSlide('left')}
              disabled={isLeftDisabled}
              className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors ${
                isLeftDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2a2a2a]'
              }`}
              aria-label="Previous value"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSlide('right')}
              disabled={isRightDisabled}
              className={`p-3 bg-[#050505] text-white rounded-full shadow-md transition-colors ${
                isRightDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2a2a2a]'
              }`}
              aria-label="Next value"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
