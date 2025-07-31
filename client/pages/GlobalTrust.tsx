import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Users, TrendingUp, Award, MapPin, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalTrust() {
  const globalStats = [
    {
      number: "50,000+",
      label: "Active Users Worldwide",
      icon: Users,
      description: "Growing community across 45+ countries",
    },
    {
      number: "99.9%",
      label: "User Satisfaction Rate",
      icon: Star,
      description: "Consistently high ratings from our global community",
    },
    {
      number: "150+",
      label: "Financial Institutions",
      icon: Award,
      description: "Partnerships with banks and fintech companies globally",
    },
    {
      number: "24/7",
      label: "Global Support",
      icon: Globe,
      description: "Round-the-clock assistance in multiple languages",
    },
  ];

  const regions = [
    {
      name: "North America",
      users: "15,000+",
      partners: "45",
      highlight: "Leading fintech partnerships",
      flag: "🇺🇸",
    },
    {
      name: "Europe",
      users: "12,000+", 
      partners: "38",
      highlight: "GDPR compliance leader",
      flag: "🇪🇺",
    },
    {
      name: "Asia Pacific",
      users: "18,000+",
      partners: "52",
      highlight: "Fastest growing region",
      flag: "🌏",
    },
    {
      name: "India",
      users: "8,000+",
      partners: "25",
      highlight: "Digital India initiative partner",
      flag: "🇮🇳",
    },
  ];

  const partnerships = [
    {
      category: "Banking Partners",
      count: "50+",
      description: "Major banks worldwide trust our security standards",
      examples: ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank"],
    },
    {
      category: "Educational Institutions", 
      count: "75+",
      description: "Universities and schools use our curriculum",
      examples: ["IITs", "IIMs", "Delhi University", "Mumbai University"],
    },
    {
      category: "Government Bodies",
      count: "12",
      description: "Government agencies endorse our security practices",
      examples: ["RBI", "SEBI", "Ministry of Finance", "Cyber Security Agency"],
    },
    {
      category: "Tech Companies",
      count: "85+",
      description: "Leading tech firms integrate our solutions",
      examples: ["Microsoft", "Google", "Amazon", "TCS"],
    },
  ];

  const trustIndicators = [
    "ISO 27001 Certified Globally",
    "SOC 2 Type II Compliance",
    "PCI DSS Level 1 Certification",
    "GDPR Compliant Operations",
    "Regular Third-party Security Audits",
    "Multi-language Customer Support",
    "Local Data Protection Laws Compliance",
    "24/7 Global Incident Response",
  ];

  const testimonials = [
    {
      quote: "CyberSquad has become our go-to platform for employee financial security training.",
      author: "Sarah Mitchell",
      role: "CISO, Global Bank",
      country: "United States",
    },
    {
      quote: "The security standards they maintain are exceptional. We trust them with our most sensitive operations.",
      author: "Dr. Rajesh Kumar",
      role: "Head of Security, Financial Services",
      country: "India",
    },
    {
      quote: "Their global compliance and local expertise made our partnership seamless.",
      author: "Maria Santos",
      role: "Risk Manager, European Bank",
      country: "Germany",
    },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Global background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Global icons floating */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 text-blue-300/20 text-6xl animate-float">🌍</div>
          <div className="absolute bottom-32 right-16 text-indigo-300/20 text-5xl animate-float animation-delay-3000">🤝</div>
          <div className="absolute top-1/2 right-1/4 text-purple-300/20 text-4xl animate-float animation-delay-6000">⭐</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Trusted <span className="text-blue-400">Worldwide</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join a global community of users who trust CyberSquad for their financial security needs. 
              We're proud to serve users across 45+ countries with the highest standards of security and service.
            </p>
            <Badge className="bg-blue-500 text-white px-6 py-2 text-lg">
              🌍 Global Trust Leader
            </Badge>
          </div>

          {/* Global Statistics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Global Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-accent/20 text-center shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Regional Presence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Regional Presence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <Card key={index} className="border-accent/20 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{region.flag}</div>
                    <CardTitle className="text-lg text-foreground">{region.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="text-2xl font-bold text-blue-400">{region.users}</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                      <div className="text-lg font-semibold text-foreground">{region.partners}</div>
                      <div className="text-sm text-muted-foreground">Partners</div>
                    </div>
                    <Badge className="bg-blue-500 text-white text-xs">{region.highlight}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnerships */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Global Partnerships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="border-accent/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-foreground">{partnership.category}</CardTitle>
                      <Badge className="bg-blue-500 text-white">{partnership.count}</Badge>
                    </div>
                    <p className="text-muted-foreground">{partnership.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {partnership.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Global Compliance & Trust
            </h2>
            <Card className="border-accent/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-foreground">{indicator}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Global Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              What Global Partners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-blue-400">{testimonial.country}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Global Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Be part of a trusted global network that's transforming financial security education worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/team">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Meet Our Global Team
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-blue-500 text-blue-500">
                    View Global Certifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
