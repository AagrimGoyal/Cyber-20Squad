import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Linkedin, Github, Trophy, Star } from "lucide-react";

export default function Team() {
  const leader = {
    name: "Alex Thompson",
    role: "Team Leader & Chief Security Officer",
    expertise: ["Cybersecurity Strategy", "Financial Risk Assessment", "Team Leadership"],
    bio: "With over 10 years in cybersecurity and financial technology, Alex leads our mission to bridge the gap between digital security and financial literacy.",
    achievements: ["CISSP Certified", "Published Researcher", "Industry Speaker"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  };

  const members = [
    {
      name: "Sarah Chen",
      role: "Financial Security Analyst",
      expertise: ["Digital Banking Security", "Fraud Prevention", "Financial Education"],
      bio: "Sarah specializes in protecting digital financial assets and educating users about secure financial practices.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Marcus Rodriguez",
      role: "Penetration Testing Specialist",
      expertise: ["Ethical Hacking", "Vulnerability Assessment", "Security Auditing"],
      bio: "Marcus ensures our systems are bulletproof by thinking like the bad guys to keep the good guys safe.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      role: "Digital Literacy Educator",
      expertise: ["User Education", "Content Creation", "Security Awareness"],
      bio: "Emily creates engaging educational content that makes complex security and financial concepts accessible to everyone.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "David Kumar",
      role: "Blockchain Security Expert",
      expertise: ["Cryptocurrency Security", "Smart Contract Auditing", "DeFi Protection"],
      bio: "David navigates the complex world of blockchain technology to keep digital assets secure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Team background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.3'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating elements for team energy */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-cyan-400 mr-4 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Meet the <span className="text-cyan-400">CyberSquad</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our elite team of cybersecurity experts and financial literacy advocates, 
              dedicated to building the world's most secure and educational platform.
            </p>
          </div>

          {/* Team Leader */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Team Leader
            </h2>
            <Card className="max-w-4xl mx-auto overflow-hidden border-accent/20 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyber-blue text-white">
                        <Trophy className="h-3 w-3 mr-1" />
                        Leader
                      </Badge>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                    <p className="text-cyber-blue font-semibold mb-4">{leader.role}</p>
                    <p className="text-muted-foreground mb-6">{leader.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.achievements.map((achievement, index) => (
                          <Badge key={index} className="bg-cyber-green text-white">
                            <Star className="h-3 w-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Team Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, index) => (
                <Card key={index} className="overflow-hidden border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-background/90 text-foreground">
                          Specialist
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-cyber-blue font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Want to Join CyberSquad?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for passionate individuals who share our mission 
                  of making the digital world safer and more financially literate.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-cyber-blue text-white px-4 py-2">
                    Security Experts Welcome
                  </Badge>
                  <Badge className="bg-cyber-green text-white px-4 py-2">
                    Educators Needed
                  </Badge>
                  <Badge className="bg-finance-gold text-white px-4 py-2">
                    Financial Analysts
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
