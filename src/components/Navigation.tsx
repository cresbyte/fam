import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  User,
  MessageCircle,
  CreditCard,
  Share2,
  Info,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledDown(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close drawer when route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  const navItems = [
    { name: "Courses", path: "/courses", icon: <User className="h-5 w-5" /> },
    {
      name: "How It Works",
      path: "/how-it-works",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    { name: "About Us", path: "/about", icon: <Info className="h-5 w-5" /> },
    {
      name: "Testimonials",
      path: "/testimonials",
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <CreditCard className="h-5 w-5" />,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  // Animation variants
  const sheetVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow duration-300 ${
        isScrolledDown ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-responsive-h2 font-bold text-foreground">
              Fami
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Right-Side Drawer without overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 w-full max-w-xs h-full bg-white dark:bg-gray-900 shadow-xl border-l border-border"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="text-primary font-bold text-lg" >Fami</div>
              
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 py-3 px-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.icon}
                    <span className="text-responsive-base">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border"></div>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block w-full text-center btn-primary py-3 rounded-lg font-medium"
              >
                Get Started
              </Link>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <div className="text-xs text-muted-foreground mb-2">
                  Fami International
                </div>
              
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
