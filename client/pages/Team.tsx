import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Users,
  Code,
  Briefcase,
} from "lucide-react";
import { useState, useRef } from "react";

export default function Team() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const allTeamMembers = [
    {
      name: "Divyansh Verma",
      role: "Team Leader",
      badge: "Leader",
      description: "Leading the CyberSquad with vision and expertise",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Aagrim Goyal",
      role: "Co-Leader & Creator",
      badge: "Co-Leader",
      description: "Website creator and core architect of the platform",
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Yug Tyagi",
      role: "Co-Leader",
      badge: "Co-Leader",
      description: "Co-leading team initiatives and strategy",
      icon: Briefcase,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Rakshit Jain",
      role: "Team Member",
      description: "Contributing to core platform development",
      icon: Users,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Parth Bansal",
      role: "Team Member",
      description: "Building secure features and infrastructure",
      icon: Users,
      color: "from-indigo-400 to-blue-500",
    },
    {
      name: "Shreyansh",
      role: "Team Member",
      description: "Enhancing user experience and interface design",
      icon: Users,
      color: "from-red-400 to-pink-500",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;

      scrollContainerRef.current.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Team background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.3'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating elements for team energy */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Team Members Carousel */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
              Meet the <span className="text-cyan-400">CyberSquad</span> Team
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              A team of talented individuals dedicated to building the most
              secure platform
            </p>

            <div className="relative max-w-7xl mx-auto">
              {/* Carousel Container */}
              <div className="relative">
                {/* Team Cards Scroll Container */}
                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div className="flex gap-8 pb-4 px-4">
                    {allTeamMembers.map((member, index) => {
                      const Icon = member.icon;
                      return (
                        <div
                          key={index}
                          className="flex-shrink-0 w-80 group opacity-0 animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative h-full">
                            <div
                              className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}
                            ></div>
                            <Card className="relative border-2 border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                              {/* Animated background accent */}
                              <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full blur-2xl`}
                              ></div>

                              <CardContent className="p-8 text-center flex flex-col h-full relative z-10">
                                {/* Avatar Section */}
                                <div className={`mb-6 flex justify-center`}>
                                  <div
                                    className={`bg-gradient-to-br ${member.color} p-6 rounded-full shadow-2xl shadow-current/50 group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <Icon className="h-10 w-10 text-white" />
                                  </div>
                                </div>

                                {/* Badge */}
                                {member.badge && (
                                  <div className="mb-4">
                                    <Badge
                                      className={`bg-gradient-to-r ${member.color} text-white shadow-lg`}
                                    >
                                      {member.badge}
                                    </Badge>
                                  </div>
                                )}

                                {/* Name */}
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                  {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-cyan-400 font-semibold mb-3 text-sm group-hover:text-emerald-400 transition-colors">
                                  {member.role}
                                </p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors">
                                  {member.description}
                                </p>

                                {/* Decorative elements */}
                                <div className="mt-6 pt-4 border-t border-gray-700 flex justify-center gap-2">
                                  <div className="h-2 w-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animation-delay-1000"></div>
                                  <div className="h-2 w-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animation-delay-2000"></div>
                                  <div className="h-2 w-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animation-delay-3000"></div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => handleScroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
