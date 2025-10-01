'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import countries from '@/data/countries.json';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { useToast } from '@/hooks/use-toast';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
  materialInterest: string[];
}

interface CountryDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

function CountryDropdown({ value, onChange }: CountryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCountry = countries.find(c => c.code === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">Country</Label>
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-11 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500 bg-white cursor-pointer flex items-center justify-between"
        >
          <span className={selectedCountry ? 'text-gray-900' : 'text-gray-500'}>
            {selectedCountry ? selectedCountry.name : 'Select your country'}
          </span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-hidden">
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-orange-500"
                autoFocus
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filteredCountries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className="px-3 py-2 hover:bg-orange-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                >
                  {country.name}
                </div>
              ))}
              {filteredCountries.length === 0 && (
                <div className="px-3 py-2 text-gray-500 text-sm">No countries found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    materialInterest: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMaterialInterestChange = (material: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      materialInterest: checked
        ? [...(prev.materialInterest || []), material]
        : (prev.materialInterest || []).filter(m => m !== material),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
        materialInterest: [],
      });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-32 overflow-hidden h-[500px]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(/assets/contact.jpeg)`,
            backgroundSize: '100% 100%'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                GET IN
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">
                TOUCH
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section - 50/50 Split */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with our team of GFRP specialists. We're committed to providing you with expert guidance and innovative solutions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone Card */}
                <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors">
                      <PhoneIcon className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">Sales: <span className="font-medium text-gray-900">+91 90333 31031</span></p>
                        <p className="text-gray-600">Support: <span className="font-medium text-gray-900">+91 90333 31005</span></p>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Available Mon-Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors">
                      <EnvelopeIcon className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium text-gray-900">sales@vegnar.com</span>
                      </p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors">
                      <MapPinIcon className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                      <div className="text-gray-600 leading-relaxed">
                        <p>B-623, RK Iconic, Sheetal Park,</p>
                        <p>150 Ft. Ring Road, Rajkot</p>
                        <p className="font-medium text-gray-900">Gujarat 360006, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={e => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          placeholder="+91 12345 67890"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <CountryDropdown 
                      value={formData.country}
                      onChange={(value) => handleInputChange('country', value)}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={e => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, technical specifications, or any questions about our GFRP materials..."
                        rows={5}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-semibold bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}