import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Education() {
  const expertTeam = [
    {
      expertise: "Financial Planning",
      credentials: "CFP, CFA",
      experience: "15+ Years",
      description: "Certified Financial Planners with extensive experience in personal finance and investment strategies.",
    },
    {
      expertise: "Cybersecurity",
      credentials: "CISSP, CEH",
      experience: "12+ Years",
      description: "Certified security professionals specializing in threat detection and digital protection.",
    },
    {
      expertise: "Risk Management",
      credentials: "FRM, PRM",
      experience: "10+ Years",
      description: "Risk management experts focusing on financial and digital security risk assessment.",
    },
    {
      expertise: "Digital Banking",
      credentials: "CISA, CISM",
      experience: "8+ Years",
      description: "Digital banking security specialists with deep knowledge of fintech security.",
    },
  ];

  const educationFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "50+ modules covering financial literacy, cybersecurity, and digital safety",
      highlight: "50+ Modules",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified professionals with real-world industry experience",
      highlight: "Certified Experts",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Our content is reviewed and endorsed by leading financial institutions",
      highlight: "Industry Endorsed",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "95% of users report improved financial security after completing our courses",
      highlight: "95% Success Rate",
    },
  ];

  const learningPaths = [
    {
      title: "Beginner Financial Security",
      duration: "2-3 weeks",
      modules: 8,
      topics: ["Basic Budgeting", "Safe Online Banking", "Password Security", "Fraud Prevention"],
      level: "Beginner",
    },
    {
      title: "Intermediate Investment Protection",
      duration: "4-5 weeks", 
      modules: 12,
      topics: ["Investment Strategies", "Portfolio Security", "Digital Asset Protection", "Risk Assessment"],
      level: "Intermediate",
    },
    {
      title: "Advanced Cyber Finance",
      duration: "6-8 weeks",
      modules: 18,
      topics: ["Cryptocurrency Security", "Advanced Threat Detection", "Business Finance Security", "Incident Response"],
      level: "Advanced",
    },
  ];

  const achievements = [
    "Featured in Forbes Finance Education",
    "Partnership with 15+ Major Banks",
    "Trusted by 50,000+ Users Worldwide", 
    "99% User Satisfaction Rating",
    "ISO 29990 Learning Standards Certified",
    "Endorsed by Financial Planning Association",
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 overflow-hidden">
        {/* Education background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.2'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Education icons floating */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 text-yellow-300/20 text-6xl animate-float">📚</div>
          <div className="absolute bottom-32 right-20 text-orange-300/20 text-5xl animate-float animation-delay-3000">🎓</div>
          <div className="absolute top-1/2 left-1/4 text-yellow-300/20 text-4xl animate-float animation-delay-6000">💡</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <GraduationCap className="h-16 w-16 text-yellow-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Expert Financial <span className="text-yellow-400">Education</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Learn from industry-certified experts who combine years of real-world experience 
              with cutting-edge educational methods to deliver world-class financial education.
            </p>
            <Badge className="bg-yellow-500 text-white px-6 py-2 text-lg">
              💰 Expert-Led Learning
            </Badge>
          </div>

          {/* Expert Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertTeam.map((expert, index) => (
                <Card key={index} className="border-accent/20 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{expert.expertise}</h3>
                      <Badge className="bg-yellow-500 text-white">{expert.experience}</Badge>
                    </div>
                    <div className="flex gap-2">
                      {expert.credentials.split(', ').map((cred, credIndex) => (
                        <Badge key={credIndex} variant="outline" className="text-xs">
                          {cred}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{expert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Why Our Education Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-accent/20 text-center">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                      <Badge className="bg-yellow-500 text-white mb-3">{feature.highlight}</Badge>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Structured Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="border-accent/20 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={
                        path.level === "Beginner" ? "bg-green-500 text-white" :
                        path.level === "Intermediate" ? "bg-blue-500 text-white" :
                        "bg-red-500 text-white"
                      }>
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{path.modules} modules</span>
                    </div>
                    <CardTitle className="text-lg text-foreground">{path.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Duration: {path.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">
                      Start Learning Path
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Recognized Excellence in Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/financial-literacy">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      Start Financial Learning
                    </Button>
                  </Link>
                  <Link to="/cyber-security">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500">
                      Explore Cyber Security
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
