import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer as a freelancer?",
    answer:
      "I specialize in building modern, responsive websites using React, Tailwind CSS, and Next.js. I also offer UI/UX design, landing page creation, email templates, and performance optimization, everything you need to bring your digital product to life.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "I work with startups, coaches, SaaS founders, and small businesses, especially those looking to improve their online presence, generate more leads, or build an MVP quickly.",
  },
  {
    question: "How much do you charge for a website?",
    answer:
      "It depends on the scope and complexity. Basic landing pages start at ₹2999, while full websites or dashboards may range from ₹8,000 to ₹30,000+. I provide fixed quotes after understanding your exact needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Small projects (like landing pages) take 3–5 days, while larger projects may take 1–3 weeks. I always share a clear timeline before starting.",
  },
  {
    question: "Can you redesign my existing website or landing page?",
    answer:
      "Yes! I specialize in redesigning outdated or underperforming websites to make them clean, fast, and conversion-focused, especially on mobile.",
  },
  {
    question: "Do you offer ongoing support or updates?",
    answer:
      "Absolutely. I offer optional maintenance packages or hourly support for updates, fixes, or new features, so you're never left in the dark.",
  },
  {
    question: "How do I get started with you?",
    answer:
      "Simply message me through the contact form or click the WhatsApp button to get in touch. I'll respond within 24 hours with next steps and a free consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work remotely with clients from the US, UK, Canada, Australia, and more. I'm flexible with time zones and async communication.",
  },
  {
    question: "What tools or technologies do you use?",
    answer:
      "I primarily use React.js, Tailwind CSS, Next.js, Figma, Vercel, and GitHub. For design systems or larger builds, I integrate with Supabase, Firebase, or Headless CMS as needed.",
  },
  {
    question: "Why should I choose you over an agency or template?",
    answer:
      "I offer clean, custom-coded solutions that are lightweight, fast, and tailored to your goals. Unlike agencies, I work directly with you, meaning faster communication, better results, and lower cost.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex  items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
            variants={itemVariants}
          >
            <span className="text-purple-600 text-sm font-semibold">FAQ</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need to know about working with me and my services.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              I'm here to help! Feel free to reach out with any other questions
              you may have.
            </p>
            <motion.a
              className="inline-flex cursor-pointer items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://wa.me/919607149435?text=Hi!%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20your%20web%20design%20and%20development%20services.%20Let%E2%80%99s%20connect!%20🚀",
                  "_blank"
                );
              }}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
