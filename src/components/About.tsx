import { motion } from "framer-motion";
import { LuGraduationCap } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      id="about"
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
              About Me
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Designing Solutions,
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Not Just Visuals
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="prose prose-lg text-gray-700"
              variants={itemVariants}
            >
              <p className="text-xl leading-relaxed">
                I am Manohar, a freelance front-end developer & UI designer with
                a passion for building
                <span className="font-semibold text-gray-900">
                  {" "}
                  beautiful and functional digital experiences
                </span>
                . I specialize in creating responsive landing pages, modern
                dashboards, and scalable UI systems.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                My goal is to bring ideas to life with clean code and thoughtful
                design. I work with startups, product teams, and small
                businesses to create MVPs, dashboards, and landing pages that
                not only look great but perform exceptionally.
              </p>
            </motion.div>

            {/* Animated key highlights */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: <IoRocketOutline />,
                  title: "Fast Delivery",
                  desc: "Quick turnaround without compromising quality",
                },
                {
                  icon: <IoDiamondOutline />,
                  title: "Quality Focus",
                  desc: "Pixel-perfect designs with clean code",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated card design */}
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">
                    <LuGraduationCap />
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-2">Education</h4>
                <p className="text-white/80 text-lg">BCA Graduate</p>
                <p className="text-white/60">
                  North Maharashtra University - 2025
                </p>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-6">My Working Process</h4>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Planning",
                      desc: "Understanding your vision and requirements",
                    },
                    {
                      step: "02",
                      title: "Design & Prototype",
                      desc: "Creating wireframes and interactive prototypes",
                    },
                    {
                      step: "03",
                      title: "Development & Testing",
                      desc: "Building with clean code and thorough testing",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                        <span className="text-sm font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">{item.title}</h5>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
