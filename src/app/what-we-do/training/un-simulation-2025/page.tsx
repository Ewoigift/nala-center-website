// src/app/what-we-do/training/un-simulation-2025/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { Calendar, MapPin, Users, Target, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

export default function UNSimulationPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Workshop photos - 10 gallery photos (hero image is separate)
  const workshopPhotos = [
    '/images/workshops/un-sim-1.jpg',
    '/images/workshops/un-sim-2.jpg',
    '/images/workshops/un-sim-3.jpg',
    '/images/workshops/un-sim-4.jpg',
    '/images/workshops/un-sim-5.jpg',
    '/images/workshops/un-sim-6.jpg',
    '/images/workshops/un-sim-7.jpg',
    '/images/workshops/un-sim-8.jpg',
    '/images/workshops/un-sim-9.jpg',
    '/images/workshops/un-sim-10.jpg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workshopPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + workshopPhotos.length) % workshopPhotos.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const keyHighlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Diplomacy",
      description: "Experience the inner workings of UN negotiations and multilateral cooperation"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "SDG Focus",
      description: "Deep dive into Sustainable Development Goals and their implementation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Learning",
      description: "Build negotiation and consensus-building skills through practice"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Facilitation",
      description: "Guided by Nala Center's team of researchers and practitioners"
    }
  ];

  const topics = [
    "Climate change adaptation strategies",
    "Sustainable governance frameworks",
    "Migration and human mobility",
    "Policy formulation and drafting",
    "Structured debate techniques",
    "Consensus-building mechanisms"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/workshops/un-simulation-hero.jpg"
            alt="UN Simulation Training"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-block bg-[#6CAED9] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Workshop Highlight
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              United Nations Simulation Training
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              SDG4Impact Conference & Green Gold Cup 2025
            </p>
            
            {/* Event Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>8–9 November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Strathmore University</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>University Students & Young Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/what-we-do/training" className="text-[#6CAED9] hover:underline flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          Back to Training & Workshops
        </Link>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#050505]">About the Workshop</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              As part of our broader mission to build capacity, foster leadership, and advance policy literacy among Africa's youth, the Nala Center delivered a dynamic and hands-on United Nations Simulation Training during the SDG4Impact Conference & Green Gold Cup 2025, held on 8–9 November 2025 at Strathmore University.
            </p>
            <p>
              This two-day program brought together passionate university students, young professionals, and emerging leaders committed to driving sustainable solutions within their communities. The simulation offered participants a rare opportunity to experience the inner workings of international diplomacy, model global negotiations, and understand the complex interplay between national interests, global agendas, and multilateral cooperation.
            </p>
            <p>
              Facilitated by Nala Center's team of researchers and practitioners, the training guided participants through every stage of a UN session—from drafting resolutions and formulating policy positions to deliberating global issues through structured debate and consensus-building. The exercise immersed learners in real-world diplomatic practice, strengthening their analytical, negotiation, and communication skills while promoting an appreciation for collaborative problem-solving and global citizenship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#050505]">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#6CAED9] bg-opacity-10 rounded-full flex items-center justify-center text-[#6CAED9] mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#050505]">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#050505]">Focus Areas & Topics</h2>
          <div className="bg-gradient-to-br from-[#6CAED9] to-[#5a9bc4] text-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg mb-6">
              Central to this year's simulation was the exploration of the Sustainable Development Goals (SDGs), particularly how nations and communities can align local actions with global ambitions for a more inclusive, peaceful, and climate-resilient future.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Participants deliberated on:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-[#050505] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Workshop Gallery</h2>
          
          {/* Main Carousel */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <Image
                src={workshopPhotos[currentImageIndex]}
                alt={`Workshop photo ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={100}
                className="transition-opacity duration-500"
              />
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#050505] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#050505] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentImageIndex + 1} / {workshopPhotos.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-4 justify-center overflow-x-auto pb-4 hide-scrollbar px-4">
            {workshopPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-4 ring-[#6CAED9] scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{ width: '120px', height: '80px' }}
              >
                <Image
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={75}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Partnership Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#050505]">Conference Context & Partnerships</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The training took place within the framework of the SDG4Impact Conference, a flagship initiative co-organized by the Strathmore Environmental and Sustainability Club, in partnership with the Young World Federalists, Tendet Foundation, and a network of sustainability-focused organizations. The event served as a platform for dialogue, innovation, and youth-driven advocacy on advancing the 2030 Agenda for Sustainable Development.
            </p>
            <p>
              Through engagements such as this, the Nala Center continues to reaffirm its role as a thought leader in experiential learning, capacity development, and policy innovation. Our approach bridges academic knowledge with practical skills, equipping Africa's next generation of changemakers with the tools, confidence, and global awareness needed to influence decision-making and shape sustainable futures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}