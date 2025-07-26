// src/app/focus-areas/migration-human-rights/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MigrationHumanRightsPage() {
  const heroImageSrc = '/images/focus-areas/migration-human-rights.jpg';
  const pageTitle = 'Migration, Mobility & Human Rights';
  const heroDescription = 'Exploring the full spectrum of human mobility through a rights-based lens.';
  const themeColor = '#4682B4'; // Steel Blue for Migration, Mobility & Human Rights
  const secondaryColor = '#E0F2F7'; // A lighter complementary color for sections

  const overviewContent = `We explore the full spectrum of human mobility—from internal displacement and labour migration to refugee protection—through a rights-based lens. Our research tracks migration drivers, evaluates border-management frameworks, and assesses the socio-economic impacts of diasporas. In partnership with advocacy groups, we craft policy recommendations that safeguard migrants’ dignity, facilitate safe pathways, and strengthen regional cooperation mechanisms for orderly, humane mobility.`;

  const reports = [
    {
      year: '2024',
      title: 'Global Migration Trends Report: African Perspectives',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      year: '2023',
      title: 'Refugee Protection in East Africa: Challenges and Solutions',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2022',
      title: 'Labour Migration & Development in West Africa: A Nala Center Analysis',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2021',
      title: 'Internal Displacement & Climate Change: A Policy Brief',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      year: '2020',
      title: 'Human Rights at Borders: Safeguarding Dignity',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const researchBriefsAndPapers = [
    {
      title: 'Nala Center Brief: Safe Pathways for Migrants',
      description: 'Examining policies and practices that ensure safe and legal migration routes.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Policy Paper: Regional Cooperation on Mobility',
      description: 'Strategies for enhanced collaboration among African nations on human mobility.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Research Spotlight: Socio-Economic Impact of Diasporas',
      description: 'Highlighting the contributions of diaspora communities to African development.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      title: 'Briefing Note: Rights-Based Border Management',
      description: 'Advocating for border policies that respect human rights and dignity.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const externalLinks = [
    {
      source: 'UNHCR',
      title: 'Nala Center\'s insights on refugee integration in urban settings',
      description: 'A collaborative report on best practices for integrating refugees into host communities.',
      linkHref: '#',
    },
    {
      source: 'IOM',
      title: 'Data on African Migration Corridors and Trends',
      description: 'Nala Center\'s analysis of key migration routes and demographic shifts across Africa.',
      linkHref: '#',
    },
    {
      source: 'Human Rights Watch',
      title: 'Safeguarding Migrant Dignity: A Joint Advocacy Brief',
      description: 'A brief outlining shared recommendations for protecting the rights of migrants.',
      linkHref: '#',
    },
    {
      source: 'African Union',
      title: 'Nala Center\'s contributions to new mobility protocols',
      description: 'Examining Nala Center\'s role in shaping regional agreements on free movement.',
      linkHref: '#',
    },
  ];

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero Background Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={heroImageSrc}
          alt={pageTitle}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      </section>

      {/* Overlapping Content Box */}
      <div className="absolute top-[40vh] md:top-[30vh] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-20">
        <div className="text-white p-4 md:p-8 mx-auto rounded-lg shadow-lg" style={{ backgroundColor: themeColor, opacity: 0.9 }}>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto pt-[100px] md:pt-[150px] pb-16 px-4">
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

      {/* External Links Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-[#050505]">External links</h2>
          <div className="space-y-6">
            {externalLinks.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2 text-[#050505]">{item.source}</h3>
                <p className="text-gray-700 text-base mb-2">{item.description}</p>
                <Link href={item.linkHref} className="flex items-center space-x-2 text-[#050505] hover:underline text-lg">
                  <span className="text-[#4682B4] text-xl">&rarr;</span> {/* Using themeColor for the arrow */}
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
