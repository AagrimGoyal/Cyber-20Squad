import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, HelpCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is CyberSquad?",
          a: "CyberSquad is a comprehensive platform that combines financial literacy with cybersecurity education. We teach users how to manage their money securely in an increasingly digital world.",
        },
        {
          q: "Is CyberSquad free to use?",
          a: "Yes! All core features including financial literacy courses, cyber security lessons, and our budgeting game are completely free.",
        },
        {
          q: "How do I create an account?",
          a: "Simply visit our platform and start exploring. Most features don't require an account, but you can create one to save your progress and track your learning.",
        },
        {
          q: "What age group is CyberSquad for?",
          a: "CyberSquad is designed for teenagers and adults of all ages who want to improve their financial literacy and cybersecurity knowledge.",
        },
      ],
    },
    {
      category: "Learning & Features",
      questions: [
        {
          q: "What topics does CyberSquad cover?",
          a: "We cover financial literacy (budgeting, saving, investing, debt management), cybersecurity (threats, protection, best practices), and scam awareness.",
        },
        {
          q: "Can I download courses for offline access?",
          a: "Currently, all content is available online. We're working on offline functionality in future updates.",
        },
        {
          q: "Is the Cyber Budgeting Game a real trading simulator?",
          a: "No, the game is an educational tool designed to teach financial decisions in a secure environment. It uses simulated money and scenarios.",
        },
        {
          q: "How often is new content added?",
          a: "We add new lessons, videos, and resources regularly to keep pace with evolving threats and financial trends.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my data safe on CyberSquad?",
          a: "Yes. We use military-grade AES-256 encryption, zero-knowledge architecture, and host on SOC 2 Type II certified servers.",
        },
        {
          q: "Do you sell my data?",
          a: "Never. We don't share user data with third parties. Your privacy is protected by our strict data protection policies.",
        },
        {
          q: "What encryption do you use?",
          a: "We use 256-bit AES encryption, the same standard used by banks and government agencies worldwide.",
        },
        {
          q: "How often do you audit security?",
          a: "We conduct continuous security monitoring and regular third-party audits. Check our Security Audit Report for details.",
        },
      ],
    },
    {
      category: "Support & Issues",
      questions: [
        {
          q: "How can I report a bug or issue?",
          a: "Visit our Feedback page or contact our support team. We appreciate all reports and respond quickly.",
        },
        {
          q: "What should I do if I encounter a scam?",
          a: "Read our Scams awareness page for detailed guidance. Also, report it to your local authorities and the platform where it occurred.",
        },
        {
          q: "Can I use CyberSquad on mobile?",
          a: "Yes, our platform is fully responsive and works great on mobile devices, tablets, and desktop computers.",
        },
        {
          q: "Is there a limit to how many courses I can take?",
          a: "No limits! Learn at your own pace and explore as many topics as you'd like.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-purple-950 via-slate-950 to-purple-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <HelpCircle className="h-20 w-20 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Find answers to common questions about CyberSquad, our features, security, and how to make the most of our platform.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                    {category.category.toUpperCase()}
                  </span>
                  <h2 className="text-3xl font-black text-white mt-4">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemIndex = `${categoryIndex}-${index}`;
                    const isOpen = openIndex === itemIndex;

                    return (
                      <div key={itemIndex} className="group relative">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 ${isOpen ? "opacity-50" : "group-hover:opacity-50"} transition-all duration-300 blur-lg`}></div>
                        <Card
                          className="relative border-2 border-gray-700 bg-gray-900 cursor-pointer hover:shadow-2xl transition-all"
                          onClick={() => setOpenIndex(isOpen ? null : itemIndex)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between gap-4">
                              <h3 className="text-lg font-bold text-white flex-1 text-left">{item.q}</h3>
                              <ChevronDown
                                className={`h-6 w-6 text-purple-400 flex-shrink-0 transition-transform ${
                                  isOpen ? "transform rotate-180" : ""
                                }`}
                              />
                            </div>
                            {isOpen && (
                              <div className="mt-4 pt-4 border-t border-gray-700">
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
              <Card className="relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950">
                <CardContent className="p-12 text-center">
                  <h2 className="text-4xl font-black text-white mb-6">Still Have Questions?</h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Get in touch with our friendly support team.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 shadow-lg shadow-purple-500/30 text-lg">
                      Contact Support
                      <Zap className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
