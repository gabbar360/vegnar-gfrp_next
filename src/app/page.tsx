'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BeakerIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative">
      <div className="w-full">
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-gradient-to-br from-secondary to-secondary/90">
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/banner/banaer0.png)' }}
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center max-w-5xl px-4 sm:px-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-4 sm:mb-8 leading-tight">
                VEGNAR GFRP - Leading Composite Solutions
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-primary mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Revolutionary Glass Fiber Reinforced Polymer technology
                transforming construction industry with superior strength and
                durability
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Link href="/blog">
                  <Button className="w-full sm:w-auto bg-primary/90 backdrop-blur-sm border border-primary/50 text-white hover:bg-primary hover:border-primary/70 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Read Blog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400/50 text-white hover:from-green-600 hover:to-emerald-700 hover:border-green-300/70 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Index = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <HeroSlider />

      {/* VEGNAR GFRP Overview - Pro Level */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,0,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent mb-4 leading-tight">
              VEGNAR GFRP
              <br />
              <span className="text-4xl md:text-5xl">
                Engineering Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Pioneering the future of construction with revolutionary Glass
              Fiber Reinforced Polymer technology. Where innovation meets
              uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9e5020]/20 to-[#9e5020]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9e5020]/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e5020] to-[#9e5020]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#9e5020]">
                    Corrosion Immunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#9e5020]/80 mb-6 leading-relaxed">
                    Complete resistance to chemical attack, saltwater corrosion,
                    and environmental degradation. Perfect for marine structures
                    and harsh environments.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#9e5020] to-[#9e5020]/80 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm font-semibold text-[#9e5020]/70 uppercase tracking-wide">
                      Corrosion Free
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9e5020]/20 to-[#9e5020]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9e5020]/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e5020] to-[#9e5020]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BeakerIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#9e5020]">
                    Superior Strength
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#9e5020]/80 mb-6 leading-relaxed">
                    High tensile strength comparable to steel while being
                    significantly lighter. Reduces structural dead load and
                    transportation costs.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#9e5020] to-[#9e5020]/80 bg-clip-text text-transparent">
                      75%
                    </div>
                    <div className="text-sm font-semibold text-[#9e5020]/70 uppercase tracking-wide">
                      Lighter
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9e5020]/20 to-[#9e5020]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9e5020]/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9e5020] to-[#9e5020]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CpuChipIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#9e5020]">
                    Smart Properties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#9e5020]/80 mb-6 leading-relaxed">
                    Advanced composite engineering with customizable properties.
                    Tailored solutions for specific structural requirements and
                    environmental conditions.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#9e5020] to-[#9e5020]/80 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-sm font-semibold text-[#9e5020]/70 uppercase tracking-wide">
                      Years Lifespan
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Pro Level */}
      <section className="relative py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,154,0,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced GFRP
                <br />
                <span className="text-white">
                  Specifications
                </span>
              </h2>

              <p className="text-xl text-white mb-8 leading-relaxed">
                Engineered to exceed industry standards with superior mechanical
                properties and long-term durability.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">
                      1000+
                    </div>
                    <div className="text-sm font-semibold text-white uppercase tracking-wide">
                      MPa Tensile Strength
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">
                      50+
                    </div>
                    <div className="text-sm font-semibold text-white uppercase tracking-wide">
                      GPa Elastic Modulus
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">
                      100+
                    </div>
                    <div className="text-sm font-semibold text-white uppercase tracking-wide">
                      Years Service Life
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl font-black text-white mb-2">
                      -40°C
                    </div>
                    <div className="text-sm font-semibold text-white uppercase tracking-wide">
                      to +80°C Range
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/gfrp-reinforcement.jpg"
                  alt="VEGNAR GFRP Technical Specifications"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <div className="text-white font-semibold text-lg">
                      Advanced Composite Technology
                    </div>
                    <div className="text-white text-sm mt-1">
                      Precision-engineered for optimal performance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Excellence */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/assets/company-facility.jpg"
                alt="VEGNAR GFRP Manufacturing Excellence"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">
                Manufacturing Excellence
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl mb-6">
                VEGNAR GFRP Excellence
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                State-of-the-art manufacturing facilities with advanced
                pultrusion technology, ensuring consistent quality and superior
                performance in every GFRP product.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    25+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    5000+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    50+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Countries Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    ISO
                  </div>
                  <div className="text-secondary-foreground/80">
                    Certified Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valuable Clients Section */}
      <section className="relative py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,154,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-secondary">Our Valuable</span>
              <br />
              <span className="text-5xl md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CLIENTS
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to be trusted by a diverse range of clients across
              industries, including importers, distributors, consultants and
              leading companies in construction, ceramics, and chemicals.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
              Featured Clients & Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {/* Logo 1 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/logo1.png"
                      alt="Client Logo 1"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Logo 2 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/logo2.png"
                      alt="Client Logo 2"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Logo 3 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/logo3.png"
                      alt="Client Logo 3"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Logo 4 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/logo4.png"
                      alt="Client Logo 4"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Logo 5 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/logo5.png"
                      alt="Client Logo 5"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-2 bg-gradient-to-b from-transparent to-muted/20" />
    </div>
  )
}

export default Index