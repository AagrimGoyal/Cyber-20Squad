import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, CheckCircle, Lock, Smartphone, Globe, TrendingUp } from "lucide-react";

export default function Tools() {
  const toolCategories = [
    {
      category: "Password & Authentication",
      icon: Lock,
      color: "from-blue-500 to-cyan-600",
      tools: [
        {
          name: "Bitwarden",
          price: "Free & Premium",
          rating: 5,
          description: "Open-source password manager with excellent security and user interface.",
          features: ["Cloud sync", "Password generator", "Browser extension", "Open source"],
          link: "https://bitwarden.com",
          pros: ["Free tier is robust", "Highly secure", "Self-hostable"],
          cons: ["Premium plan required for advanced features"],
        },
        {
          name: "1Password",
          price: "$2.99-$4.99/month",
          rating: 5,
          description: "Premium password manager with enterprise-grade security.",
          features: ["Family sharing", "Emergency access", "Travel mode", "Watchtower"],
          link: "https://1password.com",
          pros: ["Industry leader", "Excellent support", "Great UX"],
          cons: ["Premium only", "Higher price point"],
        },
        {
          name: "KeePass",
          price: "Free",
          rating: 4,
          description: "Lightweight, offline password manager for maximum control.",
          features: ["Local storage", "Cross-platform", "Highly customizable"],
          link: "https://keepass.info",
          pros: ["Completely free", "No cloud required", "Open source"],
          cons: ["Manual sync needed", "Steeper learning curve"],
        },
      ],
    },
    {
      category: "VPN & Privacy",
      icon: Globe,
      color: "from-purple-500 to-pink-600",
      tools: [
        {
          name: "Proton VPN",
          price: "Free & Premium",
          rating: 5,
          description: "Privacy-focused VPN with strong encryption and no logs policy.",
          features: ["No-logs policy", "Free tier", "Swiss servers", "Ad blocker included"],
          link: "https://protonvpn.com",
          pros: ["Free tier available", "Privacy focused", "Fast speeds"],
          cons: ["Limited free servers", "Premium offers more features"],
        },
        {
          name: "Surfshark",
          price: "$2.19-$15.45/month",
          rating: 4,
          description: "Affordable VPN with unlimited simultaneous connections.",
          features: ["Unlimited devices", "CleanWeb", "MultiHop", "Affordable"],
          link: "https://surfshark.com",
          pros: ["Best price", "Unlimited devices", "Good speeds"],
          cons: ["Fewer servers than competitors"],
        },
      ],
    },
    {
      category: "Financial Management",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      tools: [
        {
          name: "YNAB (You Need A Budget)",
          price: "$14.99/month",
          rating: 5,
          description: "Budget app focused on behavior change and financial awareness.",
          features: ["Real-time sync", "Goals tracking", "Mobile app", "Bank integration"],
          link: "https://ynab.com",
          pros: ["Great methodology", "Excellent app", "Good support"],
          cons: ["Higher cost", "Learning curve for methodology"],
        },
        {
          name: "Mint",
          price: "Free",
          rating: 4,
          description: "Free expense tracking with automatic categorization.",
          features: ["Auto-categorization", "Spending alerts", "Bill reminders", "Credit monitoring"],
          link: "https://mint.com",
          pros: ["Completely free", "Easy to use", "Good features"],
          cons: ["No budget enforcement", "Limited advanced features"],
        },
        {
          name: "Personal Capital",
          price: "Free & Premium",
          rating: 4,
          description: "Investment tracking and wealth management dashboard.",
          features: ["Net worth tracking", "Investment analysis", "Financial advisor access"],
          link: "https://personalcapital.com",
          pros: ["Free tier robust", "Good for investors", "Advisory available"],
          cons: ["Complex interface", "Advisory is pricey"],
        },
      ],
    },
    {
      category: "Mobile Security",
      icon: Smartphone,
      color: "from-red-500 to-orange-600",
      tools: [
        {
          name: "Bitwarden (Mobile)",
          price: "Free & Premium",
          rating: 5,
          description: "Mobile password manager with biometric unlock.",
          features: ["Biometric auth", "Auto-fill", "Dark mode", "Offline access"],
          link: "https://bitwarden.com",
          pros: ["Secure", "User friendly", "Well maintained"],
          cons: ["Requires account"],
        },
        {
          name: "Norton 360",
          price: "$10/month",
          rating: 4,
          description: "Comprehensive mobile security with antivirus and VPN.",
          features: ["Antivirus", "Web protection", "WiFi scanning", "App advisor"],
          link: "https://norton.com",
          pros: ["Complete protection", "Trusted brand", "VPN included"],
          cons: ["Paid only", "Can impact performance"],
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <Globe className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Recommended <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Curated list of tested and verified tools to secure your digital life and manage your finances.
            </p>
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 text-base cursor-pointer">
              ⭐ All tools personally reviewed
            </Badge>
          </div>

          {/* Tool Categories */}
          <div className="space-y-20">
            {toolCategories.map((cat, catIndex) => {
              const Icon = cat.icon;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-4 mb-12">
                    <div className={`bg-gradient-to-br ${cat.color} p-4 rounded-xl`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-white">{cat.category}</h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-2"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cat.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="group relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}></div>
                        <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full flex flex-col">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div className="flex-1">
                                <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                  {tool.name}
                                </CardTitle>
                                <Badge className={`bg-gradient-to-r ${cat.color} text-white border-none`}>{tool.price}</Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(tool.rating)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col space-y-6">
                            <p className="text-gray-300 leading-relaxed">{tool.description}</p>

                            {/* Features */}
                            <div>
                              <p className="text-sm font-semibold text-gray-400 mb-3">Key Features:</p>
                              <ul className="space-y-2">
                                {tool.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs font-semibold text-emerald-400 mb-2">✅ Pros:</p>
                                <ul className="text-xs text-gray-400 space-y-1">
                                  {tool.pros.map((pro, idx) => (
                                    <li key={idx}>• {pro}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-red-400 mb-2">⚠️ Cons:</p>
                                <ul className="text-xs text-gray-400 space-y-1">
                                  {tool.cons.map((con, idx) => (
                                    <li key={idx}>• {con}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Visit Button */}
                            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                              <Button className={`w-full bg-gradient-to-r ${cat.color} hover:opacity-90 text-white font-bold mt-4`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Visit Website
                              </Button>
                            </a>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips Section */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
            <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
              <CardContent className="p-12">
                <h3 className="text-4xl font-black text-white text-center mb-12">Tool Selection Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="text-4xl">🔍</div>
                    <h4 className="text-xl font-bold text-white">Research First</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Check reviews, read comparisons, and understand what each tool offers before committing.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl">🧪</div>
                    <h4 className="text-xl font-bold text-white">Try Free Versions</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Most tools offer free trials or plans. Use them to find what works best for you.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl">🔐</div>
                    <h4 className="text-xl font-bold text-white">Prioritize Security</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Choose tools from reputable companies with strong privacy policies and security records.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
