import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GFRP Technical Blog | Glass Fiber Reinforced Polymer Articles & Insights - Vegnar GFRP',
  description: 'Read technical articles about GFRP rebars, glass fiber reinforced polymer technology, construction applications, installation guides & industry insights from Vegnar GFRP experts.',
  keywords: 'GFRP blog, glass fiber reinforced polymer articles, GFRP rebar technical guides, composite reinforcement insights, FRP construction blog, GFRP installation guides, construction technology blog India, marine construction articles',
  openGraph: {
    title: 'GFRP Technical Blog | Vegnar GFRP',
    description: 'Technical articles and insights about GFRP rebars, construction applications, and composite reinforcement technology.',
    url: 'https://vegnargfrp.com/blog',
    images: [{
      url: 'https://vegnargfrp.com/images/blog-og.jpg',
      width: 1200,
      height: 630,
      alt: 'GFRP Technical Blog - Construction Industry Insights',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFRP Technical Blog | Vegnar GFRP',
    description: 'Technical articles about GFRP rebars and composite reinforcement technology.',
    images: ['https://vegnargfrp.com/images/blog-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}