// src/app/focus-areas/economic-systems/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function EconomicSystemsPage() {
  const heroImageSrc = '/images/focus-areas/economic-systems.jpg'; // Image will now be used
  const pageTitle = 'Economic Systems, Equity & Inclusive Development';
  const heroDescription = 'Examining how economic policies can drive equitable growth and reduce disparities.';
  const themeColor = '#E1B07E'; // Specific color for Economic Systems, Equity & Inclusive Development
  const secondaryColor = '#F2E9DF'; // A lighter complementary color for sections

  const overviewContent = `This focus area examines how economic policies can drive equitable growth and reduce disparities. From tax justice and social protection schemes to value chain analyses in agriculture and industry, we assess which interventions most effectively uplift marginalized communities. Through mixed methods research and stakeholder convenings, we chart pathways for SMEs, cooperatives, and public private partnerships to foster inclusive markets—ensuring that economic expansion benefits all segments of society.`;

  const reports = [
    {
      year: '2024',
      title: 'Index Report: Economic Inclusion in Africa',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      year: '2023',
      title: 'Forum Report: Tax Justice and Development',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2022',
      title: 'Value Chain Analysis: Agriculture Sector',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2021',
      title: 'Social Protection Schemes Impact Assessment',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2020',
      title: 'Facts & Figures: Youth Employment in Emerging Markets',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const researchBriefsAndPapers = [
    {
      title: 'Nala Center Brief: Pathways for Inclusive Markets',
      description: 'Strategies for fostering equitable economic expansion through SMEs and cooperatives.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Policy Paper: Public-Private Partnerships for Development',
      description: 'Analyzing effective models for collaborative economic growth.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Research Spotlight: Reducing Income Disparities',
      description: 'Innovative approaches to tackle economic inequality in African contexts.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Briefing Note: Impact of Digital Economy on Inclusion',
      description: 'Assessing how digital transformation can promote or hinder economic equity.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero Background Image Section */}
      <section className="relative h-[60vh] overflow-hidden"> {/* Increased height for better image visibility */}
        <Image
          src={heroImageSrc}
          alt={pageTitle}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-70" // Darken image for readability
        />
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Dark overlay */}
      </section>

      {/* Overlapping Content Box */}
      {/* Positioned absolutely to overlap image and subsequent section */}
      <div className="absolute top-[40vh] md:top-[30vh] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-20">
        <div className="text-white p-4 md:p-8 mx-auto rounded-lg shadow-lg" style={{ backgroundColor: themeColor, opacity: 0.9 }}>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </div>

      {/* Overview Section - needs top padding to avoid content being hidden by the overlapping box */}
      <section className="container mx-auto pt-[100px] md:pt-[150px] pb-16 px-4"> {/* Adjusted pt for mobile and desktop */}
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p>{overviewContent}</p>
        </div>
      </section>

      {/* Reports and Research Briefs Section */}
      <section className="bg-[#f8f8f8] py-16 px-0">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column: Reports */}
          <div className="bg-white px-8 py-12 shadow-md">
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Reports</h2>
            <div className="space-y-6">
              {reports.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.year}: {item.title}</h3>
                  <Link href={item.linkHref} className="inline-block text-sm font-semibold hover:underline transition-colors duration-300" style={{ color: themeColor }}>
                    {item.linkText} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research Briefs and Papers */}
          <div className="px-8 py-12 shadow-md" style={{ backgroundColor: secondaryColor }}>
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Research briefs and papers</h2>
            <div className="space-y-6">
              {researchBriefsAndPapers.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{item.description}</p>
                  <Link href={item.linkHref} className="inline-block bg-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-300" style={{ color: themeColor }}>
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
