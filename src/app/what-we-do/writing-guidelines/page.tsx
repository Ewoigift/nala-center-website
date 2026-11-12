// src/app/what-we-do/writing-guidelines/page.tsx
'use client';

import Image from 'next/legacy/image';
import { ArrowUpRight } from 'lucide-react';

// Where the PDF lives: put the file at public/uploads/writing-guidelines/
const guide = {
  label: 'Editorial Standards',
  title: 'Comprehensive Writing Style Guide',
  description:
    'Standards of voice, structure, evidence, and language for every publication issued in the name of the Nala Center. The guide sets out how we write and sound, how we structure an argument, our rules for grammar and mechanics, how we cite sources and write for digital platforms, and how each publication is reviewed before it is released.',
  buttonText: 'Read the guide',
  coverSrc: '/images/what-we-do/writing-style-guide-cover.jpg',
  pdfHref: '/uploads/writing-guidelines/Nala-Center-Writing-Style-Guide.pdf',
};

export default function WritingGuidelinesPage() {
  return (
    <main className="bg-white text-[#0B2545] min-h-[70vh] flex items-center">
      <div className="container mx-auto max-w-6xl px-4 py-16 w-full">
        <section className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-b border-gray-200 py-10">
          {/* Navy block with the cover */}
          <div className="md:col-span-4">
            <div className="bg-[#16325C] aspect-square flex items-center justify-center">
              <a
                href={guide.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${guide.title} (PDF)`}
                className="relative block h-[82%] aspect-[1414/2000] shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={guide.coverSrc}
                  alt="Cover of the Nala Center Comprehensive Writing Style Guide"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </a>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wide text-[#52667A] mb-3">{guide.label}</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">{guide.title}</h1>
            <p className="text-lg md:text-xl text-[#52667A] leading-relaxed mb-8">{guide.description}</p>

            <div>
              <a
                href={guide.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-[#0B2545] hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
              >
                {guide.buttonText}
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}