import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    {
      term: "Two-Factor Authentication (2FA)",
      category: "Security",
      definition: "A security method that requires two different verification methods to access an account, such as a password and a code from your phone.",
      example: "When logging into your email, after entering your password, you must also enter a code sent to your phone.",
    },
    {
      term: "Phishing",
      category: "Security",
      definition: "A cyber attack where fraudsters impersonate legitimate organizations to steal personal information like passwords or financial details.",
      example: "An email that looks like it's from your bank asking you to 'verify your account' by clicking a link is likely phishing.",
    },
    {
      term: "Encryption",
      category: "Security",
      definition: "The process of converting data into a coded format that can only be read by someone with the correct decryption key.",
      example: "HTTPS websites use encryption to protect your credit card information during transactions.",
    },
    {
      term: "VPN (Virtual Private Network)",
      category: "Security",
      definition: "A service that creates a secure, encrypted connection between your device and the internet, hiding your IP address and location.",
      example: "Using a VPN on public Wi-Fi prevents hackers from intercepting your data.",
    },
    {
      term: "Malware",
      category: "Security",
      definition: "Malicious software designed to harm your computer or steal your information, including viruses, worms, and spyware.",
      example: "Ransomware is a type of malware that locks your files and demands payment to unlock them.",
    },
    {
      term: "Password Manager",
      category: "Security",
      definition: "A secure application that stores and manages your passwords, allowing you to use unique, strong passwords for each account.",
      example: "Bitwarden is a popular password manager that encrypts and organizes all your login credentials.",
    },
    {
      term: "Credit Score",
      category: "Finance",
      definition: "A numerical representation of your creditworthiness, ranging from 300-850, based on your credit history and payment behavior.",
      example: "A credit score of 750+ is considered excellent and helps you get better loan rates.",
    },
    {
      term: "Emergency Fund",
      category: "Finance",
      definition: "Money set aside in a savings account to cover unexpected expenses without relying on debt or credit.",
      example: "Financial experts recommend having 3-6 months of living expenses in your emergency fund.",
    },
    {
      term: "Compound Interest",
      category: "Finance",
      definition: "Interest earned on both your principal investment and the accumulated interest from previous periods.",
      example: "If you invest $1,000 at 5% annual interest, after one year you earn interest on $1,050, not just the original $1,000.",
    },
    {
      term: "Diversification",
      category: "Finance",
      definition: "Spreading your investments across different assets to reduce risk and improve potential returns.",
      example: "Instead of investing only in stocks, a diversified portfolio might include stocks, bonds, and real estate.",
    },
    {
      term: "APR (Annual Percentage Rate)",
      category: "Finance",
      definition: "The annual cost of borrowing money, including interest rate and fees, expressed as a percentage.",
      example: "A credit card with a 15% APR will cost you 15% per year if you carry a balance.",
    },
    {
      term: "Debt-to-Income Ratio",
      category: "Finance",
      definition: "The percentage of your gross monthly income that goes toward debt payments.",
      example: "If you earn $3,000/month and pay $600 in debt payments, your DTI ratio is 20%.",
    },
    {
      term: "Phishing Email",
      category: "Security",
      definition: "A fraudulent email designed to trick you into revealing sensitive information or clicking malicious links.",
      example: "An email claiming to be from PayPal asking you to update your billing information is likely phishing.",
    },
    {
      term: "Cybersecurity",
      category: "Security",
      definition: "The practice of protecting computers, networks, and data from digital attacks and unauthorized access.",
      example: "Using strong passwords, keeping software updated, and installing antivirus software are basic cybersecurity practices.",
    },
    {
      term: "Mutual Fund",
      category: "Finance",
      definition: "An investment fund that pools money from multiple investors to buy a diversified portfolio of stocks, bonds, or other securities.",
      example: "A Vanguard S&P 500 mutual fund lets you invest in 500 large U.S. companies with one purchase.",
    },
    {
      term: "Identity Theft",
      category: "Security",
      definition: "The unauthorized use of someone's personal information to commit fraud or other crimes.",
      example: "A criminal uses your Social Security number to open credit card accounts in your name.",
    },
    {
      term: "Interest Rate",
      category: "Finance",
      definition: "The percentage of a loan or deposit that represents the cost of borrowing or the return on savings.",
      example: "A savings account with a 2% interest rate will earn $20 annually on a $1,000 deposit.",
    },
    {
      term: "Firewall",
      category: "Security",
      definition: "A network security system that monitors and controls incoming and outgoing network traffic.",
      example: "Your router has a built-in firewall that prevents unauthorized access to your home network.",
    },
    {
      term: "Budget",
      category: "Finance",
      definition: "A plan that outlines how much money you expect to earn and spend over a specific period.",
      example: "A monthly budget might allocate 30% for housing, 15% for food, and 10% for entertainment.",
    },
    {
      term: "Stock Market",
      category: "Finance",
      definition: "A place where shares of companies are bought and sold, allowing investors to own pieces of businesses.",
      example: "The S&P 500 tracks 500 large U.S. companies traded on the stock market.",
    },
  ];

  const filteredTerms = glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const securityTerms = filteredTerms.filter((t) => t.category === "Security");
  const financeTerms = filteredTerms.filter((t) => t.category === "Finance");

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <BookOpen className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Glossary & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Terms</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Essential terminology for cybersecurity and financial literacy explained in simple terms.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
              <div className="relative flex items-center bg-gray-900 rounded-lg border-2 border-gray-700 px-6 py-4">
                <Search className="h-6 w-6 text-gray-400 mr-4" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent text-white outline-none placeholder-gray-500 text-lg"
                />
              </div>
            </div>
          </div>

          {/* Glossary Terms */}
          <div className="space-y-12">
            {/* Security Terms */}
            {securityTerms.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 text-base">
                    🔒 Security Terms
                  </Badge>
                  <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-pink-600 rounded"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {securityTerms.map((term, idx) => (
                    <div key={idx} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                      <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                            {term.term}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-2">Definition:</p>
                            <p className="text-gray-300 leading-relaxed">{term.definition}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-2">Example:</p>
                            <p className="text-gray-400 italic text-sm">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Finance Terms */}
            {financeTerms.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 text-base">
                    💰 Finance Terms
                  </Badge>
                  <div className="h-1 flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {financeTerms.map((term, idx) => (
                    <div key={idx} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                      <Card className="relative border-2 border-gray-700 bg-gray-900 hover:shadow-2xl transition-all h-full">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {term.term}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-2">Definition:</p>
                            <p className="text-gray-300 leading-relaxed">{term.definition}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-2">Example:</p>
                            <p className="text-gray-400 italic text-sm">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">No terms found matching "{searchTerm}"</p>
                <p className="text-gray-500 mt-2">Try searching for other terms related to security or finance.</p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-black text-purple-400">{glossaryTerms.length}</div>
              <p className="text-gray-400 mt-2">Total Terms</p>
            </div>
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-black text-red-400">{glossaryTerms.filter((t) => t.category === "Security").length}</div>
              <p className="text-gray-400 mt-2">Security Terms</p>
            </div>
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-black text-emerald-400">{glossaryTerms.filter((t) => t.category === "Finance").length}</div>
              <p className="text-gray-400 mt-2">Finance Terms</p>
            </div>
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
              <div className="text-4xl font-black text-cyan-400">∞</div>
              <p className="text-gray-400 mt-2">Learning Value</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
