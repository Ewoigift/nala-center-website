// ResearchAndPublicationsPage.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, BookOpen, Layers } from 'lucide-react';

// List of provided image paths to be used alternately
const imagePaths = [
  '/images/demo2_image.jpeg',
  '/images/demo1_image.jpeg',
  '/images/what-we-do/research-publication.jpg',
  '/images/get-involved/demo_image.jpg',
  '/images/what-we-do/multimedia-hub.jpg',
  '/images/focus-areas/democracy-governance.jpg',
  '/images/focus-areas/peace-security.jpg',
  '/images/focus-areas/economic-systems.jpg'
];

// Dummy data for publications and articles based on Nala Center's potential focus areas.
const researchPapers = [
  {
    title: "Governance and Institutional Strengthening in East Africa",
    date: "2025-08-01",
    summary: "This paper analyzes the current state of governance in the East African region and provides a framework for institutional strengthening to promote stability and development.",
    thumbnail: imagePaths[0 % imagePaths.length]
  },
  {
    title: "The Impact of Climate Change on Regional Security Dynamics",
    date: "2025-07-28",
    summary: "An in-depth look into how climate change is affecting resource availability and security, leading to potential conflicts and displacement across the continent.",
    thumbnail: imagePaths[1 % imagePaths.length]
  },
  {
    title: "Digital Transformation and Youth Empowerment in the Sahel",
    date: "2025-07-25",
    summary: "Exploring the opportunities and challenges of digital technology as a tool for economic empowerment and political participation among young people in the Sahel.",
    thumbnail: imagePaths[2 % imagePaths.length]
  },
  {
    title: "Conflict Resolution Mechanisms in Fragile States",
    date: "2025-07-20",
    summary: "A study on the effectiveness of traditional and modern conflict resolution mechanisms, with case studies from various fragile states.",
    thumbnail: imagePaths[3 % imagePaths.length]
  },
  {
    title: "Policy Frameworks for Sustainable Land Use Management",
    date: "2025-07-15",
    summary: "This document outlines a series of policy recommendations aimed at fostering sustainable land use practices and preventing land-related conflicts.",
    thumbnail: imagePaths[4 % imagePaths.length]
  },
  {
    title: "Enhancing Transparency and Accountability in Public Finance",
    date: "2025-07-10",
    summary: "An investigation into public finance management systems, with a focus on improving transparency and reducing corruption to build public trust.",
    thumbnail: imagePaths[5 % imagePaths.length]
  },
];

const articles = [
  {
    title: "The Role of Civil Society in Democratic Transition",
    author: "Nala Center Team",
    date: "2025-08-03",
    summary: "An opinion piece on the vital role of civil society organizations in advocating for human rights and supporting democratic processes during periods of transition.",
    thumbnail: imagePaths[6 % imagePaths.length]
  },
  {
    title: "A Glimpse into Africa's Urbanization Challenge",
    author: "Akinyi Ochieng",
    date: "2025-07-30",
    summary: "This article discusses the rapid pace of urbanization in Africa and the need for inclusive, sustainable urban planning to address infrastructure and social needs.",
    thumbnail: imagePaths[7 % imagePaths.length]
  },
  {
    title: "Rethinking National Security in the Age of Cybersecurity",
    author: "Nala Center Fellow",
    date: "2025-07-26",
    summary: "An analysis of the evolving nature of security threats, from traditional conflicts to the rise of cyber warfare and digital espionage.",
    thumbnail: imagePaths[8 % imagePaths.length]
  },
  {
    title: "Fostering Regional Economic Integration for Shared Prosperity",
    author: "Mwangi Kamau",
    date: "2025-07-22",
    summary: "A look at the barriers and opportunities for regional economic integration, emphasizing the potential for shared growth and poverty reduction.",
    thumbnail: imagePaths[9 % imagePaths.length]
  },
  {
    title: "Building Resilience: A Community-Led Approach",
    author: "Nala Center Team",
    date: "2025-07-18",
    summary: "This piece highlights the importance of community-led initiatives in building resilience against external shocks, such as natural disasters and economic downturns.",
    thumbnail: imagePaths[10 % imagePaths.length]
  },
  {
    title: "Policy Advocacy for Gender-Inclusive Peace Processes",
    author: "Nala Center Researcher",
    date: "2025-07-14",
    summary: "Discussing the crucial role of including women and gender perspectives in peace negotiations to ensure more sustainable and equitable outcomes.",
    thumbnail: imagePaths[11 % imagePaths.length]
  },
];

export default function ResearchAndPublicationsPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#2F2F2F] p-6 sm:p-10">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#050505]">
          Research & Publications
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore our extensive library of research papers, articles, and publications that drive our work and inform policy.
        </p>
      </header>

      {/* Section for Research Papers */}
      <section className="p-6 md:p-10 rounded-xl mb-12 bg-[#EBEBEB]">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-[#3A9D23]" />
          <h2 className="text-3xl font-bold text-[#050505]">Research Papers</h2>
        </div>
        <p className="mb-8 max-w-3xl">
          Our comprehensive research papers provide in-depth analysis on a variety of topics, offering data-driven insights and evidence-based recommendations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, i) => (
            <div key={i} className="flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]">
              <Image
                src={paper.thumbnail}
                alt={`Thumbnail for ${paper.title}`}
                width={600}
                height={400}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-[#050505] mb-1">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Date: {paper.date}
                  </p>
                  <p className="mt-2 text-base text-[#2F2F2F] line-clamp-3">
                    {paper.summary}
                  </p>
                </div>
                <Link href="#" className="text-[#3A9D23] font-medium inline-flex items-center mt-4 hover:underline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section for Articles and Publications */}
      <section className="p-6 md:p-10 rounded-xl bg-[#EBEBEB]">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-8 h-8 text-[#3A9D23]" />
          <h2 className="text-3xl font-bold text-[#050505]">Articles & Publications</h2>
        </div>
        <p className="mb-8 max-w-3xl">
          A collection of articles, blog posts, and insightful publications from our team on current events and emerging trends.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div key={i} className="flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]">
              <Image
                src={article.thumbnail}
                alt={`Thumbnail for ${article.title}`}
                width={600}
                height={400}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-[#050505] mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Author: {article.author} | {article.date}
                  </p>
                  <p className="mt-2 text-base text-[#2F2F2F] line-clamp-3">
                    {article.summary}
                  </p>
                </div>
                <Link href="#" className="text-[#3A9D23] font-medium inline-flex items-center mt-4 hover:underline">
                  <FileText className="w-4 h-4 mr-2" />
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
