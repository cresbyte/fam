import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import IELTS from "./pages/IELTS";
import EnglishSpoken from "./pages/EnglishSpoken";
import GRE from "./pages/GRE";
import About from "./pages/About";
import ImmigrationVisa from "./pages/ImmigrationVisa";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/ielts" element={<IELTS />} />
              <Route path="/english-spoken" element={<EnglishSpoken />} />
              <Route path="/gre" element={<GRE />} />
              <Route path="/immigration-visa" element={<ImmigrationVisa />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
