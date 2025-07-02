import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "A-Z Paint Testing Lab",
      techStack: [
        "React.js",
        "Node.js",
        "Socket.io",
        "WIX",
        "Google Maps API",
        "MongoDB",
      ],
      category: "Website",
      color: "from-green-400 to-blue-500",
      image: "/a-z-paint.png",
      liveUrl: "https://www.painttestings.com",
    },
    {
      title: "Nextdoor - Booking App",
      techStack: [
        "Next.js",
        "JWT Auth",
        "Razorpay",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      category: "Web App",
      color: "from-purple-400 to-pink-500",
      image: "/nextdoor.png",
      liveUrl: "https://next-door-app.vercel.app",
    },
    {
      title: "Amar Ragda",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      category: "UI/UX",
      color: "from-orange-400 to-red-500",
      image: "/amar-ragda.png",
      liveUrl: "https://amar-ragda.vercel.app",
    },
    {
      title: "Tread Letter - MVP",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Full Stack",
      color: "from-orange-400 to-red-500",
      image: "/tread-letter.png",
      liveUrl: "https://tread-letter.vercel.app",
    },
    {
      title: "Road Infrastructure Portal",
      techStack: ["React.js", "Tailwind CSS", "Next.js"],
      category: "UI/UX",
      color: "from-orange-400 to-red-500",
      image: "/ADC.png",
      liveUrl: "https://v0-road-infrastructure-dashboard-eta.vercel.app/dashboard",
    },
    {
      title: "Chat Bot Integration",
      techStack: ["React.js", "Tailwind CSS", "Zapier", "API"],
      category: "AI/ML",
      color: "from-orange-400 to-red-500",
      image: "/chatbot.png",
      liveUrl: "https://manoharkale.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-white to-gray-50"
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
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my recent work in web development and UI design
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Project Image */}
                <motion.div
                  className="relative h-50 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </motion.div>

                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.5 + techIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-[.8rem] border-2 border-purple-200 text-purple-600 py-3 px-6 rounded-xl font-medium hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-white">
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Want to see more?
            </motion.h3>
            <motion.p
              className="text-white/70 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Check out my complete portfolio on GitHub for more projects and
              contributions
            </motion.p>
            <motion.a
              href="https://github.com/manoharbari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
