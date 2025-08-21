import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  Globe,
  FileText,
  MessageCircle,
  Award,
  Calendar,
  BarChart3,
  Play,
  Download,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

// Custom Hook for Scroll Animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  if (inView) controls.start("visible");
  return [ref, controls] as const;
};

const IELTS = () => {
  const modules = [
    {
      title: "Listening Module",
      description:
        "Master all question types and develop strategies for different accents and contexts.",
      topics: [
        "Multiple choice questions",
        "Form completion",
        "Note completion",
        "Table completion",
        "Flow-chart completion",
        "Summary completion",
        "Sentence completion",
        "Short-answer questions",
        "Map/plan labeling",
        "Diagram labeling",
      ],
      duration: "15 hours",
      practiceTests: "8 full listening tests",
    },
    {
      title: "Reading Module",
      description:
        "Learn skimming, scanning, and detailed reading techniques for academic and general texts.",
      topics: [
        "Multiple choice questions",
        "Identifying information",
        "Identifying writer's views",
        "Matching information",
        "Matching headings",
        "Matching features",
        "Matching sentence endings",
        "Sentence completion",
        "Summary completion",
        "Note completion",
        "Table completion",
        "Flow-chart completion",
        "Diagram label completion",
        "Short-answer questions",
      ],
      duration: "20 hours",
      practiceTests: "10 full reading tests",
    },
    {
      title: "Writing Module",
      description:
        "Develop structured writing skills for both Task 1 and Task 2 with detailed feedback.",
      topics: [
        "Task 1: Data description (graphs, charts, processes)",
        "Task 1: Letter writing (General Training)",
        "Task 2: Essay writing (argumentative, discussion, problem-solution)",
        "Coherence and cohesion",
        "Lexical resource",
        "Grammatical range and accuracy",
        "Task achievement and response",
      ],
      duration: "25 hours",
      practiceTests: "12 writing assignments with feedback",
    },
    {
      title: "Speaking Module",
      description:
        "Build confidence in all three parts of the speaking test with native speaker practice.",
      topics: [
        "Part 1: Introduction and interview",
        "Part 2: Individual long turn",
        "Part 3: Two-way discussion",
        "Fluency and coherence",
        "Lexical resource",
        "Grammatical range and accuracy",
        "Pronunciation",
        "Common topics and vocabulary",
      ],
      duration: "18 hours",
      practiceTests: "15 speaking practice sessions",
    },
  ];

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Target Score Guarantee",
      description:
        "Achieve your target band score or get additional training at no extra cost.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Native Trainers",
      description:
        "Learn from certified IELTS trainers with 8+ years of experience and proven track records.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Official Materials",
      description:
        "Access to official Cambridge IELTS materials and our proprietary study resources.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description:
        "Choose from morning, afternoon, or evening classes to fit your schedule.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Progress Tracking",
      description:
        "Monitor your improvement with detailed analytics and performance reports.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "24/7 Support",
      description:
        "Get help anytime with our dedicated support team and student community.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      score: "Band 8.5",
      previous: "Band 6.0",
      course: "Academic IELTS",
      testimonial:
        "The structured approach and expert guidance helped me improve by 2.5 bands in just 8 weeks. I'm now studying at Stanford University!",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
    {
      name: "Ahmed Hassan",
      score: "Band 7.5",
      previous: "Band 5.5",
      course: "General Training",
      testimonial:
        "The practice tests and feedback were invaluable. My speaking confidence improved dramatically with the native speaker practice sessions.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Maria Rodriguez",
      score: "Band 8.0",
      previous: "Band 6.5",
      course: "Academic IELTS",
      testimonial:
        "The writing module was excellent. I learned how to structure essays properly and my score improved from 6.0 to 7.5 in writing.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-spacing bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-responsive-h1 font-bold text-foreground mb-6"
              >
                Master <span className="gradient-text">IELTS</span> and Achieve
                Your Dreams
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-responsive-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Comprehensive IELTS preparation for both Academic and General
                Training modules. Our proven methodology has helped thousands of
                students achieve their target scores and secure admission to top
                universities worldwide.
              </motion.p>

            

              {/* Key Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8-12</div>
                  <div className="text-sm text-muted-foreground">Weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">60+</div>
                  <div className="text-sm text-muted-foreground">Lessons</div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-border"
              >
                <div className="text-center mb-6">
                  <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    IELTS Training
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    $299
                  </div>
                  <p className="text-muted-foreground">
                    Complete course with all materials
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Academic & General Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">60+ structured lessons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">20+ practice tests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Native speaker practice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Score improvement guarantee</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full btn-primary py-3 rounded-lg font-semibold text-center block"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Course Overview */}
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
              Comprehensive IELTS Preparation
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured approach covers all four modules with extensive
              practice, expert guidance, and proven strategies to maximize your
              score.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="card-minimal border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {module.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {module.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Key Topics:
                  </h4>
                  <ul className="space-y-1">
                    {module.topics.slice(0, 6).map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                    {module.topics.length > 6 && (
                      <li className="text-sm text-primary font-medium">
                        +{module.topics.length - 6} more topics
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Duration: {module.duration}</span>
                  <span>{module.practiceTests}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
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
              Why Choose Our IELTS Course?
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your IELTS exam with
              confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Course Structure */}
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
              Course Structure & Timeline
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Our 8-12 week program is designed to build your skills
              progressively and ensure you're fully prepared for exam day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: " 1",
                title: "Foundation Building",
                duration: "Weeks 1-3",
                focus: "Core skills development and test format understanding",
                activities: [
                  "Grammar review",
                  "Vocabulary building",
                  "Test format overview",
                  "Basic strategies",
                ],
              },
              {
                phase: " 2",
                title: "Skill Development",
                duration: "Weeks 4-7",
                focus: "Intensive practice and strategy implementation",
                activities: [
                  "Module-specific training",
                  "Practice tests",
                  "Strategy refinement",
                  "Performance analysis",
                ],
              },
              {
                phase: " 3",
                title: "Exam Preparation",
                duration: "Weeks 8-12",
                focus: "Full-length tests and final preparation",
                activities: [
                  "Complete mock tests",
                  "Time management",
                  "Final review",
                  "Exam day strategies",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center  mb-6">
                  <span className="text-primary font-bold text-xl">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-2 text-left">
                  {phase.title}
                </h3>
                <div className="text-primary font-medium mb-2 text-left">
                  {phase.duration}
                </div>
                <p className="text-muted-foreground mb-4 text-left">{phase.focus}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {phase.activities.map((activity, activityIndex) => (
                    <li
                      key={activityIndex}
                      className="flex items-center  gap-2"
                    >
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
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
            Ready to Achieve Your Target IELTS Score?
          </h2>
          <p className="text-responsive-lg mb-8 opacity-90">
            Join thousands of successful students and start your IELTS journey
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default IELTS;
