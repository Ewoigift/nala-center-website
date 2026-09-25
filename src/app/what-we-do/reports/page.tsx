'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { BookOpen, Download, CalendarDays, Tag } from 'lucide-react';

const primaryColor = "#6CAED9";
const textColor = "#2F2F2F";
const headingColor = "#050505";
const sectionBgColor = "#F9F9F9";
const cardBgColor = "#FFFFFF";

const reports = [
  {
    title: "Kenya's Peace and Security Diplomacy: Gains and Gaps",
    summary: "Informed by a youth dialogue held at the Konrad Adenauer Stiftung Kenya office, this brief assesses Kenya's peace and security diplomacy against the commitments of Sessional Paper No. 1 of 2025, examining its record in Sudan, South Sudan, the eastern DRC, Somalia and Haiti. It finds that Kenya's challenge is not a shortage of diplomatic assets but a shortage of institutional machinery to convert them into durable outcomes, and recommends a permanent mediation support unit, transparent intervention criteria, and a national action plan on youth, peace and security.",
    date: "August 2026",
    category: "Peace & Security",
    image: "/images/policy-briefs/kenya-peace-security-diplomacy.jpg",
    pdfLink: "/uploads/peace-security/Nala-Center-Policy-Brief-003.pdf",
    author: "Youth in Governance and Global Affairs, Nala Center & MuemAction Post"
  }
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen font-sans bg-white p-6 sm:p-10">
      <header className="mb-12 text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[${headingColor}]`}>
          Reports & Publications
        </h1>
        <p className={`text-lg max-w-3xl mx-auto text-[${textColor}]`}>
          Explore our extensive collection of research, case studies, policy briefs, and annual reports. Our publications provide data-driven insights and analysis to inform policymakers, researchers, and the public.
        </p>
      </header>

      <section className={`p-6 md:p-10 rounded-xl bg-[${sectionBgColor}] mb-12`}>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, i) => (
            <div key={`report-${i}`} className={`flex flex-col bg-[${cardBgColor}] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl`}>
              <Image
                src={report.image}
                alt={`Image for ${report.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover object-top rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-semibold text-xl mb-2 text-[${headingColor}]`}>{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    By {report.author}
                  </p>
                  <p className={`mt-2 text-base text-[${textColor}] line-clamp-4`}>
                    {report.summary}
                  </p>
                </div>
                <div className="mt-4 text-sm text-gray-500 flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-gray-400" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span>{report.category}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <Link 
                    href={report.pdfLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[${primaryColor}] font-medium inline-flex items-center hover:underline transition-all duration-300`}
                  >
                    <BookOpen className="w-4 h-4 mr-2" /> Read Brief
                  </Link>
                  <Link 
                    href={report.pdfLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className={`bg-[${primaryColor}] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-transform transform hover:scale-105`}
                  >
                    <Download className="w-4 h-4" /> Download
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className={`text-center p-8 bg-[${primaryColor}] rounded-xl text-white`}>
        <h2 className="text-3xl font-bold mb-4">
          Looking for a Specific Report?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          If you can&apos;t find what you&apos;re looking for, please get in touch with our team.
        </p>
        <Link href="#" className={`bg-white text-[${primaryColor}] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105`}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}