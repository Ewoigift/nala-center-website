// src/app/what-we-do/research-publications/nala-weekly/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';
import { FileText } from 'lucide-react';

const themeColor = '#16325C'; // Deep navy, matching the Nala Weekly masthead

// Each issue holds the short flashpoints covered that week.
// Add new issues to the TOP of this array as they're published.
const nalaWeeklyIssues = [
  {
    issueNumber: '01',
    date: '29 September 2026',
    intro: "This week's Nala Weekly tracks four fast-moving flashpoints reshaping the security environment in the Horn of Africa and the Red Sea region.",
    topics: [
      { number: '1', region: 'South Sudan', title: 'Elections on the Brink' },
      { number: '2', region: 'Ethiopia', title: 'A New TPLF Rebellion' },
      { number: '3', region: 'Red Sea / Bab el-Mandeb', title: 'Houthis Advance in the Red Sea' },
      { number: '4', region: 'Sudan', title: 'War Shifts to Kordofan' },
    ],
    pdfLink: '/uploads/nala-weekly/Nala-Weekly-Issue-01.pdf',
  },
];

export default function NalaWeeklyPage() {
  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero / Masthead Section */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-end overflow-hidden" style={{ backgroundColor: themeColor }}>
        <Image
          src="/images/policy-briefs/nala-weekly-banner.jpg"
          alt="Nala Weekly"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 pb-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-2 leading-tight">Nala Weekly</h1>
          <p className="text-lg md:text-xl max-w-2xl">A weekly product of the Nala Center, tracking the flashpoints shaping Africa's peace and security landscape.</p>
        </div>
      </section>

      {/* Issues Archive */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {nalaWeeklyIssues.map((issue, index) => (
            <div key={index} className="bg-[#f8f8f8] rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-5 text-white flex items-center justify-between flex-wrap gap-2" style={{ backgroundColor: themeColor }}>
                <h2 className="text-xl md:text-2xl font-bold font-serif">Issue No. {issue.issueNumber}</h2>
                <span className="text-sm md:text-base opacity-90">{issue.date}</span>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-700 text-base md:text-lg mb-6">{issue.intro}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {issue.topics.map((topic, tIndex) => (
                    <div key={tIndex} className="flex items-start gap-3 bg-white rounded-md p-4 shadow-sm">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-semibold flex items-center justify-center"
                        style={{ backgroundColor: themeColor }}
                      >
                        {topic.number}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{topic.region}</p>
                        <p className="text-base font-semibold text-[#050505]">{topic.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={issue.pdfLink}
                  className="inline-flex items-center text-white py-2 px-5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundColor: themeColor }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Read Full Issue (PDF)
                </Link>
              </div>
            </div>
          ))}
        </div>

        {nalaWeeklyIssues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              The first issue of Nala Weekly is coming soon. Check back shortly.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}