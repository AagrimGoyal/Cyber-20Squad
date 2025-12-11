import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us a message anytime",
      contact: "s.22.226@slps.one",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Visit us online",
      contact: "Online",
    },
  ];

  return (
    <Layout>
      <div className="relative py-32 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <MessageCircle className="h-20 w-20 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Have questions or feedback? We'd love to hear from you. Reach out
              to us using any of the methods below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-300 blur-lg"></div>
                  <Card className="relative border-2 border-gray-700 bg-gray-900 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl p-4 w-fit mx-auto">
                          <Icon className="h-8 w-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">
                        {method.description}
                      </p>
                      <p className="font-semibold text-emerald-400">
                        {method.contact}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </Layout>
  );
}
