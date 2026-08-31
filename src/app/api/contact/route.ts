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

    if (!fullName || !phone) {
      return NextResponse.json(
        {
          error: 'Full name and phone number are required.',
        },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      // Client ki Gmail se email jayegi
      from: `Rani Paliwal <${process.env.GMAIL_USER}>`,

      // Client ko email receive hogi
      to: process.env.GMAIL_USER,

      // Client Reply karega to user ko reply jayega
      replyTo: email || undefined,

      subject: `New Consultation Inquiry - ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; color: #17251d; line-height: 1.6; max-width: 700px; margin: 0 auto;">

          <h2 style="color: #0F5132;">
            New Consultation Inquiry
          </h2>

          <p>
            A new consultation request has been submitted
            through the Being Fit website.
          </p>

          <hr />

          <p>
            <strong>Full Name:</strong>
            ${fullName}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Email:</strong>
            ${email || 'Not provided'}
          </p>

          <p>
            <strong>Primary Goal:</strong>
            ${goal || 'Not provided'}
          </p>

          <p>
            <strong>Preferred Program:</strong>
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
            "
          >
            ${message || 'No message provided'}
          </div>

          <hr />

          <p style="font-size: 13px; color: #666;">
            Submitted from the Rani Paliwal / Being Fit website.
          </p>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      {
        error: 'Something went wrong while sending the inquiry.',
      },
      { status: 500 }
    );
  }
}