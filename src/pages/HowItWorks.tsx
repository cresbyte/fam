import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useAnimation } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Clock,
  MessageCircle,
  Target,
  Users
} from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Animation Variants
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

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Free Placement Test",
      duration: "15 minutes",
      icon: Target,
      description:
        "Take our comprehensive assessment to determine your current English level and identify specific areas for improvement.",
      details: [
        "Grammar and vocabulary assessment",
        "Speaking and listening evaluation",
        "Writing skills review",
        "Personalized level recommendation",
      ],
      outcome:
        "Receive detailed results with your English level (A1-C2) and personalized recommendations. 98% of students find the test accurate and insightful.",
    },
    {
      step: 2,
      title: "Custom Learning Plan",
      duration: "24 hours",
      icon: BookOpen,
      description:
        "Our expert teachers create a personalized curriculum tailored to your goals, schedule, and learning preferences.",
      details: [
        "Goal-specific curriculum design",
        "Flexible scheduling options",
        "Learning style adaptation",
        "Progress milestones setting",
      ],
      outcome:
        "Get your personalized roadmap with clear objectives and timeline for achieving fluency. Plans are reviewed weekly for optimal pacing.",
    },
    {
      step: 3,
      title: "Interactive Live Classes",
      duration: "Ongoing",
      icon: Users,
      description:
        "Join small group classes (max 6 students) with expert teachers for interactive learning and real-time feedback.",
      details: [
        "Small group sessions (4-6 students)",
        "Interactive speaking practice",
        "Real-time error correction",
        "Engaging multimedia content",
      ],
      outcome:
        "Build confidence through practice with supportive peers and expert guidance. 94% of students report improved speaking fluency within 3 weeks.",
    },
    {
      step: 4,
      title: "Practice & Feedback",
      duration: "Daily",
      icon: MessageCircle,
      description:
        "Complete homework assignments, practice speaking, and receive detailed feedback to accelerate your progress.",
      details: [
        "Personalized homework assignments",
        "Speaking practice recordings",
        "Written feedback on assignments",
        "Weekly progress reviews",
      ],
      outcome:
        "Continuous improvement with clear guidance on strengths and areas for development. Feedback is delivered within 12 hours.",
    },
    {
      step: 5,
      title: "Certification & Success",
      duration: "Course completion",
      icon: Award,
      description:
        "Earn recognized certificates and achieve your English goals with measurable results and ongoing support.",
      details: [
        "Official course completion certificate",
        "Skills assessment documentation",
        "Career guidance and recommendations",
        "Alumni community access",
      ],
      outcome:
        "Graduate with confidence, credentials, and the English skills to achieve your goals. 78% of graduates report career advancement within 6 months.",
    },
  ];

  const methodology = [
    {
      title: "Communicative Approach",
      description: "Focus on real communication rather than just grammar rules",
      icon: MessageCircle,
    },
    {
      title: "Task-Based Learning",
      description:
        "Learn through practical tasks that mirror real-life situations",
      icon: Target,
    },
    {
      title: "Continuous Assessment",
      description:
        "Regular feedback and progress tracking to ensure steady improvement",
      icon: CheckCircle,
    },
    {
      title: "Cultural Integration",
      description:
        "Understanding cultural context for effective global communication",
      icon: Users,
    },
  ];

  const [activeFaq, setActiveFaq] = useState<string | null>(null);

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
            How <span className="gradient-text">Faminternational</span> Works
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-responsive-lg text-muted-foreground leading-relaxed"
          >
            Our proven 5-step methodology has helped over 24,000 students
            achieve English fluency. Here's exactly how we'll help you succeed,
            from your first assessment to certification.
          </motion.p>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          

            {/* Steps List */}
            <motion.div
              variants={staggerContainer}
              className="order-1 lg:order-2 space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index + 1}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-responsive-h3 font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-responsive-base text-muted-foreground leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-responsive-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-sm text-primary font-medium italic"
                    >
                      {step.outcome}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </motion.section>

      {/* Teaching Methodology */}
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
              Our Teaching Methodology
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Based on the latest research in language acquisition and proven in
              real-world results. Our methods are used by professionals in 89
              countries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -6 }}
                className="card-minimal text-left flex flex-col items-start bg-white/70 backdrop-blur-sm border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {method.title}
                </h3>
                <p className="text-responsive-base text-muted-foreground flex-1">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Student Success Metrics */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardFadeIn}
        className="section-spacing bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
            Proven Success, Measurable Results
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            We don’t just teach English — we deliver outcomes. Here’s what our
            students achieve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "94%", label: "improve by 1+ CEFR level in 3 months" },
              { number: "4.8", label: "avg. TOEFL speaking score increase" },
              {
                number: "78%",
                label: "receive promotions within 6 months of graduation",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-md  border"
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

      {/* Success Timeline */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Your Success Timeline
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Track your progress with clear milestones and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                period: "Week 1-2",
                title: "Foundation Building",
                achievements: [
                  "Assessment completed",
                  "Learning plan received",
                  "First classes attended",
                  "Goals established",
                ],
              },
              {
                period: "Month 1-3",
                title: "Skill Development",
                achievements: [
                  "Vocabulary expanded by 300+ words",
                  "Grammar accuracy improved by 40%",
                  "Speaking confidence gained",
                  "Writing fluency developed",
                ],
              },
              {
                period: "Month 4+",
                title: "Fluency & Mastery",
                achievements: [
                  "Engage in natural conversations",
                  "Deliver professional presentations",
                  "Understand cultural nuances",
                  "Earn certification & career boost",
                ],
              },
            ].map((timeline, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -6 }}
                className="card-minimal bg-white/80 border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-left mb-6">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {timeline.period}
                  </div>
                  <h3 className="text-responsive-h3 font-bold text-foreground">
                    {timeline.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {timeline.achievements.map(
                    (achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * achievementIndex }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-responsive-sm text-muted-foreground">
                          {achievement}
                        </span>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardFadeIn}
        className="section-spacing bg-secondary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Find answers to frequently asked questions about our English
              learning programs.
            </p>
          </motion.div>
          <Accordion
            type="single"
            collapsible
            value={activeFaq || undefined}
            onValueChange={setActiveFaq}
            className="w-full space-y-4"
          >
            {[
              {
                question: "How long does it take to see results?",
                answer:
                  "Most students notice improvement in confidence and basic communication within 2-3 weeks. Significant progress in fluency typically occurs after 2-3 months of consistent study. Our data shows 94% of students advance at least one CEFR level within 90 days.",
              },
              {
                question: "What if I can't attend live classes?",
                answer:
                  "All live classes are recorded and available for review. We also offer flexible scheduling with multiple time slots to accommodate different time zones and schedules. You’ll never miss a lesson — and you can rewatch any session for reinforcement.",
              },
              {
                question: "Do I need any special equipment or software?",
                answer:
                  "You only need a computer or mobile device with internet connection, microphone, and camera. We use standard web browsers — no special software required. A headset with a microphone is recommended for best audio quality.",
              },
              {
                question: "What happens if I'm not satisfied with my progress?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied with your progress, we'll work with you to adjust your learning plan or provide a full refund. Our success rate is 98% — but your satisfaction is guaranteed.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-border rounded-lg px-6 py-4 transition-all hover:shadow-md"
              >
                <AccordionTrigger
                  className="text-lg font-semibold text-foreground hover:no-underline text-left"
                  icon={
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        activeFaq === `faq-${index}` ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground pt-2 leading-relaxed"
                  asChild
                >
                  
                    {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        className="section-spacing"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
            Ready to Start Your English Success Journey?
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step with our free placement test and personalized
            learning plan. No risk. 100% tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="btn-primary px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Take Free Placement Test
            </motion.a>
            <motion.a
              href="/courses"
              className="btn-secondary px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Course Options
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;
