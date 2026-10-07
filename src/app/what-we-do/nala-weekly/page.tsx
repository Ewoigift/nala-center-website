// src/app/what-we-do/research-publications/nala-weekly/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

const themeColor = '#16325C'; // Deep navy, matching the Nala Weekly masthead

// Each issue holds a brief description covering that week's flashpoints.
// Add new issues to the TOP of this array as they're published.
const nalaWeeklyIssues = [
  {
    issueNumber: '02',
    date: '6 October 2026',
    description: "This week's Nala Weekly tracks five flashpoints as the region's conflicts increasingly converge. In Ethiopia, federal forces have retaken Mekelle and Addis Ababa has broken off relations with Eritrea, raising the risk of an interstate war. In Sudan, army chief Abdel Fattah al-Burhan has ruled out talks as the RSF opens a new front in Blue Nile on the Ethiopian border. In South Sudan, the main opposition is boycotting the pre-election dialogue, leaving the 22 December poll short of legitimacy. Somalia is caught between rival regional blocs as Ethiopia weighs pulling troops out and the AU mission's funding is in doubt. At the Red Sea and Bab el-Mandeb, Saudi-backed Yemeni forces are fighting the Houthis for control of the strait.",
    pdfLink: '/uploads/nala-weekly/Nala-Weekly-Issue-02.pdf',
  },
  {
    issueNumber: '01',
    date: '29 September 2026',
    description: "This week's Nala Weekly tracks four fast-moving flashpoints reshaping the security environment in the Horn of Africa and the Red Sea region. In South Sudan, President Salva Kiir has cleared the way for a 22 December vote, but with Riek Machar on trial and the main opposition rejecting the process, the poll risks deepening the crisis. In Ethiopia, a seven-group alliance with the TPLF as its main fighting force has taken up arms against Prime Minister Abiy Ahmed, ending the Pretoria agreement and raising the risk of a regional war. At the Red Sea and Bab el-Mandeb, the Houthis' seizure of Mayun Island has opened a Red Sea front in the war with Iran, putting one of the world's key shipping lanes at risk. In Sudan, the RSF is applying the siege tactics used in El Fasher to El-Obeid, pushing the country towards a de facto partition.",
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
          <p className="text-lg md:text-xl max-w-2xl"></p>
        </div>
      </section>

      {/* Issues Archive */}
      <section className="bg-[#f8f8f8] py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
            {nalaWeeklyIssues.map((issue, index) => (
              <div key={index}>
                <Link href={issue.pdfLink} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-5">
                    <Image
                      src="/images/policy-briefs/nala-weekly-banner.jpg"
                      alt={`Nala Weekly Issue No. ${issue.issueNumber}`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-4">
                      <div className="relative h-7 w-28">
                        <Image
                          src="/images/Nala_No_Bg_White.png"
                          alt="Nala Center Logo"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                          className="drop-shadow"
                        />
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold font-serif leading-none drop-shadow">Nala Weekly</p>
                        <p className="text-white/80 text-xs mt-1 tracking-wide">Issue No. {issue.issueNumber}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <h2 className="text-2xl font-bold font-serif mb-1" style={{ color: themeColor }}>
                  Nala Weekly — Issue No. {issue.issueNumber}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{issue.date}</p>

                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-5">{issue.description}</p>

                <Link
                  href={issue.pdfLink}
                  className="inline-flex items-center gap-1 font-medium hover:underline"
                  style={{ color: themeColor }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More <span aria-hidden="true">&rarr;</span>
                </Link>
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
        </div>
      </section>
    </main>
  );
}