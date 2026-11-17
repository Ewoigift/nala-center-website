// src/app/focus-areas/FocusAreaPage.tsx
// Shared layout for every focus area page. Content comes from src/data/focusAreas.ts.
'use client';

import Image from "next/legacy/image";
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import {
  getFocusArea,
  getPublicationsByFocusArea,
  formatPublicationDate,
} from '../../data/focusAreas';

export default function FocusAreaPage({ slug }: { slug: string }) {
  const focusArea = getFocusArea(slug);
  if (!focusArea) notFound();

  const { title: pageTitle, heroImageSrc, heroDescription, themeColor, overview } = focusArea;

  // Add new briefs/reports in src/data/focusAreas.ts (publications); they appear here automatically.
  const briefs = getPublicationsByFocusArea(slug).map((p) => ({
    id: p.id,
    label: `${p.type} · ${formatPublicationDate(p.publishedAt)}`,
    title: p.title,
    description: p.summary,
    buttonText: `Read the ${p.type.toLowerCase()}`,
    coverSrc: p.coverSrc,
    pdfHref: p.pdfHref,
  }));

  return (
    <main className="bg-white text-[#050505] relative">
      {heroImageSrc ? (
        <>
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
              {heroDescription && <p className="text-lg md:text-xl">{heroDescription}</p>}
            </div>
          </div>
        </>
      ) : (
        <>
          <style>{`
            @keyframes bounce-on-spot {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
          {/* Solid-colour hero with animated logo (used when a focus area has no hero image) */}
          <section
            className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden"
            style={{ backgroundColor: themeColor }}
          >
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
              {heroDescription && <p className="text-lg md:text-xl">{heroDescription}</p>}
            </div>
          </section>
        </>
      )}

      {/* Overview Section - top padding clears the overlapping box when there is a hero image */}
      <section
        className={`container mx-auto pb-16 px-4 ${
          heroImageSrc ? 'pt-[100px] md:pt-[150px]' : 'pt-16'
        }`}
      >
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p>{overview}</p>
        </div>
      </section>

      {/* Publications - one row per brief/report */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        {briefs.length === 0 ? (
          <div className="border-t border-b border-gray-200 py-16 text-center text-lg text-gray-500">
            Publications for this focus area are coming soon.
          </div>
        ) : (
          briefs.map((brief) => (
            <div
              key={brief.id}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-b border-gray-200 py-10"
            >
              {/* Cover - shown as-is, no container or cropping */}
              <div className="md:col-span-4">
                <a
                  href={brief.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brief.title} (PDF)`}
                  className="block transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brief.coverSrc}
                    alt={`Cover of the Nala Center publication: ${brief.title}`}
                    className="w-full h-auto shadow-xl"
                    loading="lazy"
                  />
                </a>
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
          ))
        )}
      </section>
    </main>
  );
}