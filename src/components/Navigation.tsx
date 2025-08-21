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
  ChevronDown,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

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
    {
      name: "Courses",
      path: "/courses",
      icon: <BookOpen className="h-5 w-5" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "IELTS Training",
          path: "/ielts",
          icon: <GraduationCap className="h-4 w-4" />,
        },
        {
          name: "English Spoken",
          path: "/english-spoken",
          icon: <MessageCircle className="h-4 w-4" />,
        },
        {
          name: "GRE Training",
          path: "/gre",
          icon: <User className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Immigration & Visa",
      path: "/immigration-visa",
      icon: <Globe className="h-5 w-5" />,
    },
    { name: "About Us", path: "/about", icon: <Info className="h-5 w-5" /> },
    {
      name: "Contact",
      path: "/contact",
      icon: <MessageCircle className="h-5 w-5" />,
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
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" as const },
    },
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow duration-300 ${
        isScrolledDown ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-responsive-h2 font-bold bg-gradient-to-br from-black via-black via-slate-900 via-slate-800 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all duration-500">
              FamInternational
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isCoursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg py-2 z-50"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                            >
                              {dropdownItem.icon}
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
                  <div className="text-lg font-bold bg-gradient-to-br from-black via-black via-slate-900 via-slate-800 to-blue-600 bg-clip-text text-transparent">
                    FamInternational
                  </div>
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
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                          className="flex items-center gap-3 py-3 px-2 rounded-lg transition-colors w-full text-left text-muted-foreground hover:text-primary"
                        >
                          {item.icon}
                          <span className="text-responsive-base">
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 ml-auto transition-transform ${
                              isCoursesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {isCoursesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-6 space-y-2 mt-2"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  onClick={handleLinkClick}
                                  className="flex items-center gap-3 py-2 px-2 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                                >
                                  {dropdownItem.icon}
                                  <span className="text-responsive-sm">
                                    {dropdownItem.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`flex items-center gap-3 py-3 px-2 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {item.icon}
                        <span className="text-responsive-base">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </div>
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
                Enroll Now
              </Link>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <div className="text-xs text-muted-foreground mb-2">
                  Fam International
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
