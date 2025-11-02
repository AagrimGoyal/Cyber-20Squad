import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Trophy } from "lucide-react";

export default function Team() {
  const leaders = [
    {
      name: "Divyansh Verma",
      role: "Team Leader",
      badge: "Leader",
    },
    {
      name: "Aagrim Goyal",
      role: "Co-Leader & Creator",
      badge: "Co-Leader",
    },
    {
      name: "Yug Tyagi",
      role: "Co-Leader",
      badge: "Co-Leader",
    },
  ];

  const members = [
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

          {/* Team Members - Horizontal Layout */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Meet the CyberSquad Team
            </h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max px-4">
                {leaders.map((leader, index) => (
                  <Card key={`leader-${index}`} className="border-accent/20 shadow-lg hover:shadow-xl transition-shadow w-64 flex-shrink-0">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Badge className="bg-cyber-blue text-white">
                          <Trophy className="h-3 w-3 mr-1" />
                          {leader.badge}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                      <p className="text-cyber-blue font-semibold text-sm">{leader.role}</p>
                    </CardContent>
                  </Card>
                ))}
                {members.map((member, index) => (
                  <Card key={`member-${index}`} className="border-accent/20 shadow-lg hover:shadow-xl transition-shadow w-64 flex-shrink-0">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Badge className="bg-cyber-green text-white">
                          Member
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  CyberSquad Team
                </h3>
                <p className="text-muted-foreground">
                  Dedicated to building the world's most secure financial literacy platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
