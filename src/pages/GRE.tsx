import { motion } from "framer-motion";
import {
  Check,
  Star,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Calculator,
  FileText,
  Brain,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const GRE = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-responsive-h1 font-bold text-foreground mb-6"
            >
              Master the <span className="gradient-text">GRE</span> and Get Into
              Your Dream Graduate School
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Comprehensive GRE preparation covering Verbal Reasoning,
              Quantitative Reasoning, and Analytical Writing. Our proven
              strategies have helped thousands of students achieve their target
              scores and secure admission to top graduate programs.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="btn-primary px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Start GRE Prep Today
              </Link>
              <Link
                to="/contact"
                className="btn-secondary px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Free GRE Assessment
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* GRE Overview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
              What is the GRE?
            </h2>
            <p className="text-responsive-lg text-muted-foreground mb-6 leading-relaxed">
              The Graduate Record Examination (GRE) is a standardized test
              required by most graduate schools in the United States and many
              other countries. It measures your readiness for graduate-level
              work across three key areas: Verbal Reasoning, Quantitative
              Reasoning, and Analytical Writing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Verbal Reasoning
                  </h4>
                  <p className="text-muted-foreground">
                    Critical reading, text completion, and sentence equivalence
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Quantitative Reasoning
                  </h4>
                  <p className="text-muted-foreground">
                    Problem-solving, data interpretation, and mathematical
                    concepts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Analytical Writing
                  </h4>
                  <p className="text-muted-foreground">
                    Critical thinking and analytical writing skills
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
              Test Format
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="font-medium">Verbal Reasoning</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 sections, 20 questions each
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span className="font-medium">Quantitative Reasoning</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 sections, 20 questions each
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">Analytical Writing</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 tasks, 30 minutes each
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Total Duration</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  3 hours 45 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why GRE Matters Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
            Why GRE Scores Matter
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Your GRE score is a crucial factor in graduate school admissions. It
            demonstrates your academic readiness and can significantly impact
            your chances of getting into your dream program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Admission Requirements",
                desc: "Required by 90% of graduate programs worldwide",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Scholarship Eligibility",
                desc: "Higher scores increase scholarship and funding opportunities",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Competitive Edge",
                desc: "Stand out among thousands of applicants",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Program Selection",
                desc: "Access to top-tier graduate programs and universities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What You'll Gain Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
            What You'll Gain from Our GRE Training
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive GRE preparation program is designed to give you
            everything you need to achieve your target score.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Instruction",
              desc: "Learn from certified GRE tutors with proven track records of helping students achieve high scores.",
              features: [
                "Personalized study plans",
                "One-on-one coaching",
                "Progress tracking",
              ],
            },
            {
              title: "Comprehensive Materials",
              desc: "Access to official GRE practice tests, study guides, and our proprietary preparation resources.",
              features: [
                "Updated content",
                "Real exam questions",
                "Interactive exercises",
              ],
            },
            {
              title: "Strategic Approach",
              desc: "Master proven techniques and strategies for each test section to maximize your score potential.",
              features: [
                "Time management",
                "Question analysis",
                "Score optimization",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-6">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Structure */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Course Structure & Timeline
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
              Our 10-12 week program is designed to build your skills
              progressively and ensure you're fully prepared for exam day.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Foundation Building",
                duration: "Weeks 1-4",
                focus: "Core concepts and test format understanding",
                activities: [
                  "Test overview",
                  "Basic strategies",
                  "Concept review",
                  "Practice questions",
                ],
              },
              {
                phase: "Phase 2",
                title: "Skill Development",
                duration: "Weeks 5-8",
                focus: "Intensive practice and strategy implementation",
                activities: [
                  "Section-specific training",
                  "Practice tests",
                  "Strategy refinement",
                  "Performance analysis",
                ],
              },
              {
                phase: "Phase 3",
                title: "Exam Preparation",
                duration: "Weeks 9-12",
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
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary font-bold text-xl">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-2">
                  {phase.title}
                </h3>
                <div className="text-primary font-medium mb-2">
                  {phase.duration}
                </div>
                <p className="text-muted-foreground mb-4">{phase.focus}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {phase.activities.map((activity, activityIndex) => (
                    <li
                      key={activityIndex}
                      className="flex items-center justify-center gap-2"
                    >
                      <Check className="h-3 w-3 text-primary flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            See how our students have transformed their GRE scores and achieved
            their graduate school dreams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Kim",
                score: "330",
                previous: "300",
                program: "Stanford MBA",
                quote:
                  "The structured approach helped me improve by 30 points. I'm now at Stanford!",
              },
              {
                name: "David Chen",
                score: "325",
                previous: "290",
                program: "MIT Engineering",
                quote:
                  "Excellent coaching and materials. My quantitative score improved dramatically.",
              },
              {
                name: "Sofia Rodriguez",
                score: "328",
                previous: "305",
                program: "Harvard Law",
                quote:
                  "The verbal strategies were game-changing. I can't recommend this program enough.",
              },
            ].map((student, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card p-6 rounded-lg border border-border shadow-sm"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {student.name}
                </h4>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Previous: {student.previous}
                    </span>
                    <span className="text-primary font-semibold">
                      Final: {student.score}
                    </span>
                  </div>
                </div>
                <p className="text-primary font-bold text-lg mb-2">
                  {student.program}
                </p>
                <p className="text-muted-foreground text-sm italic">
                  "{student.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-spacing bg-primary text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold mb-6">
            Ready to Achieve Your Target GRE Score?
          </h2>
          <p className="text-responsive-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful students and start your GRE preparation
            journey today. Our expert tutors are ready to guide you to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start GRE Prep Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Speak to a GRE Expert
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GRE;
