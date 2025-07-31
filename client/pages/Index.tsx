import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, Lock, Users, TrendingUp, CheckCircle, ArrowRight, Globe, BookOpen, Star } from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description: "Master personal finance with security-first strategies. Learn to build wealth while protecting your assets from digital threats.",
      color: "text-finance-gold",
      bgColor: "bg-finance-gold/10",
      link: "/financial-literacy",
    },
    {
      icon: Lock,
      title: "Cyber Security",
      description: "Protect yourself from cyber threats with practical security measures. Stay safe in an increasingly digital world.",
      color: "text-security-red",
      bgColor: "bg-security-red/10",
      link: "/cyber-security",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Learn from cybersecurity professionals and financial experts who understand the intersection of money and security.",
      color: "text-cyber-blue",
      bgColor: "bg-cyber-blue/10",
      link: "/team",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Users Protected", icon: Shield },
    { number: "99.9%", label: "Security Success Rate", icon: Lock },
    { number: "50+", label: "Learning Modules", icon: BookOpen },
    { number: "24/7", label: "Security Monitoring", icon: Globe },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "CyberSquad taught me how to protect my business finances online. Their security-first approach to financial education is exactly what I needed.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Developer",
      content: "The combination of cybersecurity and financial literacy is brilliant. I feel much more confident managing my money online now.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "College Student",
      content: "As someone just starting their financial journey, CyberSquad's resources have been invaluable. The security tips alone have saved me from potential scams.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-cyber-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-cyber-blue" />
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-cyber-green rounded-full border-4 border-background animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Welcome to <span className="text-cyber-blue">CyberSquad</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The world's most secure financial literacy platform. Master your money while staying protected from cyber threats.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-cyber-green text-white px-6 py-2 text-lg">
                🛡️ Bank-Level Security
              </Badge>
              <Badge className="bg-finance-gold text-white px-6 py-2 text-lg">
                💰 Expert Financial Education
              </Badge>
              <Badge className="bg-cyber-blue text-white px-6 py-2 text-lg">
                🌍 Trusted Worldwide
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/90 text-white px-8 py-3">
                <Shield className="h-5 w-5 mr-2" />
                Start Learning Securely
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white px-8 py-3">
                Meet Our Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Security-First Financial Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe financial literacy and cybersecurity go hand in hand. 
              Learn to build wealth while protecting yourself from digital threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-accent/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className={`p-4 rounded-full ${feature.bgColor} w-fit mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <Link to={feature.link}>
                      <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              Join a community that prioritizes both financial growth and digital security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why CyberSquad is the World's Most Secure Financial Platform
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We don't just teach financial literacy - we teach it with security as the foundation. 
                Every strategy, every tip, every lesson is designed with cybersecurity best practices in mind.
              </p>
              
              <div className="space-y-4">
                {[
                  "Military-grade encryption for all user data",
                  "Real-time threat monitoring and alerts",
                  "Zero-knowledge architecture protects your privacy",
                  "Expert-vetted content from security professionals",
                  "Continuous security audits and updates",
                  "24/7 incident response team"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyber-green flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-cyber-green hover:bg-cyber-green/90 text-white mr-4">
                  View Security Details
                </Button>
                <Button variant="outline" className="border-cyber-green text-cyber-green">
                  Security Audit Report
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                alt="Cybersecurity and Finance"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-cyber-green text-white p-4 rounded-lg shadow-lg">
                <Lock className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who've transformed their financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-finance-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue to-cyber-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who've already transformed their relationship with money and security. 
            Start your journey today with the world's most trusted platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/financial-literacy">
              <Button size="lg" variant="secondary" className="bg-white text-cyber-blue hover:bg-gray-100 px-8 py-3">
                <DollarSign className="h-5 w-5 mr-2" />
                Start Financial Learning
              </Button>
            </Link>
            <Link to="/cyber-security">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyber-blue px-8 py-3">
                <Lock className="h-5 w-5 mr-2" />
                Learn Cyber Security
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm opacity-75">
            🔒 Your data is protected with bank-level security | 🌍 Trusted globally | ⚡ Get started in under 2 minutes
          </div>
        </div>
      </section>
    </Layout>
  );
}
