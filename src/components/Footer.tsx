import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Manohar Kale
            </motion.div>
            <p className="text-white/70 mb-8 max-w-md text-lg leading-relaxed">
              Full Stack Developer & UI Designer who loves crafting digital
              experiences that feel personal, work beautifully, and help people
              solve real problems, one clean interface at a time.
            </p>

            {/* Animated Social Links */}
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {[
                {
                  icon: <FiLinkedin />,
                  name: "LinkedIn",
                  color: "bg-blue-600 hover:bg-blue-700",
                  link: "https://www.linkedin.com/in/manohar-kale",
                },
                {
                  icon: <FaGithub />,
                  name: "GitHub",
                  color: "bg-gray-700 hover:bg-gray-600",
                  link: "https://github.com/ManoharBari",
                },
                {
                  icon: <FaTwitter />,
                  name: "Twitter",
                  color: "bg-sky-500 hover:bg-sky-600",
                  link: "https://x.com/manoharkale1110",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className={`w-12 h-12 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg`}
                  title={social.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <div className="space-y-4">
              {["Home", "About", "Skills", "Projects"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Services</h3>
            <div className="space-y-4">
              {[
                { name: "Frontend Development", target: "services" },
                { name: "UI/UX Design", target: "services" },
                { name: "MVP Development", target: "services" },
                { name: "Contact", target: "contact" },
              ].map((service, index) => (
                <motion.button
                  key={service.name}
                  onClick={() => scrollToSection(service.target)}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60">
              © 2024 Manohar Kale. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white/60 text-sm">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
