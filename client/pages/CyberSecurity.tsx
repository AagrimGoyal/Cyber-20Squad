import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Eye, Wifi, Smartphone, Globe, AlertTriangle, CheckCircle } from "lucide-react";

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

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Cyber security background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.2'%3E%3Cpath d='M50 50L25 25l25-25 25 25-25 25zm0 0l25 25-25 25-25-25 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Security-themed glowing elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-44 h-44 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute top-48 right-24 w-52 h-52 bg-gradient-to-br from-purple-400/20 to-red-500/20 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-24 left-1/3 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>

          {/* Digital lock symbols */}
          <div className="absolute top-40 left-1/4 text-red-300/20 text-6xl animate-float">🔒</div>
          <div className="absolute bottom-40 right-1/4 text-purple-300/20 text-5xl animate-float animation-delay-3000">🛡️</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-12 w-12 text-red-400 mr-4 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Cyber <span className="text-red-400">Security</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Protect yourself and your finances from cyber threats. Learn essential security 
              practices to safeguard your digital life in an increasingly connected world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-security-red text-white px-4 py-2">
                Threat Prevention
              </Badge>
              <Badge className="bg-cyber-blue text-white px-4 py-2">
                Secure Practices
              </Badge>
              <Badge className="bg-cyber-green text-white px-4 py-2">
                Data Protection
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
