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
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Import emailjs dynamically
      const emailjs = await import("@emailjs/browser");

      // Add submission date to the data
      const templateParams = {
        ...formData,
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_as7qtk4", // Replace with your EmailJS service ID
        "template_iyr6ifs", // Replace with your EmailJS template ID
        templateParams,
        "2i1E8TaLjfFs7ncMP" // Replace with your EmailJS public key
      );

      console.log("Email sent successfully:", result);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        englishLevel: "",
        goals: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "faminternational.shop@gmail.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7984670963",
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

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Start Your International Journey
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your goals for IELTS, English spoken, GRE training,
              or immigration support, and we'll create a personalized plan just
              for you.
            </p>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">
                    Message sent successfully!
                  </span>
                </div>
                <p className="text-green-700 mt-1">
                  We'll get back to you within 24 hours to schedule your free
                  consultation.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  There was an error sending your message. Please try again or
                  contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="englishLevel"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current English Level
                  </label>
                  <select
                    id="englishLevel"
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="Beginner (A1-A2)">Beginner (A1-A2)</option>
                    <option value="Intermediate (B1-B2)">
                      Intermediate (B1-B2)
                    </option>
                    <option value="Advanced (C1-C2)">Advanced (C1-C2)</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Learning Goals *
                </label>
                <select
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your primary goal</option>
                  <option value="IELTS Training">IELTS Training</option>
                  <option value="English Spoken">English Spoken</option>
                  <option value="GRE Training">GRE Training</option>
                  <option value="Immigration & Visa Support">
                    Immigration & Visa Support
                  </option>
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="Career Advancement">Career Advancement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive communications
                from Faminternational. You can unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">
                24-Hour Response Guarantee
              </h3>
              <p className="opacity-90">
                We'll respond to your inquiry within 24 hours with a
                personalized learning plan and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
