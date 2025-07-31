import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Shield, PiggyBank, CreditCard, Building, AlertTriangle, CheckCircle } from "lucide-react";

export default function FinancialLiteracy() {
  const topics = [
    {
      icon: PiggyBank,
      title: "Smart Saving Strategies",
      description: "Learn how to build an emergency fund and save for your future goals securely.",
      level: "Beginner",
      duration: "15 min read",
      color: "bg-cyber-green",
    },
    {
      icon: CreditCard,
      title: "Credit & Debt Management",
      description: "Understand credit scores, manage debt responsibly, and protect your credit identity.",
      level: "Intermediate",
      duration: "20 min read",
      color: "bg-cyber-blue",
    },
    {
      icon: TrendingUp,
      title: "Investment Fundamentals",
      description: "Start your investment journey with secure platforms and fraud-resistant strategies.",
      level: "Intermediate",
      duration: "25 min read",
      color: "bg-finance-gold",
    },
    {
      icon: Building,
      title: "Digital Banking Security",
      description: "Master secure online banking, mobile payments, and digital wallet protection.",
      level: "Essential",
      duration: "18 min read",
      color: "bg-security-red",
    },
  ];

  const tips = [
    {
      icon: CheckCircle,
      title: "Use Strong, Unique Passwords",
      description: "Never reuse banking passwords. Use a password manager for secure storage.",
      type: "Security",
    },
    {
      icon: AlertTriangle,
      title: "Verify Before You Trust",
      description: "Always verify financial communications through official channels before acting.",
      type: "Fraud Prevention",
    },
    {
      icon: Shield,
      title: "Monitor Your Accounts Daily",
      description: "Set up account alerts and check your statements regularly for unauthorized activity.",
      type: "Monitoring",
    },
    {
      icon: DollarSign,
      title: "Budget Before You Spend",
      description: "Create a secure digital budget and track expenses using encrypted financial apps.",
      type: "Planning",
    },
  ];

  const resources = [
    {
      title: "Secure Financial Planning Worksheet",
      type: "PDF Download",
      description: "A comprehensive worksheet to plan your finances securely.",
    },
    {
      title: "Investment Security Checklist",
      type: "Interactive Tool",
      description: "Verify investment platforms before committing your money.",
    },
    {
      title: "Fraud Protection Guide",
      type: "Quick Reference",
      description: "Essential steps to protect yourself from financial fraud.",
    },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        {/* Financial background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.2'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Money-themed floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full filter blur-xl animate-float"></div>
          <div className="absolute top-64 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full filter blur-xl animate-float animation-delay-3000"></div>
          <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full filter blur-xl animate-float animation-delay-6000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-12 w-12 text-yellow-400 mr-4 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Financial <span className="text-yellow-400">Literacy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Master your money with security-first financial education. Learn to build wealth 
              while protecting yourself from digital threats and financial fraud.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-cyber-green text-white px-4 py-2">
                Security-First Approach
              </Badge>
              <Badge className="bg-cyber-blue text-white px-4 py-2">
                Practical Strategies
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2">
                Real-World Examples
              </Badge>
            </div>
          </div>

          {/* Learning Topics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Core Learning Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card key={index} className="border-accent/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${topic.color} text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{topic.level}</Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{topic.duration}</span>
                        <Button size="sm" className="bg-cyber-blue hover:bg-cyber-blue/90">
                          Start Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Essential Security Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <Card key={index} className="border-accent/20 text-center">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                      <Badge variant="outline" className="mb-3">{tip.type}</Badge>
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Featured Content */}
          <div className="mb-16">
            <Card className="border-accent/20 bg-gradient-to-r from-cyber-blue/10 to-finance-gold/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Secure Your Financial Future
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Join our comprehensive course that combines financial literacy with 
                      cybersecurity best practices. Learn to build wealth while staying 
                      protected from digital threats.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-cyber-green" />
                        <span className="text-sm">12 modules covering all aspects of secure finance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-cyber-green" />
                        <span className="text-sm">Real-world case studies and examples</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-cyber-green" />
                        <span className="text-sm">Interactive tools and calculators</span>
                      </div>
                    </div>
                    <Button className="bg-finance-gold hover:bg-finance-gold/90 text-white">
                      Enroll Now
                    </Button>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
                      alt="Financial Security"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Free Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-cyber-green text-white">{resource.type}</Badge>
                    <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
