import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Users,
  Menu,
  X,
  DollarSign,
  Lock,
  AlertTriangle,
  Info,
  Mail,
  HelpCircle,
  MessageSquarePlus,
  BookOpen,
  Newspaper,
  Target,
  Lightbulb,
  Zap,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const mainNavigation = [
    { name: "Home", href: "/", icon: Shield },
    { name: "About", href: "/about", icon: Info },
    {
      name: "Financial Literacy",
      href: "/financial-literacy",
      icon: DollarSign,
    },
    { name: "Cyber Security", href: "/cyber-security", icon: Lock },
    { name: "Scams", href: "/scams", icon: AlertTriangle },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const moreNavigation = [
    { name: "Blog", href: "/blog", icon: Newspaper },
    { name: "Tools", href: "/tools", icon: Zap },
    { name: "Risk Assessment", href: "/risk-assessment", icon: Target },
    { name: "Glossary", href: "/glossary", icon: BookOpen },
    { name: "Resources", href: "/resources", icon: Lightbulb },
    { name: "Our Team", href: "/team", icon: Users },
    { name: "Feedback", href: "/feedback", icon: MessageSquarePlus },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-2 border-cyan-500/20 shadow-lg shadow-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="relative w-10 h-10">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm animate-spin-slow"></div>

                {/* Main logo background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  {/* Inner shield design */}
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1C6.48 1 2 5.48 2 11v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm0 18h-8v-8c0-4.42 3.58-8 8-8s8 3.58 8 8v8h-8z" />
                    <circle cx="12" cy="11" r="2.5" fill="currentColor" />
                  </svg>
                </div>

                {/* Pulsing dot indicator */}
                <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-2 border-background animate-pulse shadow-lg shadow-emerald-400/50"></div>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black text-foreground group-hover:text-cyan-500 transition-colors">
                  Cyber
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                    Squad
                  </span>
                </span>
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider">
                  SECURE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted hover:border hover:border-cyan-500/20"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* More Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted hover:border hover:border-cyan-500/20 transition-all"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span>More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {moreNavigation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className="w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                            <Icon className="h-4 w-4" />
                            <span>{item.name}</span>
                          </DropdownMenuItem>
                        </Link>
                        {index === 4 && <DropdownMenuSeparator />}
                      </div>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-cyan-500/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-cyan-500" />
              ) : (
                <Menu className="h-5 w-5 text-cyan-500" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-cyan-500/20 bg-background/50 backdrop-blur">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {moreNavigation.length > 0 && (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    More
                  </div>
                  {moreNavigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t-2 border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Shield className="h-7 w-7 text-cyan-500" />
                  <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-emerald-400 rounded-full border border-gray-900"></div>
                </div>
                <span className="text-lg font-black text-white">
                  Cyber<span className="text-cyan-500">Squad</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering digital security and financial literacy for a safer
                tomorrow. Built by innovators, trusted by thousands.
              </p>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Always Secure</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-literacy"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Financial Literacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cyber-security"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-emerald-400 to-cyan-600 rounded"></div>
                Security
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Security Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-600 rounded"></div>
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Send Feedback
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="text-sm text-gray-500">
                © 2024 CyberSquad. All rights reserved. Secure by design.
              </p>
              <div className="flex items-center space-x-2">
                <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400">
                  Built by Aagrim Goyal
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
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
