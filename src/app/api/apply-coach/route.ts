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
      area,
      phone,
      previousWork,
      workType,
      workPreference,
      careerReason,
    } = body;

    // Required fields
    if (!fullName || !area || !phone) {
      return NextResponse.json(
        {
          error: 'Full name, area and phone number are required.',
        },
        { status: 400 }
      );
    }

    const info = await transporter.sendMail({
      // Sender
      from: `"Rani Paliwal | Being Fit" <${process.env.GMAIL_USER}>`,

      // Receiver
      to: 'ranipaliwal90@gmail.com',

      // Subject
      subject: `New Coach Application - ${fullName}`,

      // Plain text version
      text: `
New Coach Application

A new coach application has been submitted through the Being Fit website.

Full Name: ${fullName}
Area: ${area}
Phone: ${phone}

Previous Work:
${previousWork || 'Not provided'}

Work Type:
${workType || 'Not provided'}

Work Preference:
${workPreference || 'Not provided'}

Why do you want to build a career around helping others?
${careerReason || 'Not provided'}

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
            New Coach Application
          </h2>

          <p>
            A new coach application has been submitted
            through the Being Fit website.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd;" />

          <p>
            <strong>Full Name:</strong><br />
            ${fullName}
          </p>

          <p>
            <strong>Area:</strong><br />
            ${area}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Previous Work:</strong><br />
            ${previousWork || 'Not provided'}
          </p>

          <p>
            <strong>Work Type:</strong><br />
            ${workType || 'Not provided'}
          </p>

          <p>
            <strong>Work Preference:</strong><br />
            ${workPreference || 'Not provided'}
          </p>

          <p>
            <strong>
              Why do you want to build a career around helping others?
            </strong>
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
            ${careerReason || 'Not provided'}
          </div>

          <hr style="border: 0; border-top: 1px solid #ddd;" />

          <p style="font-size: 13px; color: #666;">
            Submitted from the Rani Paliwal / Being Fit website.
          </p>

        </div>
      `,

      headers: {
        'X-Mailer': 'Being Fit Website',
      },
    });

    console.log('====================================');
    console.log('COACH APPLICATION EMAIL SENT');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
    console.log('====================================');

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('====================================');
    console.error('APPLY COACH API ERROR:', error);
    console.error('====================================');

    return NextResponse.json(
      {
        error: 'Something went wrong while submitting the application.',
      },
      { status: 500 }
    );
  }
}