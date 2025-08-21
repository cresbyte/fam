import { Link } from "react-router-dom";
import {
  BookOpen,
  MessageCircle,
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      level: "Beginner",
      icon: BookOpen,
      price: "$89/month",
      duration: "3-6 months",
      lessons: "48 lessons",
      students: "5,200+",
      rating: "4.9",
      description:
        "Perfect for complete beginners or those looking to rebuild their English foundation.",
      features: [
        "Basic vocabulary and grammar",
        "Simple conversation practice",
        "Pronunciation fundamentals",
        "Interactive exercises",
        "Progress tracking",
        "Certificate upon completion",
      ],
      highlights: ["Most Popular for New Learners", "Flexible Schedule"],
    },
    {
      level: "Intermediate",
      icon: MessageCircle,
      price: "$109/month",
      duration: "4-8 months",
      lessons: "64 lessons",
      students: "4,800+",
      rating: "4.8",
      description:
        "Build confidence and fluency with complex grammar and professional vocabulary.",
      features: [
        "Advanced grammar structures",
        "Professional vocabulary",
        "Confident conversations",
        "Email and writing skills",
        "Presentation practice",
        "Cultural communication",
      ],
      highlights: ["Career-Focused", "Live Group Sessions"],
    },
    {
      level: "Advanced",
      icon: Award,
      price: "$129/month",
      duration: "6-12 months",
      lessons: "80 lessons",
      students: "2,400+",
      rating: "4.9",
      description:
        "Master business English, negotiations, and nuanced communication for global success.",
      features: [
        "Business English mastery",
        "Negotiation skills",
        "Executive presentations",
        "Cross-cultural communication",
        "Industry-specific vocabulary",
        "Leadership communication",
      ],
      highlights: ["Executive Level", "1-on-1 Coaching Available"],
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-responsive-h1 font-bold text-foreground mb-6">
            Choose Your Perfect{" "}
            <span className="gradient-text">English Course</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-8">
            Structured learning paths designed by expert teachers to help you
            achieve fluency faster. All courses include live classes,
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
                  index === 1 ? "ring-2 ring-primary" : ""
                }`}
              >
                {index === 1 && (
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
                  <p className="text-muted-foreground">{course.description}</p>
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
                      index === 1
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                        : "btn-primary"
                    }`}
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="btn-secondary block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-spacing bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Compare Course Features
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              All courses include our core features, with additional benefits as
              you advance.
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
                    Beginner
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    Intermediate
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    Advanced
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
                  ["1-on-1 Coaching Sessions", false, true, true],
                  ["Business English Focus", false, true, true],
                  ["Interview Preparation", false, false, true],
                  ["Executive Presentation Skills", false, false, true],
                ].map(([feature, beginner, intermediate, advanced], index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">
                      {feature}
                    </td>
                    <td className="text-center p-4">
                      {beginner ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {intermediate ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {advanced ? (
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
            Still Not Sure Which Course is Right for You?
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8">
            Take our free 5-minute assessment to get a personalized course
            recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Take Free Assessment
            </Link>
            <Link to="/testimonials" className="btn-secondary">
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
