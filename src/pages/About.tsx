import {
  Users,
  Target,
  Award,
  Heart,
  BookOpen,
  Globe,
  Star,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Animation Variants
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

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Curriculum",
      bio: "PhD in Applied Linguistics with 15+ years of experience in ESL education. Former Cambridge University researcher. Designed curricula used by over 50 language institutions worldwide.",
      specialties: ["Curriculum Design", "Assessment", "Teacher Training"],
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      achievements: "Published 12+ research papers on language acquisition",
    },
    {
      name: "Michael Chen",
      role: "Lead Business English Coach",
      bio: "Former Fortune 500 executive turned English coach. Specializes in business communication and leadership English. Helped executives from 30+ countries improve their presentation and negotiation skills.",
      specialties: ["Business English", "Presentations", "Negotiations"],
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      achievements: "Trained over 500 corporate clients globally",
    },
    {
      name: "Elena Rodriguez",
      role: "Conversation Specialist",
      bio: "Native speaker with certification in TESOL and 10+ years helping students build confidence in speaking. Creator of our award-winning 'Speak Without Fear' program.",
      specialties: ["Conversation", "Pronunciation", "Cultural Communication"],
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      achievements: "98% student satisfaction rate in speaking confidence",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on measurable progress and real-world application of English skills. Every lesson is designed to deliver tangible outcomes.",
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description:
        "Every lesson plan is tailored to individual learning styles, goals, and pace. Your success is our priority.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "We prepare students for international success with cultural awareness, idiomatic fluency, and cross-cultural communication skills.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Highest standards in teaching methodology, continuous improvement, and teacher development. All coaches are rigorously trained and certified.",
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
            About <span className="gradient-text">Fam International</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-responsive-lg text-muted-foreground leading-relaxed"
          >
            Founded in 2018, Fam International has helped over 24,000 students
            achieve their international dreams through expert IELTS training, English spoken courses, 
            GRE preparation, and comprehensive immigration support. We combine proven
            teaching methods with modern technology to deliver personalized,
            effective learning experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Impact & Reach */}
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
            Our Global Impact
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            We’re proud of the real-world difference we make every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "24K+", label: "students from 89 countries" },
              { number: "4.9/5", label: "average student satisfaction" },
              { number: "94%", label: "achieve fluency within 6 months" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-md  border"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  {stat.number}
                  {index === 1 && (
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
                <div className="text-muted-foreground text-responsive-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} custom={1}>
              <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-responsive-lg text-muted-foreground mb-6 leading-relaxed">
                To empower individuals and professionals worldwide with
                confident English communication skills that open doors to global
                opportunities and career advancement.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that language learning should be engaging, practical,
                and results-oriented. Our methodology focuses on real-world
                application, ensuring students can immediately use what they
                learn in professional and personal contexts.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} custom={2} className="card-minimal">
              <div className="bg-primary/10 p-6 rounded-lg mb-4">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-3 text-center">
                  Our Teaching Philosophy
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Personalized learning paths for every student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Focus on practical, real-world application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Continuous feedback and progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cultural awareness and global communication</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Faminternational.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -6 }}
                className="card-minimal text-center bg-white/70 backdrop-blur-sm border border-border rounded-md p-6  transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-responsive-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Teaching Approach */}
      <motion.section
        ref={useScrollAnimation()[0]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="section-spacing bg-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              We use a blend of proven methodologies and innovative techniques
              to maximize learning outcomes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Communicative Language Teaching",
                description:
                  "Focus on real communication and practical language use in authentic contexts. Students spend 80% of class time speaking and interacting.",
                benefits: [
                  "Interactive learning",
                  "Real-world scenarios",
                  "Immediate application",
                ],
              },
              {
                title: "Task-Based Learning",
                description:
                  "Students learn through completing meaningful tasks that mirror real-life situations. From mock interviews to business pitches.",
                benefits: [
                  "Problem-solving skills",
                  "Collaborative learning",
                  "Contextual understanding",
                ],
              },
              {
                title: "Technology-Enhanced Learning",
                description:
                  "Integration of digital tools and platforms to support and enhance traditional teaching. Includes AI feedback, progress dashboards, and mobile practice.",
                benefits: [
                  "Flexible scheduling",
                  "Progress tracking",
                  "Multimedia resources",
                ],
              },
              {
                title: "Personalized Feedback",
                description:
                  "Continuous assessment and tailored feedback to address individual learning needs. All assignments are reviewed within 12 hours.",
                benefits: [
                  "Targeted improvement",
                  "Confidence building",
                  "Accelerated progress",
                ],
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -6 }}
                className="card-minimal bg-white/70 border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {approach.title}
                </h3>
                <p className="text-responsive-base text-muted-foreground mb-6 leading-relaxed">
                  {approach.description}
                </p>
                <div>
                  <h4 className="text-responsive-base font-medium text-foreground mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {approach.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * benefitIndex }}
                        className="flex items-center gap-2"
                      >
                        <div className="bg-primary w-2 h-2 rounded-full"></div>
                        <span className="text-responsive-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
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
        className="section-spacing"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
            Ready to Experience Our Teaching Excellence?
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their
            English skills with Faminternational.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="btn-primary px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey Today
            </motion.a>
            <motion.a
              href="/how-it-works"
              className="btn-secondary px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Our Method
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
