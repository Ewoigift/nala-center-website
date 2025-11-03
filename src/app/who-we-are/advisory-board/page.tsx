// src/app/who-we-are/advisory-board/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function AdvisoryBoardPage() {
  const boardMembers = [
    {
      name: 'Andrew J. Franklin',
      designation: 'Peace and Security',
      imageSrc: '/images/who-we-are/Andrew-Franklin.png', 
      slug: 'andrew-franklin',
    },
  
  ];

  return (
    <main className="bg-white text-[#050505]">
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#050505]">Advisory Board</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our Advisory Board is composed of esteemed experts and leaders who provide strategic guidance,
            expertise, and oversight to ensure Nala Center’s work is impactful and aligned with global best practices.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Meet Our Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/who-we-are/advisory-board/${member.slug}`}
              className="group block rounded-lg shadow-md overflow-hidden bg-white transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1 text-[#050505]">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.designation}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
