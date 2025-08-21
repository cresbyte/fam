import { Link } from "react-router-dom";
import {
  BookOpen,
  MessageCircle,
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
  GraduationCap,
  Globe,
  Target,
  TrendingUp,
  FileText,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      level: "IELTS Training",
      icon: GraduationCap,
      price: "$299",
      duration: "8-12 weeks",
      lessons: "60+ lessons",
      students: "8,200+",
      rating: "4.9",
      description:
        "Comprehensive preparation for Academic and General Training modules with proven strategies, extensive practice tests, and expert guidance to achieve your target band score.",
      features: [
        "Academic & General Training modules",
        "Expert strategies for all sections",
        "Full-length practice tests",
        "Personalized feedback & scoring",
        "Speaking practice with native speakers",
        "Official IELTS materials included",
      ],
      highlights: ["Most Popular", "Guaranteed Score Improvement"],
      targetScore: "Band 7+",
      examDate: "Flexible scheduling",
    },
    {
      level: "English Spoken",
      icon: MessageCircle,
      price: "$199",
      duration: "6-10 weeks",
      lessons: "48+ lessons",
      students: "6,800+",
      rating: "4.8",
      description:
        "Build confidence in speaking, listening, and real-world communication for professional and social contexts with interactive sessions and practical exercises.",
      features: [
        "Conversation practice sessions",
        "Pronunciation & accent training",
        "Business communication skills",
        "Cultural awareness training",
        "Real-world scenarios",
        "Progress tracking & assessment",
      ],
      highlights: ["Career-Focused", "Live Group Sessions"],
      targetScore: "Fluent Communication",
      examDate: "Continuous assessment",
    },
    {
      level: "GRE Training",
      icon: BookOpen,
      price: "$399",
      duration: "10-16 weeks",
      lessons: "80+ lessons",
      students: "3,400+",
      rating: "4.9",
      description:
        "Master Verbal, Quantitative, and Analytical Writing sections with proven strategies, comprehensive practice materials, and expert guidance for graduate school success.",
      features: [
        "Verbal reasoning mastery",
        "Quantitative problem solving",
        "Analytical writing skills",
        "Full-length GRE practice tests",
        "Strategy workshops",
        "Score improvement guarantee",
      ],
      highlights: ["Graduate School Focus", "1-on-1 Coaching Available"],
      targetScore: "320+ Score",
      examDate: "Flexible test dates",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-responsive-h1 font-bold text-foreground mb-6">
            Choose Your Path to{" "}
            <span className="gradient-text">International Success</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-8">
            Expert-led courses designed to help you achieve your goals, whether you're preparing for exams, 
            improving communication skills, or planning your international journey. All courses include live classes, 
            personalized feedback, and lifetime access to materials.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`card-minimal relative ${
                  index === 0 ? "ring-2 ring-primary" : ""
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-left mb-6">
                  <h3 className="text-responsive-h2 font-bold text-foreground mb-2">
                    {course.level}
                  </h3>
                  <div className="text-responsive-xl font-bold text-primary mb-2">
                    {course.price}
                  </div>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  {/* Target Score */}
                  <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg mb-4 inline-block">
                    <span className="font-semibold">Target: {course.targetScore}</span>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-left">
                  <div>
                    <div className="flex items-center justify-start gap-1 mb-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-responsive-sm text-muted-foreground">
                        Duration
                      </span>
                    </div>
                    <div className="font-semibold text-foreground">
                      {course.duration}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-start gap-1 mb-1">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-responsive-sm text-muted-foreground">
                        Lessons
                      </span>
                    </div>
                    <div className="font-semibold text-foreground">
                      {course.lessons}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-responsive-h3 font-semibold text-foreground mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-responsive-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-responsive-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      index === 0
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                        : "btn-primary"
                    }`}
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-secondary block text-center"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="section-spacing bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              We provide comprehensive support to ensure your success in achieving your international goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12" />,
                title: "Proven Results",
                description: "94% of our students achieve their target scores and successfully secure international opportunities.",
                stats: "24,000+ Success Stories"
              },
              {
                icon: <TrendingUp className="h-12 w-12" />,
                title: "Expert Guidance",
                description: "Learn from certified instructors with advanced degrees and years of specialized experience.",
                stats: "50+ Expert Trainers"
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Global Opportunities",
                description: "Direct pathways to universities and employers in USA, UK, Canada, Australia, and more.",
                stats: "89 Countries Served"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-primary font-semibold text-responsive-sm">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Compare Course Features
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              All courses include our core features, with additional benefits tailored to each program.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-semibold text-foreground">
                    Features
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    IELTS Training
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    English Spoken
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    GRE Training
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Live Group Classes", true, true, true],
                  ["Personal Progress Tracking", true, true, true],
                  ["Mobile App Access", true, true, true],
                  ["Homework & Assignments", true, true, true],
                  ["Certificate of Completion", true, true, true],
                  ["1-on-1 Coaching Sessions", true, true, true],
                  ["Practice Tests & Mock Exams", true, false, true],
                  ["Speaking Practice with Natives", true, true, false],
                  ["Score Improvement Guarantee", true, false, true],
                ].map(([feature, ielts, spoken, gre], index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">
                      {feature}
                    </td>
                    <td className="text-center p-4">
                      {ielts ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {spoken ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {gre ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
            Ready to Start Your International Journey?
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8">
            Take our free assessment to get a personalized course recommendation and start your path to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Free Assessment
            </Link>
            <Link to="/immigration-visa" className="btn-secondary">
              Immigration Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
