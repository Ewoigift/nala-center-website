// src/app/who-we-are/leadership-team/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LeadershipTeamPage() {
  const teamMembers = [
    {
      name: 'Bravin Onditi',
      designation: 'Founder and Executive Director',
      imageSrc: '/images/team/bravin-onditi.png',
      slug: 'bravin-onditi',
    },
    {
      name: 'Stella Cherop',
      designation: 'Deputy Executive Director',
      imageSrc: '/images/team/stella-cherop.png',
      slug: 'stella-cherop',
    },
    {
      name: 'Marwa Ali Khamis',
      designation: 'Legal Advisor',
      imageSrc: '/images/team/marwa-ali-khamis.jpg',
      slug: 'marwa-ali-khamis',
    },
    {
      name: 'Immanuel Kiilu',
      designation: 'Head of Research/Policy',
      imageSrc: '/images/team/immanuel-kiilu.jpg',
      slug: 'immanuel-kiilu',
    },
    {
      name: 'Zuleika Hassan',
      designation: 'Head of Finance',
      imageSrc: '/images/team/zuleika-hassan.png',
      slug: 'zuleika-hassan',
    },
    {
      name: 'Edwin Mwangi',
      designation: 'Head of Operations',
      imageSrc: '/images/team/edwin-maina.png',
      slug: 'edwin-mwangi',
    },
    {
      name: 'Antony Nyabuto',
      designation: 'Head of Events and Partnerships',
      imageSrc: '/images/team/antony-nyabuto.jpg',
      slug: 'antony-nyabuto',
    },
  ];

  // Data for Associate Fellows
  const associateFellows = [
    {
      name: 'Isaac Mureithi',
      designation: 'Oppenheimer Impact Scholar',
      imageSrc: '/images/team/isaac-mureithi.jpg',
      slug: 'isaac-mureithi',
    },
  ];

  return (
    <main className="bg-white text-[#050505]">
      {/* Hero Section */}
      <section className="relative bg-[#050505] text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 leading-tight">Our Leadership & Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet the dedicated individuals driving Nala Center&apos;s mission forward.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/who-we-are/leadership-team/${member.slug}`}
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
                <p className="text-gray-700 text-base">{member.designation}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Associate Fellows Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Associate Fellows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {associateFellows.map((fellow) => (
            <Link
              key={fellow.slug}
              href={`/who-we-are/leadership-team/${fellow.slug}`}
              className="group block rounded-lg shadow-md overflow-hidden bg-white transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={fellow.imageSrc}
                  alt={fellow.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1 text-[#050505]">{fellow.name}</h3>
                <p className="text-gray-700 text-sm">{fellow.designation}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
