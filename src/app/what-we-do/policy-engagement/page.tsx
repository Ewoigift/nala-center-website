// PolicyPapersPage.tsx
'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { Pen, FileText } from 'lucide-react';

// Data for policy papers
const policyPapers = [
  {
    title: "Paralysis in Peacekeeping: The African Union's Mediation Challenges in Sudan",
    summary: "This policy brief highlights the urgent need for a coordinated African response to Sudan's escalating war, which has exposed the African Union's institutional constraints and declining credibility as a peace broker. The paper assesses key challenges including coordination issues between the AU and UN, inadequate civilian protection mechanisms, and the vested interests of external actors undermining inclusive peace efforts.",
    image: '/images/policy-briefs/sudan-policy-brief.jpg',
    author: 'Getrude Maina',
    date: 'January 2026',
    category: 'Peace & Security',
    pdfLink: '/uploads/peace-security/Nala-Center-Policy-Brief-001.pdf'
  },
];

export default function PolicyPapersPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#2F2F2F] p-6 sm:p-10">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#050505]">
          Policy Papers
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our policy papers provide data-driven insights and strategic recommendations to inform policymakers and stakeholders on key issues affecting Africa&apos;s development and stability.
        </p>
      </header>

      <section className="p-6 md:p-10 rounded-xl bg-[#EBEBEB]">
        <div className="flex items-center gap-3 mb-6">
          <Pen className="w-8 h-8 text-[#017325]" />
          <h2 className="text-3xl font-bold text-[#050505]">Our Key Policy Insights</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyPapers.map((paper, i) => (
            <div key={i} className="flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md">
              <Image
                src={paper.image}
                alt={`Image for ${paper.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-block bg-[#4BA3A0] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl text-[#050505] mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    By {paper.author} | {paper.date}
                  </p>
                  <p className="mt-2 text-base text-[#2F2F2F] line-clamp-4">
                    {paper.summary}
                  </p>
                </div>
                <Link 
                  href={paper.pdfLink} 
                  className="text-[#017325] font-medium inline-flex items-center mt-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Read Policy Paper (PDF)
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {policyPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              New policy papers will be published soon. Check back for updates.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}