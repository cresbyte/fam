import heroImage from "@/assets/hero-english-coach.jpg";
import beginnerImage from "../assets/begginer.jpeg";
import intermediateImage from "../assets/intermediate.jpeg";
import proImage from "../assets/pro.jpg";
import journeyImage from "../assets/journey.jpg";
import {
  Play,
  Star,
  Users,
  Quote,
  Award,
  Clock,
  GraduationCap,
  BarChart3,
  Globe,
  BookOpen,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import howItWorksSvg from "../components/how-it-works.svg";
import directionArrow from "../components/direction-arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Reusable in-view animation hook
const useFadeUp = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  if (inView) controls.start("visible");
  return [ref, controls] as const;
};

// Image with loading skeleton component
const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
}: {
  src: string;
  alt: string;
  className: string;
  skeletonClassName?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`animate-pulse bg-muted rounded-lg ${
            skeletonClassName || "w-full h-full"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-r from-muted via-muted-foreground/20 to-muted"></div>
        </div>
      )}
      {hasError && (
        <div
          className={`bg-muted rounded-lg flex items-center justify-center ${
            skeletonClassName || "w-full h-full"
          }`}
        >
          <div className="text-muted-foreground text-sm">
            Image failed to load
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

// Custom dot component
const CustomDot = ({ onClick, ...rest }: any) => {
  const { active } = rest;
  return (
    <button
      className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
        active
          ? "bg-primary scale-110"
          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
      }`}
      onClick={() => onClick()}
    />
  );
};

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[90vh] lg:min-h-[90vh] flex items-center py-8 lg:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-responsive-hero text-foreground mb-6">
                Master English.{" "}
                <span className="gradient-text">Ace Your Exams.</span> Go
                Global.
              </h1>
              <p className="text-responsive-md text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Expert IELTS Training, English Spoken courses, GRE preparation,
                and Immigration & Visa support. Join thousands who've achieved
                their dreams of studying and working abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="btn-primary px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.9/5 from 2,400+ students
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ImageWithSkeleton
                  src={heroImage}
                  alt="Professional English coach providing personalized learning"
                  className="w-full h-auto max-w-md object-cover rounded-xl shadow-lg"
                  skeletonClassName="w-full h-auto max-w-md object-cover rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-card border border-card-border p-4 shadow-sm rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">24K+</div>
                    <div className="text-sm text-muted-foreground">
                      Successful Students
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <img
              src={directionArrow}
              alt="Scroll down to explore more"
              className="w-auto h-24 text-muted-foreground opacity-60 hover:opacity-80 transition-opacity cursor-pointer animate-pulse"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
          Our Comprehensive Services
        </h2>
        <p className="text-responsive-md text-muted-foreground max-w-2xl mx-auto mb-10">
          From exam preparation to visa assistance, we provide everything you
          need to succeed internationally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <GraduationCap className="h-6 w-6" />,
              title: "IELTS Training",
              desc: "Expert preparation for Academic and General Training modules with proven strategies and tests.",
              link: "/ielts",
            },
            {
              icon: <MessageCircle className="h-6 w-6" />,
              title: "English Spoken",
              desc: "Improve your conversational skills, pronunciation, and fluency for real-world communication.",
              link: "/english-spoken",
            },
            {
              icon: <BookOpen className="h-6 w-6" />,
              title: "GRE Training",
              desc: "Comprehensive GRE preparation covering Verbal, Quantitative, and Analytical Writing sections.",
              link: "/gre",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "PTE & Duolingo",
              desc: "Expert preparation for PTE Academic, Duolingo English Test, and UK Life Skills certification.",
              link: "/immigration-visa",
            },
          ].map((item, index) => (
            <Link key={index} to={item.link}>
              <motion.div
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-primary mb-3 flex">{item.icon}</div>
                <h3 className="text-responsive-h4 font-semibold text-foreground text-left mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-responsive-sm text-left">
                  {item.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
          Why 24,000+ Students Trust Us
        </h2>
        <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          We combine expert teaching, proven methodologies, and comprehensive
          support to ensure your success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="h-6 w-6" />,
              title: "Expert Trainers",
              desc: "All instructors hold advanced degrees and certifications with 5+ years of specialized experience.",
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Flexible Learning",
              desc: "Learn at your own pace with 24/7 access to materials and flexible class scheduling.",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Global Opportunities",
              desc: "Direct pathways to universities and employers in USA, UK, Canada, Australia, and more.",
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: "Proven Results",
              desc: "94% of students achieve their target scores and successfully secure international opportunities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-3 flex">{item.icon}</div>
              <h3 className="text-responsive-h4 font-semibold text-foreground text-left mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-responsive-sm text-left">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Overview */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-responsive-md text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to meet your specific goals,
              whether you're preparing for exams, improving communication
              skills, or planning your international move.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  level: "Beginner Level",
                  image: beginnerImage,
                  description:
                    "Perfect for those starting their English learning journey. Build foundational skills with structured lessons and guided practice.",
                  duration: "6-8 weeks",
                  lessons: "40+ lessons",
                  target: "Basic Communication",
                },
                {
                  level: "Intermediate Level",
                  image: intermediateImage,
                  description:
                    "Advance your English skills with complex topics, advanced grammar, and real-world conversation practice.",
                  duration: "8-10 weeks",
                  lessons: "50+ lessons",
                  target: "Confident Communication",
                },
                {
                  level: "Professional Level",
                  image: proImage,
                  description:
                    "Master advanced English for professional contexts, academic writing, and international communication excellence.",
                  duration: "10-12 weeks",
                  lessons: "60+ lessons",
                  target: "Professional Mastery",
                },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-minimal text-center group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                    <ImageWithSkeleton
                      src={course.image}
                      alt={course.level}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      skeletonClassName="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                    {course.level}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-responsive-sm">
                    {course.description}
                  </p>
                  <div className="flex justify-between text-responsive-sm text-muted-foreground mb-6">
                    <span>{course.duration}</span>
                    <span>{course.lessons}</span>
                  </div>

                  <Link
                    to="/courses"
                    className="btn-secondary w-full py-2 px-4 rounded-lg transition-colors"
                  >
                    Explore Course
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Your Journey to Success
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 5-step process ensures you achieve your goals
              efficiently and effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary/40 via-primary/25 to-secondary/50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-90"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-primary/35 to-secondary/40 rounded-full blur-2xl opacity-80"></div>
                <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-bl from-secondary/35 to-primary/30 rounded-full blur-2xl opacity-75"></div>
                <div
                  className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-to-r from-primary/50 to-secondary/60 transform -translate-x-1/2 -translate-y-1/2 opacity-85"
                  style={{
                    clipPath:
                      "shape(from 69.82% 55.73%,curve to 65.69% 74.74% with 73.68% 65.03%,curve to 43.67% 83.26% with 57.70% 84.45%,curve to 20.84% 70.28% with 29.64% 82.08%,curve to 12.21% 42.31% with 12.04% 58.49%,curve to 28.11% 24.26% with 12.39% 26.13%,curve to 56.02% 21.84% with 43.83% 22.38%,curve to 67.09% 33.87% with 68.21% 21.31%,curve to 69.82% 55.73% with 65.97% 46.43%)",
                  }}
                ></div>
              </div>
              <ImageWithSkeleton
                src={journeyImage}
                alt="Your Journey to Success"
                className="w-full h-96 md:h-[500px] object-cover object-center relative z-10 rounded-xl shadow-lg"
                skeletonClassName="w-full h-96 md:h-[500px] lg:h-[600px] object-cover object-center relative z-10 rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="order-1 lg:order-2 space-y-6 border-t-2 py-2 border-b-2"
            >
              {[
                {
                  step: "1",
                  title: "Assessment & Planning",
                  desc: "Evaluate your current level and create a personalized roadmap to your goals",
                },
                {
                  step: "2",
                  title: "Structured Learning",
                  desc: "Follow our proven curriculum with expert guidance and regular progress checks",
                },
                {
                  step: "3",
                  title: "Practice & Application",
                  desc: "Apply your skills through real-world scenarios and extensive practice materials",
                },
                {
                  step: "4",
                  title: "Mock Tests & Feedback",
                  desc: "Take practice exams and receive detailed feedback for continuous improvement",
                },
                {
                  step: "5",
                  title: "Achievement & Next Steps",
                  desc: "Reach your target score and get guidance on your next steps",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-responsive-h4 font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-responsive-md text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link to="/immigration-visa" className="btn-secondary">
              Learn About Immigration Support
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Results & Outcomes */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing bg-gradient-to-br from-primary/5 to-secondary/5 border-y border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
            Real Results, Real Success
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            See how our students have transformed their lives and achieved their
            international dreams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "94%", label: "achieve target scores in IELTS/GRE" },
              {
                number: "4.9",
                label: "average student satisfaction rating",
              },
              {
                number: "89%",
                label: "successfully secure international opportunities",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-responsive-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Hear from professionals who transformed their careers with English
              Flow International.
            </p>
          </div>

          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                partialVisibilityGutter: 30,
              },
              mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            itemClass="p-4"
            arrows={false}
            showDots={true}
            customDot={<CustomDot />}
            partialVisible={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            draggable={true}
            swipeable={true}
          >
            {[
              {
                name: "Mustafa Patel",
                role: "Software Engineer at Microsoft",
                location: "Mumbai, India",
                course: "PTE Academic Preparation",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                testimonial:
                  "Fam Intl helped me achieve PTE 79 and secure admission to University of Toronto. The computer-based test simulation was incredibly helpful!",
              },
              {
                name: "Rahul Shah",
                role: "Data Scientist",
                location: "Bangalore, India",
                course: "Duolingo English Test Prep",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                testimonial:
                  "Scored 135 in Duolingo and got accepted to University of British Columbia. The adaptive test strategies were game-changing.",
              },
              {
                name: "Jay Patel",
                role: "Business Analyst",
                location: "Delhi, India",
                course: "UK Life Skills B1",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                testimonial:
                  "Passed UK Life Skills B1 on first attempt and secured my spouse visa. The real-life scenario practice was invaluable.",
              },
              {
                name: "Kriti Shah",
                role: "Marketing Manager",
                location: "Pune, India",
                course: "IELTS Training",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                testimonial:
                  "Achieved Band 8.5 in IELTS and got admitted to London School of Economics. The speaking practice sessions were exceptional.",
              },
              {
                name: "Khushi Thakoor",
                role: "UX Designer",
                location: "Hyderabad, India",
                course: "English Spoken",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg",
                testimonial:
                  "The course transformed my confidence in presenting design work to international clients. Now I lead global design workshops.",
              },
              {
                name: "Arjun Mehta",
                role: "Financial Analyst",
                location: "Chennai, India",
                course: "GRE Training",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg",
                testimonial:
                  "Scored 325 in GRE and secured a full scholarship at NYU Stern. The quantitative strategies were incredibly effective.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300 mx-2 h-64 flex flex-col justify-between"
              >
                <div className="mb-4 flex-1">
                  <Quote className="h-5 w-5 text-primary mb-2" />
                  <p className="text-responsive-sm text-muted-foreground italic leading-relaxed line-clamp-4">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <ImageWithSkeleton
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-responsive-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-responsive-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3 w-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-responsive-sm text-muted-foreground">
                    {testimonial.course}
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>

          <div className="text-center mt-8">
            <Link to="/contact" className="btn-secondary">
              Start Your Success Story
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={useFadeUp()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-spacing bg-gradient-primary text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold mb-4">
            Ready to Achieve Your International Dreams?
          </h2>
          <p className="text-responsive-lg mb-8 opacity-90">
            Join thousands of successful students and start your journey to
            global success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              to="/immigration-visa"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Immigration Support
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
