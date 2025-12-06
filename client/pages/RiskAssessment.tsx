import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle,
  BarChart3,
  Shield,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

export default function RiskAssessment() {
  const [selectedTab, setSelectedTab] = useState<"security" | "financial">(
    "security",
  );
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const securityQuestions = [
    {
      id: 1,
      question: "How often do you update your passwords?",
      options: [
        "Never",
        "Yearly",
        "Every 6 months",
        "Every 3 months",
        "Monthly",
      ],
      risk: [5, 4, 3, 2, 1],
    },
    {
      id: 2,
      question: "Do you use a password manager?",
      options: [
        "No",
        "Considering it",
        "For some accounts",
        "For most accounts",
        "For all accounts",
      ],
      risk: [5, 4, 3, 2, 1],
    },
    {
      id: 3,
      question: "How do you handle public Wi-Fi?",
      options: [
        "Use it freely",
        "Sometimes careful",
        "Usually use VPN",
        "Always use VPN",
        "Avoid entirely",
      ],
      risk: [5, 4, 3, 1, 1],
    },
    {
      id: 4,
      question: "Do you enable two-factor authentication (2FA)?",
      options: [
        "No",
        "Only for banking",
        "For important accounts",
        "Most accounts",
        "All critical accounts",
      ],
      risk: [5, 3, 2, 2, 1],
    },
    {
      id: 5,
      question: "How do you verify suspicious emails?",
      options: [
        "Click links to verify",
        "Reply to sender",
        "Call official number",
        "Check official website",
        "All of the above",
      ],
      risk: [5, 4, 2, 1, 1],
    },
  ];

  const financialQuestions = [
    {
      id: 1,
      question: "Do you have an emergency fund?",
      options: [
        "No fund",
        "Less than 1 month",
        "1-3 months",
        "3-6 months",
        "6+ months",
      ],
      risk: [5, 4, 2, 1, 1],
    },
    {
      id: 2,
      question: "How do you track your spending?",
      options: [
        "Don't track",
        "Mentally estimate",
        "Spreadsheet/app",
        "Automated app",
        "Professional advisor",
      ],
      risk: [5, 4, 2, 1, 1],
    },
    {
      id: 3,
      question: "What's your debt level?",
      options: [
        "High-interest debt",
        "Mixed debt",
        "Mostly loans",
        "Minimal debt",
        "No debt",
      ],
      risk: [5, 4, 3, 2, 1],
    },
    {
      id: 4,
      question: "Do you have financial goals?",
      options: [
        "No goals",
        "Vague goals",
        "Some written goals",
        "Detailed plan",
        "Reviewed quarterly",
      ],
      risk: [5, 4, 3, 2, 1],
    },
    {
      id: 5,
      question: "How secure are your financial accounts?",
      options: [
        "Weak password",
        "Medium security",
        "Strong password",
        "2FA enabled",
        "2FA + monitoring",
      ],
      risk: [5, 4, 3, 2, 1],
    },
  ];

  const currentQuestions =
    selectedTab === "security" ? securityQuestions : financialQuestions;

  const calculateScore = () => {
    let totalRisk = 0;
    let answeredCount = 0;

    currentQuestions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        totalRisk += q.risk[answers[q.id]];
        answeredCount++;
      }
    });

    if (answeredCount === 0) return 0;
    return Math.round((totalRisk / (answeredCount * 5)) * 100);
  };

  const getRiskLevel = (score: number) => {
    if (score >= 80)
      return { level: "🔴 Critical Risk", color: "from-red-600 to-red-700" };
    if (score >= 60)
      return { level: "🟠 High Risk", color: "from-orange-600 to-orange-700" };
    if (score >= 40)
      return {
        level: "🟡 Medium Risk",
        color: "from-yellow-600 to-yellow-700",
      };
    if (score >= 20)
      return { level: "🟢 Low Risk", color: "from-emerald-600 to-emerald-700" };
    return { level: "✅ Minimal Risk", color: "from-green-600 to-green-700" };
  };

  const score = calculateScore();
  const riskLevel = getRiskLevel(score);

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <BarChart3 className="h-20 w-20 text-white drop-shadow-lg relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Risk{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Evaluate your security and financial risks with our interactive
              assessment tool. Get personalized recommendations.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setSelectedTab("security");
                setAnswers({});
              }}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                selectedTab === "security"
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              🛡️ Security Assessment
            </button>
            <button
              onClick={() => {
                setSelectedTab("financial");
                setAnswers({});
              }}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                selectedTab === "financial"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              💰 Financial Assessment
            </button>
          </div>

          {/* Assessment Form */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 mb-12">
              {currentQuestions.map((question) => (
                <div key={question.id} className="group relative">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${selectedTab === "security" ? "from-red-500 to-pink-500" : "from-emerald-500 to-teal-500"} rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-300 blur-lg`}
                  ></div>
                  <Card className="relative border-2 border-gray-700 bg-gray-900">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-white mb-6">
                        {question.question}
                      </h3>
                      <div className="space-y-3">
                        {question.options.map((option, idx) => (
                          <label
                            key={idx}
                            className="flex items-center p-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 cursor-pointer transition-all bg-gray-800/50 hover:bg-gray-800"
                          >
                            <input
                              type="radio"
                              name={`q${question.id}`}
                              checked={answers[question.id] === idx}
                              onChange={() =>
                                setAnswers({ ...answers, [question.id]: idx })
                              }
                              className="w-4 h-4 cursor-pointer"
                            />
                            <span className="ml-4 text-white font-medium">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Results Section */}
            {Object.keys(answers).length === currentQuestions.length && (
              <div className="relative group mb-12">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${riskLevel.color} rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300`}
                ></div>
                <Card
                  className={`relative border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden`}
                >
                  <CardContent className="p-12 text-center">
                    <h2 className="text-4xl font-black text-white mb-4">
                      Your Risk Assessment
                    </h2>

                    {/* Risk Score */}
                    <div
                      className={`mb-8 inline-block bg-gradient-to-r ${riskLevel.color} rounded-full p-8`}
                    >
                      <div className="text-7xl font-black text-white">
                        {score}%
                      </div>
                    </div>

                    <h3
                      className={`text-3xl font-black mb-8 bg-gradient-to-r ${riskLevel.color} bg-clip-text text-transparent`}
                    >
                      {riskLevel.level}
                    </h3>

                    {score >= 60 && (
                      <div className="bg-red-900/20 border-2 border-red-500/30 rounded-lg p-6 mb-8">
                        <div className="flex items-start gap-4">
                          <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="font-bold text-red-300 mb-2">
                              Immediate Action Required
                            </h4>
                            <p className="text-red-200 text-sm leading-relaxed">
                              Your assessment indicates significant risks.
                              Review the recommendations below and take action
                              immediately to improve your security and financial
                              health.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {score < 60 && score >= 40 && (
                      <div className="bg-yellow-900/20 border-2 border-yellow-500/30 rounded-lg p-6 mb-8">
                        <div className="flex items-start gap-4">
                          <AlertCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="font-bold text-yellow-300 mb-2">
                              Improvements Needed
                            </h4>
                            <p className="text-yellow-200 text-sm leading-relaxed">
                              There are several areas where you can improve.
                              Review the recommendations and implement changes
                              over the next few weeks.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {score < 40 && (
                      <div className="bg-green-900/20 border-2 border-green-500/30 rounded-lg p-6 mb-8">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="font-bold text-green-300 mb-2">
                              Good Job!
                            </h4>
                            <p className="text-green-200 text-sm leading-relaxed">
                              You're doing well with your{" "}
                              {selectedTab === "security"
                                ? "security"
                                : "financial"}{" "}
                              practices. Continue maintaining these good habits!
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <Button
                        onClick={() => {
                          setAnswers({});
                        }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8"
                      >
                        Retake Assessment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* CTA */}
            {Object.keys(answers).length > 0 &&
              Object.keys(answers).length < currentQuestions.length && (
                <div className="text-center bg-blue-900/20 border-2 border-blue-500/30 rounded-lg p-8">
                  <p className="text-gray-300 mb-4">
                    Answer{" "}
                    {currentQuestions.length - Object.keys(answers).length} more
                    question
                    {currentQuestions.length - Object.keys(answers).length !== 1
                      ? "s"
                      : ""}{" "}
                    to see your results
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all"
                      style={{
                        width: `${(Object.keys(answers).length / currentQuestions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
          </div>

          {/* Recommendations Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">
              Key Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedTab === "security" ? (
                <>
                  <Card className="border-2 border-gray-700 bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Shield className="h-8 w-8 text-cyan-400" />
                        <h3 className="font-bold text-white text-lg">
                          Enable 2FA
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Add an extra layer of protection to all important
                        accounts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-gray-700 bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Shield className="h-8 w-8 text-emerald-400" />
                        <h3 className="font-bold text-white text-lg">
                          Use Password Manager
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Generate and store unique passwords securely.
                      </p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="border-2 border-gray-700 bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <DollarSign className="h-8 w-8 text-yellow-400" />
                        <h3 className="font-bold text-white text-lg">
                          Build Emergency Fund
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Save 3-6 months of expenses for unexpected situations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-gray-700 bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <DollarSign className="h-8 w-8 text-emerald-400" />
                        <h3 className="font-bold text-white text-lg">
                          Create Budget
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Track spending and set financial goals.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
