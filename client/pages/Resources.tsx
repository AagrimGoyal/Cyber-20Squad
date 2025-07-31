import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, DollarSign, Shield, Users, TrendingUp } from "lucide-react";

export default function Resources() {
  const allResources = [
    // Financial Literacy Resources
    {
      category: "Financial Literacy",
      icon: DollarSign,
      color: "bg-finance-gold",
      resources: [
        {
          title: "Personal Budget Planning Worksheet",
          description: "Complete budgeting worksheet with income tracking, expense categories, and savings goals.",
          link: "https://www.practicalmoneyskills.com/downloads/pms_workbook.pdf",
          provider: "Practical Money Skills",
        },
        {
          title: "Debt Management & Payment Tracker",
          description: "Track your debts, create payment plans, and monitor progress toward debt freedom.",
          link: "https://credit.org/wp-content/uploads/debt-journal.pdf",
          provider: "Credit.org",
        },
        {
          title: "Emergency Fund Calculator Worksheet",
          description: "Calculate how much you need in emergency savings and create a plan to reach your goal.",
          link: "https://www.moneyprodigy.com/wp-content/uploads/emergency-fund-worksheet.pdf",
          provider: "Money Prodigy",
        },
        {
          title: "Investment Risk Assessment Guide",
          description: "Evaluate your risk tolerance and create a balanced investment strategy.",
          link: "https://wallethacks.com/wp-content/uploads/investment-worksheet.pdf",
          provider: "Wallet Hacks",
        },
        {
          title: "Monthly Expense Tracker",
          description: "Track daily expenses by category to identify spending patterns and save money.",
          link: "https://www.typecalendar.com/downloads/expense-tracker.pdf",
          provider: "Type Calendar",
        },
      ]
    },
    // Cyber Security Resources
    {
      category: "Cyber Security",
      icon: Shield,
      color: "bg-security-red",
      resources: [
        {
          title: "Internet Safety Checklist",
          description: "Essential steps to stay safe online from the Department of Homeland Security.",
          link: "https://www.dhs.gov/sites/default/files/publications/internet-safety-checklist.pdf",
          provider: "US Department of Homeland Security",
        },
        {
          title: "Personal Cyber Security Guide",
          description: "Comprehensive guide covering cybersecurity basics and protection strategies.",
          link: "https://www.cyber.gov.au/sites/default/files/2023-03/personal-cyber-security-first-steps.pdf",
          provider: "Australian Cyber Security Centre",
        },
        {
          title: "Small Business Cybersecurity Checklist",
          description: "Protect your business with this comprehensive cybersecurity checklist.",
          link: "https://connecteam.com/wp-content/uploads/small-business-cybersecurity-checklist.pdf",
          provider: "Connecteam",
        },
        {
          title: "Remote Work Security Checklist",
          description: "Secure your remote work setup with GDPR compliance and privacy protection.",
          link: "https://www.cm-alliance.com/files/remote-working-checklist.pdf",
          provider: "CM Alliance",
        },
        {
          title: "Password Security Worksheet",
          description: "Create strong passwords and implement multi-factor authentication.",
          link: "https://www.securecommunitynetwork.org/wp-content/uploads/password-security-worksheet.pdf",
          provider: "Secure Community Network",
        },
      ]
    }
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.2'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <BookOpen className="h-16 w-16 text-cyan-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Free <span className="text-cyan-400">Resources</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Download professional worksheets, checklists, and guides to enhance your financial literacy and cybersecurity knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-cyber-green text-white px-4 py-2">
                <Download className="h-3 w-3 mr-1" />
                Free Downloads
              </Badge>
              <Badge className="bg-cyber-blue text-white px-4 py-2">
                Expert Curated
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2">
                Professional Quality
              </Badge>
            </div>
          </div>

          {/* Resource Categories */}
          {allResources.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <CategoryIcon className="h-8 w-8 text-white mr-3" />
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <Card key={index} className="border-accent/20 hover:shadow-xl transition-all hover:-translate-y-1">
                      <CardHeader>
                        <Badge className={`${category.color} text-white w-fit mb-2`}>
                          PDF Download
                        </Badge>
                        <CardTitle className="text-lg text-foreground">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                        <p className="text-xs text-cyber-blue mb-4">Source: {resource.provider}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Additional Resources */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-accent/20 bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  More Resources Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're constantly adding new worksheets, calculators, and educational materials.
                  Check back regularly for updates!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-cyber-blue text-white px-4 py-2">
                    Interactive Calculators
                  </Badge>
                  <Badge className="bg-cyber-green text-white px-4 py-2">
                    Video Tutorials
                  </Badge>
                  <Badge className="bg-finance-gold text-white px-4 py-2">
                    Expert Webinars
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
