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
import Resources from "./pages/Resources";
import Security from "./pages/Security";
import Education from "./pages/Education";
import GlobalTrust from "./pages/GlobalTrust";
import Feedback from "./pages/Feedback";
import Game from "./pages/Game";
import Scams from "./pages/Scams";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/security" element={<Security />} />
          <Route path="/education" element={<Education />} />
          <Route path="/global-trust" element={<GlobalTrust />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/game" element={<Game />} />
          <Route path="/scams" element={<Scams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
