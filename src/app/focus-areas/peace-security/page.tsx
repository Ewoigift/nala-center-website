// src/app/focus-areas/peace-security/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PeaceSecurityPage() {
  const heroImageSrc = '/images/focus-areas/peace-security.jpg';
  const pageTitle = 'Peace & Security';
  const heroDescription = 'Analyzing the root causes and dynamics of conflict, with attention to youthful drivers of change.';
  const themeColor = '#4BA3A0'; // Specific color for Peace & Security

  const overviewContent = `In this area, we analyze the root causes and evolving dynamics of conflict across Africa and beyond, with special attention to youthful drivers of change. Our work spans early warning systems, community-led peacebuilding initiatives, and evaluations of disarmament and reintegration programs. We partner with local actors to design inclusive dialogues that bring together government, civil society, and marginalized groups, ensuring that policy responses bolster resilience and prevent relapse into violence.`;

  const reports = [
    {
      year: '2024',
      title: 'Index Report: Conflict Dynamics in the Sahel',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      year: '2024',
      title: 'Forum Report: Financing Peacebuilding Initiatives',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2018',
      title: 'Forum Report: Public Service in Conflict Zones',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2017',
      title: 'Forum Report: Youth Engagement in Peace Processes',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2013',
      title: 'Facts & Figures: Post-Conflict Reconstruction',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const researchBriefsAndPapers = [
    {
      title: 'Reviewing Nala Center\'s 2024 Peace Index',
      description: 'An in-depth look at the latest findings on peace and conflict trends.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: '2024: Africa\'s Critical Elections and Stability',
      description: 'Analyzing the impact of upcoming elections on regional peace.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Preventing Coups: Lessons from African Democracies',
      description: 'Strategies and frameworks to bolster democratic resilience.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Western Africa\'s Recent Security Challenges',
      description: 'A comprehensive analysis of recent security developments and their implications.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Strength in Numbers: Data Revolution for Peace',
      description: 'Leveraging data and technology for early warning and conflict prevention.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero Background Image Section */}
      <section className="relative h-[50vh] overflow-hidden"> {/* Adjusted height to 50vh */}
        <Image
          src={heroImageSrc}
          alt={pageTitle}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-90" // Increased image opacity
        />
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div> {/* Reduced overlay opacity */}
      </section>

      {/* Overlapping Content Box */}
      <div className="absolute top-[30vh] md:top-[25vh] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-20"> {/* Adjusted top for mobile and desktop */}
        <div className="text-white p-4 md:p-8 mx-auto rounded-lg shadow-lg" style={{ backgroundColor: themeColor, opacity: 0.9 }}>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto pt-[100px] md:pt-[120px] pb-16 px-4"> {/* Adjusted pt for mobile and desktop */}
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
          <div className="bg-[#e0e7f2] px-8 py-12 shadow-md">
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