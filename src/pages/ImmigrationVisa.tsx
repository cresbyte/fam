import { Link } from "react-router-dom";
import {
  Globe,
  FileText,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  MapPin,
  GraduationCap,
  Building,
  Plane,
  Shield,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Custom Hook for Scroll Animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  if (inView) controls.start("visible");
  return [ref, controls] as const;
};

const ImmigrationVisa = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Visa Application Support",
      description:
        "Complete assistance with student, work, and business visa applications for major countries including USA, UK, Canada, Australia, and New Zealand.",
      features: [
        "Document preparation and review",
        "Application form assistance",
        "Interview preparation",
        "Follow-up and status tracking",
      ],
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Study Abroad Guidance",
      description:
        "Comprehensive support for students seeking international education opportunities, from course selection to university applications.",
      features: [
        "University and course selection",
        "Application strategy",
        "Personal statement writing",
        "Scholarship guidance",
      ],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Work Visa & Immigration",
      description:
        "Expert guidance for professionals seeking work opportunities abroad, including skilled worker programs and permanent residency.",
      features: [
        "Work permit applications",
        "Job search strategies",
        "Resume optimization",
        "Interview coaching",
      ],
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Settlement Services",
      description:
        "Ongoing support for families and individuals relocating to new countries, ensuring smooth transition and integration.",
      features: [
        "Pre-departure orientation",
        "Accommodation assistance",
        "Cultural integration support",
        "Ongoing consultation",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Free 30-minute consultation to assess your goals and eligibility for various visa categories.",
      duration: "30 minutes",
    },
    {
      step: "02",
      title: "Document Assessment",
      description:
        "Comprehensive review of your documents and identification of any gaps or areas for improvement.",
      duration: "1-2 days",
    },
    {
      step: "03",
      title: "Strategy Development",
      description:
        "Customized immigration strategy based on your profile, timeline, and specific requirements.",
      duration: "3-5 days",
    },
    {
      step: "04",
      title: "Application Preparation",
      description:
        "Professional preparation of all application materials, forms, and supporting documents.",
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Submission & Follow-up",
      description:
        "Submission of your application and ongoing monitoring of status with regular updates.",
      duration: "Ongoing",
    },
  ];

  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      programs: [
        "Student Visa (F-1)",
        "Work Visa (H-1B)",
        "Business Visa (E-2)",
        "Green Card",
      ],
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      programs: [
        "Student Visa (Tier 4)",
        "Skilled Worker Visa",
        "Global Talent Visa",
        "Settlement",
      ],
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      programs: [
        "Study Permit",
        "Express Entry",
        "Provincial Nominee",
        "Family Sponsorship",
      ],
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      programs: [
        "Student Visa (500)",
        "Skilled Independent (189)",
        "State Nominated (190)",
        "Business Innovation",
      ],
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      programs: [
        "Student Visa",
        "Skilled Migrant",
        "Work to Residence",
        "Entrepreneur",
      ],
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-spacing"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-responsive-h1 font-bold text-foreground mb-6"
          >
            Your Gateway to{" "}
            <span className="gradient-text">Global Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-responsive-lg text-muted-foreground leading-relaxed mb-8"
          >
            Expert immigration and visa support services to help you study,
            work, and live abroad. Our experienced consultants guide you through
            every step of your international journey.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              to="/courses"
              className="btn-secondary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Courses
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Comprehensive Immigration Services
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              From visa applications to settlement support, we provide
              end-to-end assistance for all your international mobility needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="card-minimal bg-white/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-primary mb-4 flex">{service.icon}</div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-responsive-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Our Proven 5-Step Process
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              We've streamlined the immigration process to make your journey as
              smooth and successful as possible.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-responsive-h3 font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-responsive-sm text-muted-foreground mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Countries & Programs */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Popular Destinations & Programs
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in immigration to the world's most sought-after
              destinations with comprehensive program options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="card-minimal bg-white/70 backdrop-blur-sm border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="text-responsive-h3 font-semibold text-foreground">
                    {country.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {country.programs.map((program, programIndex) => (
                    <li key={programIndex} className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-responsive-sm text-muted-foreground">
                        {program}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Why Choose Our Immigration Services?
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself - we've helped thousands of
              families successfully navigate the complex immigration process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "95% Success Rate",
                description:
                  "Proven track record of successful visa approvals across all major countries.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Consultants",
                description:
                  "Licensed immigration consultants with 10+ years of experience.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Processing",
                description:
                  "Optimized processes to reduce application time and improve success rates.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Full Support",
                description:
                  "End-to-end assistance from initial consultation to final approval.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-responsive-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        custom={0}
        className="section-spacing bg-gradient-primary text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold mb-4">
            Ready to Start Your International Journey?
          </h2>
          <p className="text-responsive-lg mb-8 opacity-90">
            Book your free consultation today and discover how we can help you
            achieve your global dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Our Courses
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ImmigrationVisa;
