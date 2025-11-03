import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Shield,
  DollarSign,
  Lock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  BookOpen,
  Star,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description:
        "Master personal finance with security-first strategies. Learn to build wealth while protecting your assets from digital threats.",
      color: "text-finance-gold",
      bgColor: "bg-finance-gold/10",
      link: "/financial-literacy",
    },
    {
      icon: Lock,
      title: "Cyber Security",
      description:
        "Protect yourself from cyber threats with practical security measures. Stay safe in an increasingly digital world.",
      color: "text-security-red",
      bgColor: "bg-security-red/10",
      link: "/cyber-security",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Learn from cybersecurity professionals and financial experts who understand the intersection of money and security.",
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
      content:
        "CyberSquad taught me how to protect my business finances online. Their security-first approach to financial education is exactly what I needed.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Freelance Developer",
      content:
        "The combination of cybersecurity and financial literacy is brilliant. I feel much more confident managing my money online now.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      role: "College Student",
      content:
        "As someone just starting their financial journey, CyberSquad's resources have been invaluable. The security tips alone have saved me from potential scams.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        {/* Advanced Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
        </div>

        {/* Cybersecurity Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.5'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                {/* Multiple glowing rings for enhanced effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-3xl blur-3xl opacity-75 animate-pulse scale-125"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-3xl blur-2xl opacity-60 animate-spin-slow scale-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-xl opacity-40 animate-bounce-slow scale-75"></div>

                {/* Main shield container with enhanced styling */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-cyan-500 via-blue-600 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                  {/* Shield icon with animation */}
                  <div className="relative">
                    <svg
                      className="w-24 h-24 text-white drop-shadow-lg animate-float"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 1C6.48 1 2 5.48 2 11v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm0 18h-8v-8c0-4.42 3.58-8 8-8s8 3.58 8 8v8h-8z" />
                      <circle
                        cx="12"
                        cy="11"
                        r="2.5"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <path
                        d="M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                        opacity="0.7"
                      />
                    </svg>
                    {/* Pulsing security indicators */}
                    <div className="absolute -top-3 -right-3 h-5 w-5 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full animate-pulse shadow-lg shadow-emerald-400/75"></div>
                    <div className="absolute top-1/2 -right-4 h-3 w-3 bg-emerald-300 rounded-full animate-pulse animation-delay-1000 shadow-lg"></div>
                    <div className="absolute bottom-2 right-1/4 h-2 w-2 bg-cyan-300 rounded-full animate-pulse animation-delay-2000 shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                CyberSquad
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
              The world's most secure financial literacy platform. Master your
              money while staying protected from cyber threats.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Link to="/security">
                <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105">
                  🛡️ Bank-Level Security
                </Badge>
              </Link>
              <Badge className="bg-white/10 backdrop-blur text-white px-6 py-3 text-base border border-white/20">
                ✨ AI-Powered Learning
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/financial-literacy" className="inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Start Learning Securely
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>10K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23000' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 opacity-50">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold mb-4">
              ✨ OUR CORE FEATURES
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Security-First Financial Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              We believe financial literacy and cybersecurity go hand in hand.
              Learn to build wealth while protecting yourself from digital
              threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all transform group-hover:scale-105 h-full">
                    <CardHeader className="text-center">
                      <div
                        className={`p-5 rounded-2xl ${feature.bgColor} w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <Link to={feature.link} className="block">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full font-bold py-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Young Innovators Achievement Section */}
      <section className="py-40 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 rounded-full animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-white/20 rounded-full animate-blob animation-delay-2000 filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full animate-blob animation-delay-4000 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="text-7xl">🏆</span>
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-2">
                  Young Innovators
                </h2>
                <p className="text-2xl opacity-90 font-light">
                  Redefining What's Possible
                </p>
              </div>
              <span className="text-7xl">🚀</span>
            </div>

            <p className="text-3xl md:text-4xl font-black mb-8 leading-tight">
              The Future of Finance is Here - Built by 14-Year-Olds!
            </p>

            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-95 font-light leading-relaxed">
              When passion meets innovation, age becomes irrelevant. Our team of
              young developers has created a platform that rivals industry
              giants, proving that the next generation is ready to lead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-6xl font-black mb-3">14</div>
                <div className="text-lg font-semibold opacity-90">
                  Average Team Age
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-6xl font-black mb-3">#1</div>
                <div className="text-lg font-semibold opacity-90">
                  Security Standards
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-6xl font-black mb-3">∞</div>
                <div className="text-lg font-semibold opacity-90">
                  Potential
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-white/25 text-white px-6 py-3 text-base backdrop-blur-md border border-white/30 hover:bg-white/35 transition-all cursor-pointer">
                🎯 Innovation First
              </Badge>
              <Badge className="bg-white/25 text-white px-6 py-3 text-base backdrop-blur-md border border-white/30 hover:bg-white/35 transition-all cursor-pointer">
                💡 Fresh Perspective
              </Badge>
              <Badge className="bg-white/25 text-white px-6 py-3 text-base backdrop-blur-md border border-white/30 hover:bg-white/35 transition-all cursor-pointer">
                🌟 Future Leaders
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-300 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-cyan-300 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-4">
              📊 BY THE NUMBERS
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              Trusted by Thousands Worldwide
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Join a community that prioritizes both financial growth and
              digital security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all group-hover:shadow-2xl">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-cyan-100 dark:from-cyan-900/30 to-blue-100 dark:to-blue-900/30 rounded-full p-4">
                        <Icon className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-40 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden">
        {/* Matrix-style background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff41' fill-opacity='0.5'%3E%3Cpath d='M20 20v-8h8v8h-8zm0 0v8h-8v-8h8z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Glowing particles */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
                🔒 SECURITY FIRST
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Why CyberSquad is Different
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
                We don't just teach financial literacy - we teach it with
                security as the foundation. Every strategy, every tip, every
                lesson is designed with cybersecurity best practices in mind.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Military-grade encryption for all user data",
                  "Real-time threat monitoring and alerts",
                  "Zero-knowledge architecture protects your privacy",
                  "Expert-vetted content from security professionals",
                  "Continuous security audits and updates",
                  "24/7 incident response team",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium group-hover:translate-x-2 transition-transform">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/security" className="inline-block">
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-2 px-6 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all">
                    View Security Details
                  </Button>
                </Link>
                <Link to="/security-audit-report" className="inline-block">
                  <Button
                    variant="outline"
                    className="border-2 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500 hover:text-white font-bold py-2 px-6 transition-all"
                  >
                    Security Audit Report
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                alt="Cybersecurity and Finance"
                className="relative rounded-3xl shadow-2xl border-2 border-white/10 hover:border-white/20 transition-all"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-cyan-600 text-white p-6 rounded-2xl shadow-2xl shadow-emerald-500/50 transform group-hover:scale-110 transition-transform">
                <Lock className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-5 rounded-2xl shadow-2xl shadow-blue-500/50 transform group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        {/* Testimonial background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4">
              ⭐ TESTIMONIALS
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Real stories from people who've transformed their financial
              security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                <Card className="relative border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed font-light">
                      "{testimonial.content}"
                    </p>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 bg-gradient-to-br from-cyan-600 via-blue-700 to-emerald-600 text-white overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".2"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".4"
              fill="currentColor"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 rounded-3xl rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-1/4 w-20 h-20 border-2 border-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-white/20 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of users who've already transformed their
            relationship with money and security. Start your journey today with
            the world's most trusted platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/financial-literacy">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-3 font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Start Financial Learning
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90 font-semibold">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
              <span>🔒 Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-white rounded-full animate-pulse animation-delay-1000"></div>
              <span>🌍 Trusted Globally</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-white rounded-full animate-pulse animation-delay-2000"></div>
              <span>⚡ Start in 2 Minutes</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
