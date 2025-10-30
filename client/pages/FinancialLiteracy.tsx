import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Shield, PiggyBank, CreditCard, Building, AlertTriangle, CheckCircle, Play } from "lucide-react";

export default function FinancialLiteracy() {
  const topics = [
    {
      icon: PiggyBank,
      title: "Smart Saving Strategies",
      description: "Learn how to build an emergency fund and save for your future goals securely.",
      level: "Beginner",
      duration: "15 min read",
      color: "bg-cyber-green",
    },
    {
      icon: CreditCard,
      title: "Credit & Debt Management",
      description: "Understand credit scores, manage debt responsibly, and protect your credit identity.",
      level: "Intermediate",
      duration: "20 min read",
      color: "bg-cyber-blue",
    },
    {
      icon: TrendingUp,
      title: "Investment Fundamentals",
      description: "Start your investment journey with secure platforms and fraud-resistant strategies.",
      level: "Intermediate",
      duration: "25 min read",
      color: "bg-finance-gold",
    },
    {
      icon: Building,
      title: "Digital Banking Security",
      description: "Master secure online banking, mobile payments, and digital wallet protection.",
      level: "Essential",
      duration: "18 min read",
      color: "bg-security-red",
    },
  ];

  const tips = [
    {
      icon: CheckCircle,
      title: "Use Strong, Unique Passwords",
      description: "Never reuse banking passwords. Use a password manager for secure storage.",
      type: "Security",
    },
    {
      icon: AlertTriangle,
      title: "Verify Before You Trust",
      description: "Always verify financial communications through official channels before acting.",
      type: "Fraud Prevention",
    },
    {
      icon: Shield,
      title: "Monitor Your Accounts Daily",
      description: "Set up account alerts and check your statements regularly for unauthorized activity.",
      type: "Monitoring",
    },
    {
      icon: DollarSign,
      title: "Budget Before You Spend",
      description: "Create a secure digital budget and track expenses using encrypted financial apps.",
      type: "Planning",
    },
  ];

  const videos = [
    {
      title: "Personal Finance Basics",
      description: "Learn the fundamentals of budgeting, saving, and smart spending",
      youtubeId: "NayNfzHl1S8",
      duration: "12:34",
      channel: "The Financial Diet",
    },
    {
      title: "Building an Emergency Fund",
      description: "Why you need an emergency fund and how to build one",
      youtubeId: "qPR_2pWrFz4",
      duration: "8:45",
      channel: "Two Cents",
    },
    {
      title: "Understanding Credit Scores",
      description: "What credit scores are and how to improve yours",
      youtubeId: "KEDy-Zf9Jl4",
      duration: "10:22",
      channel: "CrunchyTales",
    },
    {
      title: "Investment Basics for Beginners",
      description: "Start your investment journey with these fundamentals",
      youtubeId: "4qZwBsJePxY",
      duration: "15:18",
      channel: "Two Cents",
    },
  ];

  const resources = [
    {
      title: "Personal Budget Planning Worksheet",
      type: "PDF Download",
      description: "Complete budgeting worksheet with income tracking, expense categories, and savings goals.",
      link: "https://www.practicalmoneyskills.com/downloads/pms_workbook.pdf",
      provider: "Practical Money Skills",
    },
    {
      title: "Debt Management & Payment Tracker",
      type: "PDF Download",
      description: "Track your debts, create payment plans, and monitor progress toward debt freedom.",
      link: "https://credit.org/wp-content/uploads/debt-journal.pdf",
      provider: "Credit.org",
    },
    {
      title: "Emergency Fund Calculator Worksheet",
      type: "PDF Download",
      description: "Calculate how much you need in emergency savings and create a plan to reach your goal.",
      link: "https://www.moneyprodigy.com/wp-content/uploads/emergency-fund-worksheet.pdf",
      provider: "Money Prodigy",
    },
    {
      title: "Investment Risk Assessment Guide",
      type: "PDF Download",
      description: "Evaluate your risk tolerance and create a balanced investment strategy.",
      link: "https://wallethacks.com/wp-content/uploads/investment-worksheet.pdf",
      provider: "Wallet Hacks",
    },
    {
      title: "Monthly Expense Tracker",
      type: "PDF Download",
      description: "Track daily expenses by category to identify spending patterns and save money.",
      link: "https://www.typecalendar.com/downloads/expense-tracker.pdf",
      provider: "Type Calendar",
    },
    {
      title: "Financial Goal Setting Planner",
      type: "PDF Download",
      description: "Set SMART financial goals and create actionable plans to achieve them.",
      link: "https://www.homeschoolof1.com/wp-content/uploads/financial-goals-worksheet.pdf",
      provider: "Homeschool of 1",
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950 overflow-hidden">
        {/* Financial background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.5'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Money-themed floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <DollarSign className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">
              Financial <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Literacy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Master your money with security-first financial education. Learn to build wealth while protecting yourself from digital threats and financial fraud.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
                🔒 Security-First Approach
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                💡 Practical Strategies
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 text-base cursor-pointer hover:shadow-lg hover:shadow-yellow-500/50 transition-all">
                📊 Real-World Examples
              </Badge>
            </div>
          </div>

          {/* Learning Topics */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">📚 LEARNING TOPICS</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Core Learning Topics
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                    <Card className="relative border-2 border-gray-700 bg-gray-900 shadow-lg hover:shadow-2xl transition-all h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-6">
                          <div className={`p-4 rounded-xl ${topic.color} text-white group-hover:scale-110 transition-transform`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white border-none">{topic.level}</Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white">{topic.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-6 leading-relaxed">{topic.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-sm text-gray-400 font-medium">⏱️ {topic.duration}</span>
                          <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold shadow-lg shadow-emerald-500/30">
                            Start Learning
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">💡 SECURITY TIPS</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Essential Security Tips
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-300 blur-lg"></div>
                    <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                      <CardContent className="p-6 text-center">
                        <div className="mb-6">
                          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full p-4 w-fit mx-auto">
                            <Icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <Badge className="mb-4 bg-cyan-600/30 text-cyan-300 border border-cyan-500/50">{tip.type}</Badge>
                        <h3 className="font-bold text-white mb-3 text-lg">{tip.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{tip.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Content */}
          <div className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
              <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">✨ FEATURED COURSE</span>
                      <h3 className="text-4xl font-black text-white mb-6">
                        Secure Your Financial Future
                      </h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Join our comprehensive course that combines financial literacy with cybersecurity best practices. Learn to build wealth while staying protected from digital threats.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                          <span className="text-white font-medium">12 modules covering all aspects of secure finance</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                          <span className="text-white font-medium">Real-world case studies and examples</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                          <span className="text-white font-medium">Interactive tools and calculators</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-3 px-8 shadow-lg shadow-emerald-500/30 text-lg">
                        Enroll Now
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition-all"></div>
                      <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
                        alt="Financial Security"
                        className="relative rounded-2xl shadow-2xl border-2 border-white/10"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Video Learning */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">📺 VIDEO LEARNING</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Learn from Expert Videos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
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
                      <h3 className="font-bold text-white mb-3 text-lg">{video.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{video.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <span className="text-xs text-cyan-400 font-semibold">{video.channel}</span>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold">
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

          {/* Resources */}
          <div>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">📄 FREE RESOURCES</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Download Essential Resources
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                    <CardContent className="p-6">
                      <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none">{resource.type}</Badge>
                      <h3 className="font-bold text-white mb-3 text-lg">{resource.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                      <p className="text-xs text-emerald-400 mb-6 font-medium">📌 Source: {resource.provider}</p>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Button variant="outline" size="sm" className="w-full border-2 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-bold transition-all">
                          📥 Download PDF
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
