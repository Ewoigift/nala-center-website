// ReportsPage.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, FileText, Download, CalendarDays, Tag } from 'lucide-react';

const primaryColor = "#6CAED9";
const textColor = "#2F2F2F";
const headingColor = "#050505";
const sectionBgColor = "#F9F9F9";
const cardBgColor = "#FFFFFF";

// Data for example reports
const reports = [
  {
    title: "Annual Report 2023: Bridging Divides",
    summary: "An in-depth look at our initiatives, financial performance, and impact across peacebuilding and governance projects in the past year.",
    date: "January 20, 2024",
    category: "Annual Reports",
    image: "https://placehold.co/600x400/D0F0C0/050505?text=Annual+Report+2023"
  },
  {
    title: "Case Study: Community-Led Peacebuilding in Rural Regions",
    summary: "This study examines the effectiveness of a community-centric approach to conflict resolution in an ethnically diverse region.",
    date: "November 15, 2023",
    category: "Case Studies",
    image: "https://placehold.co/600x400/B8C4B4/050505?text=Case+Study"
  },
  {
    title: "Policy Brief: Youth Engagement in Democratic Processes",
    summary: "A brief outlining key policy recommendations to increase youth participation and representation in local and national governance.",
    date: "September 30, 2023",
    category: "Policy Briefs",
    image: "https://placehold.co/600x400/C5D8A4/050505?text=Policy+Brief"
  },
  {
    title: "Research Paper: The Role of Digital Media in Civic Advocacy",
    summary: "Explores how civil society organizations are leveraging digital platforms to mobilize support and influence public policy in the digital age.",
    date: "August 5, 2023",
    category: "Research",
    image: "https://placehold.co/600x400/B9D9EB/050505?text=Research+Paper"
  },
  {
    title: "Impact Assessment: Entrepreneurship Program 2022",
    summary: "Analyzes the short-term and long-term impact of our entrepreneurship training program on women and youth-owned businesses.",
    date: "June 12, 2023",
    category: "Impact Reports",
    image: "https://placehold.co/600x400/AEC6A5/050505?text=Impact+Report"
  },
  {
    title: "Whitepaper: Sustainable Development in Post-Conflict Economies",
    summary: "A detailed whitepaper proposing a framework for economic recovery and sustainable growth in economies affected by conflict.",
    date: "May 1, 2023",
    category: "Whitepapers",
    image: "https://placehold.co/600x400/A0D2DB/050505?text=Whitepaper"
  },
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
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-semibold text-xl mb-2 text-[${headingColor}]`}>{report.title}</h3>
                  <p className={`mt-2 text-base text-[${textColor}] line-clamp-3`}>
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
                  <Link href="#" className={`text-[${primaryColor}] font-medium inline-flex items-center hover:underline transition-all duration-300`}>
                    <BookOpen className="w-4 h-4 mr-2" /> Read More
                  </Link>
                  <Link href="#" className={`bg-[${primaryColor}] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-transform transform hover:scale-105`}>
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
          If you can't find what you're looking for, please get in touch with our team.
        </p>
        <Link href="#" className={`bg-white text-[${primaryColor}] px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105`}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
