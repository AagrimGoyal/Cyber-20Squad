import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  BookOpen,
  Video,
  Download,
  Link2,
  Github,
  FileText,
} from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      category: "Security Tools",
      icon: Github,
      color: "from-cyan-500 to-blue-600",
      resources: [
        {
          title: "Bitwarden",
          type: "Password Manager",
          description:
            "Free, open-source password manager for secure credential storage",
          link: "https://bitwarden.com",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "Proton VPN",
          type: "VPN Service",
          description:
            "Secure VPN to encrypt your internet connection and protect privacy",
          link: "https://protonvpn.com",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "KeePass",
          type: "Password Manager",
          description:
            "Lightweight password manager for offline credential management",
          link: "https://keepass.info",
          rating: "⭐⭐⭐⭐",
        },
        {
          title: "2Fas",
          type: "2FA Authenticator",
          description:
            "Secure two-factor authentication app for account protection",
          link: "https://2fas.com",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
    },
    {
      category: "Learning Platforms",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      resources: [
        {
          title: "Coursera",
          type: "Online Education",
          description:
            "Comprehensive cybersecurity and finance courses from top universities",
          link: "https://coursera.org",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "Khan Academy",
          type: "Free Learning",
          description:
            "Free courses on personal finance and digital security fundamentals",
          link: "https://khanacademy.org",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "Udemy",
          type: "Online Courses",
          description:
            "Affordable courses on cybersecurity, hacking, and financial literacy",
          link: "https://udemy.com",
          rating: "⭐⭐⭐⭐",
        },
        {
          title: "TryHackMe",
          type: "Hands-on Learning",
          description:
            "Interactive cybersecurity training platform with practical challenges",
          link: "https://tryhackme.com",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
    },
    {
      category: "Government Resources",
      icon: FileText,
      color: "from-orange-500 to-red-600",
      resources: [
        {
          title: "CERT-In",
          type: "Cybersecurity Authority",
          description:
            "Computer Emergency Response Team of India - Official cybersecurity alerts and advisories",
          link: "https://www.cert-in.org.in/",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "Ministry of Electronics & IT",
          type: "Government Portal",
          description:
            "MeitY - India's official ministry for digital infrastructure and cyber policy",
          link: "https://www.meity.gov.in/",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "DSCI",
          type: "Data Security Council",
          description:
            "Data Security Council of India - Cybersecurity standards and best practices for India",
          link: "https://www.dsci.in/",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "RBI Cyber Portal",
          type: "Banking Security",
          description:
            "Reserve Bank of India - Financial security advisories and regulations",
          link: "https://www.rbi.org.in/",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
    },
    {
      category: "Financial Tools",
      icon: Download,
      color: "from-yellow-500 to-orange-600",
      resources: [
        {
          title: "YNAB",
          type: "Budget Management",
          description:
            "You Need A Budget - comprehensive budgeting and financial planning",
          link: "https://ynab.com",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          title: "Personal Capital",
          type: "Wealth Management",
          description:
            "Free financial dashboard for tracking investments and net worth",
          link: "https://personalcapital.com",
          rating: "⭐⭐⭐⭐",
        },
        {
          title: "Mint",
          type: "Expense Tracking",
          description:
            "Track spending, create budgets, and monitor financial health",
          link: "https://mint.com",
          rating: "⭐⭐⭐⭐",
        },
        {
          title: "Credit Karma",
          type: "Credit Monitoring",
          description:
            "Free credit score tracking and identity theft protection",
          link: "https://creditkarma.com",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <Link2 className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Resources{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Curated collection of tools, platforms, and resources to help you
              master cybersecurity and financial literacy.
            </p>
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              🔗 All Trusted & Verified
            </Badge>
          </div>

          {/* Resource Categories */}
          <div className="space-y-20">
            {resourceCategories.map((cat, catIndex) => {
              const Icon = cat.icon;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-4 mb-12">
                    <div
                      className={`bg-gradient-to-br ${cat.color} p-4 rounded-xl`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-white">
                        {cat.category}
                      </h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mt-2"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cat.resources.map((resource, resIndex) => (
                      <div key={resIndex} className="group relative">
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${cat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}
                        ></div>
                        <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div className="flex-1">
                                <CardTitle className="text-2xl font-bold text-white mb-2">
                                  {resource.title}
                                </CardTitle>
                                <Badge
                                  className={`bg-gradient-to-r ${cat.color} text-white border-none`}
                                >
                                  {resource.type}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                              <span className="text-sm text-yellow-400 font-semibold">
                                {resource.rating}
                              </span>
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  size="sm"
                                  className={`bg-gradient-to-r ${cat.color} hover:opacity-90 text-white font-bold shadow-lg`}
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Visit
                                </Button>
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
            <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
              <CardContent className="p-12 text-center">
                <h3 className="text-4xl font-black text-white mb-6">
                  More Resources
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Looking for specific resources? Check our dedicated pages for
                  comprehensive guides on cybersecurity and financial literacy.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/cyber-security" className="inline-block">
                    <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-8 shadow-lg">
                      Security Guide
                    </Button>
                  </a>
                  <a href="/financial-literacy" className="inline-block">
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 shadow-lg">
                      Finance Guide
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
