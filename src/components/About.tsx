import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const allTechs = [
    ...technologies.languages.map(t => ({ ...t, category: "Languages" })),
    ...technologies.mlAi.map(t => ({ ...t, category: "ML & AI" })),
    ...technologies.tools.map(t => ({ ...t, category: "Tools" }))
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Passionate about leveraging technology to solve complex problems and create impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Personal Journey</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              As a dedicated machine learning enthusiast and competitive programmer, I thrive on tackling 
              challenging problems and developing innovative solutions. My journey in tech has been driven 
              by curiosity and a passion for continuous learning.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              I specialize in building intelligent systems that can learn and adapt, combining theoretical 
              knowledge with practical implementation skills to deliver real-world impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Years Exp" },
                { value: "5+", label: "Technologies" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-secondary rounded-xl"
                >
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {allTechs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm">{tech.name}</span>
                    <span className="font-body text-xs text-muted-foreground">{tech.category}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
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
