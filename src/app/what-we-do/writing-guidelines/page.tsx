// src/app/what-we-do/writing-guidelines.tsx
'use client';

import React from 'react';
import { BookOpen, Edit, FileText, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function WritingGuidelinesPage() {
  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .prose h2 { @apply text-3xl font-extrabold mt-10 mb-4 text-[#050505] border-b-2 border-[#6CAED9]/50 pb-2; }
        .prose h3 { @apply text-2xl font-bold mt-8 mb-3 text-[#4BA3A0]; }
        .prose p { @apply text-lg leading-relaxed mb-4 text-gray-700; }
        .prose ul { @apply list-disc pl-5 space-y-2 mb-6; }
        .prose li { @apply text-lg text-gray-700; }
        .prose strong { @apply text-[#050505] font-semibold; }
      `}</style>

      <main className="bg-white text-[#050505] min-h-screen">
        
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gray-900 flex items-center justify-center overflow-hidden shadow-lg">
          <Image
            src="/images/what-we-do/style-guide-hero.jpg"
            alt="Stylized image of a typewriter and a magnifying glass"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3 drop-shadow-md">
              Nala Center Style Guide
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-sm">
              A Comprehensive Framework for Clear, Consistent, and Credible Policy Writing.
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-16">
          
          {/* Introduction */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl shadow-inner border-l-4 border-[#4BA3A0]">
            <h2 className="3xl font-bold mb-4 text-[#050505]">Introduction</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to the Nala Center&apos;s official Writing Style Guide. Our mission is to produce insightful, evidence-based research that informs policy, shapes public discourse, and drives sustainable progress across Africa. Our writing is the primary vehicle for our impact, translating complex research into clear, compelling narratives that resonate with decision-makers and the public.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 font-semibold">
              Adherence to these standards strengthens the Nala Center&apos;s brand and solidifies our reputation as an authoritative, trusted, and indispensable voice in policy and development.
            </p>
            
            <h3 className="text-xl font-bold mt-6 text-[#6CAED9]">Who We Are Writing For</h3>
            <p className="text-base text-gray-600">
              Our primary audience consists of policymakers, civil servants, academics, journalists, business leaders, and civil society organizations. The goal is to empower every reader with knowledge.
            </p>
          </section>

          {/* Part 1: Voice & Tone (Updated Layout) */}
          <section className="p-8 bg-gray-50 rounded-xl shadow-md border-l-4 border-[#4BA3A0]">
            <h2 className="text-3xl font-extrabold text-[#050505] mb-6">
              Part 1: The Nala Center Voice & Tone
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Our voice reflects our core values. It should always be:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Authoritative & Evidence-Based */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#4BA3A0] mb-4">
                  Authoritative & Evidence-Based
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Do:</strong> State findings directly. Use strong, active verbs.</li>
                  <li><strong>Don&apos;t:</strong> Use weak or hedging language.</li>
                </ul>
              </div>

              {/* Accessible & Clear */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#6CAED9] mb-4">
                  Accessible & Clear
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Do:</strong> Define technical terms upon first use. Use analogies.</li>
                  <li><strong>Don&apos;t:</strong> Use jargon or buzzwords without explanation.</li>
                </ul>
              </div>

              {/* Objective & Non-Partisan */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#4BA3A0] mb-4">
                  Objective & Non-Partisan
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Do:</strong> Present findings in a balanced, neutral tone. Attribute opinions clearly.</li>
                  <li><strong>Don&apos;t:</strong> Use emotive or politically charged language.</li>
                </ul>
              </div>

              {/* Constructive & Forward-Looking */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-[#6CAED9] mb-4">
                  Constructive & Forward-Looking
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Do:</strong> Empower readers with actionable recommendations.</li>
                  <li><strong>Don&apos;t:</strong> Dwell excessively on problems without solutions.</li>
                </ul>
              </div>

              {/* Respectful & Context-Aware */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 md:col-span-2">
                <h3 className="text-xl font-bold text-[#4BA3A0] mb-4">
                  Respectful & Context-Aware
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Do:</strong> Use specific, people-first language. Acknowledge Africa’s diversity.</li>
                  <li><strong>Don&apos;t:</strong> Use homogenizing terms like &quot;sub-Saharan Africa&quot; without explanation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Part 2 */}
          <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 mt-12">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 mr-3 text-[#6CAED9]" />
              <h2 className="text-3xl font-extrabold text-[#050505] my-0 border-none">
                Part 2: Structure and Argumentation
              </h2>
            </div>
            <div className="prose max-w-none">
              <p>A well-structured document guides the reader through a logical and persuasive argument.</p>
              <h3>The Anatomy of a Nala Center Publication</h3>
              <ul>
                <li><strong>Executive Summary:</strong> No more than one page summarizing the core research question, key findings, and recommendations.</li>
                <li><strong>Introduction:</strong> State the problem, outline methodology, and provide a clear thesis statement.</li>
                <li><strong>Body Paragraphs (The PEEL Method):</strong> Point, Evidence, Explanation, Link.</li>
                <li><strong>Conclusion & Recommendations:</strong> Recommendations must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound).</li>
              </ul>
            </div>
          </section>

          {/* Part 3 */}
<section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
  <div className="flex items-center mb-6">
    <Edit className="w-8 h-8 mr-3 text-[#4BA3A0]" />
    <h2 className="text-3xl font-extrabold text-[#050505] my-0 border-none">
      Part 3: Grammar, Punctuation, and Mechanics
    </h2>
  </div>
  <div className="prose max-w-none">
    <h3>Abbreviations and Acronyms</h3>
    <ul>
      <li>Spell out an acronym on its first appearance, followed by the acronym in parentheses.</li>
      <li>Avoid using acronyms if the term appears fewer than three times (Exception: UN, AU, GDP).</li>
    </ul>

    <h3>Capitalization</h3>
    <ul>
      <li><strong>Titles:</strong> Capitalize formal titles when they precede a name (e.g., President William Ruto). Do not capitalize when they follow a name or stand alone.</li>
      <li><strong>Institutions:</strong> Capitalize the full, formal names (e.g., the World Bank, the Paris Agreement).</li>
      <li><strong>Regions:</strong> Capitalize recognized geopolitical regions (e.g., East Africa, the Sahel) but not general directions (e.g., northern Ghana).</li>
    </ul>

    <h3>Numbers and Dates</h3>
    <ul>
      <li><strong>Numbers:</strong> Spell out numbers <strong>one through nine</strong>. Use numerals for <strong>10 and above</strong>. (Exception: Always use numerals for percentages, data points, and measurements). Use a comma for numbers with four or more digits (e.g., 1,500).</li>
      <li><strong>Dates:</strong> Use the format <strong>Month Day, Year</strong> (e.g., September 2, 2025). Do not use ordinals (e.g., &quot;September 2nd&quot;).</li>
      <li><strong>Currencies:</strong> On first mention, specify the currency using ISO codes (e.g., USD, KES, NGN).</li>
    </ul>

    <h3>Punctuation</h3>
    <ul>
      <li><strong>Serial (Oxford) Comma:</strong> Always use the serial comma in a list of three or more items.</li>
      <li><strong>Dashes:</strong> Em Dash (—) for breaks; En Dash (–) for ranges (e.g., 2023–2025).</li>
      <li><strong>Hyphens:</strong> Use for compound adjectives before a noun (e.g., &quot;a <strong>long-term</strong> strategy&quot;).</li>
    </ul>

    <h3>Spelling & Word Choice</h3>
    <ul>
      <li>Our primary dictionary is the <strong>Oxford English Dictionary</strong>. Use the <strong>&quot;-ise&quot;</strong> spelling (e.g., &quot;organise,&quot;&quot;analyse&quot;).</li>
      <li><strong>Nala Center</strong> is always two words with <strong>&quot;Center,&quot; not &quot;Centre.&quot;</strong></li>
    </ul>
  </div>
</section>
{/* Part 4 & 5 */}
<section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
  <div className="flex items-center mb-6">
    <CheckCircle className="w-8 h-8 mr-3 text-[#6CAED9]" />
    <h2 className="text-3xl font-extrabold text-[#050505] my-0 border-none">
      Part 4 & 5: Sourcing, Citations, and Digital Platforms
    </h2>
  </div>
  <div className="prose max-w-none">
    <h2>Sourcing and Citations</h2>
    <h3>Standard Style</h3>
    <ul>
      <li>The Nala Center uses the <strong>Chicago Manual of Style, 17th Edition (Author-Date)</strong> format.</li>
      <li><strong>In-text Citation Example:</strong> (Acemoglu and Robinson 2012).</li>
      <li><strong>Hyperlinks in Digital Content:</strong> For web articles and blogs, prioritize hyperlinking directly to the source material.</li>
      <li><strong>Figures and Tables:</strong> Must be numbered sequentially (Figure 1, Table 1) and include a descriptive title and a &quot;Source:&quot; line below.</li>
    </ul>

    <h2>Writing for Digital Platforms</h2>
    <ul>
      <li><strong>Search Engine Optimization (SEO):</strong> Include relevant keywords naturally in your title, headings, and introductory paragraph.</li>
      <li><strong>Be Scannable:</strong> Use <strong>bold text</strong> for emphasis, short paragraphs, headings, and bullet points.</li>
      <li><strong>Social Media:</strong> Maintain a professional and analytical tone on LinkedIn; be concise and impactful on X (formerly Twitter).</li>
      <li><strong>Accessibility:</strong> For all images published online, provide descriptive <strong>alternative text (&quot;alt text&quot;)</strong>.</li>
    </ul>
  </div>
</section>
{/* Part 6 */}
<section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
  <div className="flex items-center mb-6">
    <BookOpen className="w-8 h-8 mr-3 text-[#4BA3A0]" />
    <h2 className="text-3xl font-extrabold text-[#050505] my-0 border-none">
      Part 6: Publication and Review Process
    </h2>
  </div>
  <div className="prose max-w-none">
    <p>All Nala Center publications undergo a rigorous review process to ensure quality and accuracy:</p>
    <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
      <li><strong>First Draft:</strong> Author completes the draft according to this style guide.</li>
      <li><strong>Internal Peer Review:</strong> At least one Nala Center colleague reviews the draft for substance and methodology.</li>
      <li><strong>External Peer Review (for major reports):</strong> An external expert reviews the draft to validate findings and rigor.</li>
      <li><strong>Editorial Review:</strong> Communications team reviews grammar, style, formatting, and clarity.</li>
      <li><strong>Final Author Review & Approval:</strong> The author approves the final edited version.</li>
      <li><strong>Publication & Promotion:</strong> The piece is published and promoted by the communications team.</li>
    </ol>
  </div>
</section>

{/* Conclusion */}
<section className="mt-16 text-center">
  <p className="text-xl font-medium text-gray-700">
    This is a living document, subject to updates as language and conventions evolve. 
    We encourage feedback to ensure it remains a relevant and useful tool for our entire team.
  </p>
</section>

{/* Closing of bottom section */}
</div> {/* closes container */}
</main>
</>
  );
}
