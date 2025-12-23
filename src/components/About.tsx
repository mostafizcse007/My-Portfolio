import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allTechs = [
    ...technologies.languages.map((t) => ({ ...t, category: "Languages" })),
    ...technologies.mlAi.map((t) => ({ ...t, category: "ML & AI" })),
    ...technologies.tools.map((t) => ({ ...t, category: "Tools" })),
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Passion Meets <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
            I'm a Computer Science student at Daffodil International University with a deep passion for 
            Machine Learning, competitive programming, and building impactful software solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                My coding journey began with solving algorithmic problems on platforms like 
                Codeforces and LeetCode, where I've solved over 1000+ problems. This foundation 
                in problem-solving naturally led me to explore Machine Learning and AI.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Today, I combine my algorithmic thinking with ML expertise to build intelligent 
                solutions that make a real difference. From agricultural AI systems to 
                comprehensive management applications, I love turning complex ideas into 
                elegant, working software.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "1000+", label: "Problems Solved" },
                { value: "5+", label: "Projects Built" },
                { value: "3+", label: "Years Coding" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center"
                >
                  <div className="text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {allTechs.slice(0, 8).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-foreground">{tech.name}</span>
                    <span className="text-sm text-muted-foreground font-body">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
