// src/app/what-we-do/training/yea-2025/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { Calendar, MapPin, Users, Globe, Target, Lightbulb, Scale, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function YEA2025Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Workshop photos - 10 gallery photos (hero image is separate)
  const workshopPhotos = [
    '/images/workshops/yea-1.jpg',
    '/images/workshops/yea-2.jpg',
    '/images/workshops/yea-3.jpg',
    '/images/workshops/yea-4.jpg',
    '/images/workshops/yea-5.jpg',
    '/images/workshops/yea-6.jpg',
    '/images/workshops/yea-7.jpg',
    '/images/workshops/yea-8.jpg',
    '/images/workshops/yea-9.jpg',
    '/images/workshops/yea-10.jpg',
    '/images/workshops/yea-11.jpg'

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
      setCurrentImageIndex(prev => (prev + 1) % workshopPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [workshopPhotos.length]);

  const keyHighlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Largest Youth Assembly",
      description: "Over 500 young leaders from across the globe ahead of UNEA-7"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Triple Planetary Crisis",
      description: "Addressing climate change, biodiversity loss, and pollution"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Policy Innovation",
      description: "Sophisticated policy instrument beyond traditional activism"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Systemic Reform",
      description: "Blueprint for redesigning multilateral environmental governance"
    }
  ];

  const strategicPillars = [
    {
      title: "Reforming Environmental Governance",
      points: [
        "High-level task force for enhanced synergies between MEAs",
        "Clustering related conventions to reduce duplication",
        "Institutionalization of the science-policy interface",
        "Embedding scientific input directly into UNEA negotiations"
      ]
    },
    {
      title: "Economic Transformation",
      points: [
        "Fundamental reform of International Financial Architecture",
        "Innovative taxation: fossil fuel levies and financial transaction taxes",
        "Demand-side management to curb overconsumption",
        "Legally binding targets for absolute resource reduction"
      ]
    },
    {
      title: "Pollution Solutions",
      points: [
        "Legally binding, full-lifecycle global plastics treaty",
        "Cap on virgin plastic production",
        "Elimination of toxic additives",
        "Robust 'polluter pays' framework"
      ]
    },
    {
      title: "Biodiversity Protection",
      points: [
        "Legal 'protect-manage-restore' hierarchy",
        "Indigenous peoples as co-managers of ecosystems",
        "Integration of Traditional Ecological Knowledge",
        "Free, Prior, and Informed Consent (FPIC)"
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/workshops/yea-2025-hero.jpg"
            alt="Youth Environment Assembly 2025"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        
        {/* Photo Credit */}
        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-20">
          Photo Credit: Ahmed Nayim Yussuf / UNEP
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-block bg-[#7BB661] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Environmental Policy Workshop
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Youth Environment Assembly 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Global Youth Declaration on the Environment
            </p>
            
            {/* Event Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>29–30 November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>UNEP Headquarters, Nairobi</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500+ Young Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/what-we-do/training" className="text-[#7BB661] hover:underline flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          Back to Training & Workshops
        </Link>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#050505]">About the Assembly</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Over the weekend of November 29-30, 2025, the Children and Youth Major Group, through the Youth Environment Assembly (YEA), brought together young people and representatives from Multilateral Environmental Agreements and global institutions at the United Nations Environment Programme (UNEP) headquarters. This assembly marked a distinct shift in the tone of global environmental advocacy.
            </p>
            <p>
              Convening over 500 young leaders and representatives from across the globe, this gathering was not merely about protest—it was about legislating the future. As the largest assembly of its kind ahead of the upcoming seventh session of the United Nations Environment Assembly (UNEA-7), the event was driven by a theme that transcends traditional activism.
            </p>
            <p>
              Against a backdrop of geopolitical fragmentation and accelerating planetary instability, the youth constituency has moved beyond demanding a seat at the table. They have laid out a technical, structural blueprint to redesign the table itself. The resulting <em>Global Youth Declaration on the Environment 2025</em> is not a wishlist; it is a sophisticated policy instrument that confronts the &ldquo;crisis of international cooperation&ldquo; head-on.
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
                <div className="w-12 h-12 bg-[#7BB661] bg-opacity-10 rounded-full flex items-center justify-center text-[#7BB661] mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#050505]">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geopolitical Context */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#050505]">The Geopolitical Context</h2>
          <div className="bg-gradient-to-br from-[#7BB661] to-[#6a9e53] text-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg mb-4">
              The premise of the youth intervention is grounded in a stark realization: the multilateral order is facing &ldquo;eroding trust&ldquo; and &ldquo;rising geopolitical tensions.&ldquo; The Declaration notes that the world is off track on nearly all global goals, exacerbated by a financial architecture that traps the Global South in debt cycles.
            </p>
            <p className="text-lg mb-6">
              However, the youth analysis also identifies a window of opportunity. Citing the <em>Pact for the Future</em> and the <em>Declaration on Future Generations</em> adopted at the 2024 UN Summit, young leaders argue that multilateralism can remain a platform for transformation if it is grounded in &ldquo;equity, accountability, and intergenerational justice.&ldquo;
            </p>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg font-semibold">
                The challenge posed to UNEA-7 is to operationalize these high-level commitments into binding, systemic realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#050505]">Strategic Pillars of the Declaration</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#050505]">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#7BB661] mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Spotlight */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#050505]">Campaign Spotlight: #YouthtoBEATPOLLUTION</h2>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The weekend&apos;s proceedings heavily featured the <strong>#YouthtoBEATPOLLUTION</strong> campaign, emphasizing that pollution now causes one in six deaths globally. The youth position on pollution is absolute: the progress made in recent frameworks must be matched by a &ldquo;legally binding, full-lifecycle global plastics treaty.&ldquo;
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Crucially, the Declaration rejects downstream solutions as sufficient. It demands a cap on virgin plastic production and the elimination of toxic additives. This is paired with a call for a robust &ldquo;polluter pays&ldquo; framework, ensuring that those responsible for contamination bear the full costs of remediation and community care.
            </p>
            <div className="bg-[#7BB661] bg-opacity-10 border-l-4 border-[#7BB661] p-4">
              <p className="text-gray-700 font-semibold">
                The youth also introduced the <em>Global Waste Management Outlook for Youth</em> during the assembly—a technical document aimed at democratizing knowledge on circularity and waste reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-[#050505] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Assembly Gallery</h2>
          
          {/* Main Carousel */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <Image
                src={workshopPhotos[currentImageIndex]}
                alt={`Assembly photo ${currentImageIndex + 1}`}
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
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                title={`Thumbnail ${index + 1}`}
                aria-label={`View assembly photo ${index + 1}`}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 w-[120px] h-[80px] ${
                  index === currentImageIndex 
                    ? 'ring-4 ring-[#7BB661] scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
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

      {/* Key Takeaway Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#050505]">From Stakeholders to Partners</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The narrative emerging from Nairobi is one of maturation. Young people are no longer satisfied with being viewed as &ldquo;future stakeholders&ldquo;; they assert themselves as &ldquo;present-day partners in decision-making and implementation.&ldquo;
            </p>
            <p>
              The <em>Global Youth Declaration 2025</em> serves as a litmus test for UNEA-7. Will Member States continue with fragmented, incremental resolutions, or will they engage with the systemic reforms proposed by their youngest constituents?
            </p>
            <p className="text-xl font-semibold text-[#050505]">
              As the delegates prepare for the negotiations in December, the youth have made their position clear: the time for &ldquo;profound global uncertainty&ldquo; must end, replaced by a renewed, science-based, and equitable multilateralism.
            </p>
          </div>
          
          {/* External Links */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <a
              href="https://www.cymgenv.net/yea-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#7BB661] text-white p-4 rounded-lg hover:bg-[#6a9e53] transition-colors duration-300"
            >
              <span className="font-semibold">Visit YEA 2025 Website</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="https://www.unep.org/environmentassembly/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#6CAED9] text-white p-4 rounded-lg hover:bg-[#5a9bc4] transition-colors duration-300"
            >
              <span className="font-semibold">Learn About UNEA-7</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}