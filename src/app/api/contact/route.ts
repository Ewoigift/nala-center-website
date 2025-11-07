// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'contact@nalacenter.org', // You'll change this after domain verification
      to: ['nalacenter254@gmail.com'], // Your Nala Center email
      replyTo: email, // User's email for easy reply
      subject: subject || `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f8f8;
              }
              .header {
                background-color: #050505;
                color: white;
                padding: 20px;
                text-align: center;
              }
              .content {
                background-color: white;
                padding: 30px;
                margin-top: 20px;
                border-radius: 5px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #050505;
                margin-bottom: 5px;
              }
              .value {
                color: #555;
              }
              .message-box {
                background-color: #f2eae4;
                padding: 15px;
                border-left: 4px solid #050505;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #888;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${subject ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the Nala Center website contact form.</p>
                <p>Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Message sent successfully! We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { message: 'Failed to send message. Please try again or contact us directly at nalacenter254@gmail.com' },
      { status: 500 }
    );
  }
}