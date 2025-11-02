import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, CheckCircle, TrendingDown, Lock, Eye, Lightbulb, Phone } from "lucide-react";

export default function Scams() {
  const scamTypes = [
    {
      icon: Phone,
      title: "Phishing Scams",
      description: "Fraudsters impersonate banks or services via email/SMS to steal credentials",
      redFlags: [
        "Urgent action required messages",
        "Suspicious sender email addresses",
        "Links that don't match the official website",
        "Requests to verify personal information",
        "Poor grammar or spelling",
      ],
      howToProtect: [
        "Never click links in unsolicited emails",
        "Go directly to official websites instead",
        "Check sender email addresses carefully",
        "Enable two-factor authentication",
        "Use password managers for unique passwords",
      ],
      severity: "🔴 Critical",
      color: "bg-red-100 dark:bg-red-900/30",
    },
    {
      icon: TrendingDown,
      title: "Investment Scams",
      description: "False promises of high returns on investments with minimal risk",
      redFlags: [
        "Guaranteed returns (>20% annually)",
        "Pressure to invest quickly",
        "Cryptocurrency-focused opportunities",
        "Unknown investment platforms",
        "Unregistered investment advisors",
      ],
      howToProtect: [
        "Verify advisor credentials with SEBI",
        "Research investment platforms thoroughly",
        "Avoid guaranteed return promises",
        "Use only registered platforms",
        "Ask for written documentation",
      ],
      severity: "🔴 Critical",
      color: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: AlertTriangle,
      title: "Lottery & Prize Scams",
      description: "Winning a lottery you never entered, requiring payment to claim",
      redFlags: [
        "You didn't participate in any lottery",
        "Unexpected notifications of winnings",
        "Requests for upfront payment",
        "Overseas lottery references",
        "High-pressure tactics",
      ],
      howToProtect: [
        "Never pay for unclaimed prizes",
        "Verify with official lottery websites",
        "Legitimate lotteries never ask for fees",
        "Report to authorities immediately",
        "Use reverse phone lookup for callers",
      ],
      severity: "🟠 High",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      icon: Lock,
      title: "Identity Theft",
      description: "Criminals use personal information to open accounts or make purchases",
      redFlags: [
        "Unknown credit card charges",
        "Collections notices for unfamiliar accounts",
        "Unexpected bills",
        "Missing mail",
        "Errors on credit report",
      ],
      howToProtect: [
        "Monitor credit reports regularly",
        "Use strong, unique passwords",
        "Enable credit freezes",
        "Secure personal documents",
        "Shred sensitive papers",
      ],
      severity: "🔴 Critical",
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: Eye,
      title: "Romance/Dating Scams",
      description: "Fake profiles to build relationships and manipulate victims into sending money",
      redFlags: [
        "Profile picture looks too perfect",
        "Quick declarations of love",
        "Stories about financial hardship",
        "Requests to move off dating platform quickly",
        "Requests for money transfers",
      ],
      howToProtect: [
        "Verify identity through video call",
        "Google reverse image search on photos",
        "Never send money to online strangers",
        "Report suspicious profiles",
        "Take time to build trust",
      ],
      severity: "🟠 High",
      color: "bg-pink-100 dark:bg-pink-900/30",
    },
    {
      icon: Lightbulb,
      title: "Tech Support Scams",
      description: "Pop-ups claiming viruses, requiring payment for fake tech support",
      redFlags: [
        "Unexpected pop-up warnings",
        "Requests to call specific numbers",
        "Demands for credit card information",
        "Claims you've been 'hacked'",
        "Pressure to act immediately",
      ],
      howToProtect: [
        "Never call numbers in pop-ups",
        "Use reputable antivirus software",
        "Keep software updated",
        "Close suspicious pop-ups",
        "Use official support channels",
      ],
      severity: "🟠 High",
      color: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: TrendingDown,
      title: "Job/Work-from-Home Scams",
      description: "Fake job opportunities requiring payment or personal information upfront",
      redFlags: [
        "No phone interview conducted",
        "Requests for payment before hiring",
        "Unrealistic salary for minimal work",
        "Vague job descriptions",
        "Suspicious company email addresses",
      ],
      howToProtect: [
        "Verify company details independently",
        "Legitimate jobs don't require upfront fees",
        "Research company reviews and ratings",
        "Check LinkedIn/official company pages",
        "Be wary of unsolicited job offers",
      ],
      severity: "🟠 High",
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: AlertTriangle,
      title: "Cryptocurrency Scams",
      description: "Fake crypto exchanges or mining schemes promising unrealistic returns",
      redFlags: [
        "Guaranteed returns on investments",
        "Pressure to invest quickly",
        "Unknown or unverified platforms",
        "Heavy social media promotion",
        "Complex or confusing processes",
      ],
      howToProtect: [
        "Only use established exchanges (Coinbase, Kraken)",
        "Verify platform registration",
        "Avoid guaranteed return promises",
        "Research projects thoroughly",
        "Use hardware wallets for storage",
      ],
      severity: "🔴 Critical",
      color: "bg-amber-100 dark:bg-amber-900/30",
    },
  ];

  const generalProtection = [
    {
      title: "Use Strong Passwords",
      description: "Create unique, complex passwords (12+ characters) with uppercase, numbers, and symbols",
    },
    {
      title: "Enable 2FA",
      description: "Add an extra layer of security with two-factor authentication on important accounts",
    },
    {
      title: "Update Software",
      description: "Keep operating system, browser, and apps updated with latest security patches",
    },
    {
      title: "Verify Before Sharing",
      description: "Always verify requests for personal information through official channels",
    },
    {
      title: "Monitor Accounts",
      description: "Regularly check bank statements, credit reports, and account activity",
    },
    {
      title: "Use VPN",
      description: "Use a VPN on public Wi-Fi to encrypt your connection and protect data",
    },
    {
      title: "Check URLs",
      description: "Look for HTTPS and verify website addresses before entering sensitive information",
    },
    {
      title: "Report Suspicious Activity",
      description: "Report scams to authorities and the relevant platform immediately",
    },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-slate-900 via-red-900 to-pink-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.2'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-48 h-48 bg-red-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-64 right-20 w-56 h-56 bg-pink-500/10 rounded-full filter blur-3xl animate-float animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-400 mr-4 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Online <span className="text-red-400">Scams</span> Awareness
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Learn to identify and protect yourself from the most common online scams. Knowledge is your best defense against cybercriminals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600 text-white px-4 py-2">
                Stay Alert
              </Badge>
              <Badge className="bg-cyber-blue text-white px-4 py-2">
                Learn Protection Tips
              </Badge>
              <Badge className="bg-cyber-green text-white px-4 py-2">
                Report & Prevent
              </Badge>
            </div>
          </div>

          {/* Common Scams */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Types of Online Scams
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {scamTypes.map((scam, idx) => {
                const Icon = scam.icon;
                return (
                  <Card key={idx} className={`${scam.color} border-2 hover:shadow-lg transition`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <Icon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                          <div>
                            <CardTitle className="text-xl text-foreground">{scam.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{scam.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex-shrink-0">
                          {scam.severity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          Red Flags
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {scam.redFlags.map((flag, i) => (
                            <li key={i} className="text-muted-foreground">• {flag}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-cyber-green" />
                          How to Protect
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {scam.howToProtect.map((tip, i) => (
                            <li key={i} className="text-muted-foreground">✓ {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* General Protection Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              General Protection Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {generalProtection.map((tip, idx) => {
                const colors = [
                  { bg: "from-blue-100 to-cyan-100", border: "border-blue-300", title: "text-blue-800", text: "text-blue-700", icon: "text-blue-600" },
                  { bg: "from-purple-100 to-violet-100", border: "border-purple-300", title: "text-purple-800", text: "text-purple-700", icon: "text-purple-600" },
                  { bg: "from-orange-100 to-amber-100", border: "border-orange-300", title: "text-orange-800", text: "text-orange-700", icon: "text-orange-600" },
                  { bg: "from-pink-100 to-rose-100", border: "border-pink-300", title: "text-pink-800", text: "text-pink-700", icon: "text-pink-600" },
                  { bg: "from-teal-100 to-emerald-100", border: "border-teal-300", title: "text-teal-800", text: "text-teal-700", icon: "text-teal-600" },
                  { bg: "from-indigo-100 to-blue-100", border: "border-indigo-300", title: "text-indigo-800", text: "text-indigo-700", icon: "text-indigo-600" },
                  { bg: "from-lime-100 to-green-100", border: "border-lime-300", title: "text-lime-800", text: "text-lime-700", icon: "text-lime-600" },
                  { bg: "from-red-100 to-orange-100", border: "border-red-300", title: "text-red-800", text: "text-red-700", icon: "text-red-600" },
                ];
                const color = colors[idx];

                return (
                  <Card key={idx} className={`bg-gradient-to-br ${color.bg} border-2 ${color.border} shadow-md hover:shadow-lg transition`}>
                    <CardHeader>
                      <CardTitle className={`text-lg flex items-center gap-2 ${color.title}`}>
                        <CheckCircle className={`h-5 w-5 ${color.icon} flex-shrink-0`} />
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm ${color.text}`}>{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Action Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 transition blur-lg"></div>
              <Card className="relative bg-gradient-to-br from-red-950 to-pink-950 border-2 border-red-500/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-red-200 flex items-center gap-2 text-lg">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                    If You're Scammed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-red-100">
                  <p>✓ Stop all communication immediately</p>
                  <p>✓ Report to your bank/platform</p>
                  <p>✓ File a complaint with authorities (Cybercrime cell)</p>
                  <p>✓ Document all evidence</p>
                  <p>✓ Monitor your accounts closely</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg opacity-75 group-hover:opacity-100 transition blur-lg"></div>
              <Card className="relative bg-gradient-to-br from-emerald-950 to-green-950 border-2 border-emerald-500/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-200 flex items-center gap-2 text-lg">
                    <Lock className="h-6 w-6 text-emerald-400" />
                    Quick Security Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-emerald-100">
                  <p>✓ Change passwords for compromised accounts</p>
                  <p>✓ Enable 2FA everywhere possible</p>
                  <p>✓ Run antivirus scan</p>
                  <p>✓ Check credit report for unauthorized accounts</p>
                  <p>✓ Place fraud alert with credit bureaus</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 transition blur-lg"></div>
              <Card className="relative bg-gradient-to-br from-cyan-950 to-blue-950 border-2 border-cyan-500/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-200 flex items-center gap-2 text-lg">
                    <Eye className="h-6 w-6 text-cyan-400" />
                    Report Scams To
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-cyan-100">
                  <p>📞 Cybercrime Cell India: 1930</p>
                  <p>💻 IC3.gov (US)</p>
                  <p>🏦 Your Bank Security Team</p>
                  <p>🚨 Local Police (FIR)</p>
                  <p>📱 Platform Support (if online)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
