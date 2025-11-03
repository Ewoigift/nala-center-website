'use client';

import React, { useState } from 'react';
import { CheckCircle, Zap, Cpu, Users, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MembershipPage() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    const subject = 'Membership Inquiry for Nala Center';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\n${formData.message}`;
    const mailtoLink = `mailto:nalacenter254@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('submitting');
    setTimeout(() => {
      window.location.href = mailtoLink;
      setFormStatus('success');
      setStatusMessage("We've opened your email client with a prepared message.");
    }, 1200);
  };

  const benefitCategories = [
    {
      icon: Zap,
      title: '1. Find Opportunities, Create Impact',
      description: 'Your involvement directly translates into actionable change and career-defining collaborations.',
      benefits: [
        'Access <span class="highlight">member-only calls</span> for prestigious research fellowships, collaborative projects, and small grants designed to fund and amplify your independent or joint work with Nala Center.',
        'Contribute to <span class="highlight">high-level policy task forces</span>, advisory groups, and government consultations where Nala Center is engaged.',
        'Engage in <span class="highlight">exclusive peer-review cycles</span> ensuring your expertise shapes final policy recommendations.',
      ],
    },
    {
      icon: Cpu,
      title: '2. Sharpen Your Expertise',
      description: 'Stay ahead with cutting-edge analysis and continuous professional development resources.',
      benefits: [
        'Receive <span class="highlight">early-access, embargoed copies</span> of major Nala Center reports and insightful publications.',
        'Enjoy <span class="highlight">free or discounted registration</span> for specialized masterclasses, executive workshops, and seminars.',
        'Access a <span class="highlight">member-only digital repository</span> of readings, methodologies, and case studies.',
        'Opportunities for <span class="highlight">one-on-one briefings</span> with senior fellows and research directors.',
      ],
    },
    {
      icon: Users,
      title: '3. Expand Your Network',
      description: 'Connect with Africa’s most influential thinkers, policymakers, and innovators.',
      benefits: [
        'Attend <span class="highlight">member-only dialogues, private receptions, and regional convenings</span>.',
        'Access a <span class="highlight">secure, searchable directory</span> of all Nala Center members for peer collaboration.',
        'Join <span class="highlight">small-group mentorship forums</span> connecting emerging and established leaders.',
        'Receive invitations to <span class="highlight">closed-door high-level symposia and global conferences</span>.',
      ],
    },
  ];

  return (
    <main className="bg-[#FFFFFF] text-[#2F2F2F] font-[Source Sans Pro]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
        <Image
          src="/images/get-involved/membership-hero.jpg"
          alt="Professionals discussing policy development"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/70 to-[#1F1F1F]/90"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white max-w-3xl px-6"
        >
         
          <h1 className="font-[Cormorant Garamond] text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
            Nala Center Membership
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Elevate your career, expand your professional network, and reach a higher standard of intellectual and professional excellence.
          </p>
          <a
            href="#inquiry-form"
            className="inline-block bg-[#3A9D23] text-white font-[Satoshi] px-6 py-3 rounded-full text-sm uppercase tracking-wide shadow-md hover:bg-[#2E7C1B] transition-all"
          >
            Join Today
          </a>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-[#EBEBEB]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[Cormorant Garamond] text-4xl font-bold text-[#050505] mb-8">
            The Power and Prestige of Nala Center Membership
          </h2>
          <p className="text-lg leading-relaxed text-[#2F2F2F]">
            Nala Center membership is a mark of purpose and intellectual rigor. It signifies your profound commitment to advancing knowledge, integrity, and impactful thought leadership across Africa and the global stage. As part of an exclusive, vibrant collective of scholars, practitioners, policymakers, and innovators, Nala members are essential in shaping critical discourse, driving impactful, evidence-based research, and promoting ethical, inclusive, and sustainable solutions for society&apos;s most pressing challenges.
            <strong> Your membership isn&apos;s just an affiliation; it&apos;s a direct investment in building a better future through informed policy and actionable insights.</strong>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#EBEBEB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Cormorant Garamond] text-4xl font-bold text-center text-[#050505] mb-12">
            Exclusive Membership Benefits
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-[#2F2F2F]">
            Our benefits ensure your professional journey is enriched, your expertise sharpened, and your influence amplified across three critical pillars:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefitCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[#EBEBEB] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_40px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
              >
                <cat.icon className="w-10 h-10 text-[#3A9D23] mb-4" />
                <h3 className="font-[Cormorant Garamond] text-2xl font-bold text-[#050505] mb-3">
                  {cat.title}
                </h3>
                <p className="italic text-[#1F1F1F] mb-6">{cat.description}</p>
                <ul className="space-y-3">
                  {cat.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start text-base text-[#2F2F2F]">
                      <CheckCircle className="w-5 h-5 text-[#3A9D23] mr-3 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="inquiry-form" className="py-24 px-6 lg:px-12 bg-[#1F1F1F] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[Cormorant Garamond] text-4xl font-bold text-[#3A9D23] mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Start shaping Africa&apos;s future today. Fill in your details and we will contact you to discuss your membership options.
          </p>

          <form
            onSubmit={handleSendEmail}
            className="bg-[#050505] p-8 rounded-2xl shadow-2xl space-y-6 border border-[#2F2F2F]"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-300 font-[Satoshi]">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-[#3A9D23]/30 focus:ring-2 focus:ring-[#3A9D23] text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300 font-[Satoshi]">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-[#3A9D23]/30 focus:ring-2 focus:ring-[#3A9D23] text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm mb-2 text-gray-300 font-[Satoshi]">
                Organization (Optional)
              </label>
              <input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-[#3A9D23]/30 focus:ring-2 focus:ring-[#3A9D23] text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-300 font-[Satoshi]">
                Message / Area of Interest *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1F1F1F] border border-[#3A9D23]/30 focus:ring-2 focus:ring-[#3A9D23] text-white"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full py-3 rounded-lg font-[Satoshi] font-bold transition-all flex justify-center items-center space-x-2 shadow-md ${
                formStatus === 'submitting'
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-[#3A9D23] text-white hover:bg-[#2E7C1B]'
              }`}
            >
              {formStatus === 'submitting' ? (
                <>
                  <Clock className="w-5 h-5 animate-spin" /> <span>Preparing...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" /> <span>Send Membership Inquiry</span>
                </>
              )}
            </button>

            <p className="text-sm text-gray-400 italic mt-3">
              Clicking will open your default email client with a pre-filled message.
            </p>
          </form>

          {statusMessage && (
            <div
              className={`mt-6 p-4 rounded-lg text-center font-medium ${
                formStatus === 'success'
                  ? 'bg-green-700 text-white border border-green-500'
                  : 'bg-red-700 text-white border border-red-500'
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .highlight {
          font-weight: 600;
          color: #3A9D23;
          background-color: #EBEBEB;
          padding: 0.1em 0.25em;
          border-radius: 0.25rem;
        }
      `}</style>
    </main>
  );
}
