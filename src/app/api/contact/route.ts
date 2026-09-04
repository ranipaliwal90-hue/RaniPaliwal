import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      goal,
      preferredProgram,
      message,
    } = body;

    // Required fields
    if (!fullName || !phone) {
      return NextResponse.json(
        {
          error: 'Full name and phone number are required.',
        },
        { status: 400 }
      );
    }

    const info = await transporter.sendMail({
      // Sender
      from: `"Rani Paliwal | Being Fit" <${process.env.GMAIL_USER}>`,

      // recive
      to: 'ranipaliwal90@gmail.com',

      // Reply
      replyTo: email || process.env.GMAIL_USER,

      // Subject
      subject: `New Consultation Inquiry - ${fullName}`,

      // Plain text version
      text: `
New Consultation Inquiry

A new consultation request has been submitted through the Being Fit website.

Full Name: ${fullName}
Phone: ${phone}
Email: ${email || 'Not provided'}
Primary Goal: ${goal || 'Not provided'}
Preferred Program: ${preferredProgram || 'Not provided'}

Message:
${message || 'No message provided'}

Submitted from the Rani Paliwal / Being Fit website.
      `,

      // HTML version
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            color: #17251d;
            line-height: 1.6;
            max-width: 700px;
            margin: 0 auto;
          "
        >

          <h2 style="color: #0F5132; margin-bottom: 10px;">
            New Consultation Inquiry
          </h2>

          <p>
            A new consultation request has been submitted
            through the Being Fit website.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd;" />

          <p>
            <strong>Full Name:</strong><br />
            ${fullName}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email || 'Not provided'}
          </p>

          <p>
            <strong>Primary Goal:</strong><br />
            ${goal || 'Not provided'}
          </p>

          <p>
            <strong>Preferred Program:</strong><br />
            ${preferredProgram || 'Not provided'}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div
            style="
              background: #f4faf6;
              padding: 16px;
              border-radius: 10px;
              border: 1px solid #d8eee0;
              margin-bottom: 20px;
            "
          >
            ${message || 'No message provided'}
          </div>

          <hr style="border: 0; border-top: 1px solid #ddd;" />

          <p style="font-size: 13px; color: #666;">
            Submitted from the Rani Paliwal / Being Fit website.
          </p>

        </div>
      `,

      // Email client information
      headers: {
        'X-Mailer': 'Being Fit Website',
      },
    });

    // Terminal me confirmation dikhega
    console.log('====================================');
    console.log('EMAIL SENT SUCCESSFULLY');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
    console.log('====================================');

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('====================================');
    console.error('CONTACT API ERROR:', error);
    console.error('====================================');

    return NextResponse.json(
      {
        error: 'Something went wrong while sending the inquiry.',
      },
      { status: 500 }
    );
  }
}