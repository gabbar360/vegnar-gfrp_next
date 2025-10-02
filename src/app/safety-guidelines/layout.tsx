import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GFRP Rebar Safety Guidelines | Glass Fiber Reinforced Polymer Handling - Vegnar GFRP',
  description: 'Essential safety guidelines for handling & installing GFRP rebars. Learn proper safety procedures, fire safety, storage & installation practices for glass fiber reinforced polymer.',
  keywords: 'GFRP safety guidelines, glass fiber reinforced polymer safety, GFRP rebar handling safety, composite reinforcement safety, FRP installation safety, construction safety guidelines, GFRP fire safety, rebar handling procedures',
  openGraph: {
    title: 'GFRP Rebar Safety Guidelines | Vegnar GFRP',
    description: 'Essential safety procedures for handling and installing GFRP rebars safely and effectively.',
    url: 'https://vegnargfrp.com/safety-guidelines',
    images: [{
      url: 'https://vegnargfrp.com/images/safety-guidelines-og.jpg',
      width: 1200,
      height: 630,
      alt: 'GFRP Rebar Safety Guidelines - Construction Safety',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFRP Rebar Safety Guidelines | Vegnar GFRP',
    description: 'Essential safety procedures for handling GFRP rebars.',
    images: ['https://vegnargfrp.com/images/safety-guidelines-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/safety-guidelines',
  },
};

export default function SafetyGuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}