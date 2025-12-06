import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import FinancialLiteracy from "./pages/FinancialLiteracy";
import CyberSecurity from "./pages/CyberSecurity";
import Feedback from "./pages/Feedback";
import Scams from "./pages/Scams";
import SecurityAuditReport from "./pages/SecurityAuditReport";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import RiskAssessment from "./pages/RiskAssessment";
import Glossary from "./pages/Glossary";
import Tools from "./pages/Tools";
import EmergencyGuide from "./pages/EmergencyGuide";
import ReportIncident from "./pages/ReportIncident";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/scams" element={<Scams />} />
          <Route
            path="/security-audit-report"
            element={<SecurityAuditReport />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/emergency-guide" element={<EmergencyGuide />} />
          <Route path="/report-incident" element={<ReportIncident />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  createRoot(rootElement).render(<App />);
}
