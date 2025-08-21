import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-responsive-h2 font-bold text-foreground">
                Fam International
              </span>
            </Link>
            <p className="text-responsive-base text-muted-foreground mb-6 max-w-md">
              Your gateway to global opportunities through expert IELTS training, English spoken courses, 
              GRE preparation, and comprehensive immigration support. Empowering students worldwide to achieve their dreams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses#ielts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  IELTS Training
                </Link>
              </li>
              <li>
                <Link
                  to="/courses#english-spoken"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  English Spoken
                </Link>
              </li>
              <li>
                <Link
                  to="/courses#gre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GRE Training
                </Link>
              </li>
              <li>
                <Link
                  to="/immigration-visa"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Immigration & Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@englishflow.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@englishflow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Global Offices
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-responsive-sm text-muted-foreground mb-2">
            Empowering students worldwide to achieve their international dreams through quality education and comprehensive support.
          </p>
          <p className="text-responsive-sm text-muted-foreground">
            © {new Date().getFullYear()} Fam International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
