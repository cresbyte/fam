import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  Award,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    englishLevel: "",
    goals: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description:
          "We'll get back to you within 24 hours to schedule your free consultation.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        englishLevel: "",
        goals: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@Faminternational.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 8AM-8PM EST",
    },
    {
      icon: MapPin,
      title: "Global Offices",
      details: "New York, London, Singapore",
      description: "Teaching students worldwide",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Online Support",
      description: "Classes across all time zones",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Free Consultation",
      description: "One-on-one assessment with an expert teacher",
    },
    {
      icon: Award,
      title: "Personalized Plan",
      description: "Custom learning roadmap based on your goals",
    },
    {
      icon: MessageCircle,
      title: "Trial Lesson",
      description: "Experience our teaching method risk-free",
    },
  ];

  return (
    <div className="bg-background">
      {/* Main Contact Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-minimal">
              <h2 className="text-responsive-h2 font-bold text-foreground mb-6">
                Get Your Free Assessment
              </h2>
              <p className="text-responsive-base text-muted-foreground mb-8">
                Tell us about your English learning goals and we'll create a
                personalized plan just for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="englishLevel"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Current English Level
                    </label>
                    <select
                      id="englishLevel"
                      name="englishLevel"
                      value={formData.englishLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner (A1-A2)</option>
                      <option value="intermediate">Intermediate (B1-B2)</option>
                      <option value="advanced">Advanced (C1-C2)</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Learning Goals *
                  </label>
                  <select
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="business">Business English</option>
                    <option value="career">Career Advancement</option>
                    <option value="conversation">Conversation Skills</option>
                    <option value="academic">Academic English</option>
                    <option value="interview">Job Interview Preparation</option>
                    <option value="general">General Fluency</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                    placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Get Started - It's Free!
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications
                  from Faminternational. You can unsubscribe at any time.
                </p>
              </form>
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="card-minimal">
                <h3 className="text-responsive-h3 font-semibold text-foreground mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-responsive-base font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-responsive-base text-primary font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-responsive-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-primary text-white p-6 rounded-lg text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-responsive-h3 font-semibold mb-2">
                  24-Hour Response Guarantee
                </h3>
                <p className="text-responsive-base opacity-90">
                  We'll respond to your inquiry within 24 hours with a
                  personalized learning plan and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Quick answers to help you get started faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
