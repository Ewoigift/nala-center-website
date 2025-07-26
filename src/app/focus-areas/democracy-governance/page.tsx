// src/app/focus-areas/democracy-governance/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DemocracyGovernancePage() {
  // const heroImageSrc = '/images/focus-areas/democracy-governance.jpg'; // Commented out as it's not used
  const pageTitle = 'Democracy, Governance & Civic Innovation';
  const heroDescription = 'Pioneering solutions for accountable governance and enhanced civic engagement.';
  const themeColor = '#6CAED9'; // Specific color for Democracy, Governance & Civic Innovation
  const secondaryColor = '#E0E7F2'; // A lighter complementary color for sections

  const overviewContent = `We investigate models of accountable governance and democratic renewal, from electoral integrity to decentralization reforms. By mapping institutional bottlenecks and citizen-state trust gaps, we identify opportunities for civic-tech solutions—such as digital feedback platforms and participatory budgeting tools—that deepen public participation. Our policy briefs and workshops support lawmakers and grassroots organizations in co-creating transparent, rights-based frameworks that strengthen institutions and uphold the rule of law.`;

  const researchOutputs = [
    {
      type: 'research',
      title: 'Nala Center Report: Electoral Integrity in Africa (2024)',
      description: 'An analysis of electoral processes and recommendations for strengthening integrity.',
      linkText: 'Download file (PDF)',
      linkHref: '#', // Placeholder for PDF download
    },
    {
      type: 'research',
      title: 'Policy Brief: Decentralization & Local Governance',
      description: 'Exploring reforms to enhance local accountability and service delivery.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'research',
      title: 'Workshop Report: Citizen Participation in Budgeting',
      description: 'Key takeaways from workshops on participatory budgeting tools.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const keyResources = [
    {
      type: 'resource',
      title: 'Nala Center on Digital Democracy in Africa',
      description: 'Insights into leveraging technology for democratic participation.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'resource',
      title: 'Strengthening Rule of Law: Nala Center\'s Perspective',
      description: 'A position paper on upholding rights-based frameworks.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'resource',
      title: 'Youth and Governance: A Nala Center Dialogue Series',
      description: 'Summaries from a series of dialogues on youth engagement in governance.',
      linkText: 'Read more',
      linkHref: '#',
    },
  ];

  const researchBriefs = [
    {
      type: 'brief',
      title: 'Civic Tech Innovations for Accountability',
      description: 'Case studies of digital tools improving citizen-state trust.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'brief',
      title: 'Electoral Reforms for Inclusive Governance',
      description: 'Policy recommendations for fair and representative electoral systems.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
    {
      type: 'brief',
      title: 'Bridging Trust Gaps: Citizen-State Engagement',
      description: 'Strategies to foster trust and collaboration between citizens and government.',
      linkText: 'Download file (PDF)',
      linkHref: '#',
    },
  ];

  const researchSpotlights = [
    {
      type: 'spotlight',
      title: 'The Future of African Democracies',
      description: 'An overview of emerging trends and challenges in democratic development.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      type: 'spotlight',
      title: 'Innovation in Public Service Delivery',
      description: 'Highlighting successful civic innovations in public service.',
      linkText: 'Read more',
      linkHref: '#',
    },
  ];

  const externalLinks = [
    {
      source: 'African Governance Forum',
      title: 'Nala Center\'s insights on democratic transitions',
      description: 'A summary of Nala Center\'s contributions to recent governance discussions.',
      linkHref: '#',
    },
    {
      source: 'Tech for Good Summit',
      title: 'How civic innovation is transforming governance',
      description: 'Nala Center\'s presentation on the role of technology in civic participation.',
      linkHref: '#',
    },
    {
      source: 'World Bank Blog',
      title: 'Decentralization as a driver of local development',
      description: 'Nala Center\'s analysis on the impact of decentralization reforms.',
      linkHref: '#',
    },
  ];


  return (
    <main className="bg-white text-[#050505] relative">
      {/* Custom CSS for the animation */}
      <style jsx>{`
        @keyframes bounce-on-spot {
          0%, 100% { transform: translateY(0); } /* Normal position */
          50% { transform: translateY(-20px); } /* Bounce up by 20px */
        }
      `}</style>

      {/* Hero Section - now with solid background and direct content, and animated logo */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: themeColor }}>
        {/* Animated Nala Logo */}
        <Image
          src="/images/Nala_No_Bg_White.png" // Using the white logo for visibility on colored background
          alt="NALA Center Logo"
          width={100} // Set a fixed width
          height={100} // Set a fixed height
          className="absolute z-0" // Absolute positioning within the section
          style={{
            animation: 'bounce-on-spot 3s ease-in-out infinite', // Apply the new bouncing animation
            bottom: '20px', // Position from the bottom
            right: '20px', // Position from the right
          }}
        />
        <div className="relative z-10 text-white p-4 md:p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </section>

      {/* Overview Section - adjusted top padding as there's no overlapping box */}
      <section className="container mx-auto py-16 px-4"> {/* Reverted to standard padding */}
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p>{overviewContent}</p>
        </div>
      </section>

      {/* Featured Outputs Section */}
      <section className="bg-[#f8f8f8] py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Research Outputs */}
          <div className="bg-white p-8 rounded-lg shadow-md col-span-2">
            <h2 className="text-2xl font-bold font-serif mb-6 text-[#050505]">Nala Center Research & Publications</h2>
            <div className="space-y-6">
              {researchOutputs.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{item.description}</p>
                  <Link href={item.linkHref} className="inline-block bg-[#6CAED9] text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#5B9DC8] transition-colors duration-300">
                    {item.linkText}
                  </Link>
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
                  <Link href={item.linkHref} className="inline-block text-[#6CAED9] hover:underline text-sm font-semibold transition-colors duration-300">
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
          <div className="text-white px-8 py-12 shadow-md" style={{ backgroundColor: themeColor }}>
            <h2 className="text-2xl font-bold font-serif mb-6">Research Briefs</h2>
            <div className="space-y-6">
              {researchBriefs.map((item, index) => (
                <div key={index} className="border-b border-white border-opacity-30 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white text-opacity-80 text-base mb-2">{item.description}</p>
                  <Link href={item.linkHref} className="inline-block bg-white text-[#6CAED9] py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research Spotlights */}
          <div className="text-[#050505] px-8 py-12 shadow-md" style={{ backgroundColor: secondaryColor }}>
            <h2 className="text-2xl font-bold font-serif mb-6">Research Spotlights</h2>
            <div className="space-y-4">
              {researchSpotlights.map((item, index) => (
                <div key={index} className="pb-4 last:pb-0">
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{item.description || 'No description available.'}</p>
                  <Link href={item.linkHref} className="inline-block text-[#6CAED9] hover:underline text-sm font-semibold transition-colors duration-300">
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
                  <span className="text-[#6CAED9] text-xl">&rarr;</span>
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
