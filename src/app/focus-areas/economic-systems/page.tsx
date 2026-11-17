// src/app/focus-areas/economic-systems/page.tsx
'use client';

import Image from "next/legacy/image";
import { ArrowUpRight } from 'lucide-react';

export default function EconomicSystemsPage() {
  const heroImageSrc = '/images/focus-areas/economic-systems.jpg'; // Image will now be used
  const pageTitle = 'Economic Systems, Equity & Inclusive Development';
  const heroDescription = 'Examining how economic policies can drive equitable growth and reduce disparities.';
  const themeColor = '#E1B07E'; // Specific color for Economic Systems, Equity & Inclusive Development

  const overviewContent = `This focus area examines how economic policies can drive equitable growth and reduce disparities. From tax justice and social protection schemes to value chain analyses in agriculture and industry, we assess which interventions most effectively uplift marginalized communities. Through mixed methods research and stakeholder convenings, we chart pathways for SMEs, cooperatives, and public private partnerships to foster inclusive markets—ensuring that economic expansion benefits all segments of society.`;

  // Add new economic briefs to the TOP of this array; each one becomes a row.
  const economicBriefs = [
    {
      label: 'Economic Brief · November 2026',
      title: 'Kenya’s Growth Has a Governance Problem',
      description: `Kenya’s economy grew by 5.2% in the first half of 2026, yet most new jobs are informal and the budget deficit reached 6.8% of GDP against a target of 4.7%. In this economic brief, Nala Center reviews the World Bank’s November 2026 Kenya Economic Update, which identifies corruption as the main constraint on faster growth and better jobs. The brief sets out the evidence in plain language, explains what it means for public finances, businesses, and young people, and proposes practical next steps that build on reforms already under way.`,
      buttonText: 'Read the brief',
      coverSrc: '/images/economic-briefs/kenya-growth-governance-cover.jpg',
      pdfHref: '/uploads/economic-systems/Nala-Center-Economic-Brief-Kenya-November2026.pdf',
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

      {/* Economic Briefs - one row per brief */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        {economicBriefs.map((brief) => (
          <div
            key={brief.pdfHref}
            className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-b border-gray-200 py-10"
          >
            {/* Cover */}
            <div className="md:col-span-4">
              <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: themeColor }}>
                <a
                  href={brief.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brief.title} (PDF)`}
                  className="relative block h-[82%] aspect-[210/297] shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={brief.coverSrc}
                    alt={`Cover of the Nala Center economic brief: ${brief.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-wide text-[#52667A] mb-3">{brief.label}</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5 text-[#0B2545]">{brief.title}</h2>
              <p className="text-lg md:text-xl text-[#52667A] leading-relaxed mb-8">{brief.description}</p>

              <div>
                <a
                  href={brief.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-[#0B2545] hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
                >
                  {brief.buttonText}
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}