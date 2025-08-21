import { motion } from "framer-motion";
import {
  Check,
  Star,
  Users,
  Award,
  MessageCircle,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const EnglishSpoken = () => {
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
              Master <span className="gradient-text">Spoken English</span> with
              Confidence
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Develop fluency, perfect pronunciation, and build confidence in
              real-world English conversations. Our interactive approach makes
              learning English natural and enjoyable.
            </motion.p>
          
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
            What You'll Gain from Our Training
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive spoken English program is designed to transform
            your communication skills and build lasting confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Learning",
              desc: "Practice with native speakers and fellow students in real conversation scenarios.",
              features: [
                "Role-playing exercises",
                "Group discussions",
                "Real-time feedback",
              ],
            },
            {
              title: "Pronunciation Mastery",
              desc: "Learn proper intonation, stress patterns, and accent reduction techniques.",
              features: [
                "Phonetic training",
                "Accent coaching",
                "Voice recording analysis",
              ],
            },
            {
              title: "Practical Vocabulary",
              desc: "Master everyday expressions, idioms, and slang used by native speakers.",
              features: [
                "Context-based learning",
                "Cultural insights",
                "Modern expressions",
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
            Ready to Speak English with Confidence?
          </h2>
          <p className="text-responsive-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our proven spoken English program and take the first step
            towards fluent, confident communication. Our expert trainers are
            ready to guide you to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Speaking Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Book Free Speaking Assessment
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default EnglishSpoken;
