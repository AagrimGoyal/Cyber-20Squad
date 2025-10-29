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
      name: "Priya Sharma",
      role: "Small Business Owner",
      content: "CyberSquad taught me how to protect my business finances online. Their security-first approach to financial education is exactly what I needed.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Freelance Developer",
      content: "The combination of cybersecurity and financial literacy is brilliant. I feel much more confident managing my money online now.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      role: "College Student",
      content: "As someone just starting their financial journey, CyberSquad's resources have been invaluable. The security tips alone have saved me from potential scams.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyber-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyber-green rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-finance-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Cybersecurity Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-cyan-400 drop-shadow-lg" />
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-400 rounded-full border-4 border-white animate-pulse shadow-lg"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to <span className="text-cyan-400">CyberSquad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              The world's most secure financial literacy platform. Master your money while staying protected from cyber threats.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/security">
                <Badge className="bg-cyber-green text-white px-6 py-2 text-lg cursor-pointer hover:bg-cyber-green/90 transition-colors">
                  🛡️ Bank-Level Security
                </Badge>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyber-blue hover:bg-cyber-blue/90 text-white px-8 py-3">
                <Link to="/financial-literacy">
                  <Shield className="h-5 w-5 mr-2" />
                  Start Learning Securely
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white px-8 py-3">
                <Link to="/team">
                  Meet Our Team
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23000' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
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
                    <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
                      <Link to={feature.link}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Young Innovators Achievement Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🏆</span>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Young Innovators</h2>
                <p className="text-xl opacity-90">Redefining What's Possible</p>
              </div>
              <span className="text-6xl ml-4">🚀</span>
            </div>

            <p className="text-2xl md:text-3xl font-bold mb-6">
              The Future of Finance is Here - Built by 14-Year-Olds!
            </p>

            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90">
              When passion meets innovation, age becomes irrelevant. Our team of young developers has created
              a platform that rivals industry giants, proving that the next generation is ready to lead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">14</div>
                <div className="text-lg opacity-80">Average Team Age</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">#1</div>
                <div className="text-lg opacity-80">Security Standards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-80">Potential</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white px-6 py-2 text-lg backdrop-blur-sm">
                🎯 Innovation First
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-2 text-lg backdrop-blur-sm">
                💡 Fresh Perspective
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-2 text-lg backdrop-blur-sm">
                🌟 Future Leaders
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-emerald-500/20 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-6000"></div>
        </div>
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
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Matrix-style background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M20 20v-8h8v8h-8zm0 0v8h-8v-8h8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Glowing particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-3000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why CyberSquad is the World's Most Secure Financial Platform
              </h2>
              <p className="text-xl text-gray-300 mb-8">
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
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/security">
                  <Button asChild className="bg-cyber-green hover:bg-cyber-green/90 text-white mr-4">
                    <span>View Security Details</span>
                  </Button>
                </Link>
                <a href="https://www.dhs.gov/sites/default/files/publications/internet-safety-checklist.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-white">
                    Security Audit Report
                  </Button>
                </a>
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
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-800 dark:via-gray-900 dark:to-indigo-900">
        {/* Testimonial background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
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
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-blue-700 to-emerald-600 text-white overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/20 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
