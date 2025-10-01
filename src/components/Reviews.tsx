import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Vishal Bari",
      role: "Founder, A-Z Paint Testing Lab",
      rating: 5,
      review:
        "Working with Manohar was an absolute pleasure. He delivered our landing page ahead of schedule and the design exceeded our expectations. The attention to detail and responsiveness was outstanding!",
      project: "Business Landing Page",
    },
    {
      name: "Pratham Patil",
      role: "Manager, Ganesh Agro",
      rating: 5,
      review:
        "Manohar transformed our complex dashboard into a beautiful, user-friendly interface. His React expertise and modern design sensibility really shine through. Highly recommend for any frontend work!",
      project: "Dashboard Redesign",
    },
    {
      name: "Pankaj Patil",
      role: "Founder, Amar Ragda",
      rating: 5,
      review:
        "Our bookings jumped by 40% after Manohar redesigned our restaurant website. He captured our brand’s flavor perfectly, blending style with customer-friendly design. Quick delivery and smooth communication all the way!",
      project: "Restaurant Website Redesign",
    },
    {
      name: "Paresh Warade",
      role: "CEO, V & W Finance",
      rating: 5,
      review:
        "Reliable, detail-oriented, and highly professional. Manohar helped us build a finance-focused solution in record time. Everything was accurate, secure, and easy to use. We now feel confident scaling our business with his support.",
      project: "Finance Website",
    },
    {
      name: "Oozeer Umayr",
      role: "Director, Cool Expert",
      rating: 5,
      review:
        "Manohar didn't just build a website, he built an experience. His design choices were thoughtful and he offered valuable suggestions that improved our original concept. Worth every penny!",
      project: "Business Website",
    },
    {
      name: "Jordan Smith",
      role: "CEO, Rally PPC",
      rating: 5,
      review:
        "Best freelancer I've worked with. Manohar is fast, communicative, and delivers high-quality code. The animations and micro-interactions he added made our app feel premium. Will hire again!",
      project: "Web Application",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
      >
        <Star
          size={18}
          className={
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      </motion.div>
    ));
  };

  return (
    <section
      id="reviews"
      className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 mb-6"
            variants={itemVariants}
          >
            <Star className="text-yellow-500 mr-2" size={18} />
            <span className="text-yellow-700 text-sm font-semibold">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            What Clients{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Don't just take my word for it — hear from clients who've trusted me
            with their projects
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-2 -right-2 text-purple-100"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Quote size={80} strokeWidth={1} />
                </motion.div>

                {/* Stars */}
                <motion.div
                  className="flex gap-1 mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {renderStars(review.rating)}
                </motion.div>

                {/* Review Text */}
                <motion.p
                  className="text-gray-700 leading-relaxed mb-8 flex-grow relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  "{review.review}"
                </motion.p>

                {/* Project Tag */}
                <motion.div
                  className="mb-6 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold border border-purple-100">
                    {review.project}
                  </span>
                </motion.div>

                {/* Client Info */}
                <motion.div
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Join These Happy Clients?
            </motion.h3>
            <motion.p
              className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's create something amazing together. Get in touch and let's
              discuss your project!
            </motion.p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
