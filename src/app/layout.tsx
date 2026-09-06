import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rani Paliwal | Health, Fitness & Nutrition Coach',
    template: '%s | Rani Paliwal Coach',
  },
  description:
    'Rani Paliwal is an ASN Certified Coach and Health & Wellness Consultant helping people transform their health through personalized fitness, nutrition and wellness guidance in Udaipur, Rajasthan.',
  keywords: [
    'Rani Paliwal',
    'Fitness Coach Udaipur',
    'Nutritionist Udaipur',
    'Health and Wellness Consultant',
    'ASN Certified Coach',
    'Personal Training Udaipur',
    'Weight Loss Coach',
    'Being Fit Club',
  ],
  authors: [{ name: 'Rani Paliwal' }],
  creator: 'Rani Paliwal',
  metadataBase: new URL('https://ranipaliwal.com'),
  openGraph: {
    title: 'Rani Paliwal | Health, Fitness & Nutrition Coach',
    description:
      'Transform your body and life with personalized fitness, nutrition and wellness guidance by ASN Certified Coach Rani Paliwal.',
    url: 'https://ranipaliwal.com',
    siteName: 'Rani Paliwal',
    images: [
      {
        url: '/being.png',
        width: 800,
        height: 800,
        alt: 'Rani Paliwal - Being Fit',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rani Paliwal | Health, Fitness & Nutrition Coach',
    description:
      'Personalized fitness, nutrition and wellness coaching by Rani Paliwal in Udaipur, Rajasthan.',
    images: ['/being.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rani Paliwal',
    jobTitle: 'ASN Certified Coach & Health & Wellness Consultant',
    telephone: '+919982011555',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    memberOf: {
      '@type': 'SportsActivityLocation',
      name: 'Being Fit',
      address: 'Bhuwana, Udaipur, Rajasthan',
    },
    sameAs: [
      'https://instagram.com/rani_paliwal',
      'https://instagram.com/beingfit5112',
      'https://facebook.com/Beingfit.asia',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFDFA] text-[#0F241A] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
