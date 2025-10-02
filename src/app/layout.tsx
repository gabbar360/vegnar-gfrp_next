import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'GFRP Rebar Manufacturer India | Glass Fiber Reinforced Polymer - Vegnar GFRP',
  description: 'Leading GFRP rebar manufacturer in India. Corrosion-resistant glass fiber reinforced polymer rebars for construction, marine & infrastructure projects. ISO certified quality.',
  keywords: 'GFRP rebar manufacturer India, glass fiber reinforced polymer, corrosion resistant rebar, FRP rebar, composite rebar manufacturer, GFRP bars India, non-corrosive reinforcement, construction materials India, infrastructure solutions, marine construction rebar',
  authors: [{ name: 'Vegnar GFRP' }],
  creator: 'Vegnar GFRP',
  publisher: 'Vegnar GFRP',
  robots: 'index,follow',
  openGraph: {
    title: 'GFRP Rebar Manufacturer India | Vegnar GFRP',
    description: 'Leading manufacturer of corrosion-resistant GFRP rebars in India. Advanced glass fiber reinforced polymer solutions for construction and infrastructure.',
    url: 'https://vegnargfrp.com',
    siteName: 'Vegnar GFRP',
    images: [{
      url: 'https://vegnargfrp.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Vegnar GFRP - Leading GFRP Rebar Manufacturer India',
    }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFRP Rebar Manufacturer India | Vegnar GFRP',
    description: 'Leading manufacturer of corrosion-resistant GFRP rebars in India.',
    images: ['https://vegnargfrp.com/images/og-image.jpg'],
    creator: '@vegnargfrp',
  },
  alternates: {
    canonical: 'https://vegnargfrp.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vegnar GFRP',
    url: 'https://vegnargfrp.com',
    logo: 'https://vegnargfrp.com/images/gfrp_logo.png',
    description: 'Leading manufacturer of GFRP rebar and glass fiber reinforced polymer products in India',
    foundingDate: '2020',
    industry: 'Construction Materials',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-623, RK iconic, Sheetal Park, 150 Ft. Ring Road',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360006',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-90333-31031',
      contactType: 'customer service',
      email: 'sales@vegnar.com'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61581178121824',
      'https://www.instagram.com/vegnargfrp/',
      'https://www.linkedin.com/company/vegnar-gfrp/',
      'https://www.pinterest.com/vegnargfrp/'
    ]
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `,
              }}
            />
          </>
        )}
        
        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-poppins antialiased">
        <ReactQueryProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}