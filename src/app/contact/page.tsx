'use client';

import React, { useState } from 'react';
import Image from "next/legacy/image";

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus('error');
      setStatusMessage('Please fill in all required fields.');
      setTimeout(() => {
        setSubmissionStatus('idle');
        setStatusMessage('');
      }, 3000);
      return;
    }

    setSubmissionStatus('loading');
    setStatusMessage('Sending message...');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setTimeout(() => {
        setSubmissionStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <main className="bg-white text-[#050505]">
      {/* Hero Section */}
      <section className="relative bg-[#050505] text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 leading-tight">Get in Touch</h1>
            <p className="text-lg md:text-xl">
              We&apos;d love to hear from you. Reach out to us for inquiries, collaborations, or general questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="container mx-auto py-16 px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#050505] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <a 
              href="mailto:nalacenter254@gmail.com" 
              className="text-gray-600 hover:text-[#050505] transition-colors duration-200"
            >
              nalacenter254@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#050505] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <a 
              href="tel:+254718302179" 
              className="text-gray-600 hover:text-[#050505] transition-colors duration-200"
            >
              +254 718 302 179
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#050505] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">
              P.O. Box 25632-00100<br />
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#f8f8f8] p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold font-serif mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#050505] transition-all duration-200"
                  placeholder="John Doe"
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#050505] transition-all duration-200"
                  placeholder="john@example.com"
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#050505] transition-all duration-200"
                  placeholder="How can we help you?"
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#050505] transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="w-full bg-[#050505] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#2F2F2F] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <p className={`text-center ${
                  submissionStatus === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036057355!2d36.70730744863278!3d-1.3028617999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nala Center Location Map"
              />
            </div>

            {/* Social Media Section */}
            <div className="bg-[#f8f8f8] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-serif mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media to stay updated with our latest research, events, and insights.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://x.com/NalaCenter" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#050505] hover:text-[#2F2F2F] text-3xl transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a 
                  href="https://linkedin.com/company/nala-center/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#050505] hover:text-[#0077B5] text-3xl transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                  href="https://facebook.com/nala-center" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#050505] hover:text-[#1877F2] text-3xl transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a 
                  href="https://instagram.com/nalacenter_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#050505] hover:text-[#E4405F] text-3xl transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a 
                  href="https://wa.me/+254718302179" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#050505] hover:text-[#25D366] text-3xl transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#f8f8f8] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-serif mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#050505] to-[#2F2F2F] text-white py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg mb-8">
            Whether you're interested in our research, looking to partner with us, or have questions about our work, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nalacenter254@gmail.com"
              className="bg-white text-[#050505] py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Email Us
            </a>
            <a
              href="tel:+254718302179"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-[#050505] transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
