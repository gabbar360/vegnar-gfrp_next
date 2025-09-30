'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    quantity: '',
    specifications: '',
    timeline: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/banner/banner4.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9e5020]/90 to-[#9e5020]/70" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Quote
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Request a customized quote for your GFRP reinforcement needs. 
              Our experts will provide detailed pricing and technical specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="border-[#9e5020]/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-[#9e5020]">
                Request Custom Quote
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-[#9e5020] mb-4">Project Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-[#9e5020] focus:ring-[#9e5020] bg-background"
                      >
                        <option value="">Select Project Type</option>
                        <option value="marine">Marine Construction</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="industrial">Industrial</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1000 meters, 50 tons"
                        className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="specifications">GFRP Specifications</Label>
                      <Input
                        id="specifications"
                        name="specifications"
                        type="text"
                        value={formData.specifications}
                        onChange={handleChange}
                        placeholder="e.g., 12mm diameter, Grade 550"
                        className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-[#9e5020] focus:ring-[#9e5020] bg-background"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (1-2 weeks)</option>
                        <option value="short">Short term (1 month)</option>
                        <option value="medium">Medium term (2-3 months)</option>
                        <option value="long">Long term (3+ months)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t pt-6">
                  <div>
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-[#9e5020] focus:ring-[#9e5020]"
                      placeholder="Please provide any additional details about your project, specific requirements, delivery location, or questions you may have..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-[#9e5020] text-white hover:bg-[#9e5020]/90 py-4 text-lg font-semibold"
                  >
                    Submit Quote Request
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    Our team will review your request and respond within 24 hours with a detailed quote
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#9e5020] mb-6">
              Why Choose Vegnar GFRP?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-[#9e5020]/20">
              <CardHeader>
                <CardTitle className="text-[#9e5020]">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Best-in-class pricing with transparent cost breakdown and no hidden charges
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-[#9e5020]/20">
              <CardHeader>
                <CardTitle className="text-[#9e5020]">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick turnaround times with reliable delivery schedules across India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-[#9e5020]/20">
              <CardHeader>
                <CardTitle className="text-[#9e5020]">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert technical consultation and ongoing support throughout your project
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}