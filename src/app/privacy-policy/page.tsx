// src/app/privacy-policy/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `The Nala Center ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. As a knowledge-driven think tank advancing research, dialogue, and innovation on governance, gender, climate, and development in Africa and beyond, we value the trust you place in us when you engage with our work, visit our website, or participate in our events and initiatives. This Privacy Policy outlines how we collect, use, store, and protect your personal data, as well as your rights and choices regarding the information you share with us. By accessing or using our website or services, you consent to the terms of this Privacy Policy.`
    },
    {
      id: 'who-we-are',
      title: '2. Who We Are',
      content: `The Nala Center is an independent research and policy organization focused on fostering inclusive governance, leadership, and development across Africa. We operate in accordance with applicable data protection and privacy laws, including the EU General Data Protection Regulation (GDPR), the Kenya Data Protection Act (2019), and other relevant frameworks. Our contact details are provided in the "Contact Us" section.`
    },
    {
      id: 'information-collected',
      title: '3. Information We Collect',
      content: `We may collect and process the following categories of personal data:`,
      subsections: [
        {
          subtitle: 'a. Information You Provide to Us',
          items: [
            'Contact information: Name, email address, phone number, and organization/institution.',
            'Professional details: Title, position, and areas of research or professional interest.',
            'Event participation: Information provided when registering for or attending Nala Center events, workshops, or webinars.',
            'Publications and submissions: Content or materials you submit for publication, collaboration, or contribution to Nala Center platforms.',
            'Communication preferences: Feedback, inquiries, or correspondence sent to us via email or contact forms.'
          ]
        },
        {
          subtitle: 'b. Information Collected Automatically',
          intro: 'When you visit our website, we may automatically collect:',
          items: [
            'Usage data: IP address, browser type, device information, referring URLs, pages visited, and time spent on the site.',
            'Cookies and tracking technologies: Used to improve user experience, analyze trends, and personalize content (see Section 8 for more on Cookies).'
          ]
        },
        {
          subtitle: 'c. Information from Third Parties',
          intro: 'We may receive limited personal data from third-party partners, such as research collaborators, academic networks, or professional organizations, only for legitimate research or engagement purposes.'
        }
      ]
    },
    {
      id: 'how-we-use',
      title: '4. How We Use Your Information',
      content: `We use your personal information for the following purposes:`,
      items: [
        'Research and Analysis: To conduct, publish, and disseminate research aligned with our mission and areas of focus.',
        'Communication: To respond to inquiries, share updates, newsletters, and publications you subscribe to.',
        'Event Management: To process registrations, manage attendance, and follow up on participation.',
        'Website Optimization: To monitor and enhance the performance, usability, and security of our online platforms.',
        'Partnership and Networking: To identify and engage with partners, collaborators, and policy stakeholders.',
        'Legal and Compliance Purposes: To comply with applicable laws, regulations, and institutional obligations.'
      ],
      note: 'We do not sell, rent, or trade your personal data to third parties.'
    },
    {
      id: 'legal-basis',
      title: '5. Legal Basis for Processing (For GDPR Compliance)',
      content: `We process personal data based on one or more of the following lawful grounds:`,
      items: [
        'When you have given us clear permission to process your data.',
        'When processing is necessary for our legitimate research, communication, or operational activities.',
        'When processing is required to comply with the law.',
        'When necessary to fulfill obligations arising from your engagement with us (e.g., event participation).'
      ]
    },
    {
      id: 'data-sharing',
      title: '6. Data Sharing and Disclosure',
      content: `Your personal information may be shared in limited circumstances:`,
      items: [
        'Trusted third-party providers assisting in hosting, data analytics, or communication services under strict confidentiality obligations.',
        'In joint research or academic projects, only when necessary and in compliance with data protection standards.',
        'When required by law or government authorities to meet legal obligations or protect our rights.'
      ],
      note: 'All partners and third parties are bound by agreements that ensure the confidentiality and security of your data.'
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      content: `We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, or as required by law, accounting, or reporting obligations. When data is no longer needed, it will be securely deleted, anonymized, or archived for historical and research purposes in line with ethical research standards.`
    },
    {
      id: 'cookies',
      title: '8. Cookies and Tracking Technologies',
      content: `Our website uses cookies and similar technologies to enhance your experience. Cookies help us:`,
      items: [
        'Recognize repeat visitors',
        'Understand site usage trends',
        'Improve website functionality'
      ],
      note: 'You can manage or disable cookies through your browser settings. Note that some site features may not function properly without cookies.'
    },
    {
      id: 'data-security',
      title: '9. Data Security',
      content: `We take appropriate organizational and technical measures to safeguard your data from unauthorized access, loss, or misuse. These include:`,
      items: [
        'Secure servers and encrypted communications (SSL)',
        'Restricted data access to authorized personnel only',
        'Regular review of our data protection policies and IT systems'
      ],
      note: 'While we strive for high standards of data protection, no online system can guarantee absolute security.'
    },
    {
      id: 'your-rights',
      title: '10. Your Rights',
      content: `Depending on applicable laws, you may have the following rights regarding your personal data:`,
      items: [
        'Request access to the data we hold about you.',
        'Request correction of inaccurate or incomplete data.',
        'Request deletion of your personal data ("right to be forgotten").',
        'Request limits on how we use your data.',
        'Withdraw your consent at any time for processing activities based on consent.'
      ],
      note: 'To exercise these rights, please contact us as indicated in Section 12.'
    },
    {
      id: 'external-links',
      title: '11. Links to Other Websites',
      content: `Our website may contain links to third-party websites or social media platforms. We are not responsible for the content, security, or privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.`
    },
    {
      id: 'contact',
      title: '12. Contact Us',
      content: `For questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us:`,
      contact: {
        name: 'Nala Center',
        email: 'infor@nalacenter.org',
        website: 'nalacenter.org'
      }
    },
    {
      id: 'updates',
      title: '13. Updates to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or operational needs. The "Last Updated" date at the top of this page will be revised accordingly. We encourage you to review this page regularly for any updates.`
    },
    {
      id: 'commitment',
      title: '14. Commitment to Ethical Data Use',
      content: `As part of our institutional integrity, the Nala Center upholds transparency, inclusivity, and accountability in handling personal and research-related data. Our data management practices reflect our broader commitment to ethical research, open knowledge, and respect for the rights and dignity of all individuals who engage with our work.`
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#050505] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-[#6CAED9]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Your privacy matters to us. Learn how we protect and manage your personal information.
          </p>
          <p className="text-sm mt-6 text-gray-400">
            Last Updated: December 2024
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-[#f8f8f8] py-8 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto pb-2 hide-scrollbar">
            <span className="font-semibold whitespace-nowrap">Jump to:</span>
            {sections.slice(0, 6).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap hover:text-[#6CAED9] transition-colors duration-200"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#050505]">
                {section.title}
              </h2>
              
              {section.content && (
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
              )}

              {section.items && (
                <ul className="space-y-3 ml-6">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#6CAED9] mt-1.5">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6 mt-4">
                  {section.subsections.map((sub, index) => (
                    <div key={index} className="ml-4">
                      <h3 className="text-xl font-semibold mb-3 text-[#050505]">
                        {sub.subtitle}
                      </h3>
                      {sub.intro && (
                        <p className="text-gray-700 mb-2">{sub.intro}</p>
                      )}
                      {sub.items && (
                        <ul className="space-y-2 ml-6">
                          {sub.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#6CAED9] mt-1.5">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.contact && (
                <div className="bg-[#f8f8f8] p-6 rounded-lg mt-4">
                  <p className="font-semibold text-[#050505] mb-2">{section.contact.name}</p>
                  <p className="text-gray-700 mb-1">
                    Email: <a href={`mailto:${section.contact.email}`} className="text-[#6CAED9] hover:underline">
                      {section.contact.email}
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Website: <a href={`https://${section.contact.website}`} className="text-[#6CAED9] hover:underline" target="_blank" rel="noopener noreferrer">
                      {section.contact.website}
                    </a>
                  </p>
                </div>
              )}

              {section.note && (
                <div className="bg-blue-50 border-l-4 border-[#6CAED9] p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#6CAED9] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{section.note}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#6CAED9] to-[#5a9bc4] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Have Questions About Your Privacy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're here to help. If you have any concerns or questions about how we handle your data, please don't hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#6CAED9] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}