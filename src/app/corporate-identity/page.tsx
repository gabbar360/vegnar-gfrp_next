"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDownIcon,
  DocumentIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const corporateDocuments = [
  {
    id: 1,
    title: "VEGNAR GFRP Company Profile",
    description:
      "Complete corporate identity document featuring company profile, GFRP products, manufacturing processes, and technical specifications",
    image: "/assets/company-facility.jpg",
    pdfUrl: "/assets/VEGNAR GFRP.pdf",
    category: "Corporate Identity",
  },
];

export default function CorporateIdentity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/corporate.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                CORPORATE
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-100">
                IDENTITY
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Corporate Documents Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-4 sm:mb-6">
              Corporate Documentation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Access our comprehensive corporate identity and company profile
              documentation
            </p>
          </div>

          <div className="flex justify-center">
            {corporateDocuments.map((document) => (
              <div key={document.id} className="w-full max-w-2xl">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={document.image}
                      alt={document.title}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className="bg-orange-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {document.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                      {document.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {document.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="w-full sm:flex-1 bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center py-3 px-4 text-sm font-medium"
                        onClick={() => window.open(document.pdfUrl, '_blank')}
                      >
                        <EyeIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        View Document
                      </Button>
                      <a
                        href={document.pdfUrl}
                        download={`${document.title.replace(/\s+/g, "-")}.pdf`}
                        className="w-full sm:flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 px-4 text-sm font-medium"
                        >
                          <ArrowDownIcon className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Features */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-4 sm:mb-6">
              Our Corporate Identity
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Learn about VEGNAR GFRP&apos;s corporate values, mission, and industry
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Company Vision",
                desc: "Our vision to be a global leader in composite reinforcement solutions",
              },
              {
                title: "Core Values",
                desc: "Innovation, quality, sustainability, and customer partnership",
              },
              {
                title: "Industry Leadership",
                desc: "25+ years of expertise in GFRP manufacturing and innovation",
              },
              {
                title: "Global Presence",
                desc: "Serving clients worldwide with advanced GFRP solutions",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DocumentIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#9e5020] to-[#d4661a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Partner with VEGNAR GFRP
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed">
            Join us in building a sustainable future with innovative GFRP
            solutions. Contact our team to learn more about partnership
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#9e5020] hover:bg-orange-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Contact Our Team
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#9e5020] hover:bg-orange-50 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Partnership Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
