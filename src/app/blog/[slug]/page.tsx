'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  ArrowLeftIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  slug: string;
  featuredImage?: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'GFRP vs Steel: A Comprehensive Comparison',
    excerpt: 'Discover why GFRP rebars are revolutionizing construction with superior corrosion resistance and strength-to-weight ratio.',
    content: `Glass Fiber Reinforced Polymer (GFRP) rebars represent a revolutionary advancement in construction reinforcement technology. Unlike traditional steel reinforcement, GFRP offers complete immunity to corrosion, making it ideal for harsh environments and marine applications.

Key advantages of GFRP over steel include:

1. Corrosion Resistance: GFRP rebars are completely immune to rust and chemical attack, ensuring long-term structural integrity.

2. Lightweight: At 75% lighter than steel, GFRP reduces transportation costs and simplifies installation.

3. High Strength: With tensile strength exceeding 1000 MPa, GFRP provides superior load-bearing capacity.

4. Thermal Properties: Low thermal conductivity prevents thermal bridging and improves energy efficiency.

5. Non-Magnetic: GFRP is electromagnetically neutral, making it suitable for sensitive applications.

The manufacturing process involves pultrusion technology, where continuous glass fibers are impregnated with polymer resin and cured under controlled conditions. This results in a composite material that combines the best properties of both components.

Applications for GFRP rebars include:
- Marine structures and coastal infrastructure
- Bridge decks and parking structures  
- Water treatment facilities
- Chemical processing plants
- Precast concrete elements

Cost analysis shows that while GFRP has higher initial costs, the total lifecycle cost is significantly lower due to reduced maintenance and longer service life. Studies indicate potential savings of 40-60% over the structure's lifetime.

Quality control is critical in GFRP manufacturing. Our facility maintains strict testing protocols including tensile strength testing, bond strength evaluation, and durability assessments to ensure consistent product quality.

The future of construction reinforcement lies in advanced composite materials like GFRP. As infrastructure demands increase and environmental concerns grow, GFRP offers a sustainable solution that meets both performance and longevity requirements.`,
    author: 'Tushar',
    date: '2024-01-15',
    category: 'Technical',
    tags: ['GFRP', 'Steel', 'Comparison', 'Construction'],
    readTime: 8,
    slug: 'gfrp-vs-steel-comparison',
    featuredImage: '/images/Blog/gfrp-vs-steel-advantages.png',
  },
  {
    id: '2',
    title: 'Marine Construction: Why GFRP is the Future',
    excerpt: 'Explore how GFRP rebars are transforming marine infrastructure with exceptional resistance to saltwater corrosion.',
    content: `Marine environments present unique challenges for construction materials. Saltwater, humidity, and chemical exposure create conditions that rapidly degrade traditional steel reinforcement. GFRP rebars offer a revolutionary solution for marine construction projects.

The marine environment is particularly harsh on construction materials:
- Chloride ion penetration causes steel corrosion
- Salt spray accelerates deterioration
- Tidal zones create wet-dry cycles
- Marine organisms can cause biological degradation

GFRP rebars excel in marine applications because:

1. Complete Corrosion Immunity: Unlike steel, GFRP cannot rust or corrode, even in direct contact with seawater.

2. Chemical Resistance: Polymer matrix resists chemical attack from marine salts and acids.

3. Dimensional Stability: GFRP maintains its properties despite temperature fluctuations and moisture exposure.

4. Reduced Maintenance: Structures require minimal maintenance over their service life.

Case studies from marine projects worldwide demonstrate GFRP's effectiveness:

- Port facilities in harsh coastal environments
- Offshore platforms and marine terminals  
- Seawalls and coastal protection structures
- Marine bridges and causeways

Installation considerations for marine GFRP applications:
- Proper concrete cover requirements
- Splice length calculations for marine exposure
- Quality control during placement
- Protection during construction phase

The economic benefits become apparent over time. While initial costs may be higher, the elimination of maintenance, repairs, and premature replacement results in significant lifecycle savings.

Environmental benefits include:
- Reduced carbon footprint from eliminated maintenance
- No contamination from corrosion products
- Longer structure life reduces material consumption
- Recyclable at end of service life

Design codes and standards for marine GFRP applications continue to evolve. Engineers must consider specific requirements for marine exposure conditions and adjust design parameters accordingly.

The future of marine construction will increasingly rely on corrosion-resistant materials like GFRP to ensure sustainable, long-lasting infrastructure.`,
    author: 'Aashish',
    date: '2024-01-10',
    category: 'Applications',
    tags: ['Marine', 'Corrosion', 'Infrastructure', 'Saltwater'],
    readTime: 6,
    slug: 'marine-construction-gfrp-future',
    featuredImage: '/images/Blog/construction.png',
  },
  {
    id: '3',
    title: 'Installation Best Practices for GFRP Rebars',
    excerpt: 'Learn the essential techniques and considerations for proper GFRP rebar installation.',
    content: `Proper installation of GFRP rebars is crucial for achieving optimal structural performance. While similar to steel rebar installation, GFRP requires specific considerations and techniques.

Pre-Installation Planning:
- Review structural drawings and specifications
- Verify GFRP rebar properties and certifications
- Plan cutting and bending operations
- Coordinate with concrete placement schedule

Handling and Storage:
- Store GFRP rebars on level surfaces
- Protect from UV exposure during storage
- Handle with care to avoid surface damage
- Use proper lifting techniques for bundles

Cutting Operations:
- Use diamond blade or abrasive cutoff saws
- Avoid overheating during cutting
- Ensure clean, square cuts
- Remove any loose fibers from cut ends

Bending Considerations:
- GFRP rebars have different bending properties than steel
- Follow manufacturer's minimum bend radius requirements
- Use proper bending equipment and techniques
- Avoid sharp bends that could damage fibers

Placement Techniques:
- Position rebars according to design requirements
- Maintain proper concrete cover
- Use appropriate support systems
- Secure against displacement during concrete placement

Splicing Methods:
- Lap splices are most common for GFRP
- Calculate splice lengths per design codes
- Ensure proper overlap and alignment
- Consider mechanical splice options for special applications

Quality Control During Installation:
- Inspect rebars for damage before placement
- Verify spacing and positioning
- Check concrete cover requirements
- Document installation with photographs

Common Installation Mistakes to Avoid:
- Inadequate concrete cover
- Improper splice lengths
- Damage during handling
- Incorrect positioning or spacing

Concrete Placement Considerations:
- Coordinate with concrete crew
- Avoid direct impact on GFRP rebars
- Monitor for displacement during placement
- Ensure proper consolidation around rebars

Post-Installation Inspection:
- Verify final positioning
- Check for any damage or displacement
- Document completion
- Prepare for concrete curing

Training and Certification:
- Ensure installation crews are properly trained
- Provide GFRP-specific installation guidelines
- Regular safety briefings
- Continuous improvement based on field experience

By following these best practices, contractors can ensure successful GFRP rebar installation that meets design requirements and achieves optimal structural performance.`,
    author: 'Tushar',
    date: '2024-01-05',
    category: 'Installation',
    tags: ['Installation', 'Best Practices', 'Guidelines', 'Construction'],
    readTime: 10,
    slug: 'gfrp-installation-best-practices',
    featuredImage: '/banner/banner3.jpeg',
  },
];

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = () => {
      setLoading(true);
      const foundPost = mockPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The requested article could not be found.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="w-full">
            {/* Main Content */}
            <div className="w-full max-w-4xl mx-auto">
              {/* Featured Image */}
              {post.featuredImage ? (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover rounded-lg mb-8"
                />
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-8" />
              )}

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              </div>

              {/* Tags */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TagIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Content */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <div
                    className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {post.content}
                  </div>
                </CardContent>
              </Card>

              {/* Related Content CTA */}
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Need Technical Support?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Our engineering team is ready to help with material selection
                      and application guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <Button size="lg">Contact Technical Team</Button>
                      </Link>
                      <Link href="/benefits">
                        <Button variant="outline" size="lg">
                          Browse Benefits
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}