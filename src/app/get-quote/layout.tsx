import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get GFRP Rebar Quote | Glass Fiber Reinforced Polymer Pricing - Vegnar GFRP',
  description: 'Request custom quote for GFRP rebars. Get competitive pricing for glass fiber reinforced polymer reinforcement. Fast delivery, technical support & best prices in India.',
  keywords: 'GFRP rebar quote, glass fiber reinforced polymer pricing, GFRP bars price India, composite rebar quote, FRP reinforcement pricing, construction materials quote, GFRP supplier quote India',
  openGraph: {
    title: 'Get GFRP Rebar Quote | Vegnar GFRP',
    description: 'Request custom pricing for GFRP rebars with competitive rates and fast delivery across India.',
    url: 'https://vegnargfrp.com/get-quote',
    images: [{
      url: 'https://vegnargfrp.com/images/quote-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Get GFRP Rebar Quote - Competitive Pricing',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get GFRP Rebar Quote | Vegnar GFRP',
    description: 'Request custom pricing for GFRP rebars with competitive rates.',
    images: ['https://vegnargfrp.com/images/quote-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/get-quote',
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}