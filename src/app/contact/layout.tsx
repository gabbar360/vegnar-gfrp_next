import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact GFRP Rebar Manufacturer | Get Quote for Glass Fiber Reinforced Polymer - Vegnar GFRP',
  description: 'Contact Vegnar GFRP for GFRP rebar quotes, technical support & project consultation. Leading glass fiber reinforced polymer manufacturer in India. Call +91 90333 31031.',
  keywords: 'contact GFRP manufacturer, GFRP rebar quote, glass fiber reinforced polymer supplier contact, GFRP technical support, composite rebar manufacturer contact India, FRP rebar inquiry, construction material supplier contact',
  openGraph: {
    title: 'Contact Vegnar GFRP | GFRP Rebar Manufacturer India',
    description: 'Get in touch with Vegnar GFRP for quotes, technical support and project consultation. Leading GFRP rebar manufacturer in India.',
    url: 'https://vegnargfrp.com/contact',
    images: [{
      url: 'https://vegnargfrp.com/images/contact-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Vegnar GFRP - GFRP Rebar Manufacturer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vegnar GFRP | GFRP Manufacturer',
    description: 'Contact leading GFRP rebar manufacturer in India for quotes and technical support.',
    images: ['https://vegnargfrp.com/images/contact-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}