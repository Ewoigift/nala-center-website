// src/app/who-we-are/about-us/page.tsx
'use client';

import Image from 'next/image';
// import Link from 'next/link'; // Removed: Link is not used in this component
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

  const focusAreas = [
    "Peace & Security",
    "Democracy, Governance & Civic Innovation",
    "Economic Systems, Equity & Inclusive Development",
    "Sustainable Energy & Climate Resilience",
    "Migration, Mobility & Human Rights"
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

  // State and Ref for Our Story section animation
  const ourStoryRef = useRef(null);
  const [ourStoryIsVisible, setOurStoryIsVisible] = useState(false);

  useEffect(() => {
    const currentOurStoryRef = ourStoryRef.current; // Capture ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ourStoryIsVisible) {
          setOurStoryIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (currentOurStoryRef) {
      observer.observe(currentOurStoryRef);
    }

    return () => {
      if (currentOurStoryRef) { // Use captured ref value in cleanup
        observer.unobserve(currentOurStoryRef);
      };
    }
  }, [ourStoryIsVisible]);

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
        left: -(coreValuesSliderRef.current.offsetWidth / 2), // Scroll half a card width
        behavior: 'smooth',
      });
    }
  };

  const scrollCoreValuesRight = () => {
    if (coreValuesSliderRef.current) {
      coreValuesSliderRef.current.scrollBy({
        left: coreValuesSliderRef.current.offsetWidth / 2, // Scroll half a card width
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sliderContainer = coreValuesSliderRef.current;
    if (sliderContainer) {
      handleCoreValuesScroll(); // Set initial state
      sliderContainer.addEventListener('scroll', handleCoreValuesScroll);
      return () => {
        sliderContainer.removeEventListener('scroll', handleCoreValuesScroll);
      };
    }
  }, []);

  return (
    <>
      <main className="pt-[75px] bg-white text-[#050505]">
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
        <section
          ref={ourStoryRef}
          className={`
            relative container mx-auto px-4 -mt-8 md:-mt-12 z-20 bg-[#f2eae4] rounded-lg shadow-lg overflow-hidden
            transition-all duration-1000 ease-out
            ${ourStoryIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
            {/* Our Story Text Section */}
            <div className="p-8 md:p-12 text-[#050505] order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Story</h2>
              <div className="text-lg leading-relaxed">
                {ourStoryContent.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
            {/* Our Story Image Section */}
            <div className="order-1 lg:order-2 p-4 md:p-8 flex items-center justify-center relative rounded-lg overflow-hidden">
              <Image
                src="/images/our_story.jpg"
                alt="Our Story Illustration"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md flex flex-col justify-between">
              <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Mission</h3>
              <blockquote className="text-xl italic text-gray-700 text-center leading-relaxed">
                &ldquo;{mission}&rdquo;
              </blockquote>
            </div>

            {/* Vision */}
            <div className="bg-[#f2eae4] p-8 rounded-lg shadow-md flex flex-col justify-between">
              <h3 className="text-2xl font-semibold font-serif mb-4 text-center">Vision</h3>
              <blockquote className="text-xl italic text-gray-700 text-center leading-relaxed">
                &ldquo;{vision}&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="bg-[#F8F8F8] py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-center">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border-t-4 border-[#050505]">
                  <h3 className="text-xl font-semibold mb-3">{objective.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                    {objective.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Focus Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area, index) => (
              <span key={index} className="bg-[#050505] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Our Core Values Section (now a slider) */}
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
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center min-h-[200px] justify-center">
                      {/* Optional: Add Font Awesome Icon here if you uncomment the imports */}
                      {/* {value.icon && (
                        <div className="text-[#050505] text-4xl mb-4">
                          <FontAwesomeIcon icon={value.icon} />
                        </div>
                      )} */}
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
    </>
  );
}
