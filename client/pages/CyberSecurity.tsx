import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Lock,
  Shield,
  Eye,
  Wifi,
  Smartphone,
  Globe,
  AlertTriangle,
  CheckCircle,
  Play,
  Zap,
  Bug,
  Users,
  TrendingUp,
} from "lucide-react";

export default function CyberSecurity() {
  const threats = [
    {
      icon: AlertTriangle,
      title: "Phishing Attacks",
      description:
        "Learn to identify and avoid fraudulent emails, messages, and websites designed to steal your information.",
      severity: "High Risk",
      color: "bg-security-red",
      url: "https://www.us-cert.gov/article/what-phishing-attack",
    },
    {
      icon: Lock,
      title: "Weak Passwords",
      description:
        "Discover why strong, unique passwords are your first line of defense against cybercriminals.",
      severity: "Critical",
      color: "bg-security-red",
      url: "https://www.cisa.gov/secure-our-world/secure-passwords",
    },
    {
      icon: Wifi,
      title: "Unsecured Networks",
      description:
        "Understand the risks of public Wi-Fi and how to protect your data on unsecured networks.",
      severity: "Medium Risk",
      color: "bg-warning",
      url: "https://www.us-cert.gov/article/staying-safe-online-public-wi-fi",
    },
    {
      icon: Smartphone,
      title: "Mobile Vulnerabilities",
      description:
        "Secure your mobile devices against malware, data theft, and unauthorized access.",
      severity: "High Risk",
      color: "bg-security-red",
      url: "https://www.cisa.gov/mobile-device-security",
    },
  ];

  const protections = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description:
        "Add extra layers of security to your accounts with 2FA and MFA.",
      implementation: "Easy",
    },
    {
      icon: Eye,
      title: "Privacy Settings Review",
      description:
        "Regularly audit and update privacy settings across all platforms.",
      implementation: "Medium",
    },
    {
      icon: Lock,
      title: "Encryption Tools",
      description:
        "Use encryption for sensitive data storage and communication.",
      implementation: "Advanced",
    },
    {
      icon: Globe,
      title: "Secure Browsing",
      description: "Browser security, VPN usage, and safe download practices.",
      implementation: "Easy",
    },
  ];

  const bestPractices = [
    "Keep software and systems updated regularly",
    "Use reputable antivirus and anti-malware software",
    "Be cautious with email attachments and links",
    "Regularly backup important data securely",
    "Monitor financial accounts and credit reports",
    "Use secure payment methods for online purchases",
    "Educate yourself about current cyber threats",
    "Create incident response plans for data breaches",
  ];

  const tools = [
    {
      name: "Password Manager",
      description: "Generate and store strong, unique passwords securely",
      category: "Authentication",
      recommendation: "Highly Recommended",
    },
    {
      name: "VPN Service",
      description: "Encrypt your internet connection and protect your privacy",
      category: "Privacy",
      recommendation: "Essential",
    },
    {
      name: "Antivirus Software",
      description: "Real-time protection against malware and viruses",
      category: "Protection",
      recommendation: "Required",
    },
    {
      name: "Secure Messaging",
      description: "End-to-end encrypted communication apps",
      category: "Communication",
      recommendation: "Recommended",
    },
  ];

  const videos = [
    {
      title: "Cybersecurity Basics",
      description:
        "Introduction to fundamental cybersecurity concepts and threats",
      youtubeId: "T_jtKc-ITWQ",
      duration: "12:30",
      channel: "Khan Academy",
    },
    {
      title: "How to Create Strong Passwords",
      description:
        "Learn the essential elements of a strong password and best practices",
      youtubeId: "Xl7gxUhKkQQ",
      duration: "7:45",
      channel: "Practical Money Skills",
    },
    {
      title: "Phishing Attacks: How to Stay Safe",
      description:
        "Recognize and avoid phishing scams that target your personal information",
      youtubeId: "j_oDmKfMOYg",
      duration: "8:22",
      channel: "FTC Consumer Education",
    },
    {
      title: "Two-Factor Authentication Explained",
      description: "Understand 2FA and why it's crucial for account security",
      youtubeId: "UeJayWRWsKE",
      duration: "6:15",
      channel: "TechTerms",
    },
  ];


  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-red-950 via-purple-950 to-pink-950 overflow-hidden">
        {/* Cyber security background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.5'%3E%3Cpath d='M50 50L25 25l25-25 25 25-25 25zm0 0l25 25-25 25-25-25 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Security-themed glowing elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500 to-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Digital lock symbols */}
          <div className="absolute top-40 left-1/4 text-red-300/10 text-8xl animate-float">
            🔒
          </div>
          <div className="absolute bottom-40 right-1/4 text-purple-300/10 text-8xl animate-float animation-delay-3000">
            🛡️
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <Lock className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              Cyber{" "}
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Protect yourself and your finances from cyber threats. Learn
              essential security practices to safeguard your digital life in an
              increasingly connected world.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/scams">
                <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105">
                  🚨 Threat Prevention
                </Badge>
              </Link>
              <Link to="/resources">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                  🔐 Secure Practices
                </Badge>
              </Link>
              <Link to="/security-audit-report">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                  🛡️ Data Protection
                </Badge>
              </Link>
            </div>
          </div>

          {/* Common Threats */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-900/30 text-red-300 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
                🚨 THREATS
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Common Cyber Threats
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threats.map((threat, index) => {
                const Icon = threat.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 via-pink-500 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                    <Card className="relative border-2 border-gray-700 bg-gray-900 shadow-lg hover:shadow-2xl transition-all h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className={`p-4 rounded-xl ${threat.color} text-white group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <Badge className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-none">
                            {threat.severity}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white">
                          {threat.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {threat.description}
                        </p>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold shadow-lg shadow-red-500/30"
                        >
                          Learn Protection
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Protection Strategies */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">
                🛡️ PROTECTION
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Protection Strategies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protections.map((protection, index) => {
                const Icon = protection.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-300 blur-lg"></div>
                    <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                      <CardContent className="p-6 text-center">
                        <div className="mb-6">
                          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full p-4 w-fit mx-auto">
                            <Icon className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <Badge className="mb-4 bg-blue-600/30 text-blue-300 border border-blue-500/50">
                          {protection.implementation}
                        </Badge>
                        <h3 className="font-bold text-white mb-3 text-lg">
                          {protection.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {protection.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
              <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-black text-center text-white mb-12">
                    Cybersecurity Best Practices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bestPractices.map((practice, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 mt-1">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white font-medium group-hover/item:translate-x-2 transition-transform">
                          {practice}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security Tools */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
                🔧 TOOLS
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Recommended Security Tools
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <h3 className="font-bold text-white text-lg">
                          {tool.name}
                        </h3>
                        <Badge
                          className={
                            tool.recommendation === "Essential"
                              ? "bg-gradient-to-r from-red-600 to-pink-600 text-white border-none"
                              : tool.recommendation === "Highly Recommended"
                                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none"
                                : "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-none"
                          }
                        >
                          {tool.recommendation}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      <Badge className="bg-gray-700/50 text-gray-300 border-0">
                        {tool.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Video Learning */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
                📺 VIDEO LEARNING
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Learn from Expert Videos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-700 bg-gray-900 overflow-hidden hover:shadow-2xl transition-all h-full">
                    <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/sddefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition"
                      >
                        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-6 group-hover:scale-125 transition-transform">
                          <Play className="h-12 w-12 text-white fill-white" />
                        </div>
                      </a>
                      <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg text-white text-xs font-bold">
                        ⏱️ {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-3 text-lg">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <span className="text-xs text-purple-400 font-semibold">
                          {video.channel}
                        </span>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold"
                          >
                            Watch on YouTube
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>


          {/* Emergency Response */}
          <div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
              <Card className="relative border-2 border-red-700/50 bg-gradient-to-br from-gray-900 to-red-900/20 overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-lg opacity-50"></div>
                        <AlertTriangle className="h-20 w-20 text-red-400 relative z-10" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-6">
                      Security Incident Response
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                      If you suspect a security breach or have been compromised,
                      act quickly. Follow our emergency response guide to
                      minimize damage and secure your accounts.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/emergency-guide">
                        <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-8 shadow-lg shadow-red-500/30">
                          Emergency Guide
                        </Button>
                      </Link>
                      <Link to="/report-incident">
                        <Button
                          variant="outline"
                          className="border-2 border-red-600/50 text-red-300 hover:bg-red-600 hover:text-white font-bold py-3 px-8 transition-all"
                        >
                          Report Incident
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
