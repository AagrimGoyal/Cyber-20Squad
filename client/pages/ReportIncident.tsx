import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Clock,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ReportIncident() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    incidentType: "",
    date: "",
    description: "",
    impactedAccounts: "",
    attachments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const incidentTypes = [
    "Account Compromise",
    "Phishing Attack",
    "Malware Infection",
    "Unauthorized Access",
    "Data Breach",
    "Financial Fraud",
    "Identity Theft",
    "Other",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend
    console.log("Incident Report:", formData);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        incidentType: "",
        date: "",
        description: "",
        impactedAccounts: "",
        attachments: "",
      });
    }, 5000);
  };

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
                <FileText className="h-20 w-20 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Report an <span className="text-red-400">Incident</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
              Help us understand security incidents and protect our community.
              Your report is confidential and will be handled by our security
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {submitted ? (
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-100 blur-lg"></div>
              <Card className="relative border-2 border-green-500 bg-white dark:bg-gray-900">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-foreground mb-4">
                    Report Submitted Successfully
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Thank you for reporting this incident. Our security team has
                    received your report and will review it within 24 hours. You
                    will receive an email confirmation shortly.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span>Response time: Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span>Your report is confidential and secure</span>
                    </div>
                  </div>
                  <Link to="/cyber-security">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8">
                      Back to Cyber Security
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 via-orange-500 to-red-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
              <Card className="relative border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                  <CardTitle className="flex items-center gap-3 text-3xl">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    Report Security Incident
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="border-2 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="border-2 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="border-2 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Incident Type *
                        </label>
                        <select
                          name="incidentType"
                          value={formData.incidentType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                        >
                          <option value="">Select incident type</option>
                          {incidentTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          When Did This Happen? *
                        </label>
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="border-2 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Impacted Accounts
                        </label>
                        <Input
                          type="text"
                          name="impactedAccounts"
                          value={formData.impactedAccounts}
                          onChange={handleChange}
                          placeholder="e.g., Email, Bank Account"
                          className="border-2 border-gray-300 dark:border-gray-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Detailed Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please provide detailed information about the incident..."
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded">
                      <div className="flex gap-3">
                        <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            What happens next?
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Our security team will review your report within 24
                            hours. If we need additional information, we'll
                            contact you at the email or phone number provided
                            above. Keep your confirmation email for reference.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3"
                      >
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Submit Report
                      </Button>
                      <Link to="/cyber-security" className="flex-1">
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-2 font-bold py-3"
                        >
                          Cancel
                        </Button>
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Important Info Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            What to Include in Your Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-700 bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">
                    Timing Details
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When you discovered the incident, how long you think it's been
                  active, and any patterns you've noticed about timing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-8 w-8 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">
                    Specific Details
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Account usernames, email addresses, suspicious activity
                  details, and any unusual changes you noticed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 bg-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">
                    Actions Taken
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  What steps you've already taken, passwords changed, accounts
                  secured, and any evidence you've collected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
