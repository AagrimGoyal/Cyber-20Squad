import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Linkedin, Github, Trophy, Star } from "lucide-react";

export default function Team() {
  const leader = {
    name: "Divyansh Verma",
    role: "Team Leader",
  };

  const members = [
    { name: "Aagrim Goyal" },
    { name: "Yug Tyagi" },
    { name: "Rakshit Jain" },
    { name: "Parth Bansal" },
    { name: "Shreyansh" },
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
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Team Leader
            </h2>
            <Card className="max-w-md mx-auto border-accent/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <Badge className="bg-cyber-blue text-white">
                    <Trophy className="h-3 w-3 mr-1" />
                    Leader
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                <p className="text-cyber-blue font-semibold">{leader.role}</p>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
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
