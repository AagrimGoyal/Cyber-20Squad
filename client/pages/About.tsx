import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Target, Zap, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Integrity First",
      description: "We believe in transparent, honest communication and ethical practices in everything we do.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly evolve and improve our platform to meet the needs of modern users.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Financial security education should be available to everyone, everywhere.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build a supportive community where users learn from each other and grow together.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Founded by Young Innovators",
      description: "CyberSquad was created by a passionate team of 14-year-old developers who believe financial security starts with digital protection.",
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description: "Reached 10,000+ users within months, proving that our security-first approach resonates globally.",
    },
    {
      year: "2025",
      title: "Expanding Impact",
      description: "Building partnerships with educational institutions and launching advanced security features.",
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <Target className="h-20 w-20 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Empowering the next generation with financial literacy and cybersecurity knowledge to build a safer, more secure digital future.
            </p>
          </div>

          {/* Story */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <Card className="relative border-2 border-cyan-500/20 bg-gradient-to-br from-gray-900 to-gray-950">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-black text-white mb-8">Our Story</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>
                      CyberSquad was born from a simple idea: financial literacy and cybersecurity shouldn't be separate topics. Our young team of developers realized that in today's digital world, protecting your money and protecting your data are inseparable challenges.
                    </p>
                    <p>
                      At just 14 years old, we asked ourselves: "Why isn't there a platform that teaches both?" We set out to create something different—a comprehensive platform that combines practical financial education with real-world cybersecurity practices.
                    </p>
                    <p>
                      What started as a school project quickly evolved into a mission. We built a secure, user-friendly platform that tens of thousands of people now use to protect their financial futures. Every line of code, every lesson, and every feature is designed with security and education at its core.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">💎 OUR VALUES</span>
              <h2 className="text-5xl font-black text-white">What Drives Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                    <Card className="relative border-2 border-gray-700 bg-gray-900 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-3">
                            <Icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="text-2xl font-bold text-white flex-1">{value.title}</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">🚀 OUR JOURNEY</span>
              <h2 className="text-5xl font-black text-white">Milestones</h2>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent mt-4"></div>
                      )}
                    </div>
                    <div className="pt-4 pb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-2xl">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-black text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Be part of the movement that's changing financial education and digital security.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/financial-literacy">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 shadow-lg shadow-cyan-500/30 text-lg">
                  Start Learning
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/game">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 transition-all text-lg">
                  Play the Game
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
