import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Eye, Wifi, Smartphone, Globe, AlertTriangle, CheckCircle, Play } from "lucide-react";

export default function CyberSecurity() {
  const threats = [
    {
      icon: AlertTriangle,
      title: "Phishing Attacks",
      description: "Learn to identify and avoid fraudulent emails, messages, and websites designed to steal your information.",
      severity: "High Risk",
      color: "bg-security-red",
    },
    {
      icon: Lock,
      title: "Weak Passwords",
      description: "Discover why strong, unique passwords are your first line of defense against cybercriminals.",
      severity: "Critical",
      color: "bg-security-red",
    },
    {
      icon: Wifi,
      title: "Unsecured Networks",
      description: "Understand the risks of public Wi-Fi and how to protect your data on unsecured networks.",
      severity: "Medium Risk",
      color: "bg-warning",
    },
    {
      icon: Smartphone,
      title: "Mobile Vulnerabilities",
      description: "Secure your mobile devices against malware, data theft, and unauthorized access.",
      severity: "High Risk",
      color: "bg-security-red",
    },
  ];

  const protections = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Add extra layers of security to your accounts with 2FA and MFA.",
      implementation: "Easy",
    },
    {
      icon: Eye,
      title: "Privacy Settings Review",
      description: "Regularly audit and update privacy settings across all platforms.",
      implementation: "Medium",
    },
    {
      icon: Lock,
      title: "Encryption Tools",
      description: "Use encryption for sensitive data storage and communication.",
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
      description: "Introduction to fundamental cybersecurity concepts and threats",
      youtubeId: "0QFi2pz2Zao",
      duration: "14:22",
      channel: "Security in a Minute",
    },
    {
      title: "How to Create Strong Passwords",
      description: "Learn the essential elements of a strong password and best practices",
      youtubeId: "OpWeeGGqseY",
      duration: "6:30",
      channel: "The Cyber Guy",
    },
    {
      title: "Phishing Attacks: How to Stay Safe",
      description: "Recognize and avoid phishing scams that target your personal information",
      youtubeId: "F_rVvj6mUvU",
      duration: "9:15",
      channel: "Digital Espresso",
    },
    {
      title: "Two-Factor Authentication Explained",
      description: "Understand 2FA and why it's crucial for account security",
      youtubeId: "0diJw5jvS4M",
      duration: "7:45",
      channel: "Tech Insider",
    },
  ];

  const securityResources = [
    {
      title: "Internet Safety Checklist",
      type: "PDF Download",
      description: "Essential steps to stay safe online from the Department of Homeland Security.",
      link: "https://www.dhs.gov/sites/default/files/publications/internet-safety-checklist.pdf",
      provider: "US Department of Homeland Security",
    },
    {
      title: "Personal Cyber Security Guide",
      type: "PDF Download",
      description: "Comprehensive guide covering cybersecurity basics and protection strategies.",
      link: "https://www.cyber.gov.au/sites/default/files/2023-03/personal-cyber-security-first-steps.pdf",
      provider: "Australian Cyber Security Centre",
    },
    {
      title: "Small Business Cybersecurity Checklist",
      type: "PDF Download",
      description: "Protect your business with this comprehensive cybersecurity checklist.",
      link: "https://connecteam.com/wp-content/uploads/small-business-cybersecurity-checklist.pdf",
      provider: "Connecteam",
    },
    {
      title: "Remote Work Security Checklist",
      type: "PDF Download",
      description: "Secure your remote work setup with GDPR compliance and privacy protection.",
      link: "https://www.cm-alliance.com/files/remote-working-checklist.pdf",
      provider: "CM Alliance",
    },
    {
      title: "Password Security Worksheet",
      type: "PDF Download",
      description: "Create strong passwords and implement multi-factor authentication.",
      link: "https://www.securecommunitynetwork.org/wp-content/uploads/password-security-worksheet.pdf",
      provider: "Secure Community Network",
    },
    {
      title: "Incident Response Planning Template",
      type: "PDF Download",
      description: "Prepare for cybersecurity incidents with this comprehensive response plan.",
      link: "https://safetyculture.com/downloads/cyber-security-incident-response-template.pdf",
      provider: "SafetyCulture",
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-red-950 via-purple-950 to-pink-950 overflow-hidden">
        {/* Cyber security background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.5'%3E%3Cpath d='M50 50L25 25l25-25 25 25-25 25zm0 0l25 25-25 25-25-25 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Security-themed glowing elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500 to-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Digital lock symbols */}
          <div className="absolute top-40 left-1/4 text-red-300/10 text-8xl animate-float">🔒</div>
          <div className="absolute bottom-40 right-1/4 text-purple-300/10 text-8xl animate-float animation-delay-3000">🛡️</div>
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
              Cyber <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Protect yourself and your finances from cyber threats. Learn essential security practices to safeguard your digital life in an increasingly connected world.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-red-500/50 transition-all">
                🚨 Threat Prevention
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                🔐 Secure Practices
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                🛡️ Data Protection
              </Badge>
            </div>
          </div>

          {/* Common Threats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Common Cyber Threats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threats.map((threat, index) => {
                const Icon = threat.icon;
                return (
                  <Card key={index} className="border-accent/20 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${threat.color} text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="destructive">{threat.severity}</Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{threat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{threat.description}</p>
                      <Button size="sm" variant="outline" className="border-security-red text-security-red hover:bg-security-red hover:text-white">
                        Learn Protection
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Protection Strategies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Protection Strategies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protections.map((protection, index) => {
                const Icon = protection.icon;
                return (
                  <Card key={index} className="border-accent/20 text-center">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                      <Badge variant="outline" className="mb-3">{protection.implementation}</Badge>
                      <h3 className="font-semibold text-foreground mb-2">{protection.title}</h3>
                      <p className="text-sm text-muted-foreground">{protection.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <Card className="border-accent/20 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                  Cybersecurity Best Practices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0" />
                      <span className="text-foreground">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Recommended Security Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <Badge className={
                        tool.recommendation === "Essential" ? "bg-security-red text-white" :
                        tool.recommendation === "Highly Recommended" ? "bg-cyber-blue text-white" :
                        "bg-cyber-green text-white"
                      }>
                        {tool.recommendation}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{tool.description}</p>
                    <Badge variant="outline">{tool.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Learning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              📺 Video Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="border-accent/20 overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative bg-black aspect-video flex items-center justify-center group">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/sddefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition"
                    >
                      <Play className="h-16 w-16 text-white fill-white" />
                    </a>
                    <span className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs font-semibold">
                      {video.duration}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyber-blue font-medium">{video.channel}</span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                          Watch on YouTube
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Free Security Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityResources.map((resource, index) => (
                <Card key={index} className="border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-security-red text-white">{resource.type}</Badge>
                    <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <p className="text-xs text-cyber-blue mb-4">Source: {resource.provider}</p>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full hover:bg-security-red hover:text-white">
                        Download PDF
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Response */}
          <div>
            <Card className="border-security-red/20 bg-gradient-to-r from-security-red/5 to-background">
              <CardContent className="p-8">
                <div className="text-center">
                  <AlertTriangle className="h-16 w-16 text-security-red mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Security Incident Response
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    If you suspect a security breach or have been compromised, act quickly.
                    Follow our emergency response guide to minimize damage and secure your accounts.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button className="bg-security-red hover:bg-security-red/90 text-white">
                      Emergency Guide
                    </Button>
                    <Button variant="outline" className="border-security-red text-security-red">
                      Report Incident
                    </Button>
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
