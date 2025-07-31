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
      <div className="py-16 bg-gradient-to-br from-background via-background to-security-red/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-12 w-12 text-security-red mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cyber <span className="text-security-red">Security</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
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
