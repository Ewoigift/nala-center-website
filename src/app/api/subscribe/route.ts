// app/api/subscribe/route.ts (for App Router)
// OR pages/api/subscribe.ts (for Pages Router)

import { NextResponse } from 'next/server'; // For App Router
// For Pages Router, you'd use: import type { NextApiRequest, NextApiResponse } from 'next';

// --- IMPORTANT: Replace with your actual Mailchimp credentials ---
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY; // Store this in .env.local!
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID; // Store this in .env.local!
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us1', 'eu2'

// Basic validation for environment variables
if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
  console.error("Missing Mailchimp environment variables. Please check your .env.local file.");
  // In a real app, you might throw an error or return a 500 here
}

// For App Router:
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic server-side validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // Construct Mailchimp API URL
    const mailchimpApiUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(mailchimpApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`, // Use Bearer token for API key
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed', // 'subscribed', 'pending', 'cleaned', 'unsubscribed'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Check for specific Mailchimp error codes if needed (e.g., already subscribed)
      if (response.status === 200 && data.status === 'subscribed') {
        return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
      } else if (response.status === 200 && data.status === 'pending') {
        return NextResponse.json({ message: 'Subscription pending. Please confirm your email!' }, { status: 200 });
      } else if (data.title === 'Member Exists') {
        return NextResponse.json({ message: 'You are already subscribed!' }, { status: 409 }); // 409 Conflict
      } else {
        console.error('Mailchimp API error:', data);
        return NextResponse.json({ message: data.detail || 'Failed to subscribe.' }, { status: response.status });
      }
    } else {
      console.error('Mailchimp API request failed:', data);
      return NextResponse.json({ message: data.detail || 'Failed to subscribe.' }, { status: response.status });
    }

  } catch (error) {
    console.error('Server error during subscription:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}

