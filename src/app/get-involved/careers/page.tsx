'use client';

// components/CareersPage.tsx

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Briefcase, UserRound } from 'lucide-react';

export default function CareersPage() {
  // Specify the type for the state that holds the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Specify the type for the ref to the file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  const heroImageSrc = '/images/get-involved/careers-hero.jpg'; // Replace with the actual image URL

  // Type the event from the file input element
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleSendEmail = () => {
    const subject = 'Expression of Interest for Nala Center';
    const body = 'Dear Nala Center, \n\nI am writing to express my interest in future career opportunities at your organization. Please find my CV attached.\n\nSincerely,\n[Your Name]';
    const mailtoLink = `mailto:nalacenter254@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="bg-white text-[#050505] relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden" aria-label="Hero section with careers at Nala Center">
        <Image
          src={heroImageSrc}
          alt="Careers at Nala Center"
          fill
          objectFit="cover"
          priority
          className="absolute inset-0 z-0 opacity-70"
        />

        <div className="absolute inset-0 bg-[#050505] bg-opacity-40 flex items-center justify-center z-10 p-4">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-3 drop-shadow-lg text-white">
              Careers at Nala Center
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-3xl mx-auto drop-shadow-md text-white">
              At Nala Center, we believe that ideas can shape societies, influence policies, and transform futures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <div className="bg-[#EBEBEB] rounded-xl p-8 md:p-12 mb-16 shadow-lg">
          <p className="text-lg leading-relaxed text-[#2F2F2F]">
            As a research and policy think tank, our strength lies in the dedication and expertise of our people. We bring together researchers, analysts, and practitioners who are passionate about addressing the most pressing issues of our time, from peace and security to governance, climate change, and human mobility.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#2F2F2F]">
            While we may not always have active vacancies, we are continually building a community of talented and committed individuals who share our vision. Joining Nala Center means becoming part of a dynamic environment where:
          </p>
          
          {/* Cards Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] rounded-xl p-8 shadow-md border border-[#EBEBEB] transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-[#050505] font-serif">Research meets impact</h3>
              </div>
              <p className="text-base leading-relaxed text-[#2F2F2F]">
                Our work is not just about generating knowledge, but also about driving meaningful policy conversations.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#FFFFFF] rounded-xl p-8 shadow-md border border-[#EBEBEB] transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-[#050505] font-serif">Collaboration is key</h3>
              </div>
              <p className="text-base leading-relaxed text-[#2F2F2F]">
                We foster an interdisciplinary culture, working with partners, institutions, and stakeholders across the region and beyond.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] rounded-xl p-8 shadow-md border border-[#EBEBEB] transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-[#050505] font-serif">Growth is encouraged</h3>
              </div>
              <p className="text-base leading-relaxed text-[#2F2F2F]">
                We value continuous learning and support personal and professional development.
              </p>
            </div>
          </div>
        </div>

        ---

        {/* Future Opportunities Section */}
        <div className="bg-[#EBEBEB] rounded-xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex items-center mb-6">
            <Briefcase size={40} className="text-[#050505] mr-4" />
            <h2 className="text-3xl font-bold font-serif text-[#050505]">Future Opportunities</h2>
          </div>
          <p className="text-lg leading-relaxed text-[#2F2F2F]">
            We periodically open positions for research fellows, policy analysts, program officers, and interns. If you are passionate about contributing to evidence-based policy and want to be part of a team shaping Africa’s future, we encourage you to check this page regularly for updates.
          </p>
        </div>

        {/* Expressions of Interest Section with CTA */}
        <div className="bg-[#2F2F2F] rounded-xl p-8 md:p-12 shadow-xl text-[#F9F9F9]">
          <div className="flex items-center mb-6 text-white">
            <UserRound size={40} className="mr-4" />
            <h2 className="text-3xl font-bold font-serif">Expressions of Interest</h2>
          </div>
          <p className="text-lg leading-relaxed mb-8">
            If you would like to be considered for future opportunities at Nala Center, you can share your CV and a brief statement of interest with us.
          </p>
          <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1 w-full flex flex-col items-start">
              <label htmlFor="cv-upload" className="text-sm font-semibold text-white mb-3">Upload your CV</label>
              <input 
                id="cv-upload" 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full text-sm text-[#F9F9F9] file:mr-4 file:py-3 file:px-6
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-white file:text-[#050505] hover:file:bg-[#EBEBEB]
                   transition-colors duration-300 cursor-pointer"
              />
              <p className="mt-4 text-sm italic">
                Note: Clicking "Send Your CV" will open your email client. Please manually attach the file before sending.
              </p>
            </div>
            <button
              onClick={handleSendEmail}
              className="w-full md:w-auto px-10 py-4 font-bold text-lg rounded-full shadow-lg transition-all duration-300 
                bg-gradient-to-r from-gray-300 to-white text-[#2F2F2F]
                hover:from-gray-400 hover:to-gray-200
                active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer"
            >
              Send Your CV
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}