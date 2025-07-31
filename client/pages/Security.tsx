import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit AES Encryption",
      description: "All data is encrypted using military-grade AES-256 encryption, the same standard used by banks and government agencies.",
      level: "Military Grade",
    },
    {
      icon: Key,
      title: "Zero-Knowledge Architecture",
      description: "We cannot see your data even if we wanted to. Your information is encrypted before it reaches our servers.",
      level: "Maximum Privacy",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our servers are hosted in SOC 2 Type II certified data centers with 24/7 physical security monitoring.",
      level: "Enterprise Grade",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Advanced threat detection systems monitor for suspicious activities and potential security breaches 24/7.",
      level: "Continuous Protection",
    },
  ];

  const certifications = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant", 
    "GDPR Compliant",
    "PCI DSS Level 1",
    "NIST Framework Aligned",
    "Regular Security Audits",
  ];

  const securityPractices = [
    {
      title: "Multi-Factor Authentication",
      description: "All accounts require MFA for enhanced security",
      status: "Active",
    },
    {
      title: "Regular Security Updates",
      description: "Automatic security patches and updates",
      status: "Automated", 
    },
    {
      title: "Incident Response Team",
      description: "24/7 security team ready to respond to threats",
      status: "24/7 Active",
    },
    {
      title: "Data Backup & Recovery",
      description: "Encrypted backups with instant recovery capabilities",
      status: "Continuous",
    },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden">
        {/* Security background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.3'%3E%3Cpath d='M50 50L25 25l25-25 25 25-25 25zm0 0l25 25-25 25-25-25 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Security shield icons floating */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 text-emerald-300/20 text-6xl animate-float">🛡️</div>
          <div className="absolute bottom-40 right-1/4 text-teal-300/20 text-5xl animate-float animation-delay-3000">🔒</div>
          <div className="absolute top-1/2 right-20 text-emerald-300/20 text-4xl animate-float animation-delay-6000">🔐</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-emerald-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Bank-Level <span className="text-emerald-400">Security</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your security is our top priority. We employ the same security standards as major financial institutions 
              to protect your data and financial information.
            </p>
            <Badge className="bg-emerald-500 text-white px-6 py-2 text-lg">
              🏦 Bank-Grade Protection
            </Badge>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Security Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-accent/20 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-emerald-500/20">
                          <Icon className="h-6 w-6 text-emerald-400" />
                        </div>
                        <Badge className="bg-emerald-500 text-white">{feature.level}</Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Security Certifications
            </h2>
            <Card className="border-accent/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Active Security Measures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityPractices.map((practice, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{practice.title}</h3>
                      <Badge className="bg-emerald-500 text-white">{practice.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto border-accent/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">99.99%</div>
                    <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">0</div>
                    <div className="text-sm text-muted-foreground">Security Breaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Security Monitoring</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Want to learn more about our security practices or have specific security questions?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/cyber-security">
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                        Learn Cyber Security
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-emerald-500 text-emerald-500">
                      Security Audit Report
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
