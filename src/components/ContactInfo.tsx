import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";

interface ContactInfoProps {
  containerVariants: any;
  itemVariants: any;
}

const ContactInfo = ({ containerVariants, itemVariants }: ContactInfoProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-8 text-white"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -5 }}
    >
      <motion.h3
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get in touch
      </motion.h3>

      {/* Contact Details */}
      <motion.div
        className="space-y-8 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <HiOutlineMail />,
            title: "Email",
            content: (
              <a
                href="mailto:manoharkale5368@gmail.com"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                manoharkale5368@gmail.com
              </a>
            ),
          },
          {
            icon: <LuCalendarDays />,
            title: "Schedule a Call",
            content: (
              <button
                className="text-blue-300 hover:text-blue-200 transition-colors"
                onClick={() =>
                  window.open("https://cal.com/manohar-kale/15min", "_blank")
                }
              >
                Book a meeting
              </button>
            ),
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl">{contact.icon}</span>
            </motion.div>
            <div>
              <p className="font-semibold text-white text-lg">
                {contact.title}
              </p>
              {contact.content}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Availability Status */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-green-300 font-semibold text-lg">
            Available for new projects
          </span>
        </div>
        <p className="text-white/70 text-center">
          I typically respond within 24 hours
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
