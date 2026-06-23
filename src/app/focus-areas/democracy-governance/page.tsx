// src/app/focus-areas/democracy-governance/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function DemocracyGovernancePage() {
  const pageTitle = 'Democracy, Governance & Civic Innovation';
  const heroDescription = 'Pioneering solutions for accountable governance and enhanced civic engagement.';
  const themeColor = '#6CAED9'; // Specific color for Democracy, Governance & Civic Innovation
  const secondaryColor = '#E0E7F2'; // A lighter complementary color for sections

  const overviewContent = `We investigate models of accountable governance and democratic renewal, from electoral integrity to decentralization reforms. By mapping institutional bottlenecks and citizen-state trust gaps, we identify opportunities for civic-tech solutions—such as digital feedback platforms and participatory budgeting tools—that deepen public participation. Our policy briefs and workshops support lawmakers and grassroots organizations in co-creating transparent, rights-based frameworks that strengthen institutions and uphold the rule of law.`;

  const reports: any[] = [];

  const researchBriefsAndPapers = [
    {
      title: 'Harnessing Kenya-France Relations in a Shifting Global Order',
      description: "Following the 2026 Africa Forward Summit, this policy brief evaluates Kenya's strategic alignment with France across maritime security, economic transformation, and global diplomacy. It details actionable strategies for moving beyond operational exposure to technical internalization, safeguarding fiscal sovereignty through equity-based frameworks, and anchoring bilateral ties within African-led institutions.",
      linkText: 'Download file (PDF)',
      linkHref: '/uploads/democracy-governance/Nala-Center-Policy-Brief-002.pdf', 
      author: 'Getrude Maina',
      date: 'June 2026',
      image: '/images/policy-briefs/democracy-governance-policy-brief.jpg',
    },
  ];

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Custom CSS for the animation */}
      <style jsx>{`
        @keyframes bounce-on-spot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Hero Section - now with solid background and direct content, and animated logo */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: themeColor }}>
        {/* Animated Nala Logo */}
        <Image
          src="/images/Nala_No_Bg_White.png"
          alt="NALA Center Logo"
          width={100}
          height={100}
          className="absolute z-0"
          style={{
            animation: 'bounce-on-spot 3s ease-in-out infinite',
            bottom: '20px',
            right: '20px',
          }}
        />
        <div className="relative z-10 text-white p-4 md:p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{pageTitle}</h1>
          <p className="text-lg md:text-xl">{heroDescription}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto py-16 px-4">
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
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  
                  <h3 className="text-xl font-semibold mb-1 text-[#050505]">{item.title}</h3>
                  {item.author && item.date && (
                    <p className="text-sm text-gray-600 mb-2">
                      By {item.author} | {item.date}
                    </p>
                  )}
                  <p className="text-gray-700 text-base mb-3">{item.description}</p>
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