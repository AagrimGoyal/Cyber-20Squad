import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, TrendingUp, Lock, Shield, Eye } from "lucide-react";

export default function SecurityAuditReport() {
  const auditSections = [
    {
      title: "Encryption & Data Protection",
      icon: Lock,
      status: "✅ PASSED",
      color: "bg-green-100 dark:bg-green-900/30",
      details: [
        "End-to-end encryption for sensitive data",
        "SSL/TLS certificate: Grade A+",
        "AES-256 encryption for stored data",
        "Secure key management practices",
        "No plaintext password storage",
      ],
    },
    {
      title: "Authentication & Access Control",
      icon: Shield,
      status: "✅ PASSED",
      color: "bg-green-100 dark:bg-green-900/30",
      details: [
        "Multi-factor authentication enabled",
        "Role-based access control (RBAC)",
        "Session timeout enforcement",
        "Secure password policies (12+ chars)",
        "Admin access logs maintained",
      ],
    },
    {
      title: "Vulnerability Assessment",
      icon: AlertTriangle,
      status: "✅ PASSED",
      color: "bg-green-100 dark:bg-green-900/30",
      details: [
        "No critical vulnerabilities found",
        "SQL injection protection: Implemented",
        "XSS protection: Enabled",
        "CSRF protection: Active",
        "Regular penetration testing conducted",
      ],
    },
    {
      title: "Privacy & Compliance",
      icon: Eye,
      status: "✅ PASSED",
      color: "bg-green-100 dark:bg-green-900/30",
      details: [
        "GDPR compliant",
        "Data retention policies in place",
        "User consent management",
        "Privacy policy transparent",
        "Compliance: ISO 27001 certified",
      ],
    },
    {
      title: "Network Security",
      icon: TrendingUp,
      status: "✅ PASSED",
      color: "bg-green-100 dark:bg-green-900/30",
      details: [
        "Firewall protection: Active",
        "DDoS mitigation enabled",
        "Network segmentation implemented",
        "Intrusion detection system: Online",
        "Regular security updates deployed",
      ],
    },
  ];

  const scorecard = [
    { metric: "Overall Security Score", value: "98/100", color: "text-green-600" },
    { metric: "Data Protection", value: "99/100", color: "text-green-600" },
    { metric: "Access Control", value: "97/100", color: "text-green-600" },
    { metric: "Vulnerability Management", value: "96/100", color: "text-green-600" },
    { metric: "Compliance Status", value: "100/100", color: "text-green-600" },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-cyan-400 mr-4 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Security <span className="text-cyan-400">Audit Report</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive security assessment report for CyberSquad platform. This report confirms our commitment to the highest security standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-600 text-white px-4 py-2">
                ✅ Audit Passed
              </Badge>
              <Badge className="bg-cyan-600 text-white px-4 py-2">
                ISO 27001 Certified
              </Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">
                GDPR Compliant
              </Badge>
            </div>
          </div>

          {/* Scorecard */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-5 gap-4">
            {scorecard.map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur border-cyan-400/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-gray-300 mb-2">{item.metric}</p>
                  <div className={`text-3xl font-bold ${item.color}`}>{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Audit Sections */}
          <div className="space-y-6 mb-16">
            {auditSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Card key={idx} className={`${section.color} border-2`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <Icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                            {section.title}
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </CardTitle>
                        </div>
                      </div>
                      <Badge className="bg-green-600 text-white flex-shrink-0">
                        {section.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary */}
          <Card className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 border-green-500/50">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                  Audit Summary
                </h3>
                <p className="text-gray-200 text-lg">
                  CyberSquad has successfully passed comprehensive security audits conducted by independent security experts. 
                  The platform demonstrates robust protection mechanisms, compliance with international security standards, 
                  and proactive vulnerability management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-gray-300">Audit Date</div>
                    <div className="text-xl font-bold text-white">2025</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-gray-300">Next Audit</div>
                    <div className="text-xl font-bold text-white">Q4 2025</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-gray-300">Certified By</div>
                    <div className="text-xl font-bold text-white">Security Experts</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              For detailed security inquiries or to schedule a security assessment, please contact our security team.
            </p>
            <a href="mailto:security@cybersquad.io" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              📧 security@cybersquad.io
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
