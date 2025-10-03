import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ShieldCheckIcon,
  BeakerIcon,
  BoltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartBarIcon,
  FireIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'GFRP Rebar Benefits vs Steel | Corrosion Resistant Reinforcement Advantages - Vegnar GFRP',
  description: 'Discover key benefits of GFRP rebars over steel - 100% corrosion resistance, 75% lighter weight, superior strength, non-magnetic properties. Compare GFRP vs TMT steel performance.',
  keywords: 'GFRP rebar benefits, corrosion resistant rebar advantages, GFRP vs steel comparison, non-magnetic reinforcement, lightweight rebar benefits, GFRP rebar properties, composite rebar advantages, FRP rebar benefits India, construction material benefits, TMT steel alternative benefits, marine construction rebar, coastal infrastructure materials, Gujarat GFRP benefits, Rajkot composite materials, bridge construction advantages, earthquake resistant rebar benefits, fire retardant GFRP advantages, chemical resistant reinforcement benefits, precast concrete rebar benefits, ready mix concrete reinforcement, infrastructure development materials, smart city construction benefits, green building materials, sustainable construction solutions, IS 18256 compliant benefits, pultrusion technology advantages, thermal bridge free construction, electrical insulation rebar benefits, non-conductive reinforcement advantages, maintenance free construction materials, long lasting building materials, cost effective reinforcement solutions',
  openGraph: {
    title: 'GFRP Rebar Benefits | Superior to Steel Reinforcement',
    description: 'Explore the superior benefits of GFRP rebars - corrosion resistance, lightweight, high strength, and long service life compared to traditional steel.',
    url: 'https://vegnargfrp.com/benefits',
    images: [{
      url: 'https://vegnargfrp.com/images/benefits-og.jpg',
      width: 1200,
      height: 630,
      alt: 'GFRP Rebar Benefits - Superior Construction Material',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFRP Rebar Benefits | Vegnar GFRP',
    description: 'Discover superior benefits of GFRP rebars over steel reinforcement.',
    images: ['https://vegnargfrp.com/images/benefits-og.jpg'],
  },
  alternates: {
    canonical: 'https://vegnargfrp.com/benefits',
  },
};

const benefits = [
  {
    title: 'High Tensile Strength',
    icon: ChartBarIcon,
    description:
      '600-1200 MPa tensile strength delivers exceptional load capacity while keeping structures lightweight.',
    advantage: '600-1200 MPa',
  },
  {
    title: 'Low Density',
    icon: BeakerIcon,
    description:
      '~1600-1900 kg/m³ density simplifies handling and lowers transportation costs compared to steel.',
    advantage: '~1600-1900 kg/m³',
  },
  {
    title: 'Reduced Risk of Thermal Cracking',
    icon: FireIcon,
    description:
      'Thermal expansion closer to concrete minimizes stress and cracking caused by temperature fluctuations.',
    advantage: 'Stable thermal expansion',
  },
  {
    title: 'Ease of Installation',
    icon: WrenchScrewdriverIcon,
    description:
      'Lightweight bars allow faster placement with smaller crews and less heavy machinery.',
    advantage: 'Quick installation',
  },
  {
    title: 'Thermal Insulation',
    icon: BoltIcon,
    description:
      'Low thermal conductivity preserves interior comfort and protects temperature-sensitive assets.',
    advantage: 'High insulation',
  },
  {
    title: 'Corrosion Resistant',
    icon: ShieldCheckIcon,
    description:
      '100% corrosion-free performance even in harsh environments, eliminating rust-related failures.',
    advantage: 'No corrosion',
  },
  {
    title: 'No Coating Required',
    icon: CurrencyDollarIcon,
    description:
      'Removes the need for protective coatings, saving time, materials, and labor costs.',
    advantage: 'Coating-free',
  },
  {
    title: 'Non-Magnetic & Non-Conductive',
    icon: BoltIcon,
    description:
      'Non-magnetic, electrically neutral bars ensure compatibility with sensitive equipment.',
    advantage: 'Non-magnetic',
  },
  {
    title: 'No Maintenance Required',
    icon: WrenchScrewdriverIcon,
    description:
      'Long service life without inspections or repairs keeps lifecycle costs to a minimum.',
    advantage: 'Maintenance-free',
  },
  {
    title: 'High Strength-to-Weight Ratio',
    icon: ChartBarIcon,
    description:
      'Provides superior load-bearing strength while remaining light enough for efficient design.',
    advantage: 'Superior ratio',
  },
  {
    title: 'Highly Durable',
    icon: ShieldCheckIcon,
    description:
      'Resists chemicals, moisture, and harsh environments where steel would deteriorate.',
    advantage: 'Chemical resistant',
  },
  {
    title: 'Long Service Life',
    icon: ClockIcon,
    description:
      '75+ year lifespan keeps infrastructure performing reliably for decades.',
    advantage: '75+ years',
  },
];

const comparisonData = [
  {
    property: 'Corrosion Resistance',
    gfrp: {
      value: 'Excellent',
      status: 'positive',
      description: 'Complete immunity to rust and chemicals',
    },
    tmt: {
      value: 'Poor',
      status: 'negative',
      description: 'Susceptible to rust and corrosion',
    },
  },
  {
    property: 'Weight',
    gfrp: {
      value: '75% Lighter',
      status: 'positive',
      description: 'Easier handling and transportation',
    },
    tmt: {
      value: 'Heavy',
      status: 'negative',
      description: 'Requires heavy machinery for handling',
    },
  },
  {
    property: 'Electrical Conductivity',
    gfrp: {
      value: 'Non-Conductive',
      status: 'positive',
      description: 'Safe for electrical applications',
    },
    tmt: {
      value: 'Conductive',
      status: 'negative',
      description: 'Risk of electrical hazards',
    },
  },
  {
    property: 'Thermal Conductivity',
    gfrp: {
      value: 'Low',
      status: 'positive',
      description: 'Better thermal insulation',
    },
    tmt: {
      value: 'High',
      status: 'negative',
      description: 'Poor thermal performance',
    },
  },
  {
    property: 'Maintenance',
    gfrp: {
      value: 'Minimal',
      status: 'positive',
      description: 'No painting or coating required',
    },
    tmt: {
      value: 'High',
      status: 'negative',
      description: 'Regular maintenance needed',
    },
  },
  {
    property: 'Lifespan',
    gfrp: {
      value: '100+ Years',
      status: 'positive',
      description: 'Extended service life',
    },
    tmt: {
      value: '50-75 Years',
      status: 'negative',
      description: 'Limited by corrosion',
    },
  },
  {
    property: 'Installation',
    gfrp: {
      value: 'Easy',
      status: 'positive',
      description: 'Lightweight and flexible',
    },
    tmt: {
      value: 'Complex',
      status: 'negative',
      description: 'Heavy equipment required',
    },
  },
  {
    property: 'Environmental Impact',
    gfrp: {
      value: 'Low',
      status: 'positive',
      description: 'Sustainable and recyclable',
    },
    tmt: {
      value: 'High',
      status: 'negative',
      description: 'Energy-intensive production',
    },
  },
];

export default function Benefits() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/assets/benefits-background.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Benefits of
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-100">
                GFRP REBARS
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Advantages of GFRP Rebars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced composite technology delivering superior performance in construction, marine, and infrastructure projects. Discover why GFRP rebars are the preferred TMT steel alternative for modern construction in India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0"
                    >
                      {benefit.advantage}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              GFRP vs TMT Steel Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive comparison showing why GFRP outperforms traditional
              TMT steel in critical parameters
            </p>
          </div>

          <Card className="bg-card shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <CardTitle className="text-2xl text-center">
                Technical Comparison Matrix
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">
                        Property
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-foreground">
                        GFRP Rebars
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-foreground">
                        TMT Steel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-border hover:bg-muted/20 transition-colors"
                      >
                        <td className="px-6 py-6">
                          <div className="font-semibold text-foreground">
                            {item.property}
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-600" />
                              <span className="font-semibold text-green-700">
                                {item.gfrp.value}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.gfrp.description}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <XCircleIcon className="h-5 w-5 text-red-600" />
                              <span className="font-semibold text-red-700">
                                {item.tmt.value}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.tmt.description}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quantified advantages that make GFRP the superior choice for
              modern construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">0%</div>
                <div className="text-sm font-medium text-green-600 mb-1">
                  Corrosion Rate
                </div>
                <div className="text-xs text-green-600">
                  vs 2-5% annual for steel
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">75%</div>
                <div className="text-sm font-medium text-blue-600 mb-1">
                  Weight Reduction
                </div>
                <div className="text-xs text-blue-600">
                  Easier handling & transport
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">
                  100+
                </div>
                <div className="text-sm font-medium text-purple-600 mb-1">
                  Years Lifespan
                </div>
                <div className="text-xs text-purple-600">
                  vs 50-75 years for steel
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">
                  40%
                </div>
                <div className="text-sm font-medium text-orange-600 mb-1">
                  Cost Savings
                </div>
                <div className="text-xs text-orange-600">
                  Total cost of ownership
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}