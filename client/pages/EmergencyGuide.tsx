import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Phone,
  Lock,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergencyGuide() {
  const steps = [
    {
      number: 1,
      title: "Remain Calm and Act Quickly",
      description:
        "Take a deep breath. Every second counts in a security breach. Panic can lead to poor decisions. Stay focused and follow this guide step by step.",
      icon: AlertTriangle,
      tips: [
        "Don't panic or make rushed decisions",
        "Disconnect from the internet if possible",
        "Document everything you discover",
      ],
    },
    {
      number: 2,
      title: "Change Your Passwords Immediately",
      description:
        "If you suspect your account is compromised, change your password immediately on a secure device.",
      icon: Lock,
      tips: [
        "Use a strong, unique password (16+ characters)",
        "Change password from a different device",
        "Enable two-factor authentication",
        "Avoid using previously compromised passwords",
      ],
    },
    {
      number: 3,
      title: "Secure Your Accounts",
      description:
        "Review account activity and remove any unauthorized access or recovery methods.",
      icon: Shield,
      tips: [
        "Check recent login activity",
        "Remove unauthorized devices",
        "Update recovery email and phone number",
        "Review connected apps and services",
      ],
    },
    {
      number: 4,
      title: "Check for Financial Fraud",
      description:
        "Monitor your financial accounts for unauthorized transactions and contact your bank immediately.",
      icon: FileText,
      tips: [
        "Check all bank and credit card accounts",
        "Place fraud alert with credit bureaus",
        "Freeze your credit if necessary",
        "Request a credit report",
      ],
    },
    {
      number: 5,
      title: "Monitor Your Identity",
      description:
        "Keep watch for identity theft by checking credit reports and suspicious accounts.",
      icon: Clock,
      tips: [
        "Monitor credit reports for new accounts",
        "Set up credit monitoring services",
        "Watch for unauthorized transactions",
        "Check tax records for fraud",
      ],
    },
    {
      number: 6,
      title: "Report and Document",
      description:
        "File reports with relevant authorities and keep documentation for future reference.",
      icon: FileText,
      tips: [
        "Report to relevant authorities",
        "File with IC3 (Internet Crime Complaint Center)",
        "Keep all documentation",
        "Consider legal consultation",
      ],
    },
  ];

  const emergencyContacts = [
    {
      title: "National Cybercrime Hotline",
      contact: "IC3 (Internet Crime Complaint Center)",
      url: "https://www.ic3.gov",
      description: "File a complaint about internet fraud",
    },
    {
      title: "Federal Trade Commission",
      contact: "Identity Theft Hotline",
      url: "https://www.identitytheft.gov",
      description: "Report identity theft and get recovery plan",
    },
    {
      title: "Credit Bureaus",
      contact: "Equifax, Experian, TransUnion",
      url: "https://www.annualcreditreport.com",
      description: "Place fraud alert and freeze credit",
    },
    {
      title: "Your Bank",
      contact: "Call your bank directly",
      description: "Report fraudulent transactions immediately",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-950 via-slate-950 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <AlertTriangle className="h-20 w-20 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Emergency <span className="text-red-400">Response Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
              If you suspect you've been hacked or experienced a security breach,
              follow these critical steps immediately to minimize damage and
              secure your accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 via-orange-500 to-red-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold text-2xl">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <Icon className="h-6 w-6 text-red-600" />
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Key actions:
                            </h4>
                            <ul className="space-y-2">
                              {step.tips.map((tip, tipIndex) => (
                                <li
                                  key={tipIndex}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-red-900/30 text-red-300 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
              📞 EMERGENCY CONTACTS
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Important Resources
            </h2>
            <p className="text-xl text-gray-300 font-light">
              These organizations can help you respond to security breaches and
              identity theft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                <Card className="relative border-2 border-gray-700 bg-gray-900 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <Phone className="h-8 w-8 text-red-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">
                          {contact.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 font-semibold">
                      {contact.contact}
                    </p>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {contact.description}
                    </p>
                    {contact.url && (
                      <a
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold">
                          Visit Website
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 bg-gradient-to-br from-red-600 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Need More Help?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto font-light">
            If you need additional support or want to report an incident, our
            team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 font-bold text-lg"
              >
                Contact Support
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/cyber-security">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-3 font-bold text-lg"
              >
                Back to Cyber Security
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
