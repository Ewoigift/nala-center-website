// src/app/who-we-are/board-of-directors/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';

export default function BoardOfDirectorsPage() {
  const boardMembers = [
    {
      name: 'Bravin Onditi',
      designation: 'Chairperson',
      imageSrc: '/images/team/bravin-onditi.png',
      slug: 'bravin-onditi',
    },
    {
      name: 'Zuleika Hassan',
      designation: 'Treasurer of the Board',
      imageSrc: '/images/team/zuleika-hassan.png',
      slug: 'zuleika-hassan',
    },
    {
      name: 'Antony Nyabuto',
      designation: 'Secretary of the Board',
      imageSrc: '/images/team/antony-nyabuto.jpg',
      slug: 'antony-nyabuto',
    },
    {
        name: 'Edwin Mwangi',
      designation: 'Board Member',
      imageSrc: '/images/team/edwin-maina.png',
      slug: 'edwin-mwangi',
    },
    {
name: 'Brian Serem',
      designation: 'Board Member',
      imageSrc: '/images/team/brian_serem.png', 
      slug: 'brian-serem',
    },


  ];

  return (
    <main className="bg-white text-[#050505]">
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#050505]">Board of Directors</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The Board of Directors at Nala Center provides strategic leadership and governance, ensuring that the institution remains true to its mission as a thought leader in research, policy, and advocacy. Serving as custodians of the Center’s vision, the Board guides long-term strategy, safeguards financial and institutional integrity, and supports the management team in advancing evidence-based solutions. 
            
            By offering oversight, mobilizing networks, and representing Nala Center at the highest levels, the Board plays a vital role in strengthening the Center’s impact and positioning it as a trusted voice in shaping policy and practice.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Our Board Of Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/who-we-are/board-of-directors/${member.slug}`}
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
