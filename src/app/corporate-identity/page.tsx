'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDownIcon,
  DocumentIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const corporateDocuments = [
  {
    id: 1,
    title: 'VEGNAR GFRP Company Profile',
    description:
      'Complete corporate identity document featuring company profile, GFRP products, manufacturing processes, and technical specifications',
    image: '/assets/company-facility.jpg',
    pdfUrl: '/VEGNAR GFRP.pdf',
    category: 'Corporate Identity',
  },
];

export default function CorporateIdentity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-32 overflow-hidden h-[500px]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(/assets/corporate.jpeg)`,
            backgroundSize: '100% 100%'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                CORPORATE
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">
                IDENTITY
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Corporate Documents Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Corporate Documentation
            </h2>
            <p className="text-xl text-gray-700">
              Access our comprehensive corporate identity and company profile
              documentation
            </p>
          </div>

          <div className="flex justify-center">
            {corporateDocuments.map(document => (
              <div key={document.id}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200 overflow-hidden w-full max-w-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={document.image}
                      alt={document.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {document.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                      {document.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {document.description}
                    </p>

                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                        onClick={() => window.open(document.pdfUrl, '_blank')}
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Document
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = document.pdfUrl;
                          link.download = `${document.title.replace(/\s+/g, '-')}.pdf`;
                          link.click();
                        }}
                      >
                        <ArrowDownIcon className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Our Corporate Identity
            </h2>
            <p className="text-xl text-gray-700">
              Learn about VEGNAR GFRP's corporate values, mission, and industry
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Company Vision',
                desc: 'Our vision to be a global leader in composite reinforcement solutions',
              },
              {
                title: 'Core Values',
                desc: 'Innovation, quality, sustainability, and customer partnership',
              },
              {
                title: 'Industry Leadership',
                desc: '25+ years of expertise in GFRP manufacturing and innovation',
              },
              {
                title: 'Global Presence',
                desc: 'Serving clients worldwide with advanced GFRP solutions',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DocumentIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with VEGNAR GFRP
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Join us in building a sustainable future with innovative GFRP
            solutions. Contact our team to learn more about partnership
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
              >
                Contact Our Team
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              Partnership Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}