import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Identity | GFRP Rebar Manufacturer Company Profile - Vegnar GFRP',
  description: 'Download Vegnar GFRP corporate identity documents, company profile & brochures. Leading glass fiber reinforced polymer manufacturer in India with 25+ years experience.',
  keywords: 'GFRP company profile, glass fiber reinforced polymer manufacturer brochure, corporate identity GFRP, Vegnar GFRP company documents, FRP rebar manufacturer profile India, construction materials company profile',
  openGraph: {
    title: 'Corporate Identity | Vegnar GFRP Company Profile',
    description: 'Access corporate documents and company profile of leading GFRP rebar manufacturer in India.',
    url: 'https://vegnargfrp.com/corporate-identity',
    images: [{
      url: 'https://vegnargfrp.com/images/corporate-identity-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Vegnar GFRP Corporate Identity - Company Profile',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Identity | Vegnar GFRP',
    description: 'Corporate documents and company profile of leading GFRP manufacturer.',
    images: ['https://vegnargfrp.com/images/corporate-identity-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/corporate-identity',
  },
};

export default function CorporateIdentityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}