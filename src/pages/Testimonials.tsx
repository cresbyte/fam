import {
  Star,
  Quote,
  Users,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
} from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  // Custom dot component for better styling
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // Custom navigation buttons component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group absolute -top-16 right-0 flex gap-2 z-10 bg-background p-2 rounded-lg shadow-lg border border-border">
        <button
          className={`w-10 h-10 rounded-full border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-primary"
          }`}
          onClick={() => previous()}
          disabled={currentSlide === 0}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted hover:border-primary transition-colors flex items-center justify-center"
          onClick={() => next()}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  const testimonials = [
    {
      name: "Mustafa Patel",
      role: "Software Engineer at Microsoft",
      location: "Mumbai, India",
      course: "PTE Academic Preparation",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      testimonial:
        "Faminternational helped me achieve PTE 79 and secure admission to University of Toronto. The computer-based test simulation was incredibly helpful!",
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
    {
      name: "Priya Sharma",
      role: "Project Manager",
      location: "Kolkata, India",
      course: "Business English",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg",
      testimonial:
        "Now I confidently lead international teams and conduct client meetings in English. The business vocabulary was perfect.",
    },
    {
      name: "Vikram Singh",
      role: "Research Scientist",
      location: "Ahmedabad, India",
      course: "Academic English",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg",
      testimonial:
        "Published my research in top international journals. The academic writing and presentation skills were invaluable.",
    },
    {
      name: "Anjali Desai",
      role: "HR Director",
      location: "Gurgaon, India",
      course: "Professional Communication",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg",
      testimonial:
        "I now conduct interviews in English and manage our global HR operations with confidence and cultural sensitivity.",
    },
    {
      name: "Rohan Kapoor",
      role: "Sales Director",
      location: "Noida, India",
      course: "Executive Communication",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg",
      testimonial:
        "The executive communication course helped me secure major international clients and lead global sales teams effectively.",
    },
  ];

  const stats = [
    { number: "4.9", label: "Average Rating", icon: Star, suffix: "/5" },
    { number: "24K+", label: "Students Taught", icon: Users, suffix: "" },
    { number: "98%", label: "Success Rate", icon: TrendingUp, suffix: "" },
    { number: "50+", label: "Countries", icon: Globe, suffix: "" },
  ];

  return (
    <div className="bg-background">
      {/* Included with Every Plan Section */}
      <section className="section-spacing ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              Results you can expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* First Row - 3 items */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                Personalized Learning Plans
              </h3>
              <p className="text-responsive-sm text-muted-foreground">
                Get a customized curriculum tailored to your goals, schedule,
                and learning preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                Expert Native Teachers
              </h3>
              <p className="text-responsive-sm text-muted-foreground">
                Learn from certified English teachers with years of experience
                in language instruction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                Official Certificates
              </h3>
              <p className="text-responsive-sm text-muted-foreground">
                Earn recognized certificates upon completion to showcase your
                English proficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mt-24">
            {/* Second Row - 2 items */}
            <div className="text-center ">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                Progress Tracking
              </h3>
              <p className="text-responsive-sm text-muted-foreground">
                Monitor your improvement with detailed analytics and regular
                progress assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-responsive-h3 font-semibold text-foreground mb-3">
                Global Community
              </h3>
              <p className="text-responsive-sm text-muted-foreground">
                Connect with students from around the world and practice with
                diverse accents and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-spacing bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-responsive-h2 font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Hear from professionals who transformed their careers with
              Faminternational.
            </p>
          </div>

          {/* First Carousel */}
          <div className="mb-16 relative">
            <Carousel
              responsive={responsive}
              itemClass="p-4"
              arrows={true}
              customButtonGroup={<ButtonGroup />}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              partialVisible={true}
            >
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300 mx-2 h-64 flex flex-col justify-between"
                >
                  {/* Quote */}
                  <div className="mb-4 flex-1">
                    <Quote className="h-5 w-5 text-primary mb-2" />
                    <p className="text-responsive-sm text-muted-foreground italic leading-relaxed line-clamp-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground text-responsive-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-responsive-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
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
                </div>
              ))}
            </Carousel>
          </div>

          {/* Second Carousel */}
          <div className="mb-16 relative">
            <Carousel
              responsive={responsive}
              itemClass="p-4"
              arrows={true}
              customButtonGroup={<ButtonGroup />}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              partialVisible={true}
            >
              {testimonials.slice(6, 12).map((testimonial, index) => (
                <div
                  key={index + 6}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300 mx-2 h-64 flex flex-col justify-between"
                >
                  {/* Quote */}
                  <div className="mb-4 flex-1">
                    <Quote className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground italic leading-relaxed line-clamp-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.course}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful professionals who have transformed
            their careers with Faminternational.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Learning Today
            </a>
            <a
              href="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
