import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { ImPower } from "react-icons/im";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaPenNib />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 98 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: <FaCode />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Prisma", level: 75 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      title: "Tools & Design",
      icon: <IoColorPalette />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
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
      id="skills"
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
              My Expertise
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-500 h-full">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-3xl">{category.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-purple-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated highlights section */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Beyond Technical Skills</h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              What makes me different as a developer and designer
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <GiBullseye />,
                title: "Problem Solving",
                desc: "Analytical thinking to solve complex challenges",
              },
              {
                icon: <LuHeartHandshake />,
                title: "Collaboration",
                desc: "Seamless communication with teams and clients",
              },
              {
                icon: <ImPower />,
                title: "Fast Learning",
                desc: "Quick adaptation to new technologies and trends",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-4xl">{item.icon}</span>
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
