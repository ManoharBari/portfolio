import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, performant web applications using React.js and Next.js with modern development practices and clean architecture.",
      icon: <FaPenNib className="text-white" />,
      features: [
        "React.js/Next.js",
        "Responsive Design",
        "Performance Optimization",
        "Modern JavaScript",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with Figma, focusing on user experience and visual appeal that converts.",
      icon: <IoColorPalette className="text-white" />,
      features: [
        "Figma Design",
        "User Research",
        "Wireframing",
        "Interactive Prototypes",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages that capture attention and drive results for your business goals with modern design principles.",
      icon: <LuAppWindow className="text-white" />,
      features: [
        "Conversion Focused",
        "A/B Testing Ready",
        "SEO Optimized",
        "Fast Loading",
      ],
      color: "from-green-500 to-blue-500",
    },
    {
      title: "MVP Development",
      description:
        "Complete MVP development from concept to launch, helping startups validate their ideas quickly with scalable solutions.",
      icon: <RiLightbulbFlashFill className="text-white" />,
      features: [
        "Rapid Prototyping",
        "User Testing",
        "Iterative Design",
        "Launch Strategy",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Dashboard Development",
      description:
        "Modern, data-driven dashboard interfaces with real-time updates and intuitive user experience for complex data visualization.",
      icon: <MdSpaceDashboard className="text-white" />,
      features: [
        "Data Visualization",
        "Real-time Updates",
        "User Management",
        "Custom Analytics",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Chatbot Integration",
      description:
        "Seamless integration of AI-powered chatbots into websites to enhance user engagement, automate support, and streamline lead generation.",
      icon: <SiChatbot className="text-white" />,
      features: [
        "Live Chat & AI Bots",
        "Lead Capture Forms",
        "CRM & Email Integration",
        "Custom UI & Branding",
      ],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
            variants={itemVariants}
          >
            <span className="text-purple-600 text-sm font-semibold">
              What I Do
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Services I{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Offer
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 mt-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive digital solutions to bring your ideas to life with
            clean code, thoughtful design, and modern technologies
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-purple-100 transition-all duration-500 h-full relative overflow-hidden">
                {/* Animated background decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-3xl">{service.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                          duration: 0.3,
                        }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                        ></div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p
              className="text-xl mb-10 text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Let's discuss your ideas and create something amazing together.
              From concept to deployment, I'll be with you every step of the way
              to ensure your vision comes to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://cal.com/manohar-kale/15min", "_blank")
                }
              >
                Schedule a Call
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "48h", label: "Average Response" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
