// PolicyPapersPage.tsx
'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { Pen, FileText } from 'lucide-react';

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

// Data for policy papers based on the provided focus areas.
const policyPapers = [
  {
    title: "Advancing Peace and Security in the Great Lakes Region",
    summary: "This policy paper analyzes the key drivers of conflict and insecurity in the Great Lakes region and proposes a multi-faceted approach to promote sustainable peace and stability through diplomacy and community-led initiatives.",
    image: imagePaths[0 % imagePaths.length]
  },
  {
    title: "Strengthening Democratic Institutions and Civic Innovation",
    summary: "An exploration of new policy frameworks to enhance government transparency, civic participation, and the use of technology to foster a more resilient and inclusive democratic process.",
    image: imagePaths[1 % imagePaths.length]
  },
  {
    title: "Towards Equitable Economic Systems and Inclusive Development",
    summary: "This document outlines policy recommendations for creating equitable economic opportunities, reducing poverty, and fostering inclusive growth that benefits all segments of society, with a focus on youth and women.",
    image: imagePaths[2 % imagePaths.length]
  },
  {
    title: "Policy for Sustainable Energy and Climate Resilience",
    summary: "A comprehensive policy brief on accelerating the transition to renewable energy sources and building climate-resilient infrastructure to mitigate the effects of climate change in vulnerable communities.",
    image: imagePaths[3 % imagePaths.length]
  },
  {
    title: "Managing Migration and Protecting Human Rights",
    summary: "This paper examines regional migration trends and advocates for humanitarian policies that protect the rights of migrants, refugees, and internally displaced persons, while also promoting safe and orderly mobility.",
    image: imagePaths[4 % imagePaths.length]
  },
  {
    title: "Innovative Approaches to Youth Employment in East Africa",
    summary: "Exploring a mix of educational reforms, vocational training, and public-private partnerships to tackle high youth unemployment rates and foster a new generation of entrepreneurs.",
    image: imagePaths[5 % imagePaths.length]
  },
  {
    title: "Gender-Inclusive Policies for Post-Conflict Reconstruction",
    summary: "A policy brief highlighting the necessity of integrating gender-inclusive policies into post-conflict reconstruction efforts to ensure women's participation and address their specific needs for lasting peace.",
    image: imagePaths[6 % imagePaths.length]
  },
];

export default function PolicyPapersPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#2F2F2F] p-6 sm:p-10">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#050505]">
          Policy Papers
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our policy papers provide data-driven insights and strategic recommendations to inform policymakers and stakeholders on key issues affecting Africa&apos;s development and stability.
        </p>
      </header>

      <section className="p-6 md:p-10 rounded-xl bg-[#EBEBEB]">
        <div className="flex items-center gap-3 mb-6">
          <Pen className="w-8 h-8 text-[#017325]" />
          <h2 className="text-3xl font-bold text-[#050505]">Our Key Policy Insights</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyPapers.map((paper, i) => (
            <div key={i} className="flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]">
              <Image
                src={paper.image}
                alt={`Image for ${paper.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-[#050505] mb-2">
                    {paper.title}
                  </h3>
                  <p className="mt-2 text-base text-[#2F2F2F] line-clamp-3">
                    {paper.summary}
                  </p>
                </div>
                <Link href="#" className="text-[#017325] font-medium inline-flex items-center mt-4 hover:underline">
                  <FileText className="w-4 h-4 mr-2" />
                  Read Policy Paper
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
