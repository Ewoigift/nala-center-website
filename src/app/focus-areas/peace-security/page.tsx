// src/app/focus-areas/peace-security/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function PeaceSecurityPage() {
  const heroImageSrc = '/images/focus-areas/peace-security.jpg';
  const pageTitle = 'Peace & Security';
  const heroDescription = 'Analyzing the root causes and dynamics of conflict, with attention to youthful drivers of change.';
  const themeColor = '#4BA3A0'; // Specific color for Peace & Security

  const overviewContent = `In this area, we analyze the root causes and evolving dynamics of conflict across Africa and beyond, with special attention to youthful drivers of change. Our work spans early warning systems, community-led peacebuilding initiatives, and evaluations of disarmament and reintegration programs. We partner with local actors to design inclusive dialogues that bring together government, civil society, and marginalized groups, ensuring that policy responses bolster resilience and prevent relapse into violence.`;

  const reports: any[] = [];

  const researchBriefsAndPapers = [
    {
      title: 'Paralysis in Peacekeeping: The African Union\'s Mediation Challenges in Sudan',
      description: 'This policy brief highlights the urgent need for a coordinated African response to Sudan\'s escalating war, which has exposed the African Union\'s institutional constraints and declining credibility as a peace broker.',
      linkText: 'Download file (PDF)',
      linkHref: '/uploads/peace-security/Nala Center Policy Brief 001.pdf',
      author: 'Getrude Maina',
      date: 'January 2026',
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
          {reports.length > 0 && (
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
          )}

          {/* Right Column: Research Briefs and Papers */}
          <div className={`bg-[#e0e7f2] px-8 py-12 shadow-md ${reports.length === 0 ? 'lg:col-span-2' : ''}`}>
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Research briefs and papers</h2>
            <div className="space-y-6">
              {researchBriefsAndPapers.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  {item.author && item.date && (
                    <p className="text-sm text-gray-600 mb-2">
                      By {item.author} | {item.date}
                    </p>
                  )}
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