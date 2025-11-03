import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "How to Spot Phishing Emails: A Comprehensive Guide",
      excerpt:
        "Learn the telltale signs of phishing attacks and protect yourself from email-based fraud.",
      category: "Security",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      color: "from-red-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13e493e?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Building Your First Emergency Fund: 5 Steps",
      excerpt:
        "Discover how to create a financial safety net that protects you during unexpected situations.",
      category: "Finance",
      author: "Michael Rodriguez",
      date: "Mar 12, 2024",
      readTime: "10 min read",
      color: "from-emerald-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1579621970563-430f63602d4b?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Password Security Best Practices in 2024",
      excerpt:
        "Master the art of creating and managing strong passwords that keep hackers out.",
      category: "Security",
      author: "Alex Kumar",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      color: "from-cyan-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Understanding Credit Scores and How to Improve Yours",
      excerpt:
        "Deep dive into credit scoring systems and actionable strategies to boost your credit health.",
      category: "Finance",
      author: "Emma Watson",
      date: "Mar 8, 2024",
      readTime: "12 min read",
      color: "from-yellow-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1554224311-beee415c15c7?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Public Wi-Fi Safety: How to Browse Securely",
      excerpt:
        "Learn the risks of public Wi-Fi and techniques to protect your data while on-the-go.",
      category: "Security",
      author: "James Wilson",
      date: "Mar 5, 2024",
      readTime: "7 min read",
      color: "from-purple-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Investing for Beginners: Starting Your Journey to Wealth",
      excerpt:
        "A beginner-friendly guide to understanding stocks, bonds, and building a diversified portfolio.",
      category: "Finance",
      author: "Lisa Thompson",
      date: "Mar 1, 2024",
      readTime: "15 min read",
      color: "from-blue-500 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1518644730709-0835105d9dda?w=500&h=300&fit=crop",
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <Search className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Latest{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Expert insights on cybersecurity and financial literacy to help
              you stay informed and protected.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["all", "Security", "Finance"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat === "all" ? "All Articles" : cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredArticles.map((article) => (
              <div key={article.id} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${article.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}
                ></div>
                <Card className="relative border-2 border-gray-700 bg-gray-900 overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 left-4 bg-gradient-to-r ${article.color} text-white border-none`}
                    >
                      {article.category}
                    </Badge>
                  </div>

                  <CardContent className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-3 pt-6 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <span className="text-xs text-purple-400 font-semibold">
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Featured Article Banner */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
            <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="mb-4 bg-purple-600/30 text-purple-300 border border-purple-500/50">
                      Featured
                    </Badge>
                    <h3 className="text-4xl font-black text-white mb-6">
                      Deep Dive: Cybersecurity in Your Pocket
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      Learn how to secure your mobile devices against threats,
                      protect your personal data, and maintain digital hygiene
                      on the go.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8">
                      Read Full Article
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl opacity-50 blur-lg"></div>
                    <img
                      src="https://images.unsplash.com/photo-1512941691920-13a378c3f1db?w=500&h=400&fit=crop"
                      alt="Featured article"
                      className="relative rounded-2xl shadow-2xl border-2 border-white/10"
                    />
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
