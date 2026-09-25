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
      badge: 'Institutional Policy Brief',
      title: 'Paralysis in Peacekeeping: The African Union\'s Mediation Challenges in Sudan',
      description: 'This policy brief highlights the urgent need for a coordinated African response to Sudan\'s escalating war, which has exposed the African Union\'s institutional constraints and declining credibility as a peace broker.',
      linkText: 'Download Policy Brief (PDF)',
      linkHref: '/uploads/peace-security/Nala-Center-Policy-Brief-001.pdf',
      author: 'Getrude Maina',
      date: 'January 2026',
      accentColor: '#3B82F6', // Distinct blue accent
    },
    {
      badge: 'Youth & Diplomacy Brief',
      title: "Kenya's Peace and Security Diplomacy: Gains and Gaps",
      description: "Informed by a youth dialogue held at the Konrad Adenauer Stiftung Kenya office, this brief assesses Kenya's peace and security diplomacy against the commitments of Sessional Paper No. 1 of 2025, examining its record in Sudan, South Sudan, the eastern DRC, Somalia and Haiti. It finds that Kenya's challenge is not a shortage of diplomatic assets but a shortage of institutional machinery to convert them into durable outcomes, and recommends a permanent mediation support unit, transparent intervention criteria, and a national action plan on youth, peace and security.",
      linkText: 'Download Dialogue Brief (PDF)', 
      linkHref: '/uploads/peace-security/Nala-Center-Policy-Brief-003.pdf',
      author: 'Youth in Governance and Global Affairs, Nala Center & MuemAction Post',
      date: 'August 2026',
      accentColor: '#10B981', // Distinct green accent
    },
  ];

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero Background Image Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={heroImageSrc}
          alt={pageTitle}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-90"
        />
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
      </section>

      {/* Overlapping Content Box */}
      <div className="absolute top-[30vh] md:top-[25vh] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-20">
        <div className="text-white p-4 md:p-8 mx-auto rounded-lg shadow-lg" style={{ backgroundColor: themeColor, opacity: 0.9 }}>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto pt-[100px] md:pt-[120px] pb-16 px-4">
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p>{overviewContent}</p>
        </div>
      </section>

      {/* Reports and Research Briefs Section */}
      <section className="bg-[#f8f8f8] py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Reports Column (if applicable) */}
          {reports.length > 0 && (
            <div className="bg-white px-8 py-12 shadow-md mb-8">
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

          {/* Research Briefs and Papers Section */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-8 text-[#050505]">Research Briefs & Policy Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchBriefsAndPapers.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md border-l-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                  style={{ borderLeftColor: item.accentColor }}
                >
                  <div>
                    {/* Badge / Category Label */}
                    <div className="mb-3">
                      <span 
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-xl font-bold mb-2 text-[#050505]">
                      {item.title}
                    </h3>

                    {/* Author & Date */}
                    {item.author && item.date && (
                      <p className="text-sm font-medium text-gray-500 mb-3">
                        By {item.author} • {item.date}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Download Link Button */}
                  <div>
                    <Link 
                      href={item.linkHref} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold hover:underline transition-colors duration-300" 
                      style={{ color: themeColor }}
                    >
                      {item.linkText} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}