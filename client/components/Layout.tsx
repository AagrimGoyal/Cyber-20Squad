import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, BookOpen, Users, Menu, X, DollarSign, Lock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Shield },
    { name: "Financial Literacy", href: "/financial-literacy", icon: DollarSign },
    { name: "Cyber Security", href: "/cyber-security", icon: Lock },
    { name: "Our Team", href: "/team", icon: Users },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Feedback", href: "/feedback", icon: MessageSquare },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyber-blue" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-cyber-green rounded-full border-2 border-background"></div>
              </div>
              <span className="text-xl font-bold text-foreground">
                Cyber<span className="text-cyber-blue">Squad</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-cyber-blue" />
                <span className="text-lg font-bold text-foreground">
                  Cyber<span className="text-cyber-blue">Squad</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering digital security and financial literacy for a safer tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/financial-literacy" className="text-sm text-muted-foreground hover:text-foreground">Financial Literacy</Link></li>
                <li><Link to="/cyber-security" className="text-sm text-muted-foreground hover:text-foreground">Cyber Security</Link></li>
                <li><Link to="/team" className="text-sm text-muted-foreground hover:text-foreground">Our Team</Link></li>
                <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground">Resources</Link></li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Security</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Security Guidelines</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Data Protection</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 CyberSquad. All rights reserved. Secure by design.
              </p>
              <p className="text-sm text-muted-foreground">
                Created by Aagrim Goyal
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span>Secure Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
