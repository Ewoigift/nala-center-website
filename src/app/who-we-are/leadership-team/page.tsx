// src/app/who-we-are/leadership-team/page.tsx
'use client';

import Image from "next/legacy/image";
import Link from 'next/link';
import { teamMembers } from '../../../data/leadershipTeam';

export default function LeadershipTeamPage() {
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
              <div className="relative w-full aspect-[3/4] overflow-hidden">
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

      {/* Call-to-action for Associate Fellows */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Meet Our Associate Fellows</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Explore the profiles of our dedicated Associate Fellows who contribute their expertise to our mission.
        </p>
        <Link href="/who-we-are/associate-fellows" className="inline-block bg-[#050505] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#2F2F2F] transition-colors duration-300">
          View Associate Fellows
        </Link>
      </section>
    </main>
  );
}