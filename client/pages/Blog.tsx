import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      id: 1,
      title: "CERT-In Alert: New Cyber Threats Targeting Indian Banks",
      excerpt:
        "Latest security advisory from India's Cyber Emergency Response Team on emerging threats in the financial sector.",
      category: "Security",
      author: "Rajesh Kumar",
      date: "Jan 18, 2025",
      readTime: "7 min read",
      color: "from-red-600 to-pink-700",
      image: "🔒",
      link: "https://www.cert-in.org.in/",
    },
    {
      id: 2,
      title: "Digital Payment Safety: RBI Guidelines for Indian Users",
      excerpt:
        "Complete guide to safe digital payments following RBI's latest recommendations for UPI and mobile banking.",
      category: "Finance",
      author: "Priya Sharma",
      date: "Jan 17, 2025",
      readTime: "10 min read",
      color: "from-emerald-600 to-teal-700",
      image: "💳",
      link: "https://www.rbi.org.in/",
    },
    {
      id: 3,
      title: "PAN Fraud Protection: How to Secure Your Income Tax Account",
      excerpt:
        "Step-by-step guide to protect your PAN and income tax data from cyber criminals in India.",
      category: "Security",
      author: "Amit Patel",
      date: "Jan 16, 2025",
      readTime: "8 min read",
      color: "from-cyan-600 to-blue-700",
      image: "🔐",
      link: "https://www.incometax.gov.in/",
    },
    {
      id: 4,
      title: "GST Data Security: Protecting Your Business Information",
      excerpt:
        "Essential security measures for Indian businesses to protect their GST portal accounts and financial data.",
      category: "Finance",
      author: "Neha Gupta",
      date: "Jan 15, 2025",
      readTime: "9 min read",
      color: "from-yellow-600 to-orange-700",
      image: "📊",
      link: "https://www.gst.gov.in/",
    },
    {
      id: 5,
      title: "Aadhaar Security: Protecting Your Digital Identity",
      excerpt:
        "Comprehensive guide to securing your Aadhaar linked accounts and preventing identity theft in India.",
      category: "Security",
      author: "Vikram Singh",
      date: "Jan 14, 2025",
      readTime: "12 min read",
      color: "from-purple-600 to-pink-700",
      image: "👤",
      link: "https://uidai.gov.in/",
    },
    {
      id: 6,
      title: "Investment Scams: How Indians Can Avoid Financial Fraud",
      excerpt:
        "Learn to identify and avoid common investment scams targeting Indian citizens and protect your savings.",
      category: "Finance",
      author: "Deepika Nair",
      date: "Jan 13, 2025",
      readTime: "11 min read",
      color: "from-blue-600 to-cyan-700",
      image: "💰",
      link: "/scams",
    },
    {
      id: 7,
      title: "Two-Factor Authentication: Your First Line of Defense",
      excerpt:
        "Understanding 2FA methods and why every Indian should enable it on their online accounts.",
      category: "Security",
      author: "Rohit Verma",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      color: "from-green-600 to-emerald-700",
      image: "🔑",
      link: "/cyber-security",
    },
    {
      id: 8,
      title: "Cryptocurrency Safety for Indian Investors",
      excerpt:
        "A detailed guide for Indian investors on securing cryptocurrency wallets and trading safely.",
      category: "Finance",
      author: "Sanjay Malhotra",
      date: "Jan 11, 2025",
      readTime: "13 min read",
      color: "from-orange-600 to-red-700",
      image: "₿",
      link: "/financial-literacy",
    },
  ];

  // Sort by date (latest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredArticles = sortedArticles
    .filter((a) => selectedCategory === "all" || a.category === selectedCategory)
    .filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Security & Finance <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Latest insights and guides for Indian users on cybersecurity and
              financial literacy.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border-2 border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {["all", "Security", "Finance"].map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(cat === "all" ? "all" : cat)
                  }
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="group relative h-full">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${article.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}
                  ></div>
                  <Card className="relative border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-full flex flex-col overflow-hidden">
                    {/* Article Image/Icon */}
                    <div
                      className={`bg-gradient-to-br ${article.color} p-8 flex items-center justify-center h-48`}
                    >
                      <span className="text-7xl">{article.image}</span>
                    </div>

                    {/* Article Content */}
                    <CardHeader className="pb-3">
                      <Badge
                        className={`bg-gradient-to-r ${article.color} text-white border-none w-fit mb-2`}
                      >
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-foreground leading-tight line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col pb-4">
                      <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="space-y-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          ⏱️ {article.readTime}
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link to="/blog" className="w-full">
                        <Button
                          className={`w-full bg-gradient-to-r ${article.color} hover:opacity-90 text-white font-bold transition-all`}
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stay Updated with Latest Security News
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest security alerts and financial tips
            delivered to your inbox.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 text-lg">
            Subscribe Now
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
