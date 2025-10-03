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
  title: 'Vegnar GFRP | Leading GFRP Rebar Manufacturer India | Glass Fiber Reinforced Polymer Bars',
  description: 'Leading GFRP rebar manufacturer in India. Corrosion-resistant glass fiber reinforced polymer rebars for construction, marine & infrastructure projects. ISO certified quality with 100+ years lifespan.',
  keywords: 'GFRP rebar manufacturer India, glass fiber reinforced polymer bars, corrosion resistant rebar, FRP rebar supplier, composite rebar manufacturer, GFRP bars India, non-corrosive reinforcement, construction materials India, infrastructure solutions, marine construction rebar, TMT steel alternative, concrete reinforcement bars, pultrusion technology, IS 18256 compliant GFRP, Gujarat GFRP manufacturer, Rajkot composite materials, bridge construction rebar, coastal infrastructure materials, chemical resistant reinforcement, lightweight construction bars, sustainable building materials, green construction solutions, earthquake resistant rebar, fire retardant GFRP, high strength composite bars, non-magnetic reinforcement, electrical insulation rebar, thermal bridge free construction, precast concrete reinforcement, ready mix concrete bars, infrastructure development materials, smart city construction materials',
  authors: [{ name: 'Vegnar GFRP' }],
  creator: 'Vegnar GFRP',
  publisher: 'Vegnar GFRP',
  robots: 'index,follow',
  openGraph: {
    title: 'Vegnar GFRP | India\'s Leading GFRP Rebar Manufacturer',
    description: 'Leading manufacturer of corrosion-resistant GFRP rebars in India. Advanced glass fiber reinforced polymer solutions for construction, marine, and infrastructure projects with 100+ years lifespan.',
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
    title: 'Vegnar GFRP | Premium GFRP Rebar Manufacturer India',
    description: 'Leading manufacturer of corrosion-resistant GFRP rebars in India. TMT steel alternative with superior performance.',
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
    name: 'Vegnar GFRP - Glass Fiber Reinforced Polymer Manufacturer',
    url: 'https://vegnargfrp.com',
    logo: 'https://vegnargfrp.com/images/gfrp_logo.png',
    description: 'Vegnar GFRP - India\'s premier GFRP rebar and glass fiber reinforced polymer manufacturer. Corrosion-free construction materials with IS 18256 certification',
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
        <link rel="icon" href="/images/fevicon.png" type="image/png" />
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