import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GFRP Case Studies Global | Glass Fiber Reinforced Polymer Project Examples - Vegnar GFRP',
  description: 'Explore global GFRP rebar case studies - Kochi Metro, IIT Hyderabad, Jizan Flood Channel, Zurich Airport & more. Real-world applications of glass fiber reinforced polymer.',
  keywords: 'GFRP case studies, glass fiber reinforced polymer projects, GFRP rebar applications, composite reinforcement projects, FRP construction examples, infrastructure case studies, marine construction GFRP, tunnel reinforcement projects',
  openGraph: {
    title: 'GFRP Global Case Studies | Vegnar GFRP',
    description: 'Real-world applications of GFRP rebars in major infrastructure projects worldwide including metros, airports, tunnels and marine structures.',
    url: 'https://vegnargfrp.com/case-studies-global',
    images: [{
      url: 'https://vegnargfrp.com/images/case-studies-og.jpg',
      width: 1200,
      height: 630,
      alt: 'GFRP Global Case Studies - Infrastructure Projects',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFRP Global Case Studies | Vegnar GFRP',
    description: 'Real-world applications of GFRP rebars in major infrastructure projects worldwide.',
    images: ['https://vegnargfrp.com/images/case-studies-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/case-studies-global',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}