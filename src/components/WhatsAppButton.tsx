import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/919607149435?text=Hi!%20I’d%20like%20to%20discuss%20a%20web%20or%20software%20project%20with%20you.%20Let’s%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden sm:block font-medium">Chat with Expert</span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
