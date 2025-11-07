// src/app/focus-areas/sustainable-energy/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function SustainableEnergyPage() {
  const heroImageSrc = '/images/focus-areas/sustainable-energy.jpg';
  const pageTitle = 'Sustainable Energy & Climate Resilience';
  const heroDescription = 'Our work here centers on the intersection of climate justice and energy transitions.';

  const overviewContent = `Our work here centers on the intersection of climate justice and energy transitions. We evaluate policies for scaling renewables in off-grid and peri-urban contexts, and co-develop adaptation strategies with communities facing climate shocks. By integrating gender-sensitive analyses and indigenous knowledge, we aim to ensure that resilience planning is both equitable and grounded in local realities. Outputs include toolkits for community-led adaptation and policy roadmaps for just energy transitions.`;

  const researchOutputs = [
    {
      type: 'research',
      title: 'Rethinking How Youth Shape the Future of Nature and Finance',
      author: 'Isaac Mureithi',
      description: 'This brief interrogates the financialisation of nature through Nature-based Solutions (NbS), examining how ecological restoration initiatives intersect with market logics that commodify ecosystems.',
      linkText: 'Download file (PDF)',
      linkHref: '/pdfs/rethinking-youth-nature-finance.pdf',
    },
    {
      type: 'research',
      title: 'Nala Center Climate Research: COP29 Key Outcomes',
      description: 'Key outcomes and look ahead for Africa.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'research',
      title: 'Africa on the Road to COP28',
      description: 'Reconciling climate & development.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'research',
      title: 'The Africa Climate Summit',
      description: 'Reconciling global climate goals and Africa\'s development agendas.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'research',
      title: 'The Road to COP27',
      description: 'Making Africa\'s Case in the Global Climate Debate.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const keyResources = [
    {
      type: 'resource',
      title: 'Nala Center advocates four key points ahead of Africa Climate Summit',
      description: 'A comprehensive brief outlining Nala Center\'s key recommendations for the upcoming Africa Climate Summit.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'resource',
      title: 'Nala Center debates global issues ahead of COP27',
      description: 'An in-depth analysis of the critical discussions and Nala Center\'s stance prior to COP27.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'resource',
      title: 'Climate change adaptation in Africa: a human rights perspective',
      description: 'Exploring the intersection of climate adaptation strategies and human rights in African contexts.',
      linkText: 'Read more',
      linkHref: '#',
    },
  ];

  const researchBriefs = [
    {
      type: 'brief',
      title: 'Latest COPs on climate change, desertification and biodiversity',
      description: 'Key outcomes for Africa (2024-2025).',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'brief',
      title: 'Addressing Africa\'s energy deficit',
      description: 'Climate change, renewables, and gas.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'brief',
      title: 'The human face of the climate crisis in Africa',
      description: 'Least responsible, Most vulnerable.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'brief',
      title: 'Growth without emissions?',
      description: 'Is carbon needed for Africa\'s development goals & economic.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const researchSpotlights = [
    {
      type: 'spotlight',
      title: 'Renewable Energy in Africa',
      description: 'Highlighting advancements and potential of renewable energy sources across the African continent.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'spotlight',
      title: 'The Climate Crisis and Food Insecurity in Africa',
      description: 'Examining the profound impact of climate change on food systems and security in various African regions.',
      linkText: 'Read more',
      linkHref: '#',
    },
  ];

  const externalLinks = [
    {
      source: 'The African Climate Conversation',
      title: 'Nala Center\'s best known entrepreneur and investor, speaks out on COP27',
      description: 'An article featuring insights from Nala Center on the outcomes and implications of COP27.',
      linkHref: '#',
    },
    {
      source: 'Project Syndicate',
      title: 'What climate justice means for Africa',
      description: 'A deep dive into the concept of climate justice and its relevance to the African continent.',
      linkHref: '#',
    },
    {
      source: 'LinkedIn',
      title: 'Africa Climate Week: a key step on the road to COP27',
      description: 'Nala Center\'s perspective on the significance of Africa Climate Week leading up to COP27.',
      linkHref: '#',
    },
    {
      source: 'African Business',
      title: 'Pascal Lamy: Africa\'s position at Cop27',
      description: 'An analysis of Africa\'s strategic position and demands at the Cop27 negotiations.',
      linkHref: '#',
    },
    {
      source: 'Paris Peace Forum',
      title: 'It\'s time for a climate change agenda for the people or our planet',
      description: 'Nala Center\'s call to action for a people-centric approach to the global climate agenda.',
      linkHref: '#',
    },
    {
      source: 'Foreign Affairs',
      title: 'The Climate Crisis and Food Insecurity in Africa',
      description: 'An exploration of the severe impact of climate change on food security across Africa.',
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
        <div className="text-white p-4 md:p-8 mx-auto rounded-lg bg-[#7BB661] bg-opacity-90 shadow-lg">
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

      {/* Featured Outputs Section */}
      <section className="bg-[#f8f8f8] py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Research Outputs */}
          <div className="bg-white p-8 rounded-lg shadow-md col-span-2">
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Nala Center Climate Research</h2>
            <div className="space-y-6">
              {researchOutputs.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  {'author' in item && (
                    <p className="text-sm text-gray-600 mb-1 italic">By {item.author}</p>
                  )}
                  <p className="text-gray-700 text-base mb-2">{item.description}</p>
                  <a 
                    href={item.linkHref} 
                    download={item.linkHref !== '#'}
                    target={item.linkHref === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-block bg-[#7BB661] text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#6A9E53] transition-colors duration-300"
                  >
                    {item.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Resources */}
          <div className="bg-[#e0e7f2] p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Key Resources</h2>
            <div className="space-y-4">
              {keyResources.map((item, index) => (
                <div key={index} className="pb-4 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{item.description}</p>
                  <Link href={item.linkHref} className="inline-block text-[#7BB661] hover:underline text-sm font-semibold transition-colors duration-300">
                    {item.linkText} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Research Sections */}
      <section className="py-0 px-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column: Research Briefs */}
          <div className="bg-[#7BB661] text-white px-8 py-12 shadow-md">
            <h2 className="text-2xl font-bold font-serif mb-6">Research Briefs</h2>
            <div className="space-y-6">
              {researchBriefs.map((item, index) => (
                <div key={index} className="border-b border-white border-opacity-30 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white text-opacity-80 text-base mb-2">{item.description}</p>
                  <Link href={item.linkHref} className="inline-block bg-white text-[#7BB661] py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research Spotlights */}
          <div className="bg-[#5DC1B9] text-[#050505] px-8 py-12 shadow-md">
            <h2 className="text-2xl font-bold font-serif mb-6">Research Spotlights</h2>
            <div className="space-y-4">
              {researchSpotlights.map((item, index) => (
                <div key={index} className="pb-4 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{item.description || 'No description available.'}</p>
                  <Link href={item.linkHref} className="inline-block text-[#7BB661] hover:underline text-sm font-semibold transition-colors duration-300">
                    {item.linkText} &rarr;
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
                  <span className="text-[#7BB661] text-xl">&rarr;</span>
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